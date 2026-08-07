const assert = require("assert");
const {
  detectTask,
  routeModel,
  simulateReply,
  plans,
  adminMetrics,
  adminAccessSession,
  adminAuditTrail,
  adminPlatformControls,
  adminPaymentOperations,
  adminUserOperations,
  adminModelOperations,
  adminSafetyOperations,
  adminGrowthOperations,
  adminAccessOperations,
  adminActionOperations,
  adminApiOperations,
  adminKnowledgeOperations,
  adminSupportOperations,
  adminFinanceOperations,
  adminAnalyticsOperations,
  adminInfrastructureOperations,
  adminSecurityOperations,
  adminReportingOperations,
  adminCommunicationsOperations
} = require("./server");
const { modelRegistry } = require("./model-registry");

assert.strictEqual(detectTask("Translate this customer message"), "translation");
assert.strictEqual(detectTask("Speak this reply out loud"), "speech");
assert.strictEqual(detectTask("Write a market reply"), "market");
assert.ok(modelRegistry.length >= 8);
assert.strictEqual(plans.Free.messagesPerDay, 20);

const route = routeModel({ text: "Translate this", language: "Yoruba", plan: "Pro" });
assert.strictEqual(route.task, "translation");
assert.strictEqual(route.priority, "advanced");
assert.ok(route.chain.some(item => item.name === "AfriNLLB"));

const reply = simulateReply({ text: "Explain AI", language: "Yoruba", bridgeLanguage: "English", tone: "Teacher" });
assert.strictEqual(reply.role, "assistant");
assert.ok(reply.text.includes("Yoruba"));
assert.ok(reply.route.chain.length >= 3);

const metrics = adminMetrics();
assert.ok(metrics.users.total > 0);
assert.ok(metrics.revenue.mrr);
assert.ok(metrics.ai.modelSources >= modelRegistry.length);
assert.ok(metrics.platform.activeFlags >= 1);
assert.ok(metrics.safety.moderationFlags > 0);
assert.ok(metrics.access.auditEvents > 0);

const accessSession = adminAccessSession("Smoke Test Admin");
assert.strictEqual(accessSession.role, "Seed Admin");
assert.ok(accessSession.scopes.includes("access:grant"));
assert.ok(accessSession.scopes.includes("api:manage"));
assert.ok(accessSession.scopes.includes("knowledge:operate"));
assert.ok(accessSession.scopes.includes("support:review"));
assert.ok(accessSession.scopes.includes("finance:read"));
assert.ok(accessSession.scopes.includes("analytics:read"));
assert.ok(accessSession.scopes.includes("infrastructure:operate"));
assert.ok(accessSession.scopes.includes("security:operate"));
assert.ok(accessSession.scopes.includes("reporting:export"));
assert.ok(accessSession.scopes.includes("communications:send"));
assert.ok(accessSession.audit.length >= 2);

const adminContracts = [
  ["audit", adminAuditTrail(), data => Array.isArray(data.events) && data.summary.total >= data.events.length],
  ["platform", adminPlatformControls(), data => Array.isArray(data.releases) && Array.isArray(data.featureFlags) && data.guardrails],
  ["payments", adminPaymentOperations(), data => Array.isArray(data.plans) && Array.isArray(data.queues) && Array.isArray(data.invoices)],
  ["users", adminUserOperations(), data => data.summary && Array.isArray(data.accountQueues) && Array.isArray(data.organizations)],
  ["models", adminModelOperations(), data => Array.isArray(data.registry) && Array.isArray(data.health) && data.summary.modelSources >= modelRegistry.length],
  ["safety", adminSafetyOperations(), data => data.summary && Array.isArray(data.moderationQueues) && Array.isArray(data.languageQuality)],
  ["growth", adminGrowthOperations(), data => data.summary && Array.isArray(data.funnel) && Array.isArray(data.countries) && Array.isArray(data.channels)],
  ["access", adminAccessOperations(), data => data.summary && Array.isArray(data.roles) && Array.isArray(data.approvals) && Array.isArray(data.compliance)],
  ["actions", adminActionOperations(), data => data.summary && Array.isArray(data.incidents) && Array.isArray(data.decisions) && Array.isArray(data.followUps)],
  ["api", adminApiOperations(), data => data.summary && Array.isArray(data.keys) && Array.isArray(data.quotas) && Array.isArray(data.webhooks) && Array.isArray(data.sdks)],
  ["knowledge", adminKnowledgeOperations(), data => data.summary && Array.isArray(data.collections) && Array.isArray(data.sources) && Array.isArray(data.indexingJobs)],
  ["support", adminSupportOperations(), data => data.summary && Array.isArray(data.queues) && Array.isArray(data.escalations) && Array.isArray(data.boundaries)],
  ["finance", adminFinanceOperations(), data => data.summary && Array.isArray(data.costCenters) && Array.isArray(data.forecast) && Array.isArray(data.optimization)],
  ["analytics", adminAnalyticsOperations(), data => data.summary && Array.isArray(data.retention) && Array.isArray(data.featureUsage) && Array.isArray(data.languageAdoption)],
  ["infrastructure", adminInfrastructureOperations(), data => data.summary && Array.isArray(data.services) && Array.isArray(data.clusters) && Array.isArray(data.queues)],
  ["security", adminSecurityOperations(), data => data.summary && Array.isArray(data.threats) && Array.isArray(data.accessPosture) && Array.isArray(data.compliance)],
  ["reports", adminReportingOperations(), data => data.summary && Array.isArray(data.reportPacks) && Array.isArray(data.exports) && Array.isArray(data.schedules)],
  ["communications", adminCommunicationsOperations(), data => data.summary && Array.isArray(data.campaigns) && Array.isArray(data.broadcasts) && Array.isArray(data.delivery)]
];

adminContracts.forEach(([name, data, isValid]) => {
  assert.ok(isValid(data), `${name} admin contract is invalid`);
});

console.log("api-platform smoke tests passed");
