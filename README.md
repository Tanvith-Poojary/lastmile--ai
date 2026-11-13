# 🚌 LASTMILE AI

> **"Every student deserves a way to reach their classroom."**

**LASTMILE AI** is an intelligent transportation decision-support platform designed to improve the coordination, utilization, and resilience of existing rural student transportation in India through deterministic capacity-constrained optimization, predictive demand forecasting, disruption recovery simulation, and explainable AI reasoning.

---

## 🌟 The Problem

In rural India, millions of secondary and Pre-University (PU) college students depend on a limited pool of government buses and authorized vans to travel 15–25 km daily.

Transportation becomes unreliable and unsafe when:
- Vehicles suffer mechanical breakdowns with no backup.
- Monsoon flash floods and culvert repairs close critical corridor links.
- Certain hamlets experience high student demand while buses on other corridors run underfilled.
- Buses get dangerously overloaded beyond legal seating capacity to accommodate unserved students.
- Students and administrators lack visibility into alternative authorized transport resources.

---

## 💡 The Solution

**LASTMILE AI** serves as an intelligent operations command center for taluk transit coordinators and school management committees:
1. **Capacity-Aware Deterministic Engine**: Strict mathematical optimizer that **never over-allocates vehicle seats**, respects corridor authorizations, and excludes disrupted routes.
2. **Interactive Schematic Network Map**: Responsive SVG topology showing villages, corridors, vehicle markers, and real-time route disruptions.
3. **AI Intelligence & Prompt Engineering Lab**: Demonstrates prompt iteration (Naive → Parametric → Structured Chain-of-Thought) with Google Gemini 2.5 Flash and honest deterministic local fallback.
4. **Resilience & Scenario Simulator**: Interactive *"What If Something Goes Wrong?"* stress-testing engine simulating bus breakdowns, road closures, student surges, and remote hamlet integration.
5. **5-Day Demand Forecasting**: Transparent statistical regression anticipating upcoming attendance loads, exam week synchronization, and corridor capacity deficits.
6. **DPDP Act & Child Privacy Compliance**: Strict aggregate headcount modeling with zero collection of minors' personal identities, home addresses, or phone numbers.
7. **Official Dispatch Dossier Export**: Generate and download comprehensive CSV schedules or print PDF-ready reports.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | [Next.js 15](https://nextjs.org/) (App Router, React 19, TypeScript) |
| **Styling & Design** | [Tailwind CSS](https://tailwindcss.com/) (Custom Dark Enterprise Palette `#0B1220`) |
| **Icons & UI** | [Lucide React](https://lucide.dev/) |
| **Visualizations** | [Recharts](https://recharts.org/) (Responsive Bar and Area Charts) |
| **Map Rendering** | Custom Interactive SVG Schematic Topology |
| **AI / LLM Integration** | Current Official `@google/genai` SDK (Gemini 2.5 Flash) with Local Fallback |
| **Validation** | [Zod](https://zod.dev/) Schema Validation |
| **State Persistence** | Browser `localStorage` for settings, custom demands, scenarios & history |
| **Testing** | [Vitest](https://vitest.dev/) Automated Optimizer Unit Test Suite |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ or v20+ recommended; tested on v26 LTS)
- npm or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/lastmile-ai.git
   cd lastmile-ai
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables (Optional)**:
   Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```
   Add your Google Gemini API key if you wish to use live LLM reasoning:
   ```env
   GEMINI_API_KEY=your_actual_gemini_api_key_here
   ```
   > **Note:** If no API key is provided, the application runs automatically in **Demo AI Mode**, using a built-in deterministic reasoning engine. No paid credentials are required.

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Running Automated Tests

Run the Vitest test suite verifying all optimizer physical constraints:

```bash
npm test
```

The test suite validates:
- ✓ No vehicle seating capacity is ever exceeded (zero overloading).
- ✓ No unavailable or maintenance vehicles are ever assigned.
- ✓ No vehicle is assigned to multiple concurrent routes.
- ✓ Disrupted routes are strictly excluded from dispatch.
- ✓ Determinism: identical input always yields identical output.
- ✓ Unmet demand is calculated accurately under fleet deficits.
- ✓ Student surges trigger proper re-allocation and comparisons.

---

## 🏗️ Production Build

To build the optimized Next.js production bundle:

```bash
npm run build
npm start
```

---

## 📁 Project Directory Structure

```text
├── app/
│   ├── api/
│   │   └── ai/
│   │       └── plan/
│   │           └── route.ts          # Server-side Gemini API route
│   ├── globals.css                   # Tailwind styles, print styles & scrollbars
│   ├── layout.tsx                    # Root layout & dark theme metadata
│   └── page.tsx                      # Main single-page command center application
├── components/
│   ├── about/
│   │   └── AboutProjectView.tsx      # System overview, architecture & privacy statement
│   ├── ai-lab/
│   │   └── AILabView.tsx             # Prompt engineering laboratory & Gemini responses
│   ├── dashboard/
│   │   └── OverviewView.tsx          # 5 KPI cards, SVG map, charts, alerts & activity
│   ├── forecasting/
│   │   └── DemandForecastView.tsx    # 5-day predictive trend & corridor vulnerability
│   ├── layout/
│   │   ├── NotificationDrawer.tsx    # Slide-out drawer with active state-derived alerts
│   │   ├── Sidebar.tsx               # 8-section navigation sidebar
│   │   └── TopNavbar.tsx             # Brand header, mode badge, reset & user avatar
│   ├── map/
│   │   └── SchematicNetworkMap.tsx   # Interactive SVG network topology
│   ├── operations/
│   │   └── LiveOperationsView.tsx    # Village roster, search, filters & demand editor
│   ├── optimizer/
│   │   └── RouteOptimizerView.tsx    # Fleet allocator, before/after delta & explanations
│   ├── shared/
│   │   ├── AddVehicleModal.tsx       # Modal to register or edit transport assets
│   │   ├── AddVillageModal.tsx       # Modal to add rural hamlets
│   │   ├── EditDemandModal.tsx       # Modal to adjust village student headcount
│   │   ├── ReportExportModal.tsx     # Printable dossier & CSV export modal
│   │   └── ToastContainer.tsx        # Toast notifications
│   ├── simulator/
│   │   └── ScenarioSimulatorView.tsx # "What If Something Goes Wrong?" challenge engine
│   └── vehicles/
│       └── TransportResourcesView.tsx# Fleet asset registry & operational status
├── docs/
│   ├── architecture.md               # Detailed technical architecture & math formulation
│   ├── demo-script.md                # 3-minute hackathon demonstration script
│   └── prompt-iterations.md          # 3-stage prompt engineering benchmark report
├── lib/
│   ├── ai-service.ts                 # Gemini API integration (@google/genai) + fallback
│   ├── demo-data.ts                  # Demonstration dataset (Saraswati PU College)
│   ├── forecast.ts                   # 5-day predictive regression engine
│   ├── optimizer.ts                  # Deterministic capacity-constrained optimizer
│   ├── prompt-templates.ts           # 3 prompt iteration templates
│   ├── report-export.ts              # CSV and printable report generator
│   ├── storage.ts                    # LocalStorage persistence & reset utilities
│   └── utils.ts                      # Tailwind cn & badge utilities
├── tests/
│   └── optimizer.test.ts             # Vitest test suite for optimizer constraints
├── types/
│   ├── ai.ts                         # Zod schemas & TypeScript types for AI endpoints
│   └── transport.ts                  # Core domain models (Village, Route, Vehicle, Result)
├── .env.example                      # Environment template
├── next.config.mjs                   # Next.js configuration
├── package.json                      # Dependencies and scripts
├── tailwind.config.ts                # Tailwind design system configuration
├── tsconfig.json                     # TypeScript strict configuration
└── vitest.config.ts                  # Vitest test runner configuration
```

---

## 🔒 Responsible Design & Child Safety

1. **Zero Personally Identifiable Information (PII)**: The system models transport capacity using **aggregate student numbers per village**. No minor's name, phone number, home address, or GPS tracking is stored or requested.
2. **Authorized Fleet Only**: Rejects informal ride-matching between minors and unverified private drivers. Only school-board-approved and state transport resources are eligible.
3. **Strict Seating Compliance**: Unlike common practices where buses are packed beyond 150% capacity, LASTMILE AI strictly enforces the registered legal seating limit to ensure student physical safety.

---

## 📜 Demonstrating in a Hackathon

See [docs/demo-script.md](docs/demo-script.md) for a complete 3-minute presentation script covering:
1. Overview dashboard & dynamic KPI calculation.
2. Editing a village headcount and observing real-time state updates.
3. Injecting a sudden **"Bus Breakdown"** or **"Road Closure"** challenge.
4. Comparing **Prompt Iteration Stages (v1, v2, v3)** in the AI Intelligence Lab.
5. Exporting the official CSV and printable transport dossier.
