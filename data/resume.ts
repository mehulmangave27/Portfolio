export const resumeData = {
  basics: {
    name: "Mehul Mangave",
    label: "Cloud & AI Engineer",
    email: "mehul.mangave@sjsu.edu",
    secondary_email: "mehulmangave@gmail.com",
    phone: "+1 (408) 210-8953",
    location: "San Jose, CA",
    summary:
      "M.S. Computer Engineering from San Jose State University with 2+ years of production experience at State Street and Syngenta. I migrate cloud estates to Terraform, cut AWS spend at scale, and build RAG and knowledge-graph systems on top of the infrastructure. Actively seeking full-time Cloud & AI Engineering roles.",
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
      metric: "$500k / yr",
      description: "Cloud cost savings architected at Syngenta",
    },
    {
      metric: "60%+",
      description: "Manual effort cut via Terraform automation at State Street",
    },
    {
      metric: "100+",
      description: "AWS accounts migrated to Terraform Cloud at Syngenta",
    },
  ],

  experience: [
    {
      company: "State Street Bank and Trust",
      role: "Cloud & AI Infrastructure Engineer Intern",
      location: "Boston, US",
      dates: "June 2025 – Aug 2025",
      bullets: [
        "Built a production RAG system over internal Confluence documentation with Python backend APIs, giving engineers self-serve answers and cutting repeat support questions to the platform team.",
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
        "Migrated 100+ AWS accounts to Terraform Cloud, replacing manual provisioning with version-controlled IaC that eliminated configuration drift and gave every team a consistent, auditable, Git-reviewed deployment path.",
        "Cut $500K in annual AWS spend by rightsizing over-provisioned EC2 and RDS instances, scheduling non-production environments to power down outside business hours, and decommissioning idle volumes, snapshots, and load balancers.",
        "Built reusable Terraform modules and CI/CD deployment pipelines that cut deployment time 40% and sustained 99.9% uptime for 10,000+ users, letting application teams ship low-latency services without provisioning infrastructure by hand.",
        "Implemented Sentinel policy-as-code across AWS and GCP in Terraform Cloud, automating compliance and security checks at plan time to block non-compliant resources before deployment and reducing manual review effort by 70%.",
        "Migrated DynamoDB tables across AWS accounts using on-demand backup and restore, validating record counts and throughput configuration after cutover to complete the transition with zero data loss and minimal downtime.",
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

  terraform_modules: [
    {
      name: "ec2-terraform-module",
      description:
        "Reusable Terraform module to provision and configure AWS EC2 instances with sane, parameterized defaults.",
      url: "https://github.com/mehulmangave27/ec2-terraform-module",
    },
    {
      name: "rds-terraform-module",
      description:
        "Reusable Terraform module for provisioning managed AWS RDS databases with configurable engine, sizing, and networking.",
      url: "https://github.com/mehulmangave27/rds-terraform-module",
    },
  ],

  projects: [
    {
      title: "Magpie — Ambient Study Agent",
      dates: "Hackathon · 2026",
      award: "1st Prize — Most Innovative Use of Agents · Harness Engineering Hack",
      link: "https://github.com/shantanujoshi25/magpie",
      featured: true,
      stack: ["Guild.ai Agents", "ClickHouse", "Next.js", "OpenUI", "Python"],
      bullets: [
        "Built an ambient study tool that watches the system clipboard and treats every copy as an implicit highlight — snippets are classified into topic notebooks, streamed to ClickHouse, and surfaced on a live dashboard with summaries and a chat assistant.",
        "Designed the system as four composed, single-purpose Guild.ai agents (classify, summarize, re-file, chat) kept pure as text-in/text-out, with all database access isolated to the watcher and API routes.",
        "Hardened the demo with a non-blocking capture queue, server-side validation and deterministic fallback for malformed LLM output, and scoped ALTER TABLE mutations so the dashboard never breaks on a bad agent response.",
      ],
    },
    {
      title: "Dynamic Weight Learning for Self-RAG",
      dates: "Aug 2025 – Dec 2025 · Team of 2",
      link: "https://github.com/sp1ffygeek/dynamic_weight_learning_for_self-rag",
      stack: ["Python", "PyTorch", "LLM", "RAG"],
      bullets: [
        "Built a dynamic weighting framework for Self-RAG pipelines that re-ranks and adaptively weights retrieved passages by query relevance, replacing static weighting that treated all retrieved documents equally regardless of context.",
        "Implemented adaptive scoring in Python and PyTorch across 1,000+ query evaluations, improving response accuracy and relevance by ~18% while keeping inference overhead low through optimized retrieval scoring logic.",
      ],
    },
    {
      title: "Omnireasoner: Knowledge Graph Reasoning System",
      dates: "Aug 2025 – Mar 2026 · Team of 4",
      link: "https://github.com/SmithaKedila/KG-TRACES",
      stack: ["Knowledge Graphs", "LLMs", "Graph Traversal"],
      bullets: [
        "Built a knowledge-graph-augmented reasoning pipeline combining graph traversal with LLM prompting over a 10K+ entity graph, improving factual consistency on complex multi-hop question answering.",
        "Generated interpretable reasoning paths through entity linking and graph traversal, reducing hallucinated responses by ~15% in evaluation by grounding answers in retrieved graph relations rather than model priors.",
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
    languages: ["Python", "C/C++", "Java", "Bash", "SQL", "Go"],
    cloud: [
      "AWS (EC2, S3, RDS, DynamoDB, Lambda, ECS/ECR, API Gateway, ELB)",
      "GCP",
      "Azure",
      "Kubernetes",
      "Docker",
    ],
    iac: [
      "Terraform",
      "Terraform Cloud",
      "Sentinel (Policy-as-Code)",
      "CloudWatch",
      "Prometheus",
      "Grafana",
    ],
    ai_ml: [
      "RAG Pipelines",
      "Vector Embeddings",
      "Knowledge Graphs",
      "AWS Bedrock",
      "Vertex AI",
      "PyTorch",
      "TensorFlow",
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
      date: "May 2026",
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