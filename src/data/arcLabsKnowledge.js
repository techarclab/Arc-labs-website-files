const CONTACT = {
  phones: ["+91 78158 09412", "+91 40 3565 9806"],
  whatsapp: "+91 86999 29532",
  emails: ["hello@arclabs.in", "sales@arclabs.in"],
  city: "Hyderabad, Telangana, India",
  primaryAddress:
    "PLOTNO : 1EP, BRINDAVAN MEADOWS, SAHEBNAGAR KALAN, Hyderabad - 500007",
  csrOffice: "4-7-138/1, Narendra Nagar, Habsiguda, Hyderabad - 500007",
};

const SITE_LINKS = {
  home: { label: "Home", to: "/" },
  programs: { label: "Programs", to: "/programs" },
  products: { label: "Products", to: "/products" },
  labs: { label: "Lab Packages", to: "/lab-packages" },
  csr: { label: "CSR Partners", to: "/csr-partners" },
  industrial: { label: "Industrial IoT", to: "/industrial-iot-solutions" },
  verify: { label: "Verify Certificate", to: "/verify" },
  checkout: { label: "Checkout", to: "/checkout" },
};

const PRODUCTS = [
  {
    id: "essential",
    name: "ARC LABS IoT Essential Kit",
    aliases: ["essential", "basic", "starter kit", "low cost", "cheap"],
    price: 10000,
    bestFor: "school students, beginners, IoT basics, and training labs",
    summary:
      "Affordable starter kit for basic IoT and embedded learning with Arduino UNO, ESP32, DHT11, ultrasonic, LDR, IR sensor, OLED display, RGB LED, buzzer, relay, buttons, GPIO, UART, I2C, SPI, 5V and 3.3V rails.",
  },
  {
    id: "lite",
    name: "ARC LABS IoT Lite Kit",
    aliases: ["lite", "beginner", "school kit"],
    price: 15000,
    bestFor:
      "Classes 9-12, engineering year 1, beginners, hobbyists, and academic labs",
    summary:
      "Compact beginner-friendly IoT board with Arduino UNO, ESP32, DHT11, ultrasonic, IR, touch, LDR, MQ gas sensor, potentiometer, OLED, RGB LEDs, buzzer, dual relays, power rails, screw terminals, and GPIO breakouts.",
  },
  {
    id: "experience",
    name: "ARC LABS IoT Experience Kit",
    aliases: ["experience", "flagship", "best seller", "best kit", "multi mcu"],
    price: 20000,
    bestFor:
      "engineering year 1-3, IoT professionals, R&D labs, institutions, and training programs",
    summary:
      "Flagship all-in-one multi-MCU trainer supporting Arduino, ESP32, STM32, Raspberry Pi Pico, Raspberry Pi 4/5, LoRa, GSM/4G, RS485, sensors, TFT display, relays, servo port, cloud IoT, smart home, industrial monitoring, and AIoT projects.",
  },
  {
    id: "pro",
    name: "ARC LABS IoT Pro Kit",
    aliases: ["pro", "advanced", "raspberry pi", "edge ai", "research"],
    price: 25000,
    bestFor:
      "engineering year 3-4, postgraduate students, researchers, R&D teams, IoT professionals, and product developers",
    summary:
      "Advanced Raspberry Pi 4 and ESP32 platform for edge AI, AIoT, sensor fusion, environmental monitoring, wireless data logging, industrial training, research projects, and product development.",
  },
];

