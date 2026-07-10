const { spawn } = require("child_process");

// 启动 gateway
require("./server.js");

// wake_up 作为独立子进程，stdio 继承到主进程（日志可见）
const wakeUp = spawn("node", ["wake_up.js"], {
  cwd: __dirname,
  stdio: "inherit",
  env: process.env
});

wakeUp.on("exit", (code) => {
  console.error(`⚠️ wake_up 退出 (code: ${code})，10秒后重启...`);
  setTimeout(() => {
    spawn("node", ["wake_up.js"], {
      cwd: __dirname,
      stdio: "inherit",
      env: process.env
    });
  }, 10000);
});

console.log("\n☁️  Cloudy Heartbeat v2 — 全部就绪\n");
