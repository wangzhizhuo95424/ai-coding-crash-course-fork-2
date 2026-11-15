# AI Coding Crash Course 配套学习资源

## Knowledge

- [官方课程页：AI Coding Crash Course（aihero.dev）](https://www.aihero.dev/workshops/ai-coding-crash-course)
  Matt Pocock 官方课程主页。确认了「61 lessons / 6 sections」、官方核心概念清单（context window、smart/dumb zone、grilling、AGENTS.md、skills、handoff、subagents）以及「不是 vibe coding、以工程基本功掌控 agent」的定位。用于：对齐整条学习路径。
- [上游官方仓库 README（GitHub）](https://github.com/ai-hero-dev/ai-coding-crash-course)
  与本地 checkout 同源的一手说明：Prerequisites（Node 22+ / Claude Code CLI）、Getting Started 四条命令、Scripts 表、六章名称、Tech Stack。用于：核对命令与官方章节顺序。
- [本地 `README.md`](./README.md)
  当前工作副本的说明，也是官方课程第一节的配套材料。注意它写的是 React Router v7 + Ably，而 `package.json` 实际是 `react-router 8.3.0` 且无 Ably 依赖 —— 用来练习「以代码为准，别盲信文档」。
- [npm Docs: Scripts](https://docs.npmjs.com/cli/v11/using-npm/scripts/)
  npm 官方：`scripts` 字段由 `npm run <name>` 执行；依赖的可执行文件会被加进 PATH（所以脚本里能直接写 `react-router`）；脚本总在包根目录运行。用于：解释 `npm run X` 的底层机制。
- [Drizzle Kit: Migrations with Drizzle Kit](https://orm.drizzle.team/docs/kit-overview)
  Drizzle 官方：`generate` 依据 schema 生成 SQL 迁移文件，`migrate` 把迁移应用到数据库；`drizzle.config.ts` 至少需声明 dialect 与 schema 路径。用于：`db:migrate` / `db:generate` / `drizzle.config.ts`。
- [React Router: Data Loading（Framework mode）](https://reactrouter.com/start/framework/data-loading)
  React Router 官方：SSR 下 `loader` 在服务端执行、数据自动序列化成 `loaderData` prop、`loader` 会从客户端 bundle 中移除。用于：后续讲完整请求链路。
- [React Router: Picking a Mode](https://reactrouter.com/start/modes)
  官方文档：Framework / Data / Declarative 三种模式的能力差异。用于：理解本项目为什么选 Framework + `ssr: true`。
- [Claude Code 官方文档：Overview](https://code.claude.com/docs/en/overview)
  Anthropic 官方：agentic coding tool 的能力边界，以及 CLAUDE.md / AGENTS.md、skills、hooks、MCP、subagents。用于：官方课程第 3–5 章的配套查阅。

## Wisdom (Communities)

- [React Router / Remix Discord](https://remix.run/discord)
  由 React Router 官方文档页脚给出的官方社区。用于：loader、SSR、typegen 这类框架问题拿真实工程反馈。
- [r/ClaudeAI](https://www.reddit.com/r/ClaudeAI/)
  活跃的 Claude Code 使用者社区。用于：AI 编码工作流的真实踩坑与经验对照；信息质量参差，只当线索不当结论。
- AI Hero 学员社区（随课程附带的 learning environment / 讨论区）
  最贴近本 mission 的实践社区，但入口需登录，尚未确认。用于：把练习中遇到的「agent 跑偏」问题拿去和同期学员对照。

## Gaps

- 官方 61 节课的完整课时表在登录墙后，公开页只给出六章名称；目前只能依据本地 `README.md` 的六章与 checkpoint slug 推进，逐课对应表待补。
- 本地 `README.md` 与 `package.json` 的版本/依赖不一致；缺一份可信的「当前 checkout 技术栈清单」，已由 [`reference/project-map.html`](./reference/project-map.html) 部分补齐。
- 尚未确认中文社区入口；用户也还没表达是否愿意加入社区，先不主动推销（见 `NOTES.md`）。
