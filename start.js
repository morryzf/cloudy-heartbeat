const { fork } = require("child_process");
const path = require("path");

// 启动 gateway
require("./server.js");

// wake_up 作为独立子进程
const wakeUp = fork(path.join(__dirname, "wake_up.js"));

wakeUp.on("exit", (code) => {
  console.error(`⚠️ wake_up 进程退出 (code: ${code})，10秒后重启...`);
  setTimeout(() => {
    fork(path.join(__dirname, "wake_up.js"));
  }, 10000);
});

console.log("\n☁️  Cloudy Heartbeat v2 — 全部就绪\n");