const PROGRAMS = [
  {
    id: "iot",
    name: "Internet of Things",
    abbr: "IoT",
    aliases: ["iot", "internet of things"],
    summary:
      "Students connect physical devices to the internet and build smart systems that sense, communicate, and respond in real time.",
    tools: "ESP32, sensors, Wi-Fi, MQTT, cloud dashboards, automation projects",
  },
  {
    id: "embedded",
    name: "Embedded Systems",
    abbr: "Embedded",
    aliases: ["embedded", "firmware", "microcontroller", "stm32", "arduino"],
    summary:
      "Students program microcontrollers at hardware level, control peripherals, and build real-time firmware systems.",
    tools: "C/C++, GPIO, UART, I2C, SPI, FreeRTOS, STM32, Arduino, ESP32",
  },
  {
    id: "iiot",
    name: "Industrial IoT",
    abbr: "IIoT",
    aliases: ["iiot", "industrial iot", "factory", "scada", "plc"],
    summary:
      "Factory-floor IoT training covering PLCs, SCADA, Modbus, OPC-UA, dashboards, analytics, and predictive maintenance.",
    tools: "PLC basics, Modbus, OPC-UA, SCADA, RS485, industrial sensors",
  },
  {
    id: "robotics",
    name: "Robotics",
    abbr: "Robotics",
    aliases: ["robotics", "robot", "line follower", "obstacle"],
    summary:
      "Students build robots that move, sense, and act using motors, sensors, path planning, and autonomous behavior.",
    tools: "Arduino, motor drivers, servo control, obstacle avoidance, line following",
  },
  {
    id: "iort",
    name: "IoT and Robotics",
    abbr: "IoRT",
    aliases: ["iort", "internet of robotic things", "cloud robot", "robotic things"],
    summary:
      "Connected robotics training where robots send telemetry, receive remote commands, and coordinate through cloud systems.",
    tools: "ROS basics, MQTT for robots, telemetry, web control, cloud robot logic",
  },
  {
    id: "aiot",
    name: "Artificial Intelligence of Things",
    abbr: "AIoT",
    aliases: ["aiot", "tinyml", "edge ai", "ai of things"],
    summary:
      "AI models running on IoT hardware for TinyML, edge inference, anomaly detection, and intelligent sensing.",
    tools: "TinyML, Edge Impulse, TensorFlow Lite, Raspberry Pi AI, anomaly detection",
  },
  {
    id: "aiort",
    name: "AI + IoT and Robotics",
    abbr: "AIoRT",
    aliases: ["aiort", "ai robotic", "ai robotics", "vision robot"],
    summary:
      "AI-powered connected robots with perception, decision-making, cloud intelligence, and vision-guided control.",
    tools: "YOLO, ROS2, vision-guided robots, MoveIt, cloud AI, decision AI",
  },
  {
    id: "advanced-iot",
    name: "Advanced IoT",
    abbr: "Adv. IoT",
    aliases: ["advanced iot", "enterprise iot", "digital twin", "lorawan", "mesh"],
    summary:
      "Production IoT engineering for scale, mesh networks, LoRaWAN, digital twins, cloud-native architecture, security, and IoT operations.",
    tools: "LoRaWAN, digital twins, InfluxDB, Kafka, IoT DevOps, zero trust",
  },
  {
    id: "drone",
    name: "Drone Technology",
    abbr: "UAV",
    aliases: ["drone", "uav", "flight", "gps"],
    summary:
      "Drone training for flight control, GPS navigation, aerial applications, computer vision, and autonomous drone systems.",
    tools: "flight controllers, GPS, autonomous navigation, computer vision",
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    abbr: "AI",
    aliases: ["ai", "artificial intelligence", "machine learning", "ml", "deep learning"],
    summary:
      "AI training covering machine learning, deep learning, computer vision, NLP, data handling, and real-world AI applications.",
    tools: "ML models, deep learning, computer vision, NLP, capstone projects",
  },
];

const SCHOOL_PACKAGES = [
  {
    name: "Starter Lab",
    price: "Rs.2.5L",
    summary:
      "IoT Lite Kit x 10, NEP 2020 Level 1 curriculum, 2-day teacher training, lab branding, installation, 6-month support, student workbooks, basic STEM modules, and mini project demos.",
  },
  {
    name: "Standard Lab",
    price: "Rs.5L",
    summary:
      "IoT Pro Kit x 15, Robotics Starter Kit x 10, Level 1 and 2 curriculum, 3-day teacher certification, installation, annual updates, assessment portal, cloud access, and project showcase access.",
  },
  {
    name: "Premier IoT and Robotics Lab",
    price: "Rs.10L+",
    summary:
      "Custom IoT, Robotics, and AI lab with Pro and Experience kits, advanced robotics, TinyML and Edge AI modules, 90-session curriculum, 5-day faculty certification, 3-year support SLA, CSR reporting, and competition prep.",
  },
];

