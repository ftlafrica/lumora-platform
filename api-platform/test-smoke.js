const assert = require("assert");
const { detectTask, routeModel, simulateReply, plans } = require("./server");
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

console.log("api-platform smoke tests passed");
