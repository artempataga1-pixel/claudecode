# Graph Report - .  (2026-04-22)

## Corpus Check
- 114 files · ~600,000 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 248 nodes · 184 edges · 14 communities detected
- Extraction: 90% EXTRACTED · 10% INFERRED · 0% AMBIGUOUS · INFERRED: 18 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_API Rate-Limited Handlers|API Rate-Limited Handlers]]
- [[_COMMUNITY_Counter & Stats Components|Counter & Stats Components]]
- [[_COMMUNITY_Prostranstvo-Form Project Docs|Prostranstvo-Form Project Docs]]
- [[_COMMUNITY_AxenAI & PROстранство Brand Assets|AxenAI & PROстранство Brand Assets]]
- [[_COMMUNITY_Claude Code Workspace Setup|Claude Code Workspace Setup]]
- [[_COMMUNITY_GlowCard Interactive Component|GlowCard Interactive Component]]
- [[_COMMUNITY_Pixel Canvas Effect|Pixel Canvas Effect]]
- [[_COMMUNITY_Lead Form & 3D CRM|Lead Form & 3D CRM]]
- [[_COMMUNITY_CountUp Animation|CountUp Animation]]
- [[_COMMUNITY_Root Layout (Shared Pattern)|Root Layout (Shared Pattern)]]
- [[_COMMUNITY_Glitch Text Effect|Glitch Text Effect]]
- [[_COMMUNITY_Свежий Климат Landing|Свежий Климат Landing]]
- [[_COMMUNITY_AxenAI Next.js App|AxenAI Next.js App]]
- [[_COMMUNITY_Next.js Agent Rules|Next.js Agent Rules]]

