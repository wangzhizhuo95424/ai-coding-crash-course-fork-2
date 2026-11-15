# Mission: 跟着 AI Coding Crash Course 学用 AI 助手掌控这个代码库

## Why
跟着 Matt Pocock 的 AI Coding Crash Course 六个章节做练习，学会用 AI 助手（Claude Code 或当前 IDE 的 AI）探索、扩展、重构 `ai-coding-crash-course` 这个全栈代码库。真正的目标不是「读懂这个项目」，而是能指挥 AI 助手在陌生代码里做出正确改动，并自己判断它改得靠不靠谱。

## Success looks like
- 能在本地把项目跑起来，逐条说清四条启动命令各自改了哪些文件
- 给定一个页面 URL，能独立画出「路由 → loader → service → 数据库」的链路，并指出对应文件
- 能按官方课程的 checkpoint 流程（`npm run reset <slug>` / `npm run cherry-pick <slug>`）推进练习
- 能完成一次完整的小改动：提需求 → 让 AI 助手先探索 → 审核改动 → 用 `npm run test` / `npm run typecheck` 验证
- 能把官方课程的核心概念（context window、smart zone、grilling、AGENTS.md、skills、spec、handoff）对应到这个仓库里的具体文件

## Constraints
- 全栈新手：只动手用过 npm / 命令行；React、SQL、TypeScript 都没动手写过；能读懂代码逻辑
- 只会简单 git 操作
- 每节课 ≤ 10 分钟，一次只讲透一个小点，随时能停
- 环境：Windows + PowerShell；Node v24.14.1 / npm 11.21.1；仓库已装好 `node_modules` 且已有 `data.db`
- 用简体中文教学；技术术语保留英文原名（loader、schema、migration、seed 等）

## Out of scope
- 从零搭建脚手架、生产部署、数据库性能调优
- React 组件设计模式、Tailwind 样式细节、TypeScript 类型体操
- 付费课程内部的 61 节视频：本工作区做配套自学与练习，不替代原课