const COLLEGE_PACKAGES = [
  {
    name: "Essential IoT Lab",
    price: "Rs.4L",
    summary:
      "IoT Experience Kit x 20, IoT fundamentals lab manual, 20 syllabus-mapped experiments, 2-day faculty training, 1-year support, and printed plus digital experiment manuals.",
  },
  {
    name: "Advanced IoT and Embedded Lab",
    price: "Rs.8L",
    summary:
      "IoT Pro Kit x 20 plus Experience Kit x 20, manuals for IoT, Embedded Systems, and IIoT, 60 experiments, 5-day faculty training, student portal, 2-year support, NBA/NAAC documentation, and cloud license.",
  },
  {
    name: "R&D Innovation Lab",
    price: "Rs.15L+",
    summary:
      "Complete hardware stack, advanced robotics and ROS setup, AIoT research platform, research-grade manuals, 5-day expert training, 3-year premium SLA, AICTE/RUSA grant support, industry connect, and student mentoring.",
  },
];

const INDUSTRIAL_SOLUTIONS = [
  "Real-time machine monitoring",
  "Predictive maintenance systems",
  "Smart energy monitoring",
  "Industrial telemetry systems",
  "AI-based CCTV safety monitoring",
  "Edge AI infrastructure",
  "Remote asset monitoring",
  "Smart sensor networks",
  "Industrial dashboard systems",
  "Cloud and edge IoT integration",
  "Smart dustbin telemetry",
  "Water tank level and valve control",
  "Cold storage temperature monitoring",
  "Warehouse asset tracking",
];

const INDUSTRIAL_STACK = [
  "ESP32",
  "STM32",
  "Raspberry Pi gateways",
  "NVIDIA Jetson edge AI",
  "MQTT",
  "Modbus TCP/RTU",
  "OPC-UA",
  "LoRaWAN",
  "BLE",
  "GSM/4G",
  "Node-RED",
  "AWS IoT Core",
  "TensorFlow Lite",
  "PLC mapping",
];

const SITE_PAGES = [
  "Home: company overview, services, stats, products preview, packages, CSR, testimonials, FAQ, and contact.",
  "Products: IoT Essential, Lite, Experience, and Pro kits with specs, prices, use cases, included items, and comparison.",
  "Programs: 10 training tracks with 2-day, 3-day, and 5-day curriculum formats.",
  "Lab Packages: school and college lab packages, pricing, hardware, curriculum, support, and implementation timeline.",
  "CSR Partners: CSR impact model, Schedule VII alignment, partnership tiers, reporting documents, and contact.",
  "Industrial IoT: factory, city, agriculture, water, logistics, energy, dashboard, protocol, cloud, and edge AI solutions.",
  "Verify Certificate: certificate verification and registration using ARC LABS certificate IDs.",
  "Checkout: product checkout for kit orders with delivery details and payment flow.",
];

const CONTACT_TEXT = `You can reach ARC LABS through:
- Phone: ${CONTACT.phones.join(", ")}
- WhatsApp: ${CONTACT.whatsapp}
- Email: ${CONTACT.emails.join(", ")}
- Location: ${CONTACT.city}
- Main address: ${CONTACT.primaryAddress}
- CSR office listed on the CSR page: ${CONTACT.csrOffice}`;

const normalize = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9+.\s/-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const hasAny = (question, words) =>
  words.some((word) => question.includes(normalize(word)));

const formatProduct = (product) =>
  `${product.name}: Rs.${product.price.toLocaleString("en-IN")} approx. Best for ${product.bestFor}. ${product.summary}`;

const packageLine = (item) => `${item.name} (${item.price}): ${item.summary}`;

function findProduct(question) {
  return PRODUCTS.find((product) =>
    product.aliases.some((alias) => question.includes(normalize(alias)))
  );
}

function findProgram(question) {
  return PROGRAMS.find((program) =>
    program.aliases.some((alias) => {
      const normalizedAlias = normalize(alias);
      return (
        question === normalizedAlias ||
        question.includes(` ${normalizedAlias} `) ||
        question.startsWith(`${normalizedAlias} `) ||
        question.endsWith(` ${normalizedAlias}`) ||
        question.includes(normalizedAlias)
      );
    })
  );
}

