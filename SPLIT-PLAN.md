# 章节拆分方案

## 拆分原则

1. **一个独立概念 = 一个页面** — 如果一个主题能独立理解、独立搜索、独立引用，就应该是独立页面
2. **单页控制在 30-50KB** — 太长的页面阅读疲劳，TOC 也太密集
3. **主题内聚** — 同一页面内的内容应该围绕一个中心概念
4. **保留导航连贯性** — 拆分后的页面通过 prev/next 串联

---

## 当前问题页面

| 页面 | 大小 | 问题 |
|------|------|------|
| systems-overview.html | 78KB / 21 h2 | **最严重**：Buddy、Voice、Vim、Remote、Bridge、Plugin、Memory、Analytics 等 20 个完全不同的主题挤在一起 |
| kairos.html | 91KB / 13 h2 | 单一主题但篇幅过长，可按模块拆分 |
| glossary.html | 69KB / 7 h2 | 工具书性质，保持一页 ✓ |
| context-permissions.html | 58KB / 14 h2 | 「上下文」和「权限」是两个独立大主题 |
| architecture.html | 55KB / 9 h2 | 主题统一但偏长 |
| tools-detail.html | 50KB / 8 h2 | 边界合理 ✓ |
| commands-detail.html | 40KB / 10 h2 | 合理 ✓ |
| learn-s01~s12 | 22-31KB | 已经拆好 ✓ |

---

## 拆分方案

### 1. systems-overview → 拆成 8 个独立页面

这是最需要拆的。20 个主题完全独立，没有理由放在一起。

| 新页面 | 来源 h2 | 说明 |
|--------|---------|------|
| `buddy.html` | #buddy | Buddy 电子宠物完整拆解（18 物种、5 稀有度、算法、动画、精灵渲染）|
| `voice-vim.html` | #voice + #vim + #keybindings | 输入模式：语音 + Vim 状态机 + 快捷键，都是「怎么输入」的主题 |
| `remote-bridge.html` | #remote + #bridge | 远程执行 + IDE 集成，都是「怎么连接外部」的主题 |
| `plugin-skills.html` | #plugin + #skills | 插件 + 技能系统，都是「怎么扩展能力」的主题 |
| `memory-system.html` | #memory（5 种记忆机制）| 记忆系统全景：CLAUDE.md、Auto Memory、Team Sync、Magic Docs、Auto Dream、Thinkback |
| `analytics-policy.html` | #analytics + #policy | 分析遥测 + 策略合规，都是「平台治理」主题 |
| `ink-ui.html` | #ink + #prompt-suggestion | 终端 UI 框架 + 提示建议，都是「渲染与交互」主题 |
| `internals.html` | #migrations + #entrypoints + #schemas + #cost-tracking + #deep-link | 内部机制合集：迁移、入口点、验证、费用、深度链接 |

拆分后 `systems-overview.html` 变为一个索引/导航页，列出所有子系统及其入口链接。

### 2. context-permissions → 拆成 2 个独立页面

| 新页面 | 来源 | 说明 |
|--------|------|------|
| `context.html` | Part 1 全部（CLAUDE.md, Rules, Memory, Skills, MCP, 忘事诊断）| 上下文体系：Claude 怎么「知道」你的项目 |
| `permissions.html` | Part 2 全部（6 模式, 决策流程, Plan Mode, Allow/Deny, Hooks）| 权限系统：Claude 怎么决定能做什么 |

### 3. kairos.html → 拆成 3 个独立页面

| 新页面 | 来源 h2 | 说明 |
|--------|---------|------|
| `kairos-overview.html` | #what + #flags + #activation + #future | KAIROS 定位、Feature Flag 体系、激活流程、未来展望 |
| `kairos-proactive.html` | #heartbeat + #brief + #tools + #dream + #channels | 主动模式核心：心跳、Brief 工具、专属工具、Auto Dream、推送 |
| `kairos-coordinator.html` | #coordinator + #remote-arch + #dataflow + #comparison | Coordinator 编排 + 远程架构 + 数据流 + vs OpenClaw |

### 4. architecture.html → 拆成 2 个独立页面

| 新页面 | 来源 h2 | 说明 |
|--------|---------|------|
| `arch-core.html` | #overview + #startup + #query-engine + #context-assembly + #full-picture | 核心架构：启动、QueryEngine、上下文装配 |
| `arch-runtime.html` | #tool-orchestration + #state-management + #context-compaction + #session-persistence | 运行时机制：工具编排、状态管理、压缩、持久化 |

