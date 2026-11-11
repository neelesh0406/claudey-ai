export interface HowItWorksStep {
  step: string;
  waypoint: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  coordinates: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: "01",
    waypoint: "WP-01 // INPUT",
    title: "Describe it",
    tagline: "Speak in human, not syntax",
    description:
      "Type a prompt in natural language, paste your user stories, or jot down high-level requirements. Tell the agent what you want to build—from isolated API flows to full-stack architectures.",
    badge: "Natural Language Prompt",
    coordinates: "37°46'N 122°25'W",
  },
  {
    step: "02",
    waypoint: "WP-02 // SYNTHESIS",
    title: "Watch the agent draw",
    tagline: "Autonomous visual layout in real-time",
    description:
      "The co-pilot synthesizes nodes, connectors, database models, and flowchart branches shape by shape on the canvas, automatically computing spatial geometry without manual dragging.",
    badge: "Autonomous Spatial Layout",
    coordinates: "37°47'N 122°24'W",
  },
  {
    step: "03",
    waypoint: "WP-03 // CONVERGENCE",
    title: "Keep iterating together",
    tagline: "Bi-directional spec & ticket cohesion",
    description:
      "Edit visually or through conversation. Convert your canvas diagrams into structured markdown documentation on the paired doc surface, and let the agent extract task tickets for team execution.",
    badge: "Bi-Directional Cohesion",
    coordinates: "37°48'N 122°23'W",
  },
];
