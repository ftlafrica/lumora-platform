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
  adminCommunicationsOperations,
  adminLanguageOperations,
  adminDataGovernanceOperations,
  adminIntegrationOperations,
  adminExperimentationOperations,
  adminModelEvaluationOperations,
  adminCustomerSuccessOperations,
  adminSalesOperations,
  adminRiskOperations,
  adminLegalOperations,
  adminPeopleOperations,
  adminVendorOperations,
  adminRegionalLaunchOperations,
  adminQaOperations,
  adminRoadmapOperations,
  adminCommunityOperations,
  adminComplianceEvidenceOperations,
  adminTrustCenterOperations,
  adminBoardGovernanceOperations,
  adminInvestorRelationsOperations,
  adminProcurementRevenueOperations
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
assert.ok(accessSession.scopes.includes("language:review"));
assert.ok(accessSession.scopes.includes("data:govern"));
assert.ok(accessSession.scopes.includes("integrations:manage"));
assert.ok(accessSession.scopes.includes("experiments:operate"));
assert.ok(accessSession.scopes.includes("evals:review"));
assert.ok(accessSession.scopes.includes("success:manage"));
assert.ok(accessSession.scopes.includes("sales:manage"));
assert.ok(accessSession.scopes.includes("risk:review"));
assert.ok(accessSession.scopes.includes("legal:review"));
assert.ok(accessSession.scopes.includes("people:read"));
assert.ok(accessSession.scopes.includes("vendors:manage"));
assert.ok(accessSession.scopes.includes("regional:launch"));
assert.ok(accessSession.scopes.includes("qa:review"));
assert.ok(accessSession.scopes.includes("roadmap:manage"));
assert.ok(accessSession.scopes.includes("community:manage"));
assert.ok(accessSession.scopes.includes("compliance:evidence"));
assert.ok(accessSession.scopes.includes("trust:center"));
assert.ok(accessSession.scopes.includes("board:governance"));
assert.ok(accessSession.scopes.includes("investor:relations"));
assert.ok(accessSession.scopes.includes("procurement:revenue"));
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
  ["communications", adminCommunicationsOperations(), data => data.summary && Array.isArray(data.campaigns) && Array.isArray(data.broadcasts) && Array.isArray(data.delivery)],
  ["languages", adminLanguageOperations(), data => data.summary && Array.isArray(data.coverage) && Array.isArray(data.dialectQueues) && Array.isArray(data.benchmarks)],
  ["data governance", adminDataGovernanceOperations(), data => data.summary && Array.isArray(data.retention) && Array.isArray(data.consent) && Array.isArray(data.requests)],
  ["integrations", adminIntegrationOperations(), data => data.summary && Array.isArray(data.services) && Array.isArray(data.webhooks) && Array.isArray(data.partners)],
  ["experiments", adminExperimentationOperations(), data => data.summary && Array.isArray(data.experiments) && Array.isArray(data.flags) && Array.isArray(data.rollouts)],
  ["evaluations", adminModelEvaluationOperations(), data => data.summary && Array.isArray(data.suites) && Array.isArray(data.runs) && Array.isArray(data.releaseGates)],
  ["customer success", adminCustomerSuccessOperations(), data => data.summary && Array.isArray(data.accounts) && Array.isArray(data.onboarding) && Array.isArray(data.renewals)],
  ["sales", adminSalesOperations(), data => data.summary && Array.isArray(data.pipeline) && Array.isArray(data.demos) && Array.isArray(data.procurement)],
  ["risk", adminRiskOperations(), data => data.summary && Array.isArray(data.register) && Array.isArray(data.mitigations) && Array.isArray(data.board)],
  ["legal", adminLegalOperations(), data => data.summary && Array.isArray(data.contracts) && Array.isArray(data.policies) && Array.isArray(data.requests)],
  ["people", adminPeopleOperations(), data => data.summary && Array.isArray(data.staffing) && Array.isArray(data.hiring) && Array.isArray(data.rotations)],
  ["vendors", adminVendorOperations(), data => data.summary && Array.isArray(data.vendors) && Array.isArray(data.renewals) && Array.isArray(data.diligence)],
  ["regional launch", adminRegionalLaunchOperations(), data => data.summary && Array.isArray(data.markets) && Array.isArray(data.localization) && Array.isArray(data.blockers)],
  ["qa", adminQaOperations(), data => data.summary && Array.isArray(data.suites) && Array.isArray(data.devices) && Array.isArray(data.blockers)],
  ["roadmap", adminRoadmapOperations(), data => data.summary && Array.isArray(data.initiatives) && Array.isArray(data.releases) && Array.isArray(data.dependencies)],
  ["community", adminCommunityOperations(), data => data.summary && Array.isArray(data.contributors) && Array.isArray(data.contributions) && Array.isArray(data.programs)],
  ["compliance evidence", adminComplianceEvidenceOperations(), data => data.summary && Array.isArray(data.controls) && Array.isArray(data.evidence) && Array.isArray(data.audits)],
  ["trust center", adminTrustCenterOperations(), data => data.summary && Array.isArray(data.assurances) && Array.isArray(data.reviews) && Array.isArray(data.certifications)],
  ["board governance", adminBoardGovernanceOperations(), data => data.summary && Array.isArray(data.packets) && Array.isArray(data.decisions) && Array.isArray(data.escalations)],
  ["investor relations", adminInvestorRelationsOperations(), data => data.summary && Array.isArray(data.updates) && Array.isArray(data.pipeline) && Array.isArray(data.diligence)],
  ["procurement revenue", adminProcurementRevenueOperations(), data => data.summary && Array.isArray(data.procurements) && Array.isArray(data.blockers) && Array.isArray(data.purchaseOrders)]
];

adminContracts.forEach(([name, data, isValid]) => {
  assert.ok(isValid(data), `${name} admin contract is invalid`);
});

console.log("api-platform smoke tests passed");
