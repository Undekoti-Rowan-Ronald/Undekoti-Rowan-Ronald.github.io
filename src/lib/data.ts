export const profile = {
  name: "Undekoti Rowan Ronald",
  shortName: "Rowan",
  titles: [
    "AI Engineer",
    "Machine Learning Engineer",
    "LLM Engineer",
    "Java Developer",
  ],
  subtitle:
    "Building intelligent systems using Machine Learning, LLMs, Computer Vision and Edge AI.",
  location: "Chennai, India",
  email: "undekotirowan@outlook.com",
  phone: "+91-9154365953",
  github: "https://github.com/Undekoti-Rowan-Ronald",
  linkedin: "https://www.linkedin.com/in/undekoti-rowan-ronald-51912a236/",
  resumeFile: "/resume/Undekoti_Rowan_Ronald.pdf",
  summary:
    "Machine Learning Engineer graduating with an M.Tech (Integrated) in Artificial Intelligence from SRM Institute of Science and Technology (CGPA 8.47/10.0). Experienced in deep learning, computer vision, NLP, and self-supervised and generative AI models, with hands-on work in PyTorch, TensorFlow, and Hugging Face Transformers. Skilled at taking models from research to real-time, edge-optimized deployment on devices such as the Raspberry Pi 5. Enjoys building AI-powered applications and reliable backend systems, with working knowledge of Java, SQL, and Linux.",
};

export const education = [
  {
    school: "SRM Institute of Science and Technology",
    location: "Chennai, India",
    degree: "M.Tech (Integrated) in Artificial Intelligence",
    detail: "CGPA: 8.47 / 10.0",
    period: "Jul 2026",
  },
];

export const experience = [
  {
    company: "Valeo India Private Limited",
    location: "Chennai, India",
    role: "R&D AI Intern",
    period: "Oct 2025 – Present",
    points: [
      "Architected a real-time smart helmet dashboard system deployed on Raspberry Pi 5, engineering an OpenVINO-accelerated, multiprocessing pipeline (PySide6, GStreamer) with YOLOX Nano and YuNet/SFace for on-device object and face detection.",
      "Built and maintained a second, simplified deployment branch using ONNX Runtime, InsightFace, and OpenCV for cross-platform debugging, keeping the detection pipeline portable outside the primary Raspberry Pi 5 target.",
      "Built AI workflow automation tools using LLMs, Retrieval-Augmented Generation (RAG), LangChain, and Model Context Protocol (MCP) integrations, reducing manual tasks by 30%.",
      "Led software validation initiatives, reducing deployment-critical bugs by 20% through systematic testing protocols.",
    ],
  },
];

export const projects = [
  {
    slug: "deepfake-audio-detection",
    title: "Deepfake Audio Detection Framework",
    description:
      "A modular, self-supervised deepfake audio detection pipeline combining HuBERT and XLS-R, reaching 0.72% Equal Error Rate (EER) on ASVspoof 2019 — outperforming multilingual baselines by 15%.",
    achievements: [
      "0.72% EER on ASVspoof 2019, 15% better than multilingual baselines",
      "Applied knowledge distillation to build DistilHuBERT — 40% parameter reduction, 13ms latency for mobile/edge deployment",
      "Automated feature-extraction pipeline processing 250+ hours of audio",
      "Findings published as a CRC Press book chapter",
    ],
    tech: ["Python", "PyTorch", "HuBERT", "XLS-R", "Transformers", "Knowledge Distillation"],
    github: "https://github.com/Undekoti-Rowan-Ronald",
    period: "Jan 2026 – Present",
    featured: true,
  },
  {
    slug: "smart-helmet-detection",
    title: "Smart Helmet Detection & Dashboard",
    description:
      "Real-time edge AI dashboard for two-wheeler riders. YOLOX Nano-powered helmet/face detection with OpenVINO inference, ByteTrack rider locking, and face-recognition authentication, deployed on Raspberry Pi 5.",
    achievements: [
      "OpenVINO-accelerated, multiprocessing pipeline built with PySide6 and GStreamer",
      "YOLOX Nano + YuNet/SFace for on-device detection and recognition",
      "Portable ONNX Runtime / InsightFace branch for cross-platform debugging",
    ],
    tech: ["Python", "OpenVINO", "YOLOX Nano", "YuNet", "SFace", "Raspberry Pi 5"],
    github:
      "https://github.com/Undekoti-Rowan-Ronald/Smart-helmet-detection-with-dashboard-",
    period: "Oct 2025 – Present",
    featured: true,
  },
  {
    slug: "gemma-qlora-finetuning",
    title: "Efficient LLM Fine-Tuning Framework",
    description:
      "A fine-tuning pipeline for Gemma-2-2B-IT using QLoRA with 4-bit NormalFloat (NF4) quantization, built to boost mathematical reasoning while keeping training lightweight enough for a single GPU.",
    achievements: [
      "Cut trainable parameters by 98% and memory usage by 60% on a single GPU",
      "Tuned gradient accumulation to hold 94% accuracy on GSM8K",
      "Reduced training time by 40% versus full fine-tuning",
    ],
    tech: ["Python", "PyTorch", "Hugging Face Transformers", "QLoRA", "PEFT"],
    github:
      "https://github.com/Undekoti-Rowan-Ronald/FineTunning-Gemma-2-2b-it-for-enhancing-mathematical-reasoning",
    period: "Feb 2025",
    featured: true,
  },
  {
    slug: "guard-my-click",
    title: "Guard My Click: Phishing Detection Web App",
    description:
      "A hybrid XGBoost + fuzzy-logic phishing classifier wrapped in a Flask web app, scanning inboxes directly through the Gmail API.",
    achievements: [
      "95% accuracy across a 50,000-email dataset",
      "Hybrid ML + fuzzy-logic scoring to cut false positives",
      "Live Gmail API integration for real inbox scanning",
    ],
    tech: ["Python", "Flask", "XGBoost", "Fuzzy Logic", "Gmail API"],
    github:
      "https://github.com/Undekoti-Rowan-Ronald/Phishing-Link-Detection-Using-a-Hybrid-ML-Fuzzy-Logic-Model-Integrated-with-Gmail-API",
    period: "Dec 2022 – Feb 2023",
    featured: true,
  },
];

