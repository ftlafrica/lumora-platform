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
  adminDevexCicdOperations,
  adminPaymentOperations,
  adminEntitlementOperations,
  adminRevenueAssuranceOperations,
  adminSubscriptionLifecycleOperations,
  adminResidencySovereigntyOperations,
  adminDpiaOperations,
  adminUserOperations,
  adminModelOperations,
  adminModelLicensingOperations,
  adminDatasetGovernanceOperations,
  adminSafetyOperations,
  adminPolicyGovernanceOperations,
  adminGrowthOperations,
  adminAccessOperations,
  adminInvestigationOperations,
  adminIdentityAuthOperations,
  adminActionOperations,
  adminApiOperations,
  adminKnowledgeOperations,
  adminSupportOperations,
  adminConversationOperations,
  adminPromptWorkflowOperations,
  adminCustomerExperienceOperations,
  adminFinanceOperations,
  adminUnitEconomicsOperations,
  adminAnalyticsOperations,
  adminLifecycleRetentionOperations,
  adminInfrastructureOperations,
  adminBusinessContinuityOperations,
  adminReliabilitySloOperations,
  adminObservabilityLogOperations,
  adminCapacityPlanningOperations,
  adminSecurityOperations,
  adminReportingOperations,
  adminWarehouseBiOperations,
  adminCommunicationsOperations,
  adminNotificationDeliveryOperations,
  adminLanguageOperations,
  adminCulturalQualityOperations,
  adminReviewerNetworkOperations,
  adminCorrectionImprovementOperations,
  adminVoiceSpeechOperations,
  adminTranslationOperations,
  adminCreatorStudioOperations,
  adminClassroomLearningOperations,
  adminMarketCommerceOperations,
  adminMultimodalOperations,
  adminSearchRetrievalOperations,
  adminWorkspaceCollaborationOperations,
  adminLanguagePassportOperations,
  adminLocalizationContentOperations,
  adminDataGovernanceOperations,
  adminMemoryPersonalizationOperations,
  adminPrivacyRequestOperations,
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
  adminProcurementRevenueOperations,
  adminStrategicPartnershipOperations,
  adminLaunchReadinessOperations,
  adminExecutiveOkrOperations,
  adminOperatingRhythmOperations,
  adminDataRoomOperations,
  adminAiGovernanceOperations,
  adminModelRiskOperations,
  adminWebOpsOperations,
  adminTelemetryOpsOperations,
  adminStatusOpsOperations,
  adminIncidentResponseOperations,
  adminAuditOpsOperations,
  adminChangeOpsOperations,
  adminBackupOpsOperations,
  adminAssetOpsOperations,
  adminTenantOpsOperations,
  adminCostOpsOperations,
  adminDataQualityOpsOperations,
  adminRegulatoryOpsOperations,
  adminComplianceAutomationOpsOperations,
  adminPolicyExceptionOpsOperations,
  adminAccessReviewOpsOperations,
  adminSessionRiskOpsOperations,
  adminThreatIntelOpsOperations,
  adminConsentOpsOperations,
  adminSecretsOpsOperations,
  adminMobileOpsOperations,
  adminFraudAbuseOperations
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
assert.ok(accessSession.scopes.includes("investigations:review"));
assert.ok(accessSession.scopes.includes("identity:operate"));
assert.ok(accessSession.scopes.includes("api:manage"));
assert.ok(accessSession.scopes.includes("knowledge:operate"));
assert.ok(accessSession.scopes.includes("support:review"));
assert.ok(accessSession.scopes.includes("conversations:operate"));
assert.ok(accessSession.scopes.includes("prompts:govern"));
assert.ok(accessSession.scopes.includes("cx:review"));
assert.ok(accessSession.scopes.includes("entitlements:manage"));
assert.ok(accessSession.scopes.includes("revenue:assure"));
assert.ok(accessSession.scopes.includes("subscriptions:manage"));
assert.ok(accessSession.scopes.includes("residency:manage"));
assert.ok(accessSession.scopes.includes("dpia:review"));
assert.ok(accessSession.scopes.includes("policy:govern"));
assert.ok(accessSession.scopes.includes("licensing:review"));
assert.ok(accessSession.scopes.includes("datasets:govern"));
assert.ok(accessSession.scopes.includes("finance:read"));
assert.ok(accessSession.scopes.includes("unit:economics"));
assert.ok(accessSession.scopes.includes("analytics:read"));
assert.ok(accessSession.scopes.includes("lifecycle:manage"));
assert.ok(accessSession.scopes.includes("infrastructure:operate"));
assert.ok(accessSession.scopes.includes("continuity:manage"));
assert.ok(accessSession.scopes.includes("slo:manage"));
assert.ok(accessSession.scopes.includes("observability:operate"));
assert.ok(accessSession.scopes.includes("capacity:plan"));
assert.ok(accessSession.scopes.includes("security:operate"));
assert.ok(accessSession.scopes.includes("reporting:export"));
assert.ok(accessSession.scopes.includes("warehouse:operate"));
assert.ok(accessSession.scopes.includes("communications:send"));
assert.ok(accessSession.scopes.includes("notifications:operate"));
assert.ok(accessSession.scopes.includes("language:review"));
assert.ok(accessSession.scopes.includes("culture:review"));
assert.ok(accessSession.scopes.includes("reviewers:manage"));
assert.ok(accessSession.scopes.includes("corrections:improve"));
assert.ok(accessSession.scopes.includes("voice:operate"));
assert.ok(accessSession.scopes.includes("translation:operate"));
assert.ok(accessSession.scopes.includes("creator:operate"));
assert.ok(accessSession.scopes.includes("classroom:operate"));
assert.ok(accessSession.scopes.includes("market:operate"));
assert.ok(accessSession.scopes.includes("multimodal:operate"));
assert.ok(accessSession.scopes.includes("search:operate"));
assert.ok(accessSession.scopes.includes("workspace:operate"));
assert.ok(accessSession.scopes.includes("passport:operate"));
assert.ok(accessSession.scopes.includes("localization:manage"));
assert.ok(accessSession.scopes.includes("data:govern"));
assert.ok(accessSession.scopes.includes("memory:govern"));
assert.ok(accessSession.scopes.includes("privacy:operate"));
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
assert.ok(accessSession.scopes.includes("partnerships:manage"));
assert.ok(accessSession.scopes.includes("launch:readiness"));
assert.ok(accessSession.scopes.includes("okr:manage"));
assert.ok(accessSession.scopes.includes("operating:rhythm"));
assert.ok(accessSession.scopes.includes("data:room"));
assert.ok(accessSession.scopes.includes("ai:governance"));
assert.ok(accessSession.scopes.includes("model:risk"));
assert.ok(accessSession.scopes.includes("web:operate"));
assert.ok(accessSession.scopes.includes("telemetry:operate"));
assert.ok(accessSession.scopes.includes("status:operate"));
assert.ok(accessSession.scopes.includes("incident:respond"));
assert.ok(accessSession.scopes.includes("audit:operate"));
assert.ok(accessSession.scopes.includes("change:manage"));
assert.ok(accessSession.scopes.includes("backup:operate"));
assert.ok(accessSession.scopes.includes("asset:manage"));
assert.ok(accessSession.scopes.includes("tenant:operate"));
assert.ok(accessSession.scopes.includes("cost:operate"));
assert.ok(accessSession.scopes.includes("dataquality:operate"));
assert.ok(accessSession.scopes.includes("regulatory:operate"));
assert.ok(accessSession.scopes.includes("compliance:automate"));
assert.ok(accessSession.scopes.includes("exceptions:manage"));
assert.ok(accessSession.scopes.includes("access:review"));
assert.ok(accessSession.scopes.includes("sessions:risk"));
assert.ok(accessSession.scopes.includes("threat:intel"));
assert.ok(accessSession.scopes.includes("consent:operate"));
assert.ok(accessSession.scopes.includes("secrets:operate"));
assert.ok(accessSession.scopes.includes("mobile:operate"));
assert.ok(accessSession.scopes.includes("fraud:review"));
assert.ok(accessSession.scopes.includes("devex:operate"));
assert.ok(accessSession.audit.length >= 2);