### 5. 保持不变的页面

| 页面 | 理由 |
|------|------|
| `tools-detail.html` (50KB) | 42 个工具是同一主题，按族分类已经合理 |
| `commands-detail.html` (40KB) | 67 个命令是同一主题 |
| `glossary.html` (69KB) | 工具书/字典性质，应该在一页可搜索 |
| `learn-s01~s12` (22-31KB) | 已经按课拆好 |

---

## 拆分后的完整站点结构

```
首页 (index.html)

官方源码分析
├── 核心架构
│   ├── arch-core.html          启动流程 · QueryEngine · 上下文装配
│   └── arch-runtime.html       工具编排 · 状态管理 · 压缩 · 持久化
├── 功能系统
│   ├── tools-detail.html       42 个内置工具详解
│   ├── commands-detail.html    67 个斜杠命令手册
│   ├── context.html            上下文体系（CLAUDE.md · Rules · Memory · Skills · MCP）
│   └── permissions.html        权限系统（6 模式 · 决策流程 · Hooks）
├── KAIROS
│   ├── kairos-overview.html    定位 · Feature Flags · 激活流程
│   ├── kairos-proactive.html   心跳 · Brief · 专属工具 · Auto Dream
│   └── kairos-coordinator.html Coordinator 编排 · 远程架构 · vs OpenClaw
├── 子系统
│   ├── buddy.html              电子宠物完整拆解
│   ├── voice-vim.html          语音模式 · Vim 状态机 · 快捷键
│   ├── remote-bridge.html      远程执行 · IDE Bridge
│   ├── plugin-skills.html      插件系统 · 技能系统
│   ├── memory-system.html      5 种记忆机制全景
│   ├── analytics-policy.html   分析遥测 · 策略合规
│   ├── ink-ui.html             Ink 终端 UI · 提示建议
│   └── internals.html          迁移 · 入口点 · Schemas · 费用 · Deep Link

逆向学习课程
├── 基础课程 S01-S06
│   ├── learn-s01.html          Agent Loop
│   ├── learn-s02.html          Tool Use
│   ├── learn-s03.html          TodoWrite
│   ├── learn-s04.html          Subagent
│   ├── learn-s05.html          Skill Loading
│   └── learn-s06.html          Context Compact
├── 进阶课程 S07-S12
│   ├── learn-s07.html          Task System
│   ├── learn-s08.html          Background Tasks
│   ├── learn-s09.html          Agent Teams
│   ├── learn-s10.html          Team Protocols
│   ├── learn-s11.html          Autonomous Agents
│   └── learn-s12.html          Worktree Isolation

参考
└── glossary.html               术语表
```

**总计：30 个内容页 + 1 个首页 = 31 个页面**

---

## 侧边栏导航结构（四级）

```
官方源码分析                          ← 一级 group
  ▾ 核心架构                          ← 二级 sub-group（可折叠）
      启动与核心循环                   ← 三级 link
      运行时机制                       ← 三级 link
  ▾ 功能系统
      内置工具详解              42
      斜杠命令手册              67
      上下文体系
      权限系统
  ▾ KAIROS 专题
      概述与激活
      主动模式
      Coordinator 编排
  ▾ 子系统
      Buddy 电子宠物
      语音 · Vim · 快捷键
      远程 · IDE Bridge
      插件 · 技能
      记忆系统
      分析 · 合规
      终端 UI
      内部机制

逆向学习课程                          ← 一级 group
  ▾ 基础课程 S01-S06
      S01 Agent Loop            CORE
      S02 Tool Use
      ...
  ▾ 进阶课程 S07-S12
      S07 Task System
      ...

参考
    术语表                      37
```

---

## 执行步骤

### Step 1: 从大页面提取内容到新页面
- 复用现有 HTML boilerplate（head、nav script、CSS link）
- 按 h2 边界切割内容
- 每个新页面加 source-tag + h1 + subtitle

### Step 2: 将旧大页面改为索引页
- systems-overview.html → 变为子系统索引（卡片链接到各子页）
- kairos.html → 变为 KAIROS 导航页
- context-permissions.html → 可删除，由两个新页替代
- architecture.html → 可删除，由两个新页替代

### Step 3: 更新导航
- 侧边栏 NAV 数组重写
- prev/next 链接重新生成
- 首页卡片链接更新
- 搜索索引更新

### Step 4: 验证
- 所有链接可用
- 导航连贯
- 右侧 TOC 正常
- 搜索能找到新页面