function baseSuggestions() {
  return [
    "Show all lab packages",
    "Compare IoT kits",
    "Which programs are for colleges?",
  ];
}

function makeAnswer(text, options = {}) {
  return {
    text,
    suggestions: options.suggestions || baseSuggestions(),
    links: options.links || [],
  };
}

function overviewAnswer() {
  return makeAnswer(
    [
      "ARC LABS is a Hyderabad-based STEM, AI, IoT, Robotics, and Industrial IoT company.",
      "",
      "What ARC LABS does:",
      "- Sets up AI, IoT, Robotics, IoRT, and STEM labs for schools.",
      "- Provides college workshops, internships, faculty development, and certification programs.",
      "- Builds made-in-India IoT development kits and training boards.",
      "- Implements CSR-funded STEM labs with reporting and outcome tracking.",
      "- Delivers Industrial IoT solutions for factories, water systems, smart cities, logistics, energy, cold storage, and dashboards.",
      "- Supports installation, curriculum, teacher training, certification, manuals, code examples, and technical support.",
      "",
      "Site highlights: 25,000+ students upskilled, 1,000+ faculty trained, 500+ institutions/labs, 3,000+ sessions, MSME registered, Made in India.",
    ].join("\n"),
    {
      links: [SITE_LINKS.labs, SITE_LINKS.programs, SITE_LINKS.products],
      suggestions: ["What services do you offer?", "Show school lab setup", "Show Industrial IoT"],
    }
  );
}

function pagesAnswer() {
  return makeAnswer(
    ["Here is what I know from this website:", "", ...SITE_PAGES.map((item) => `- ${item}`)].join("\n"),
    {
      links: [
        SITE_LINKS.products,
        SITE_LINKS.programs,
        SITE_LINKS.labs,
        SITE_LINKS.csr,
        SITE_LINKS.industrial,
      ],
      suggestions: ["Summarize Arc Labs", "Show products", "Show CSR details"],
    }
  );
}

function productAnswer(question) {
  const product = findProduct(question);

  if (hasAny(question, ["compare", "difference", "which kit", "best kit", "all kits"])) {
    return makeAnswer(
      [
        "ARC LABS kit comparison:",
        "",
        "- Essential Kit - Rs.10,000: lowest-cost starter kit for basic IoT and embedded learning.",
        "- Lite Kit - Rs.15,000: best beginner classroom kit for schools, early college labs, and hobby learning.",
        "- Experience Kit - Rs.20,000: flagship multi-MCU trainer for serious academic labs and IoT training.",
        "- Pro Kit - Rs.25,000: advanced Raspberry Pi + ESP32 board for edge AI, research, and product development.",
        "",
        "My practical recommendation: Lite for beginners, Experience for most institutions, Pro for advanced AIoT or research labs.",
      ].join("\n"),
      {
        links: [SITE_LINKS.products, SITE_LINKS.checkout],
        suggestions: ["Tell me about Experience Kit", "Which kit for school?", "Which kit for research?"],
      }
    );
  }

  if (product) {
    return makeAnswer(formatProduct(product), {
      links: [SITE_LINKS.products],
      suggestions: ["Compare IoT kits", "Show lab packages", "How do I order?"],
    });
  }

  return makeAnswer(
    ["ARC LABS currently presents these product tiers:", "", ...PRODUCTS.map((item) => `- ${formatProduct(item)}`)].join("\n"),
    {
      links: [SITE_LINKS.products],
      suggestions: ["Which kit is best for beginners?", "Which kit is best for colleges?", "How do I order?"],
    }
  );
}