## God Nodes (most connected - your core abstractions)
1. `POST()` - 10 edges
2. `Prostranstvo Form Project` - 8 edges
3. `CLAUDE.md вЂ” Project Instructions` - 7 edges
4. `Pixel` - 7 edges
5. `set()` - 5 edges
6. `AxenAI Presentation v2 with Three.js (Slides)` - 4 edges
7. `PROСЃС‚СЂР°РЅСЃС‚РІРѕ вЂ” E-commerce Analytics Brand` - 4 edges
8. `AxenAI вЂ” AI Agency Brand (РђСЂС‚С‘Рј РџР°С‚Р°РіР°)` - 4 edges
9. `signPayload()` - 4 edges
10. `withRateLimitCookie()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `BitVault вЂ” Cryptocurrency Landing Page` --semantically_similar_to--> `Р‘РѕС‚Р°РЅРёРєР° вЂ” Flower Delivery Landing Page`  [INFERRED] [semantically similar]
  bitvault.html → frontend-design/index.html
- `РЎРІРµР¶РёР№ РљР»РёРјР°С‚ вЂ” Building Finishing Landing Page` --semantically_similar_to--> `РЎРІРµР¶РёР№ РљР»РёРјР°С‚ вЂ” Copy/Backup Version`  [INFERRED] [semantically similar]
  index.html → index вЂ” РєРѕРїРёСЏ.html
- `PROСЃС‚СЂР°РЅСЃС‚РІРѕ вЂ” E-commerce Analytics Brand` --semantically_similar_to--> `AxenAI вЂ” AI Agency Brand (РђСЂС‚С‘Рј РџР°С‚Р°РіР°)`  [INFERRED] [semantically similar]
  site-snapshot.md → preza/v1_corporate.html
- `withRateLimitCookie()` --calls--> `set()`  [INFERRED]
  C:\Users\artem\OneDrive\Рабочий стол\ClaudeCode\prostranstvo-form\app\api\lead\route.ts → C:\Users\artem\OneDrive\Рабочий стол\ClaudeCode\prostranstvo-form\app\components\LeadForm.tsx
- `observeViewport()` --calls--> `set()`  [INFERRED]
  C:\Users\artem\OneDrive\Рабочий стол\ClaudeCode\prostranstvo-form\app\components\GlowCard.tsx → C:\Users\artem\OneDrive\Рабочий стол\ClaudeCode\prostranstvo-form\app\components\LeadForm.tsx

## Communities

### Community 0 - "API Rate-Limited Handlers"
Cohesion: 0.25
Nodes (14): decodeRateLimitState(), encodeRateLimitState(), esc(), getMoscowDateParts(), getMoscowTime(), getNextOrderNumber(), getOrderNumber(), getRateLimitState() (+6 more)

### Community 1 - "Counter & Stats Components"
Cohesion: 0.12
Nodes (12): count_with_for(), count_with_generator(), count_with_list_comprehension(), count_with_map(), count_with_reduce(), Разные способы считать от 0 до 10 в Python., Способ 3: генератор списка, Способ 5: map + print (+4 more)

### Community 2 - "Prostranstvo-Form Project Docs"
Cohesion: 0.16
Nodes (15): Next.js Agent Rules, CLAUDE.md Reference to AGENTS.md, ALLOWED_ORIGIN Env Var, Next.js App Router, .env.local Config File, Landing Site and Case Pages, Lead API Route app/api/lead/route.ts, Next.js 16.2.2 (+7 more)

### Community 3 - "AxenAI & PROстранство Brand Assets"
Cohesion: 0.18
Nodes (12): AxenAI вЂ” AI Agency Brand (РђСЂС‚С‘Рј РџР°С‚Р°РіР°), PROstranstvo Form Page Snapshot (Accessibility Tree), Portfolio PDF (portfolio.pdf), JARVIS Portfolio System вЂ” Tech Presentation Slides, AxenAI Corporate Presentation v1 (Slides), AxenAI Corporate Presentation PDF v1, AxenAI Presentation v2 with Three.js (Slides), AxenAI Presentation PDF v2 (+4 more)

### Community 4 - "Claude Code Workspace Setup"
Cohesion: 0.22
Nodes (10): BitVault вЂ” Cryptocurrency Landing Page, claude.exe вЂ” Claude Code CLI Binary, Context7 Tool for Library Docs, install.ps1 вЂ” PowerShell Installer, Playwright Frontend Verification, CLAUDE.md вЂ” Project Instructions, Windows Development Environment, Р‘РѕС‚Р°РЅРёРєР° вЂ” Flower Delivery Landing Page (+2 more)

### Community 5 - "GlowCard Interactive Component"
Cohesion: 0.22
Nodes (2): getViewportObserver(), observeViewport()

### Community 6 - "Pixel Canvas Effect"
Cohesion: 0.29
Nodes (1): Pixel

### Community 7 - "Lead Form & 3D CRM"
Cohesion: 0.25
Nodes (4): createAnimationActivityController(), init(), set(), init()

### Community 13 - "CountUp Animation"
Cohesion: 0.67
Nodes (2): CountUp(), format()

### Community 14 - "Root Layout (Shared Pattern)"
Cohesion: 0.67
Nodes (1): RootLayout()

### Community 15 - "Glitch Text Effect"
Cohesion: 0.67
Nodes (1): GlitchText()

### Community 16 - "Свежий Климат Landing"
Cohesion: 1.0
Nodes (3): РЎРІРµР¶РёР№ РљР»РёРјР°С‚ вЂ” Copy/Backup Version, РЎРІРµР¶РёР№ РљР»РёРјР°С‚ вЂ” Building Finishing Landing Page, Tailwind CSS Framework

### Community 17 - "AxenAI Next.js App"
Cohesion: 0.67
Nodes (3): AxenAI вЂ” Next.js Web Application, AxenAI вЂ” Next.js Project README, Next.js Framework

### Community 49 - "Next.js Agent Rules"
Cohesion: 1.0
Nodes (2): Next.js Breaking Changes Warning, Next.js Docs Path node_modules/next/dist/docs/

## Knowledge Gaps
- **28 isolated node(s):** `Разные способы считать от 0 до 10 в Python.`, `Способ 1: цикл for + range`, `Способ 3: генератор списка`, `Способ 5: map + print`, `Способ 6: функция-генератор` (+23 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `GlowCard Interactive Component`** (10 nodes): `GlowCard.tsx`, `ensureGlobalCSS()`, `flushPointer()`, `getViewportObserver()`, `observeViewport()`, `onEnter()`, `onLeave()`, `onMove()`, `subscribeToVisibility()`, `syncCanHover()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Pixel Canvas Effect`** (10 nodes): `pixel-canvas.tsx`, `createPixelCanvasClass()`, `Pixel`, `.appear()`, `.constructor()`, `.disappear()`, `.draw()`, `.getRandomValue()`, `.shimmer()`, `PixelCanvas()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `CountUp Animation`** (4 nodes): `CountUp.tsx`, `CountUp()`, `format()`, `getSharedObserver()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Root Layout (Shared Pattern)`** (3 nodes): `layout.tsx`, `layout.tsx`, `RootLayout()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Glitch Text Effect`** (3 nodes): `GlitchText.tsx`, `GlitchText.tsx`, `GlitchText()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Next.js Agent Rules`** (2 nodes): `Next.js Breaking Changes Warning`, `Next.js Docs Path node_modules/next/dist/docs/`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `set()` connect `Lead Form & 3D CRM` to `API Rate-Limited Handlers`, `GlowCard Interactive Component`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `withRateLimitCookie()` connect `API Rate-Limited Handlers` to `Lead Form & 3D CRM`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **Why does `observeViewport()` connect `GlowCard Interactive Component` to `Lead Form & 3D CRM`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `set()` (e.g. with `withRateLimitCookie()` and `init()`) actually correct?**
  _`set()` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Разные способы считать от 0 до 10 в Python.`, `Способ 1: цикл for + range`, `Способ 3: генератор списка` to the rest of the system?**
  _28 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Counter & Stats Components` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._