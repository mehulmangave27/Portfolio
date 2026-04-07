export const resumeData = {
  basics: {
    name: "Mehul Mangave",
    label: "Cloud & AI Engineer",
    email: "mehul.mangave@sjsu.edu",
    secondary_email: "mehulmangave@gmail.com",
    phone: "+1 (408) 210-8953",
    location: "San Jose, CA",
    summary:
      "As a Master’s student in Computer Engineering at San Jose State University, I’m passionate about solving complex problems through software engineering, cloud infrastructure, and applied AI/ML. I bring hands-on experience from State Street and Syngenta, developing intelligent internal tools, automating infrastructure with Terraform, and contributing to the design of scalable systems on AWS and Azure supporting thousands of users.",
    links: [
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/mehul-mangave",
      },
      {
        label: "GitHub",
        url: "https://github.com/mehulmangave27",
      },
    ],
  },

  top_impact: [
    {
      metric: "$500k",
      description: "Annual cloud savings architected at Syngenta",
    },
    {
      metric: "60%+",
      description: "Reduction in manual effort via Terraform PoC",
    },
    {
      metric: "95%",
      description: "Accuracy in AI turn-signal prediction system",
    },
  ],

  experience: [
    {
      company: "State Street Bank and Trust",
      role: "Cloud Engineering Intern",
      location: "Boston, US",
      dates: "June 2025 – Aug 2025",
      bullets: [
        "Owned the full software development lifecycle for an AI-powered internal chatbot using NLP to retrieve answers from Confluence docs, improving knowledge access and reducing support overhead.",
        "Engineered a Terraform automation proof of concept (PoC) that dynamically generates infrastructure templates based on user-defined requirements, utilizing in-house modules to streamline deployment workflows and reduce manual effort by over 60%.",
        "Collaborated with the Service Enablement team to architect, develop, and document reusable Terraform modules for provisioning various AWS services, contributing to scalable infrastructure practices and adherence to organizational standards.",
      ],
    },
    {
      company: "Syngenta",
      role: "Cloud Engineer",
      location: "Pune, India",
      dates: "June 2023 – July 2024",
      bullets: [
        "Architected multi-tier cloud infrastructure that supported increased user demand and optimized resource allocation, resulting in a 25% decrease in operational costs while maintaining high availability for over 10,000 users.",
        "Collaborated with senior engineers to migrate over 100 AWS accounts to Terraform Cloud, streamlining infrastructure provisioning and management. This migration significantly improved cloud operations efficiency and saved considerable time.",
        "Collaborated with the applications team to deploy scalable, low-latency services using Terraform, cutting deployment time by 40% and achieving 99.9% uptime.",
        "Managed AWS DynamoDB migration from legacy to new AWS accounts, ensuring a smooth transition. Managed cloud-based database migration tasks, optimizing the process for efficiency and minimal downtime.",
        "Led the development of cost-saving strategies in AWS, optimizing underutilized resources and achieving $500k in annual savings by effectively scaling down unnecessary resources.",
        "Implemented Sentinel policies for AWS and Azure services, integrating them with Terraform Cloud, which improved resource verification speed by 50%. This integration enhanced overall efficiency, reducing manual checks by 70%.",
      ],
    },
    {
      company: "Syngenta",
      role: "Software Engineering Intern",
      location: "Pune, India",
      dates: "Aug 2022 – Jun 2023",
      bullets: [
        "Provisioned cloud infrastructure for 20+ applications using AWS services such as EC2, S3, RDS, DynamoDB, API Gateway, Lambda, ECS, ECR, and ELB, ensuring efficient deployment and scalability.",
        "Planned and implemented Terraform modules for AWS services that standardized infrastructure management across departments, now utilized by over 50 teams, providing a reliable framework for secure and efficient cloud resource management.",
        "Developed and documented a solution for AWS database services (DynamoDB, Redshift, DocumentDB, Timestream), which has been successfully adopted by teams, improving performance by 30% and enhancing data processing efficiency by 25%.",
      ],
    },
  ],

  projects: [
    {
      title: "Dynamic Weight Learning for Self-RAG",
      dates: "Aug 2025 – Dec 2025",
      stack: ["Python", "PyTorch", "LLM", "RAG"],
      bullets: [
        "Developed a dynamic weighting framework for Self-RAG pipelines to improve relevance of retrieved context, addressing limitations of static weighting across retrieved documents during LLM generation.",
        "Implemented adaptive scoring algorithms using Python and PyTorch to re-rank and dynamically weight retrieved passages across 1000+ query evaluations, improving contextual grounding and reducing irrelevant retrieval influence.",
        "Improved response accuracy and relevance in retrieval-augmented generation workflows by ~18% in evaluation experiments while maintaining low inference overhead through optimized retrieval scoring logic.",
      ],
    },
    {
      title: "Omnireasoner: Knowledge Graph Reasoning",
      dates: "Aug 2025 – Mar 2026",
      stack: ["Knowledge Graphs", "LLMs", "Graph Traversal"],
      bullets: [
        "Built a knowledge-graph-augmented reasoning pipeline integrating graph traversal with LLM prompting to improve factual consistency in complex question answering.",
        "Designed entity linking and traversal workflows over a graph with 10K+ entities and relations, generating interpretable reasoning paths and reducing hallucinated responses by ~15% during evaluation experiments.",
      ],
    },
    {
      title: "Driver Assistance System",
      dates: "Jan 2022 – Jun 2022",
      stack: ["SIFT", "PCA", "Machine Learning", "Python"],
      bullets: [
        "Developed a system for autonomous vehicles that achieved 95% accuracy in predicting the turning direction of the vehicle ahead. Enhanced driver awareness by providing real-time audio feedback, reducing reaction time by 30%.",
        "Utilized SIFT feature extractor for feature extraction, Principal Component Analysis for dimensionality reduction, and 6 types of machine learning classifiers for classifying the images.",
      ],
    },
    {
      title: "Arrhythmia Detection via SVM",
      dates: "Aug 2021 – Dec 2021",
      stack: ["ECG Signal Processing", "SVM", "Scikit-learn"],
      bullets: [
        "Mitigated heart attack risk by early detection of arrhythmia through analyzing processed ECG signals using classical ML techniques to accurately classify arrhythmia types.",
        "Presented at the 4th International Conference on Robotics, Intelligent Automation and Control Technologies (VIT Chennai in association with Teesside University and Bochum University).",
      ],
    },
  ],

  skills: {
    languages: [
      "Terraform",
      "Python",
      "C",
      "C++",
      "Java",
      "SQL",
      "NoSQL",
      "PostgreSQL",
      "OOP",
    ],
    frameworks: [
      "Django",
      "React",
      "Node.js",
      "Git",
      "CI/CD",
      "Jenkins",
      "MongoDB",
      "TensorFlow",
      "PyTorch",
    ],
    platforms: [
      "AWS",
      "Azure",
      "Kubernetes",
      "Docker",
      "Linux",
      "Windows",
      "GitHub Actions",
      "GitLab",
    ],
    ai_ml: [
      "LLM / RAG Pipelines",
      "Knowledge Graphs",
      "Vector Search / Embeddings",
      "Hugging Face Transformers",
    ],
    coursework: [
      "Designing Data Structures",
      "Algorithm Design",
      "Operating Systems",
      "Advanced Computer Design",
      "Systems Software",
      "Artificial Intelligence and Data Engineering",
    ],
  },

  education: [
    {
      institution: "San Jose State University",
      degree: "Master of Science in Computer Engineering",
      location: "San Jose, CA, USA",
      date: "Expected May 2026",
    },
    {
      institution: "Vishwakarma Institute of Technology",
      degree:
        "Bachelor of Technology in Electronics and Telecommunications Engineering",
      location: "Pune, India",
      date: "May 2023",
    },
  ],
};