function programAnswer(question) {
  const program = findProgram(question);
  const duration =
    "Programs are available as 2-day workshops (14 hrs), 3-day intensives (21 hrs), and 5-day bootcamps (35 hrs).";

  if (program) {
    return makeAnswer(
      [
        `${program.abbr} - ${program.name}`,
        "",
        program.summary,
        `Tools and topics: ${program.tools}.`,
        duration,
        "",
        "Best next step: choose the track on the Programs page, then select 2, 3, or 5 days to view the full curriculum.",
      ].join("\n"),
      {
        links: [SITE_LINKS.programs],
        suggestions: ["Show all programs", "What is AIoT?", "College training details"],
      }
    );
  }

  return makeAnswer(
    [
      "ARC LABS training programs cover 10 tracks:",
      "",
      ...PROGRAMS.map((item) => `- ${item.abbr}: ${item.name}`),
      "",
      duration,
      "The programs are hands-on and suitable for schools, colleges, faculty development, internships, and corporate/CSR batches depending on the track.",
    ].join("\n"),
    {
      links: [SITE_LINKS.programs],
      suggestions: ["Explain IoT training", "Explain Robotics training", "Explain AI training"],
    }
  );
}

function packageAnswer(question) {
  const wantsCollege = hasAny(question, ["college", "engineering", "university", "nba", "naac", "research"]);
  const wantsSchool = hasAny(question, ["school", "class", "nep", "student", "teacher", "atl"]);

  if (wantsCollege && !wantsSchool) {
    return makeAnswer(
      ["College lab packages:", "", ...COLLEGE_PACKAGES.map(packageLine)].join("\n"),
      {
        links: [SITE_LINKS.labs, SITE_LINKS.programs],
        suggestions: ["Show school packages", "College training programs", "Contact for quote"],
      }
    );
  }

  if (wantsSchool && !wantsCollege) {
    return makeAnswer(
      ["School lab packages:", "", ...SCHOOL_PACKAGES.map(packageLine)].join("\n"),
      {
        links: [SITE_LINKS.labs],
        suggestions: ["Show college packages", "What teacher training is included?", "CSR funding details"],
      }
    );
  }

  return makeAnswer(
    [
      "ARC LABS has fixed school and college lab packages.",
      "",
      "School packages:",
      ...SCHOOL_PACKAGES.map((item) => `- ${item.name}: ${item.price}`),
      "",
      "College packages:",
      ...COLLEGE_PACKAGES.map((item) => `- ${item.name}: ${item.price}`),
      "",
      "Every lab package is designed around hardware, curriculum, installation, teacher/faculty training, support, and documentation.",
    ].join("\n"),
    {
      links: [SITE_LINKS.labs],
      suggestions: ["Show school package details", "Show college package details", "How long setup takes?"],
    }
  );
}

function schoolAnswer() {
  return makeAnswer(
    [
      "Yes. ARC LABS sets up AI, IoT, Robotics, IoRT, and STEM labs for schools.",
      "",
      "A school setup can include:",
      "- Hardware kits and ready-to-use lab boards.",
      "- NEP 2020 aligned curriculum for practical STEM learning.",
      "- Lab branding, installation, and classroom deployment.",
      "- Student workbooks, project worksheets, manuals, and examples.",
      "- Onsite teacher training and certification.",
      "- Support contract, visits, troubleshooting, and content updates.",
      "",
      "Packages start with Starter Lab at Rs.2.5L, Standard Lab at Rs.5L, and Premier IoT and Robotics Lab at Rs.10L+.",
    ].join("\n"),
    {
      links: [SITE_LINKS.labs],
      suggestions: ["Show school packages", "Teacher training details", "CSR funding details"],
    }
  );
}

function collegeAnswer() {
  return makeAnswer(
    [
      "For colleges, ARC LABS provides hands-on training, lab setup, faculty development, curriculum PDFs, certification, and project-based workshops.",
      "",
      "Main areas: IoT, Embedded Systems, Industrial IoT, Robotics, IoRT, AIoT, AIoRT, Advanced IoT, Drone Technology, and AI.",
      "Workshop formats: 2 days / 14 hrs, 3 days / 21 hrs, and 5 days / 35 hrs.",
      "",
      "College lab packages include Essential IoT Lab at Rs.4L, Advanced IoT and Embedded Lab at Rs.8L, and R&D Innovation Lab at Rs.15L+.",
    ].join("\n"),
    {
      links: [SITE_LINKS.programs, SITE_LINKS.labs],
      suggestions: ["Show all programs", "Show college packages", "Certificate details"],
    }
  );
}