export const publications = [
  {
    type: "Book Chapter",
    title:
      "Mathematical Reasoning Enhancement Through Fine-tuning: A Comparative Analysis of Gemma-2-2B-IT on GSM8K",
    venue: "Advanced Pathways in Electrical, Communication, and Automation, CRC Press",
    detail: "ISBN: 9781032867915",
    period: "2026",
    authors: "Undekoti, R. R. et al.",
  },
  {
    type: "Research Paper",
    title:
      "Monolingual vs. Multilingual Self-Supervised Models for Deepfake Audio Detection: A Comparative Analysis of HuBERT and XLS-R on ASVspoof 2019",
    venue: "In preparation",
    detail: "Comparative study of self-supervised speech models for audio forensics",
    period: "March 2026",
    authors: "Undekoti, R. R.",
  },
];

export const researchInterests = [
  "Self-supervised learning for audio & speech forensics",
  "Knowledge distillation & model compression for edge deployment",
  "Retrieval-Augmented Generation and agentic LLM systems",
  "Efficient fine-tuning (QLoRA / PEFT) for reasoning tasks",
];

export const futureWork = [
  "Extending DistilHuBERT to multilingual, low-resource deepfake detection",
  "Benchmarking knowledge-distilled models on additional edge hardware (Jetson, Coral)",
  "Production-grade Spring Boot + Spring AI services for LLM-powered backends",
];

export const skillGroups = [
  {
    title: "Artificial Intelligence & ML",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Large Language Models",
      "Retrieval-Augmented Generation (RAG)",
      "Generative AI",
      "Prompt Engineering",
      "Knowledge Distillation",
      "Model Quantization",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Hugging Face Transformers",
      "PEFT / LoRA",
      "LangChain",
      "Model Context Protocol (MCP)",
      "Scikit-Learn",
      "OpenCV",
      "OpenVINO",
      "YOLOX",
      "Flask",
      "React",
    ],
  },
  {
    title: "Languages & Backend",
    skills: [
      "Python",
      "Java",
      "C",
      "SQL",
      "Spring Boot fundamentals",
      "JDBC",
      "REST APIs",
      "MySQL",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      "AWS (SageMaker, EC2)",
      "Docker",
      "Git",
      "GitHub",
      "Linux",
      "Raspberry Pi 5",
      "Pandas",
      "NumPy",
      "Node.js",
    ],
  },
];

export const certifications = [
  {
    title: "AWS Machine Learning Foundations",
    issuer: "Amazon Web Services",
    note: "SageMaker, EC2 — cloud-based ML training & deployment",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera / DeepLearning.AI",
    note: "Neural networks, CNNs, sequence models",
  },
  {
    title: "Machine Learning",
    issuer: "Coursera / Stanford Online",
    note: "Core supervised & unsupervised learning foundations",
  },
];
// Note: replace with your verified certificate names, issuers and links/IDs.

export const socials = {
  github: "https://github.com/Undekoti-Rowan-Ronald",
  linkedin: "https://www.linkedin.com/in/undekoti-rowan-ronald-51912a236/",
  email: "mailto:undekotirowan@outlook.com",
};