const adminContracts = [
  ["audit", adminAuditTrail(), data => Array.isArray(data.events) && data.summary.total >= data.events.length],
  ["platform", adminPlatformControls(), data => Array.isArray(data.releases) && Array.isArray(data.featureFlags) && data.guardrails],
  ["devex cicd", adminDevexCicdOperations(), data => data.summary && Array.isArray(data.pipelines) && Array.isArray(data.environments) && Array.isArray(data.qualityGates)],
  ["payments", adminPaymentOperations(), data => Array.isArray(data.plans) && Array.isArray(data.queues) && Array.isArray(data.invoices)],
  ["entitlements", adminEntitlementOperations(), data => data.summary && Array.isArray(data.planEntitlements) && Array.isArray(data.quotaMeters) && Array.isArray(data.breachQueues)],
  ["revenue assurance", adminRevenueAssuranceOperations(), data => data.summary && Array.isArray(data.taxCoverage) && Array.isArray(data.leakageSignals) && Array.isArray(data.reconciliation)],
  ["subscriptions", adminSubscriptionLifecycleOperations(), data => data.summary && Array.isArray(data.lifecycleStages) && Array.isArray(data.renewalQueues) && Array.isArray(data.cancellationReasons)],
  ["residency sovereignty", adminResidencySovereigntyOperations(), data => data.summary && Array.isArray(data.regionPosture) && Array.isArray(data.transferReviews) && Array.isArray(data.dataStores)],
  ["dpia", adminDpiaOperations(), data => data.summary && Array.isArray(data.assessments) && Array.isArray(data.highRiskProcessing) && Array.isArray(data.mitigations)],
  ["users", adminUserOperations(), data => data.summary && Array.isArray(data.accountQueues) && Array.isArray(data.organizations)],
  ["models", adminModelOperations(), data => Array.isArray(data.registry) && Array.isArray(data.health) && data.summary.modelSources >= modelRegistry.length],
  ["model licensing", adminModelLicensingOperations(), data => data.summary && Array.isArray(data.modelLicenses) && Array.isArray(data.datasetSources) && Array.isArray(data.rightsRisks)],
  ["dataset governance", adminDatasetGovernanceOperations(), data => data.summary && Array.isArray(data.datasetSources) && Array.isArray(data.provenanceReviews) && Array.isArray(data.trainingEligibility)],
  ["safety", adminSafetyOperations(), data => data.summary && Array.isArray(data.moderationQueues) && Array.isArray(data.languageQuality)],
  ["policy governance", adminPolicyGovernanceOperations(), data => data.summary && Array.isArray(data.policyVersions) && Array.isArray(data.taxonomy) && Array.isArray(data.enforcementRules)],
  ["growth", adminGrowthOperations(), data => data.summary && Array.isArray(data.funnel) && Array.isArray(data.countries) && Array.isArray(data.channels)],
  ["access", adminAccessOperations(), data => data.summary && Array.isArray(data.roles) && Array.isArray(data.approvals) && Array.isArray(data.compliance)],
  ["investigations", adminInvestigationOperations(), data => data.summary && Array.isArray(data.cases) && Array.isArray(data.evidenceCustody) && Array.isArray(data.legalHolds)],
  ["identity auth", adminIdentityAuthOperations(), data => data.summary && Array.isArray(data.authFunnel) && Array.isArray(data.signInHealth) && Array.isArray(data.recovery)],
  ["actions", adminActionOperations(), data => data.summary && Array.isArray(data.incidents) && Array.isArray(data.decisions) && Array.isArray(data.followUps)],
  ["api", adminApiOperations(), data => data.summary && Array.isArray(data.keys) && Array.isArray(data.quotas) && Array.isArray(data.webhooks) && Array.isArray(data.sdks)],
  ["knowledge", adminKnowledgeOperations(), data => data.summary && Array.isArray(data.collections) && Array.isArray(data.sources) && Array.isArray(data.indexingJobs)],
  ["support", adminSupportOperations(), data => data.summary && Array.isArray(data.queues) && Array.isArray(data.escalations) && Array.isArray(data.boundaries)],
  ["conversations", adminConversationOperations(), data => data.summary && Array.isArray(data.chatHealth) && Array.isArray(data.messageQueues) && Array.isArray(data.replayControls)],
  ["prompt workflows", adminPromptWorkflowOperations(), data => data.summary && Array.isArray(data.promptSets) && Array.isArray(data.workflowTemplates) && Array.isArray(data.rollbackControls)],
  ["customer experience", adminCustomerExperienceOperations(), data => data.summary && Array.isArray(data.sentimentThemes) && Array.isArray(data.feedbackChannels) && Array.isArray(data.productInsights)],
  ["finance", adminFinanceOperations(), data => data.summary && Array.isArray(data.costCenters) && Array.isArray(data.forecast) && Array.isArray(data.optimization)],
  ["unit economics", adminUnitEconomicsOperations(), data => data.summary && Array.isArray(data.routeCosts) && Array.isArray(data.planEconomics) && Array.isArray(data.marginLeaks)],
  ["analytics", adminAnalyticsOperations(), data => data.summary && Array.isArray(data.retention) && Array.isArray(data.featureUsage) && Array.isArray(data.languageAdoption)],
  ["lifecycle retention", adminLifecycleRetentionOperations(), data => data.summary && Array.isArray(data.journeys) && Array.isArray(data.churnRisks) && Array.isArray(data.winback)],
  ["infrastructure", adminInfrastructureOperations(), data => data.summary && Array.isArray(data.services) && Array.isArray(data.clusters) && Array.isArray(data.queues)],
  ["business continuity", adminBusinessContinuityOperations(), data => data.summary && Array.isArray(data.recoveryObjectives) && Array.isArray(data.backups) && Array.isArray(data.continuityRisks)],
  ["reliability slos", adminReliabilitySloOperations(), data => data.summary && Array.isArray(data.objectives) && Array.isArray(data.errorBudgets) && Array.isArray(data.regions)],
  ["observability logs", adminObservabilityLogOperations(), data => data.summary && Array.isArray(data.logStreams) && Array.isArray(data.traces) && Array.isArray(data.alertRoutes)],
  ["capacity planning", adminCapacityPlanningOperations(), data => data.summary && Array.isArray(data.forecasts) && Array.isArray(data.computePools) && Array.isArray(data.storage)],
  ["security", adminSecurityOperations(), data => data.summary && Array.isArray(data.threats) && Array.isArray(data.accessPosture) && Array.isArray(data.compliance)],
  ["reports", adminReportingOperations(), data => data.summary && Array.isArray(data.reportPacks) && Array.isArray(data.exports) && Array.isArray(data.schedules)],
  ["warehouse bi", adminWarehouseBiOperations(), data => data.summary && Array.isArray(data.pipelines) && Array.isArray(data.datasets) && Array.isArray(data.metricDefinitions)],
  ["communications", adminCommunicationsOperations(), data => data.summary && Array.isArray(data.campaigns) && Array.isArray(data.broadcasts) && Array.isArray(data.delivery)],
  ["notification delivery", adminNotificationDeliveryOperations(), data => data.summary && Array.isArray(data.channelHealth) && Array.isArray(data.consentSegments) && Array.isArray(data.quietHours)],
  ["languages", adminLanguageOperations(), data => data.summary && Array.isArray(data.coverage) && Array.isArray(data.dialectQueues) && Array.isArray(data.benchmarks)],
  ["cultural quality", adminCulturalQualityOperations(), data => data.summary && Array.isArray(data.toneSegments) && Array.isArray(data.dialectParity) && Array.isArray(data.culturalReviewQueues)],
  ["reviewer network", adminReviewerNetworkOperations(), data => data.summary && Array.isArray(data.reviewerRegions) && Array.isArray(data.reviewQueues) && Array.isArray(data.calibrationPanels)],
  ["correction improvement", adminCorrectionImprovementOperations(), data => data.summary && Array.isArray(data.intakeSources) && Array.isArray(data.correctionPipeline) && Array.isArray(data.improvementImpact)],
  ["voice speech", adminVoiceSpeechOperations(), data => data.summary && Array.isArray(data.speechRoutes) && Array.isArray(data.accentCoverage) && Array.isArray(data.reviewQueues)],
  ["translation operations", adminTranslationOperations(), data => data.summary && Array.isArray(data.routeQuality) && Array.isArray(data.languagePairs) && Array.isArray(data.riskQueues)],
  ["creator studio", adminCreatorStudioOperations(), data => data.summary && Array.isArray(data.contentModes) && Array.isArray(data.templateHealth) && Array.isArray(data.workflowQueues)],
  ["classroom learning", adminClassroomLearningOperations(), data => data.summary && Array.isArray(data.learningModes) && Array.isArray(data.curriculumCoverage) && Array.isArray(data.safetyQueues)],
  ["market commerce", adminMarketCommerceOperations(), data => data.summary && Array.isArray(data.businessModes) && Array.isArray(data.conversionSignals) && Array.isArray(data.commerceRisks)],
  ["multimodal operations", adminMultimodalOperations(), data => data.summary && Array.isArray(data.modalityRoutes) && Array.isArray(data.attachmentSafety) && Array.isArray(data.processingQueues)],
  ["search retrieval", adminSearchRetrievalOperations(), data => data.summary && Array.isArray(data.retrievalRoutes) && Array.isArray(data.sourceHealth) && Array.isArray(data.citationQuality)],
  ["workspace collaboration", adminWorkspaceCollaborationOperations(), data => data.summary && Array.isArray(data.workspaceHealth) && Array.isArray(data.collaborationActivity) && Array.isArray(data.permissionControls)],
  ["language passport", adminLanguagePassportOperations(), data => data.summary && Array.isArray(data.completionFunnel) && Array.isArray(data.fieldQuality) && Array.isArray(data.languagePairs)],
  ["localization content", adminLocalizationContentOperations(), data => data.summary && Array.isArray(data.localeReadiness) && Array.isArray(data.contentQueues) && Array.isArray(data.glossary)],
  ["data governance", adminDataGovernanceOperations(), data => data.summary && Array.isArray(data.retention) && Array.isArray(data.consent) && Array.isArray(data.requests)],
  ["memory personalization", adminMemoryPersonalizationOperations(), data => data.summary && Array.isArray(data.memorySurfaces) && Array.isArray(data.userControls) && Array.isArray(data.riskReviews)],
  ["privacy requests", adminPrivacyRequestOperations(), data => data.summary && Array.isArray(data.requests) && Array.isArray(data.exports) && Array.isArray(data.deletions)],
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
  ["procurement revenue", adminProcurementRevenueOperations(), data => data.summary && Array.isArray(data.procurements) && Array.isArray(data.blockers) && Array.isArray(data.purchaseOrders)],
  ["strategic partnerships", adminStrategicPartnershipOperations(), data => data.summary && Array.isArray(data.partners) && Array.isArray(data.pipeline) && Array.isArray(data.risks)],
  ["launch readiness", adminLaunchReadinessOperations(), data => data.summary && Array.isArray(data.launches) && Array.isArray(data.gates) && Array.isArray(data.monitors)],
  ["executive okrs", adminExecutiveOkrOperations(), data => data.summary && Array.isArray(data.objectives) && Array.isArray(data.keyResults) && Array.isArray(data.blockers)],
  ["operating rhythm", adminOperatingRhythmOperations(), data => data.summary && Array.isArray(data.rituals) && Array.isArray(data.decisions) && Array.isArray(data.actions)],
  ["data room", adminDataRoomOperations(), data => data.summary && Array.isArray(data.rooms) && Array.isArray(data.evidencePacks) && Array.isArray(data.accessRequests)],
  ["ai governance", adminAiGovernanceOperations(), data => data.summary && Array.isArray(data.modelApprovals) && Array.isArray(data.deploymentGates) && Array.isArray(data.exceptions)],
  ["model risk", adminModelRiskOperations(), data => data.summary && Array.isArray(data.riskTiers) && Array.isArray(data.releaseGates) && Array.isArray(data.driftSignals)],
  ["web ops", adminWebOpsOperations(), data => data.summary && Array.isArray(data.deployments) && Array.isArray(data.performance) && Array.isArray(data.browserCoverage)],
  ["telemetry ops", adminTelemetryOpsOperations(), data => data.summary && Array.isArray(data.eventPipelines) && Array.isArray(data.schemaContracts) && Array.isArray(data.privacyFilters)],
  ["status ops", adminStatusOpsOperations(), data => data.summary && Array.isArray(data.statusSurfaces) && Array.isArray(data.incidents) && Array.isArray(data.maintenance)],
  ["incident response", adminIncidentResponseOperations(), data => data.summary && Array.isArray(data.commandCenter) && Array.isArray(data.activeIncidents) && Array.isArray(data.rollbackChecks)],
  ["audit ops", adminAuditOpsOperations(), data => data.summary && Array.isArray(data.auditStreams) && Array.isArray(data.privilegedActions) && Array.isArray(data.exportControls)],
  ["change ops", adminChangeOpsOperations(), data => data.summary && Array.isArray(data.changeCalendar) && Array.isArray(data.approvalGates) && Array.isArray(data.rollbackPlans)],
  ["backup ops", adminBackupOpsOperations(), data => data.summary && Array.isArray(data.backupCoverage) && Array.isArray(data.restoreDrills) && Array.isArray(data.recoveryRunbooks)],
  ["asset ops", adminAssetOpsOperations(), data => data.summary && Array.isArray(data.serviceInventory) && Array.isArray(data.dataAssets) && Array.isArray(data.dependencyMap)],
  ["tenant ops", adminTenantOpsOperations(), data => data.summary && Array.isArray(data.tenantInventory) && Array.isArray(data.domains) && Array.isArray(data.ssoScim)],
  ["cost ops", adminCostOpsOperations(), data => data.summary && Array.isArray(data.budgets) && Array.isArray(data.modelSpend) && Array.isArray(data.anomalies)],
  ["data quality ops", adminDataQualityOpsOperations(), data => data.summary && Array.isArray(data.metricHealth) && Array.isArray(data.freshnessMonitors) && Array.isArray(data.reconciliation)],
  ["regulatory ops", adminRegulatoryOpsOperations(), data => data.summary && Array.isArray(data.countryPosture) && Array.isArray(data.filingCalendar) && Array.isArray(data.regulatorRequests)],
  ["compliance automation", adminComplianceAutomationOpsOperations(), data => data.summary && Array.isArray(data.controlChecks) && Array.isArray(data.evidenceJobs) && Array.isArray(data.exceptions)],
  ["policy exceptions", adminPolicyExceptionOpsOperations(), data => data.summary && Array.isArray(data.exceptionRegister) && Array.isArray(data.expiryCalendar) && Array.isArray(data.riskAcceptance)],
  ["access reviews", adminAccessReviewOpsOperations(), data => data.summary && Array.isArray(data.reviewCampaigns) && Array.isArray(data.privilegedRoles) && Array.isArray(data.stalePermissions)],
  ["session risk", adminSessionRiskOpsOperations(), data => data.summary && Array.isArray(data.liveSessions) && Array.isArray(data.riskSignals) && Array.isArray(data.revocations)],
  ["threat intel", adminThreatIntelOpsOperations(), data => data.summary && Array.isArray(data.campaigns) && Array.isArray(data.threatSignals) && Array.isArray(data.modelProviderRisk)],
  ["consent ops", adminConsentOpsOperations(), data => data.summary && Array.isArray(data.consentSurfaces) && Array.isArray(data.trainingEligibility) && Array.isArray(data.withdrawals)],
  ["secrets ops", adminSecretsOpsOperations(), data => data.summary && Array.isArray(data.secretInventory) && Array.isArray(data.rotations) && Array.isArray(data.kmsPosture)],
  ["mobile ops", adminMobileOpsOperations(), data => data.summary && Array.isArray(data.releases) && Array.isArray(data.crashHealth) && Array.isArray(data.storeReadiness)],
  ["fraud abuse", adminFraudAbuseOperations(), data => data.summary && Array.isArray(data.abuseQueues) && Array.isArray(data.botDefense) && Array.isArray(data.paymentRisk)]
];

adminContracts.forEach(([name, data, isValid]) => {
  assert.ok(isValid(data), `${name} admin contract is invalid`);
});

console.log("api-platform smoke tests passed");