function csrAnswer() {
  return makeAnswer(
    [
      "Yes. ARC LABS supports CSR-funded STEM, AI, IoT, and Robotics labs.",
      "",
      "CSR support includes:",
      "- Schedule VII education alignment.",
      "- Cost-per-beneficiary planning from about Rs.800 to Rs.2,000 per student.",
      "- Lab setup, teacher/faculty training, and certification.",
      "- Before/after documentation, attendance data, photos, videos, and reports.",
      "- Annual board-ready impact report and audit evidence package.",
      "- 3-year outcome tracking for long-term CSR programs.",
      "",
      "CSR tiers on the site: Silver Partner Rs.5L-15L/year, Gold Partner Rs.15L-50L/year, Platinum Partner Rs.50L+/year.",
    ].join("\n"),
    {
      links: [SITE_LINKS.csr, SITE_LINKS.labs],
      suggestions: ["CSR contact details", "School lab packages", "What reports are included?"],
    }
  );
}

function industrialAnswer() {
  return makeAnswer(
    [
      "ARC LABS also builds Industrial IoT and smart automation solutions.",
      "",
      "Solution areas:",
      ...INDUSTRIAL_SOLUTIONS.map((item) => `- ${item}`),
      "",
      `Typical stack: ${INDUSTRIAL_STACK.join(", ")}.`,
      "",
      "Deployment models include cloud deployment, on-premise systems, hybrid edge AI, offline systems, and remote telemetry over GSM/4G.",
    ].join("\n"),
    {
      links: [SITE_LINKS.industrial],
      suggestions: ["Factory monitoring details", "Predictive maintenance", "AWS IoT deployment"],
    }
  );
}

function certificationAnswer() {
  return makeAnswer(
    [
      "ARC LABS has a certificate verification page at /verify.",
      "",
      "What it does:",
      "- Lets users enter an ARC LABS Certificate ID.",
      "- Shows whether the certificate is authentic and active.",
      "- Displays certificate holder, institution, technology, duration, trainer, skills, grade, and status.",
      "- Supports certificate registration for new training records.",
      "",
      "Demo certificate IDs shown in the project include ARC4F2K, ARC7K9P, and ARCM3XQ.",
    ].join("\n"),
    {
      links: [SITE_LINKS.verify],
      suggestions: ["What programs give certificates?", "Show training programs", "Contact Arc Labs"],
    }
  );
}

function pricingAnswer() {
  return makeAnswer(
    [
      "Here is the pricing shown across the website:",
      "",
      "IoT kits:",
      ...PRODUCTS.map((item) => `- ${item.name}: Rs.${item.price.toLocaleString("en-IN")} approx.`),
      "",
      "School lab packages:",
      ...SCHOOL_PACKAGES.map((item) => `- ${item.name}: ${item.price}`),
      "",
      "College lab packages:",
      ...COLLEGE_PACKAGES.map((item) => `- ${item.name}: ${item.price}`),
      "",
      "CSR planning: about Rs.800-Rs.2,000 per direct beneficiary depending on scope and duration.",
    ].join("\n"),
    {
      links: [SITE_LINKS.products, SITE_LINKS.labs, SITE_LINKS.csr],
      suggestions: ["Which kit should I buy?", "Show school packages", "Show college packages"],
    }
  );
}

function supportAnswer() {
  return makeAnswer(
    [
      "ARC LABS support is not just product delivery. The site describes end-to-end implementation.",
      "",
      "Support can include:",
      "- Lab design, procurement, installation, branding, and commissioning.",
      "- Teacher or faculty training with certification.",
      "- Curriculum, manuals, code samples, workbooks, and experiment sheets.",
      "- Remote technical support, onsite visits, troubleshooting, and curriculum updates.",
      "- Warranty/replacement support depending on the package.",
      "- Annual impact reports for institutions and CSR partners.",
    ].join("\n"),
    {
      links: [SITE_LINKS.labs],
      suggestions: ["Teacher training details", "Installation timeline", "Contact Arc Labs"],
    }
  );
}

function contactAnswer() {
  return makeAnswer(CONTACT_TEXT, {
    links: [
      { label: "Call", href: "tel:+917815809412" },
      { label: "Email", href: "mailto:hello@arclabs.in" },
      { label: "WhatsApp", href: "https://wa.me/918699929532" },
    ],
    suggestions: ["I need a quote", "Book a school lab demo", "CSR partnership details"],
  });
}

