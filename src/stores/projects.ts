interface ProjectDetail {
  slug: string;
  title: string;
  description: string;
  image: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: string[];
  link: string;
  customers: string[];
}

export const projects: ProjectDetail[] = [
  {
    slug: "waveview",
    title: "WaveView",
    description:
      "A web-based seismic waveform visualization and analysis platform designed for real-time monitoring and research collaboration.",
    image:
      "https://sukmatechid-public.s3.ap-southeast-1.amazonaws.com/waveview.png",
    problem:
      "Seismologists and volcano monitoring teams needed a modern, real-time tool to visualize and analyze seismic waveforms efficiently. Traditional desktop applications were limited in accessibility and collaboration features.",
    solution:
      "We developed WaveView, a comprehensive web application that provides real-time seismic waveform visualization with advanced picking tools, event management, and signal analysis capabilities. The platform enables researchers to collaborate remotely and access data from anywhere.",
    technologies: [
      "Django",
      "TimescaleDB",
      "RabbitMQ",
      "Redis",
      "React",
      "TypeScript",
      "WebGL",
      "Node.js",
      "WebSocket",
    ],
    results: [
      "Real-time waveform visualization with millisecond precision",
      "Advanced signal processing and analysis tools",
      "Collaborative features for remote teams",
      "Improved volcano monitoring dramatically",
    ],
    link: "https://github.com/bpptkg/waveview",
    customers: [
      "Balai Penyelidikan dan Pengembangan Teknologi Kebencanaan Geologi (BPPTKG)",
    ],
  },

  {
    slug: "davis",
    title: "Davis",
    description:
      "A comprehensive web application providing charts and analytics for Merapi Volcano monitoring data.",
    image:
      "https://sukmatechid-public.s3.ap-southeast-1.amazonaws.com/davis.png",
    problem:
      "Volcano monitoring teams needed an accessible way to visualize and analyze complex monitoring data from multiple sources. Traditional methods made it difficult to identify patterns and trends quickly.",
    solution:
      "We developed Davis, a data visualization platform that transforms raw monitoring data into interactive charts and analytics. The application provides real-time insights into volcanic activity, helping teams make informed decisions faster.",
    technologies: [
      "Django",
      "Python",
      "MySQL",
      "Vue.js",
      "ECharts.js",
      "Bootstrap",
    ],
    results: [
      "Interactive data visualization for multiple monitoring parameters",
      "Real-time analytics and trend analysis",
      "Faster identification of volcanic activity patterns",
      "Improved decision-making for hazard assessment",
    ],
    link: "https://cendana15.com/display-device/",
    customers: [
      "Balai Penyelidikan dan Pengembangan Teknologi Kebencanaan Geologi (BPPTKG)",
    ],
  },
  {
    slug: "bma",
    title: "BMA",
    description:
      "Web services providing API endpoints to query Merapi monitoring data including seismicity, deformations, geochemistry, and weather.",
    image: "https://sukmatechid-public.s3.ap-southeast-1.amazonaws.com/bma.png",
    problem:
      "BPPTKG faced challenges with maintaining and scaling existing applications against growing features and data volumes. The lack of consistent application interfaces meant repetitive code for every application accessing the databases. Quick data analysis and integration with other systems were difficult without a unified API layer.",
    solution:
      "We developed BMA as a comprehensive web service that provides API endpoints to query a wide range of Merapi monitoring data. BMA serves as a database abstraction layer that maps existing database models, manages authentication, and handles requests. The API-based architecture enables easy data querying, metric calculations, and application development. BMA powers multiple applications including Davis (Data Visualization System) and ChartStudio (Chart generation service).",
    technologies: [
      "Django",
      "Django REST Framework",
      "MySQL",
      "Redis",
      "Celery",
    ],
    results: [
      "Unified API layer for all monitoring data sources",
      "Eliminated code repetition across applications",
      "Enabled rapid development of data-driven applications",
      "Scalable architecture supporting growing data volumes",
      "Foundation for integrated monitoring infrastructure",
    ],
    link: "https://bma.cendana15.com/",
    customers: [
      "Balai Penyelidikan dan Pengembangan Teknologi Kebencanaan Geologi (BPPTKG)",
    ],
  },
  {
    slug: "chart-studio",
    title: "Chart Studio",
    description:
      "A modern web application for creating interactive monitoring data visualizations with support for multiple data sources and customizable chart configurations.",
    image:
      "https://sukmatechid-public.s3.ap-southeast-1.amazonaws.com/chart-studio.png",
    problem:
      "Scientists and monitoring teams needed a flexible tool to visualize and correlate multiple monitoring parameters across the same time range. Existing visualization tools lacked the flexibility to dynamically configure chart series, combine different data types, and automatically update visualizations based on user interactions.",
    solution:
      "We built Chart Studio using TypeScript, Vite.js, and Vue.js with a modular architecture consisting of three major components: chart models (defining series configurations and data types for fields like seismicity, GPS, tiltmeter, weather), renderer (converting models to ECharts UI), and data source (fetching data from BMA API). The app uses a subplot pattern enabling users to correlate multiple data parameters. When users add/remove series or modify time ranges, the app automatically reprocesses models, fetches data, and updates visualizations.",
    technologies: [
      "Vue.js",
      "TypeScript",
      "Vite.js",
      "ECharts",
      "REST API",
      "Pinia",
    ],
    results: [
      "Dynamic chart configuration with real-time updates",
      "Correlation analysis through subplot patterns",
      "Automated data fetching and visualization pipeline",
      "Modular architecture supporting multiple renderers",
      "Improved data analysis workflow efficiency",
    ],
    link: "https://cendana15.com/chart-studio/",
    customers: [
      "Balai Penyelidikan dan Pengembangan Teknologi Kebencanaan Geologi (BPPTKG)",
    ],
  },
  {
    slug: "eqline",
    title: "EQLine (Product Quality Smart Apps)",
    description:
      "A comprehensive web application designed to streamline the management of product testing at PT Astra Honda Motor.",
    image:
      "https://sukmatechid-public.s3.ap-southeast-1.amazonaws.com/eqline.png",
    problem:
      "PT Astra Honda Motor needed an efficient system to manage the entire workflow of product testing. Manual processes for creating tests, assigning them to users, tracking completion, and compiling results were time-consuming, error-prone, and lacked centralized oversight. This inefficiency hindered the ability to maintain quality standards and meet testing schedules.",
    solution:
      "We developed EQLine, a comprehensive web application that automates the entire product testing workflow. The system enables test creation, user assignment, progress tracking, and automated result compilation and presentation. By digitizing and centralizing the process, EQLine enhances efficiency, accuracy, and provides real-time visibility into testing operations.",
    technologies: [
      "Django",
      "TimeScaleDB",
      "RabbitMQ",
      "Redis",
      "Celery",
      "Python",
      "Node.js",
      "JavaScript",
      "Vue.js",
      "Vuetify",
    ],
    results: [
      "Streamlined product testing workflow from creation to completion",
      "Automated test assignment and tracking system",
      "Real-time visibility into test progress and results",
      "Improved accuracy in test result compilation",
      "Enhanced operational efficiency in quality testing",
    ],
    link: "",
    customers: ["Astra Honda Motor"],
  },
  {
    slug: "strain-data-analyzer",
    title: "Strain Data Analyzer",
    description:
      "Desktop application designed for comprehensive strain data analysis in automotive engineering.",
    image:
      "https://sukmatechid-public.s3.ap-southeast-1.amazonaws.com/sda.jpeg",
    problem:
      "Engineers at Astra Honda Motor faced challenges analyzing large volumes of strain data from various tests. Manual analysis was slow and made it difficult to identify critical stress points.",
    solution:
      "We developed Strain Data Analyzer, a specialized desktop application that processes and analyzes strain data efficiently. The tool provides advanced visualization, statistical analysis, and automated reporting to help engineers identify potential failure points quickly.",
    technologies: ["Python", "PyQt", "NumPy", "SciPy", "Matplotlib"],
    results: [
      "Fast processing of large strain data sets",
      "Advanced visualization and analysis tools",
      "Automated identification of critical stress points",
      "Improved engineering decision-making speed by 50%",
    ],
    link: "",
    customers: ["Astra Honda Motor"],
  },
  {
    slug: "open-source-libraries",
    title: "Open Source Libraries",
    description: "Collection of open source packages.",
    image: "https://sukmatechid-public.s3.ap-southeast-1.amazonaws.com/gh.png",
    problem:
      "The need to contribute to the open source community by developing and publishing a suite of Python libraries addressing specific needs.",
    solution:
      "We contributed to the open source community by developing and publishing a suite of Python libraries addressing specific needs such as fins-driver for PLC communication.",
    technologies: ["Python", "PyPI", "GitHub Actions"],
    results: [
      "Published 9+ packages on Python Package Index",
      "Accelerated development time for related projects",
      "Community adoption and contributions",
      "Improved code quality through reusability",
    ],
    link: "https://github.com/sukmatechid",
    customers: ["Open Source Community"],
  },
];
