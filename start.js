/**
 * Cloudy Heartbeat v2 — 云的心跳
 * 
 * Kelivo + Gateway + Wake-up + Bark，一个进程全搞定。
 * 基于 callie0313/dylan-heartbeat 改编，适配 Zeabur 部署。
 * 
 * 架构：
 *   Kelivo (Morry 手机) ←→ Gateway (server.js) ←→ LLM API (中转站)
 *                                    ↕
 *                              Wake-up (wake_up.js) → Bark → Morry 手机
 *                                    ↕
 *                              Ombre Brain MCP (Phase 2)
 */

// 先启动 gateway（web 服务器）
require("./server.js");

// 等 gateway 启动完成后再启动 wake_up（10 秒延迟已内置在 wake_up.js 里）
require("./wake_up.js");

console.log("\n☁️  Cloudy Heartbeat v2 — 全部就绪\n");