function orderAnswer() {
  return makeAnswer(
    [
      "For kit orders, the site sends users through the Checkout page after selecting a product.",
      "",
      "The checkout flow collects name, email, phone, delivery address, city, region, and PIN/ZIP. It supports Razorpay payment options such as UPI, card, and netbanking, and generates order/invoice details.",
      "",
      "For institutional or bulk orders, it is better to contact ARC LABS directly so they can confirm quantity, GST, delivery, training, and support terms.",
    ].join("\n"),
    {
      links: [SITE_LINKS.products, SITE_LINKS.checkout],
      suggestions: ["Compare IoT kits", "Contact for bulk order", "Show product prices"],
    }
  );
}

function timelineAnswer() {
  return makeAnswer(
    [
      "The lab implementation timeline on the site is roughly:",
      "",
      "1. Initial call - Day 1.",
      "2. Proposal - Day 2 to 3.",
      "3. Agreement or purchase order - Day 5 to 7.",
      "4. Installation - Week 2 to 3.",
      "5. Teacher/faculty training - Week 3.",
      "6. Go live - Week 4.",
      "",
      "Exact timing depends on city, hardware quantity, customization, and school or college readiness.",
    ].join("\n"),
    {
      links: [SITE_LINKS.labs],
      suggestions: ["Show lab packages", "What is included?", "Contact Arc Labs"],
    }
  );
}

function fallbackAnswer(question) {
  const cards = [
    {
      keys: ["school", "teacher", "class", "nep", "lab"],
      answer: schoolAnswer,
    },
    {
      keys: ["college", "faculty", "workshop", "internship", "program"],
      answer: collegeAnswer,
    },
    {
      keys: ["kit", "product", "board", "sensor", "esp32", "raspberry"],
      answer: productAnswer,
    },
    {
      keys: ["csr", "beneficiary", "funding", "schedule vii", "impact"],
      answer: csrAnswer,
    },
    {
      keys: ["industrial", "factory", "mqtt", "modbus", "dashboard", "aws"],
      answer: industrialAnswer,
    },
  ];

  const match = cards.find((card) => hasAny(question, card.keys));
  if (match) return match.answer(question);

  return makeAnswer(
    [
      "I can answer from the ARC LABS website knowledge base.",
      "",
      "Ask me about:",
      "- What ARC LABS does.",
      "- School lab setup and teacher training.",
      "- College workshops, internships, and faculty development.",
      "- IoT kits, specs, prices, and recommendations.",
      "- Lab packages and implementation timeline.",
      "- CSR-funded STEM labs and impact reporting.",
      "- Industrial IoT solutions.",
      "- Certificate verification.",
      "- Contact, location, and ordering.",
    ].join("\n"),
    {
      links: [SITE_LINKS.home, SITE_LINKS.products, SITE_LINKS.programs, SITE_LINKS.labs],
      suggestions: ["What does Arc Labs do?", "Show all pages", "Contact Arc Labs"],
    }
  );
}

