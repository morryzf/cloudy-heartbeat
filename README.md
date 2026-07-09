# ☁️ Cloudy Heartbeat v2

Kelivo + Gateway + 主动唤醒 + Bark 推送。
基于 [dylan-heartbeat](https://github.com/callie0313/dylan-heartbeat) 改编。

## 架构

```
Kelivo (手机 app)
  ↕ OpenAI 兼容格式
server.js (Gateway，代理+记录 timeline)
  ↕                ↕
中转站 LLM API    wake_up.js (定时唤醒)
                   ↕
                  Bark → 手机推送
```

## Zeabur 部署

1. GitHub 推代码
2. Zeabur 连仓库，部署
3. 环境变量填：
   - `TARGET_API_URL` — 中转站地址（如 `https://api.jiushi.xin/v1/chat/completions`）
   - `TARGET_API_KEY` — 中转站 API Key
   - `MODEL_NAME` — 模型名
   - `BARK_KEY` — Bark 推送 Key
   - `ADMIN_USER` / `ADMIN_PASSWORD` — 管理页面登录
4. Kelivo 里 API 地址填 Zeabur 分配的域名 + `/v1/chat/completions`

## Kelivo 配置

API 地址：`https://你的域名/v1/chat/completions`
模型名随便填（gateway 会用 MODEL_NAME 覆盖）

## 管理页面

`https://你的域名/admin`
