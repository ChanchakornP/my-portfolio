// /config/timeline.ts

export type TimelineEntry = {
  title: string;
  subtitle: string;
  description: string[]; // bullet points
  logo: string;
};

export const education: TimelineEntry[] = [
  {
    title: "University of Sydney",
    subtitle: "Master of Computer Science (2024 - Present)",
    description: ["AVG WAM: 85.5"],
    logo: "/aboutme/usyd-logo.png",
  },
  {
    title: "Chiang Mai University",
    subtitle: "Bachelor of Electrical Engineering (2016 - 2020)",
    description: ["GPA: 3.93 / 4.00 — First Class Honour"],
    logo: "/aboutme/cmu-logo.png",
  },
];

export const workExperience: TimelineEntry[] = [
  {
    title: "Machine Learning Engineer",
    subtitle: "AppMan Co., Ltd. — Thailand",
    description: [
      "Improved OCR accuracy and processing efficiency by implementing transformer-based architectures using PyTorch and Hugging Face, significantly enhancing text recognition performance and reducing GPU memory consumption by approximately 30%",
      "Optimized GPU memory usage by converting models to ONNX and TensorRT formats for faster inference and applied advanced training techniques to scale model training efficiently",
      "Integrated an OCR pipeline with a Retrieval-Augmented Generation (RAG) system to enable semantic search and question answering over PDF documents",
    ],
    logo: "/aboutme/appman-logo.png"
  },
  {
    title: "Super AI Engineer Participant",
    subtitle: "AIAT (SIIT Bootcamp)",
    description: [
      "Completed the SuperAI Engineer Bootcamp (AI Boostcamp) hosted by Sirindhorn International Institute of Technology, engaging in weekly intensive hackathons to solve real-world problems with AI techniques",
      "Won first place in a house image classification hackathon",
      "Won first place in a smart maintenance hackathon"
    ],
    logo: "/aboutme/super-ai-logo.jpeg"
  },
  {
    title: "Software Engineer",
    subtitle: "Toyota Tsusho Nexty Electronics",
    description: [
      "Executed the unit-tests (Read-modify-Write) to ensure the reliability and robustness of individual software components",
      "Implemented integration tests to validate the interaction between software modules in car systems",
      "Developed automated test scripts to improve testing efficiency and reduce manual effort"
    ],
    logo: "/aboutme/nexty-logo.webp"
  },
  {
    title: "Test Development Engineer",
    subtitle: "Maxim Integrated Thailand",
    description: [
      "Analyzed OS upgrades for wafer productivity",
      "Used data analysis to validate results"
    ],
    logo: "/aboutme/maxim-logo.jpg"
  }
] as const;