export function getArcLabsBotAnswer(rawQuestion) {
  const question = normalize(rawQuestion);

  if (!question) {
    return makeAnswer(
      "Tell me what you are looking for: school lab setup, college training, IoT kits, CSR labs, Industrial IoT, certification, pricing, or contact details.",
      {
        suggestions: baseSuggestions(),
      }
    );
  }

  if (hasAny(question, ["hi", "hello", "hey", "good morning", "good evening", "namaste"])) {
    return makeAnswer(
      "Hello. I am the ARC LABS site assistant. I can answer using the website's own knowledge about labs, kits, programs, CSR, Industrial IoT, certification, pricing, and contact details.",
      {
        suggestions: ["What does Arc Labs do?", "Show all pages", "Which kit is best?"],
      }
    );
  }

  if (hasAny(question, ["thank", "thanks", "ok", "okay"])) {
    return makeAnswer("Happy to help. Ask me anything else about ARC LABS, products, lab setup, CSR, or training.", {
      suggestions: ["Contact Arc Labs", "Show pricing", "Show programs"],
    });
  }

  if (hasAny(question, ["all pages", "full knowledge", "website knowledge", "site map", "what pages", "whole website"])) {
    return pagesAnswer();
  }

  if (hasAny(question, ["what does", "what is arc", "who is arc", "about arc", "about company", "company", "overview", "summarize"])) {
    return overviewAnswer();
  }

  if (hasAny(question, ["contact", "phone", "email", "call", "whatsapp", "address", "location", "where", "hyderabad", "office"])) {
    return contactAnswer();
  }

  if (hasAny(question, ["certificate", "certification", "verify", "certificate id", "registry"])) {
    return certificationAnswer();
  }

  if (hasAny(question, ["checkout", "order", "buy", "payment", "razorpay", "upi", "invoice", "bulk order"])) {
    return orderAnswer();
  }

  if (hasAny(question, ["timeline", "how long", "setup time", "installation time", "go live"])) {
    return timelineAnswer();
  }

  if (hasAny(question, ["price", "cost", "fee", "fees", "pricing", "budget", "quote", "quotation"])) {
    if (hasAny(question, ["kit", "product", "board", "esp32", "raspberry", "sensor"])) {
      return productAnswer(question);
    }
    if (hasAny(question, ["school", "college", "lab", "package", "csr"])) {
      return packageAnswer(question);
    }
    return pricingAnswer();
  }

  if (hasAny(question, ["csr", "corporate", "fund", "beneficiary", "impact", "schedule vii", "donation", "brsr"])) {
    return csrAnswer();
  }

  if (hasAny(question, ["industrial", "iiot", "factory", "automation", "modbus", "mqtt", "opc", "scada", "plc", "aws iot", "dashboard", "predictive maintenance", "water", "smart city", "dustbin", "energy", "cold storage"])) {
    return industrialAnswer();
  }

  if (hasAny(question, ["product", "kit", "board", "sensor", "esp32", "arduino", "raspberry", "pro kit", "lite kit", "experience kit", "essential kit", "basic kit", "which kit", "best kit", "compare"])) {
    return productAnswer(question);
  }

  if (hasAny(question, ["program", "training", "workshop", "course", "internship", "bootcamp", "faculty development", "fdp", "duration", "iot", "robotics", "embedded", "aiot", "aiort", "drone", "artificial intelligence", "machine learning"])) {
    return programAnswer(question);
  }

  if (hasAny(question, ["school", "classes", "class", "student", "teacher", "stem lab", "robotics lab", "ai lab", "nep", "atl"])) {
    return schoolAnswer();
  }

  if (hasAny(question, ["college", "engineering", "university", "faculty", "hod", "department", "nba", "naac"])) {
    return collegeAnswer();
  }

  if (hasAny(question, ["support", "installation", "curriculum", "manual", "warranty", "maintenance", "training after setup", "teacher training"])) {
    return supportAnswer();
  }

  if (hasAny(question, ["package", "packages", "lab setup", "starter lab", "standard lab", "premier lab", "innovation lab"])) {
    return packageAnswer(question);
  }

  return fallbackAnswer(question);
}

export const CHATBOT_SEED_MESSAGE = {
  role: "bot",
  text:
    "Hello, welcome to ARC LABS. I am your site-aware assistant. Ask me about what ARC LABS does, school or college labs, IoT kits, prices, programs, CSR, Industrial IoT, certification, or contact details.",
  suggestions: ["What does Arc Labs do?", "Show all pages", "Compare IoT kits"],
  links: [SITE_LINKS.labs, SITE_LINKS.products, SITE_LINKS.programs],
};

export const CHATBOT_QUICK_PROMPTS = [
  {
    label: "What ARC LABS does",
    icon: "bot",
    prompt: "What does Arc Labs do?",
  },
  {
    label: "All page knowledge",
    icon: "map",
    prompt: "Show all pages and full website knowledge",
  },
  {
    label: "Compare kits",
    icon: "layers",
    prompt: "Compare all IoT kits and recommend the best one",
  },
  {
    label: "CSR labs",
    icon: "rocket",
    prompt: "How does ARC LABS support CSR funded STEM labs?",
  },
];
