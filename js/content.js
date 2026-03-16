/**
 * content.js
 * Single source of truth for all website content — Die (Diane) Hu's academic CV.
 * Usage (HTML script tag):  <script src="js/content.js"></script>  → window.DIANE
 * Usage (ES module):        import DIANE from './js/content.js';
 *
 * Last updated: 2026-03-14
 */

const DIANE = {

  // ─────────────────────────────────────────────────────────────────────────────
  // META
  // ─────────────────────────────────────────────────────────────────────────────
  meta: {
    siteTitle: "Die (Diane) Hu | Geospatial Scientist",
    siteDescription:
      "PhD Candidate in Geography at UC Santa Barbara. Research in human mobility, " +
      "spatiotemporal modeling, GeoAI, and urban accessibility.",
    siteUrl: "",          // fill in when deployed
    lastUpdated: "March 2026",
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // HERO
  // ─────────────────────────────────────────────────────────────────────────────
  hero: {
    name: "Die (Diane) Hu",
    pronouns: "She / Her",
    title: "PhD Candidate in Geography",
    affiliation: "GeoTrans Lab · UC Santa Barbara",
    tagline: "Mapping Human Movement. Modeling Urban Futures.",
    brand:
      "Geospatial data scientist bridging human mobility, GeoAI, and urban systems " +
      "to make cities more accessible, equitable, and intelligently navigated.",
    location: "Santa Barbara, California",
    photo: "assets/img/diane-hu.jpg",   // placeholder path
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // ABOUT
  // ─────────────────────────────────────────────────────────────────────────────
  about: {
    paragraphs: [
      // Paragraph 1 — Origins & motivation
      "I grew up in Guizhou, one of China's most mountainous and least-connected provinces, " +
      "where the friction of distance was something you felt before you could name it. " +
      "That early awareness — of how geography shapes who can get where, and at what cost — " +
      "became the quiet engine behind everything I've studied since. " +
      "When a typhoon relief effort during my undergraduate years put me in the field alongside " +
      "communities navigating damaged roads and disrupted services, the question stopped being " +
      "abstract: spatial access is not a technical curiosity, it is a justice issue.",

      // Paragraph 2 — Research trajectory as intentional arc
      "My path through tourism geography, land resource management, ecological network science, " +
      "and now transportation mobility might look like a restless pivot from the outside. " +
      "From the inside, it has always been the same question asked at different scales and " +
      "with progressively sharper tools: how does spatial structure shape outcomes for people " +
      "and ecosystems? Each chapter added a methodological layer — DEA efficiency modeling, " +
      "circuit theory for landscape connectivity, remote sensing and InVEST for ecosystem " +
      "services, and now activity-space analysis and spatiotemporal modeling with national " +
      "travel survey data. The methods changed; the underlying systems-thinking did not.",

      // Paragraph 3 — Current work, team orientation, forward look
      "At UCSB's GeoTrans Lab, working with Prof. Konstantinos Goulias, I am developing " +
      "frameworks that link the full structure of a person's daily travel pattern — their " +
      "mobility motif — to what destinations they can realistically reach across different " +
      "urban and rural geographies in California. I care about the equity dimension of that " +
      "question as much as the modeling challenge. Outside the lab, I find energy in " +
      "collaboration: I have managed field teams, mentored junior researchers, and built " +
      "public-facing GIS tools for climate equity communication. Good research, I've learned, " +
      "is rarely a solo endeavor.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // EDUCATION
  // ─────────────────────────────────────────────────────────────────────────────
  education: [
    {
      id: "ucsb-phd",
      degree: "Ph.D., Geographic Information Science and Cartography",
      institution: "University of California, Santa Barbara (UCSB)",
      period: "2025 – 2029 (expected)",
      gpa: "4.0 / 4.0",
      advisor: "Prof. Konstantinos (Kostas) Goulias",
      lab: "GeoTrans Lab",
      department: "Department of Geography",
      highlights: [
        "Research focus: human mobility, spatiotemporal modeling, urban accessibility",
        "Dangermond Travel Award, 2026",
        "Teaching Assistant: GEOG 172 (Fall 2025), GEOG 111A (Winter 2026)",
      ],
    },
    {
      id: "fsu-phd-coursework",
      degree: "Ph.D. Coursework, Geography",
      institution: "Florida State University (FSU)",
      period: "Spring – Summer 2025",
      gpa: null,
      highlights: [
        "Teaching Assistant: GEA 1000 World Geography (Spring 2025)",
        "Literature review on spatial accessibility to Emergency Medical Services",
      ],
    },
    {
      id: "uncc-phd-coursework",
      degree: "Ph.D. Coursework, Infrastructure and Environmental Systems (INES)",
      institution: "UNC Charlotte (UNCC)",
      period: "2024 – 2025",
      gpa: "4.0 / 4.0",
      department: "Department of Civil and Environmental Engineering",
      role: "Graduate Research Assistant",
      lab: "Center for Applied GIScience (CAGIS)",
      highlights: [
        "Graduate Research Assistant under Prof. Wenwu Tang",
        "Conference Travel Scholarship ($1,100), 2024",
        "USDA and NCDOT federally funded project work",
      ],
    },
    {
      id: "cug-ms",
      degree: "M.S., Land Resource Management",
      institution: "China University of Geosciences (Wuhan) — CUG",
      period: "2020 – 2023",
      gpa: "3.54 / 4.0",
      thesis:
        "Construction and Evaluation of Wuhan Metropolitan Area Ecological Network Based on Circuit Theory",
      highlights: [
        "First-class Academic Scholarship for Graduates, 2020–2022",
        "National Grants for Graduates, 2020–2022",
        "Third Prize, 32nd CUG Scientific Paper Presentation, 2021",
        "Six concurrent national and provincial research projects",
      ],
    },
    {
      id: "hqu-bs",
      degree: "B.S., Human Geography and Urban and Rural Planning",
      institution: "Huaqiao University (HQU), Quanzhou",
      period: "2016 – 2020",
      gpa: "3.56 / 4.0",
      thesis:
        "Comparative Study of Tourism Efficiency and Its Spatiotemporal Evolution in Southwest China Based on DEA Model",
      highlights: [
        "National Encouragement Scholarship, 2017–2019 (three consecutive years)",
        "Published peer-reviewed journal paper as undergraduate",
        "Led National Student Innovation Program (PI), 2017–2018",
        "Vice President, Student Union, College of Tourism, 2018–2019",
      ],
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // RESEARCH INTERESTS
  // ─────────────────────────────────────────────────────────────────────────────
  researchInterests: [
    {
      label: "Human Mobility & Travel Behavior",
      icon: "mobility",
      description:
        "Activity-space analysis, daily mobility motifs, NHTS survey data, " +
        "travel demand modeling.",
    },
    {
      label: "GeoAI & Spatiotemporal Modeling",
      icon: "geoai",
      description:
        "Machine learning applied to spatial and temporal patterns, trajectory " +
        "classification, geospatial data science.",
    },
    {
      label: "Urban Accessibility & Equity",
      icon: "accessibility",
      description:
        "Destination-based and cumulative accessibility metrics, 2SFCA methods, " +
        "spatial and social disparities in transport access.",
    },
    {
      label: "Transportation Systems Analysis",
      icon: "transport",
      description:
        "Vehicle fleet composition, VMT modeling, transportation network " +
        "performance, sustainable mobility.",
    },
    {
      label: "Remote Sensing & Land Use",
      icon: "remote-sensing",
      description:
        "Multitemporal LULC change detection, Google Earth Engine, mangrove " +
        "mapping, ecological corridor analysis.",
    },
    {
      label: "Ecological Spatial Planning",
      icon: "ecology",
      description:
        "Landscape connectivity (circuit theory), MSPA, InVEST ecosystem " +
        "service valuation, territorial spatial planning.",
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // FEATURED PROJECTS  (5 flagship, shown prominently on website)
  // ─────────────────────────────────────────────────────────────────────────────
  featuredProjects: [
    {
      id: "mobility-motifs",
      title: "Mobility Motifs & Destination Accessibility in California",
      institution: "UCSB — GeoTrans Lab",
      period: "2025 – present",
      status: "ongoing",
      description:
        "Standard accessibility measures capture what people can reach but ignore " +
        "how the daily pattern of movement shapes that reach. " +
        "Using the 2017 NHTS California subsample, this project develops a " +
        "distance-informed framework that classifies daily travel sequences into " +
        "mobility motifs and links each motif to cumulative destination-based " +
        "accessibility, segmented by establishment-density context (urban, suburban, " +
        "exurban, rural). " +
        "Results reveal systematic motif–accessibility associations that vary " +
        "meaningfully across geographic settings, with implications for equitable " +
        "transportation planning.",
      output: "Oral presentation — AAG Annual Meeting, Minneapolis, MN, March 2026",
      tags: ["GeoAI", "Mobility", "NHTS", "Accessibility", "Equity"],
      featured: true,
    },
    {
      id: "vmt-fleet",
      title: "Household VMT & Vehicle Fleet Structures",
      institution: "UCSB — GeoTrans Lab",
      period: "2025 – present",
      status: "ongoing",
      description:
        "Household annual vehicle miles traveled (VMT) depends not just on how " +
        "much people drive, but on what they drive. " +
        "This study uses matched 2017 and 2022 NHTS datasets to analyze " +
        "correlations between VMT and household fleet composition, including vehicle " +
        "count, vehicle type mix, and fuel type (gasoline, hybrid, EV). " +
        "Findings quantify how fleet electrification and household structure jointly " +
        "influence travel-related energy demand.",
      output:
        "Accepted — 18th World Conference on Transport Research (WCTR), " +
        "Toulouse, France, July 2026",
      tags: ["Transportation", "Sustainability", "NHTS", "VMT", "Energy"],
      featured: true,
    },
    {
      id: "mangrove-dr",
      title: "USDA Mangrove Inventory — Dominican Republic",
      institution: "UNCC / CAGIS",
      period: "2024 – 2025",
      funding: "$49,773 (USDA Forest Service; PI: Prof. Wenwu Tang)",
      status: "completed",
      description:
        "Mangrove ecosystems in the Montecristi Wetlands experienced measurable " +
        "decline between 2013 and 2023, but high-resolution inventory data were " +
        "lacking for conservation planning. " +
        "This project integrated multi-source satellite imagery and field records " +
        "to map mangrove area extent and canopy height distribution using GEE and " +
        "ArcGIS, then designed a spatial optimization model to allocate inventory " +
        "plot locations for maximum coverage efficiency. " +
        "Products delivered directly to the USDA Forest Service for operational use.",
      output:
        "Presentation — SWAAG/AGX Annual Meeting, San Marcos, TX, October 2024",
      tags: ["Remote Sensing", "Conservation", "Federal", "GEE", "Spatial Optimization"],
      featured: true,
    },
    {
      id: "ncdot-deeppipe",
      title: "NCDOT DeepPipe: Underground Pipe Lifespan Prediction",
      institution: "UNCC / CAGIS",
      period: "2024 – 2025",
      funding: "$404,403 (NC Department of Transportation; PIs: Tang, Allan, Chen)",
      status: "completed",
      description:
        "Predicting underground pipe service life requires accurate soil property " +
        "data at the corridor scale — data that did not exist in usable form for " +
        "NCDOT's planning workflow. " +
        "This project created statewide soil maps by processing the gSSURGO " +
        "geodatabase and integrating spatial attributes critical to pipe corrosion " +
        "modeling, then converted the existing VBA-based PASS software analysis " +
        "pipeline to Python to improve maintainability and performance. " +
        "Deliverables were integrated into NCDOT's infrastructure assessment tools.",
      output: "Internal technical deliverable — NCDOT, 2025",
      tags: ["GIS", "Python", "Infrastructure", "Federal", "gSSURGO"],
      featured: true,
    },
    {
      id: "charlotte-atlas",
      title: "Charlotte Atlas of Climate Inequality & Community Resilience",
      institution: "UNCC",
      period: "2024 – 2025",
      status: "completed",
      description:
        "Communicating climate vulnerability data to policymakers and community " +
        "stakeholders requires interfaces that are both technically sound and " +
        "publicly navigable. " +
        "This project designed a reusable web GIS template using Esri Experience " +
        "Builder, integrating climate inequality and community resilience indicator " +
        "layers for Charlotte, NC, and delivered training for municipal staff on " +
        "extending the platform with additional map layers and metrics. " +
        "The template established a scalable framework for climate equity " +
        "communication across city departments.",
      output: "Public-facing web GIS platform delivered to UNCC and city partners",
      tags: ["WebGIS", "Climate Equity", "Urban", "Esri", "Community"],
      featured: true,
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // ALL PROJECTS  (complete list — remaining 9 non-featured projects)
  // ─────────────────────────────────────────────────────────────────────────────
  allProjects: [
    {
      id: "a2ems-review",
      title: "Literature Review on Accessibility to Emergency Medical Services (A2EMS)",
      institution: "Florida State University",
      period: "2025",
      status: "completed",
      description:
        "Gaps in spatial access to emergency medical services (EMS) are a documented " +
        "driver of preventable mortality, particularly in rural and low-income areas, " +
        "but no synthesis of GIS-based methods existed to guide future study design. " +
        "This systematic review synthesized 184 peer-reviewed references, mapping " +
        "methodological approaches including 2SFCA variants, network analysis, and " +
        "equity assessment frameworks, and characterizing temporal and urban–rural " +
        "dimensions of EMS accessibility research. " +
        "The review establishes a methodological baseline for original A2EMS " +
        "research and identifies priority gaps in the literature.",
      tags: ["Accessibility", "EMS", "Systematic Review", "2SFCA", "Equity"],
    },
    {
      id: "cug-land-evolution",
      title: "Urban Land Use Spatial Structure Evolution Mechanisms",
      institution: "China University of Geosciences (Wuhan)",
      period: "2022 – 2023",
      funding: "National Natural Science Foundation of China — Youth Program (PI: Assoc. Prof. Yang Jianxin)",
      status: "completed",
      description:
        "Understanding how urban land use structures evolve requires tracking both " +
        "the rate of land conversion and the resulting spatial configuration over time. " +
        "This project analyzed land transfer intensity using Markov chain transition " +
        "matrices and quantified landscape pattern change through Fragstats landscape " +
        "metrics (patch density, edge density, shape complexity) across study cities. " +
        "Results characterized the mechanisms driving spatial restructuring in " +
        "rapidly urbanizing Chinese metropolitan areas.",
      tags: ["Land Use", "Markov Chain", "Fragstats", "Urban", "China"],
    },
    {
      id: "cug-social-ecological",
      title: "Land Spatial Evolution of Central Cities: Social-Ecological Risk & Adaptive Governance",
      institution: "China University of Geosciences (Wuhan)",
      period: "2021 – 2022",
      funding: "National Natural Science Foundation of China (PI: Prof. Gong Jian)",
      status: "completed",
      description:
        "Rapid urbanization around Wuhan created measurable trade-offs between " +
        "land development and ecosystem service capacity that remained unquantified " +
        "at the metropolitan scale. " +
        "This project used the InVEST model to assess ecosystem service values " +
        "(carbon storage, habitat quality, water yield) and analyzed 30 years of " +
        "land use and land cover (LULC) change in Wuhan using supervised " +
        "classification of multi-temporal satellite imagery. " +
        "Findings informed adaptive governance recommendations for metropolitan " +
        "ecological protection zones.",
      tags: ["InVEST", "LULC", "Ecosystem Services", "Wuhan", "Remote Sensing"],
    },
    {
      id: "qinghai-datong",
      title: "Territorial Spatial Planning — Datong County, Qinghai Province",
      institution: "China University of Geosciences (Wuhan)",
      period: "2020 – 2022",
      funding: "PI: Prof. Gong Jian",
      status: "completed",
      description:
        "High-altitude counties in Qinghai face competing pressures between " +
        "development and ecological preservation across fragmented, sensitive " +
        "landscapes. " +
        "This project applied MSPA (Morphological Spatial Pattern Analysis) to " +
        "classify landscape elements and identify core ecological source areas, " +
        "then constructed an ecological security pattern using minimum cumulative " +
        "resistance and corridor extraction methods. " +
        "Outputs formed the ecological planning chapter of Datong County's " +
        "territorial spatial comprehensive remediation and restoration plan.",
      tags: ["MSPA", "Ecological Planning", "Qinghai", "Landscape Connectivity", "China"],
    },
    {
      id: "yunnan-shidian",
      title: "Territorial Spatial Planning — Shidian County, Yunnan Province",
      institution: "China University of Geosciences (Wuhan)",
      period: "2020 – 2022",
      funding: "PI: Prof. Gong Jian",
      status: "completed",
      description:
        "Township-level spatial planning in mountainous Yunnan required ground-truth " +
        "data that could only be collected through direct field engagement with " +
        "local communities and land administrators. " +
        "Following a one-month on-site residency across two townships, this project " +
        "processed geospatial data for both administrative units and designed " +
        "spatial development and protection patterns calibrated to local topography, " +
        "land use history, and economic development priorities. " +
        "Results were incorporated into Shidian County's official township " +
        "development plans.",
      tags: ["Spatial Planning", "Yunnan", "Field Research", "China", "Township"],
    },
    {
      id: "qinghai-golog",
      title: "Territorial Spatial Planning — Golog Tibetan Autonomous Prefecture, Qinghai",
      institution: "China University of Geosciences (Wuhan)",
      period: "2020 – 2022",
      funding: "PI: Prof. Gong Jian",
      status: "completed",
      description:
        "Golog Prefecture, a high-altitude Tibetan region with ecologically critical " +
        "grassland and wetland systems, required a regulatory framework to guide " +
        "how land use permissions and restrictions would be enforced across its " +
        "territorial spatial plan. " +
        "This project contributed to the planning implementation and regulatory " +
        "mechanism component, specifying land use control rules, zone-level " +
        "governance procedures, and monitoring requirements. " +
        "Deliverables supported Golog's submission to provincial planning authorities.",
      tags: ["Spatial Planning", "Qinghai", "Tibetan Plateau", "Land Governance", "China"],
    },
    {
      id: "ezhou-farmland",
      title: "Agricultural Land Grade & Benchmark Land Price Assessment — Ezhou City, Hubei",
      institution: "China University of Geosciences (Wuhan)",
      period: "2020 – 2021",
      funding: "PI: Prof. Gong Jian",
      status: "completed",
      description:
        "Establishing legally defensible benchmark land prices for collective " +
        "agricultural land in Ezhou required both remote sensing classification " +
        "and field-verified parcel data at scale. " +
        "This project coordinated a 20-person field survey team conducting " +
        "ground-truth verification of remote sensing image interpretation results " +
        "across rural Ezhou, then applied the income reduction method to calculate " +
        "land grade scores and benchmark prices by land use category. " +
        "Results were submitted to Hubei provincial land authorities as the " +
        "official assessment.",
      tags: ["Land Valuation", "Remote Sensing", "Field Survey", "Hubei", "China"],
    },
    {
      id: "hqu-tourism-talents",
      title: "Ten Thousand Tourism Talents Program — Civilized Tourism Promotion",
      institution: "Huaqiao University",
      period: "2018 – 2019",
      funding: "$1,100 (Ministry of Culture and Tourism, China)",
      status: "completed",
      description:
        "Mass tourism growth in China was generating documented behavioral problems " +
        "at heritage sites, requiring public education campaigns grounded in " +
        "on-site observation. " +
        "This project conducted field visits to tourism sites across Fujian Province " +
        "to document visitor behavior, developed a civilized tourism promotion " +
        "campaign through a WeChat public account, and produced visual communication " +
        "materials including informational posters distributed to partner sites. " +
        "The project was recognized under the Ministry of Culture and Tourism's " +
        "2018 national talent development initiative.",
      tags: ["Tourism", "Public Education", "Fujian", "Communication", "China"],
    },
    {
      id: "hqu-tourist-safety",
      title: "National Student Innovation Program — Foreign Tourist Safety in China",
      institution: "Huaqiao University",
      period: "2017 – 2018",
      funding: "National Student Innovation and Entrepreneurship Program",
      status: "completed",
      description:
        "Existing tourism safety frameworks were designed from an operator " +
        "perspective; this project asked how foreign visitors themselves perceived " +
        "and measured their sense of safety while traveling in China. " +
        "As principal investigator, the project designed bilingual (Chinese–English) " +
        "survey instruments, collected 363 valid responses across visitor populations, " +
        "and constructed a tourist safety perception measurement model using SPSS " +
        "multivariate statistical analysis. " +
        "Results were published in a peer-reviewed journal — an outcome unusual " +
        "for an undergraduate-led research program.",
      tags: ["Tourism Safety", "Survey Research", "SPSS", "Undergraduate Research", "Published"],
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // PUBLICATIONS
  // ─────────────────────────────────────────────────────────────────────────────
  publications: {
    journal: [
      {
        id: "j1",
        authors: "Hu, D., Zhu, Y., Lin, Y.T., et al.",
        year: 2019,
        title:
          "A study on the measurement of foreign tourists' sense of safety in " +
          "traveling to China and strategies for improvement",
        journal: "Contemporary Tourism",
        volume: "2019",
        issue: "3",
        pages: "70–75",
        language: "Chinese",
        note: "Published as undergraduate student; led as principal investigator",
      },
    ],
    conference: [
      {
        id: "c1",
        authors: "Goulias, K.G., Shi, H., Hu, D., Wu, Y., Lian, M.",
        authorPosition: "third",
        year: 2026,
        title:
          "What is the relationship between vehicle miles traveled and household " +
          "vehicle fleet structures and mix of fuel types?",
        venue:
          "18th World Conference on Transport Research (WCTR)",
        location: "Toulouse, France",
        date: "July 6–10, 2026",
        status: "accepted",
      },
      {
        id: "c2",
        authors: "Hu, D., Goulias, K.",
        authorPosition: "first",
        year: 2026,
        title:
          "How We Move, What We Reach: Distance-Informed Daily Mobility Motifs " +
          "and Destination Accessibility in California",
        venue: "AAG Annual Meeting",
        location: "Minneapolis, MN",
        date: "March 2026",
        status: "presented",
        presentationType: "oral",
      },
      {
        id: "c3",
        authors: "Hu, D., Tang, W.",
        authorPosition: "first",
        year: 2024,
        title:
          "Spatio-Temporal Analysis of Mangrove Decline in the Montecristi " +
          "Wetlands, Dominican Republic (2013–2023)",
        venue: "SWAAG/AGX Annual Meeting",
        location: "San Marcos, TX",
        date: "October 2024",
        status: "presented",
      },
      {
        id: "c4",
        authors: "Hu, D., Gong, J.",
        authorPosition: "first",
        year: 2021,
        title:
          "Coupled analysis of land use efficiency and ecological welfare " +
          "performance in Hubei Province from 2010 to 2019",
        venue: "32nd Graduate Science and Technology Forum",
        location: "China University of Geosciences (Wuhan)",
        date: "2021",
        status: "presented",
        award: "Third Prize",
      },
      {
        id: "c5",
        authors: "Hu, D., Lin, Y.T., et al.",
        authorPosition: "first",
        year: 2018,
        title: "Research on the Measurement of Foreign Tourists' Safety in China",
        venue: "National College Student Innovation and Entrepreneurship Program",
        location: "Huaqiao University",
        date: "2018",
        status: "presented",
      },
      {
        id: "c6",
        authors: "Hu, D., Su, S.Y., et al.",
        authorPosition: "first",
        year: 2018,
        title:
          "Landscape Planning and Design for the Quanzhou Campus Playground",
        venue: "5th Dream Building Cup Landscape Planning and Design Competition",
        location: "Huaqiao University",
        date: "2018",
        status: "presented",
        award: "Second Prize",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // TEACHING
  // ─────────────────────────────────────────────────────────────────────────────
  teaching: [
    {
      id: "t1",
      course: "GEOG 111A — Transportation Planning and Modeling",
      institution: "UC Santa Barbara",
      role: "Teaching Assistant",
      term: "Winter 2026",
    },
    {
      id: "t2",
      course: "GEOG 172 — Intermediate Geographic Data Analysis",
      institution: "UC Santa Barbara",
      role: "Teaching Assistant",
      term: "Fall 2025",
    },
    {
      id: "t3",
      course: "GEA 1000 — World Geography",
      institution: "Florida State University",
      role: "Teaching Assistant",
      term: "Spring 2025",
    },
    {
      id: "t4",
      course: "Human Geography and Urban–Rural Planning Department",
      institution: "Huaqiao University",
      role: "Teaching Assistant",
      term: "2018 – 2019",
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // AWARDS & HONORS
  // ─────────────────────────────────────────────────────────────────────────────
  awards: [
    {
      id: "a1",
      title: "Dangermond Travel Award",
      amount: "$600",
      institution: "UC Santa Barbara",
      year: 2026,
    },
    {
      id: "a2",
      title: "Conference Travel Scholarship",
      amount: "$1,100",
      institution: "UNC Charlotte",
      year: 2024,
    },
    {
      id: "a3",
      title: "Third Prize — 32nd Scientific Paper Presentation",
      amount: null,
      institution: "China University of Geosciences (Wuhan)",
      year: 2021,
    },
    {
      id: "a4",
      title: "First-class Academic Scholarship for Graduate Students",
      amount: null,
      institution: "China University of Geosciences (Wuhan)",
      year: "2020 – 2022",
    },
    {
      id: "a5",
      title: "National Grants for Graduate Students",
      amount: null,
      institution: "China University of Geosciences (Wuhan)",
      year: "2020 – 2022",
    },
    {
      id: "a6",
      title: "Second Prize — 26th Challenge Cup (挑战杯)",
      amount: null,
      institution: "Huaqiao University",
      year: 2019,
    },
    {
      id: "a7",
      title: "Second Prize — 5th Dream Building Cup (筑梦杯)",
      amount: null,
      institution: "Huaqiao University",
      year: 2018,
      note: "Landscape Planning and Design Competition",
    },
    {
      id: "a8",
      title: "National Encouragement Scholarship",
      amount: null,
      institution: "Huaqiao University",
      year: "2017 – 2019",
      note: "Three consecutive years",
    },
    {
      id: "a9",
      title: "National Grants for Undergraduate Students",
      amount: null,
      institution: "Huaqiao University",
      year: "2016 – 2019",
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // SKILLS
  // Tier 1: Core — repeatedly demonstrated, publication/deliverable backed
  // Tier 2: Supporting — used significantly in specific project contexts
  // Tier 3: Emerging — active development, early-stage evidence
  // ─────────────────────────────────────────────────────────────────────────────
  skills: {
    tier1: [
      { name: "ArcGIS (Desktop & Online)", category: "GIS" },
      { name: "QGIS", category: "GIS" },
      { name: "Python", category: "Programming" },
      { name: "R", category: "Programming" },
      { name: "Google Earth Engine (GEE)", category: "Remote Sensing" },
      { name: "SQL", category: "Programming" },
      { name: "Spatial Data Integration", category: "Methodology" },
      { name: "Survey Design & Analysis", category: "Methodology" },
    ],
    tier2: [
      { name: "ENVI", category: "Remote Sensing" },
      { name: "Fragstats", category: "Ecological Analysis" },
      { name: "InVEST", category: "Ecological Analysis" },
      { name: "MSPA", category: "Ecological Analysis" },
      { name: "SPSS", category: "Statistics" },
      { name: "AutoCAD", category: "Design" },
      { name: "HPC (High-Performance Computing)", category: "Infrastructure" },
      { name: "Jupyter Notebook", category: "Infrastructure" },
    ],
    tier3: [
      { name: "GeoAI / Spatiotemporal ML", category: "Emerging" },
      { name: "CPLEX (Optimization)", category: "Emerging" },
      { name: "Adobe Illustrator", category: "Visualization" },
      { name: "Photoshop", category: "Visualization" },
      { name: "Esri Experience Builder (WebGIS)", category: "Emerging" },
    ],
    programming: [
      { name: "Python", proficiency: "advanced" },
      { name: "R", proficiency: "advanced" },
      { name: "SQL", proficiency: "proficient" },
    ],
    tools: [
      { name: "Linux", proficiency: "proficient" },
      { name: "Git", proficiency: "proficient" },
      { name: "Jupyter Notebook", proficiency: "advanced" },
      { name: "HPC Cluster", proficiency: "proficient" },
    ],
    languages: [
      { name: "English", proficiency: "professional" },
      { name: "Mandarin Chinese", proficiency: "native" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SERVICE & MEMBERSHIP
  // ─────────────────────────────────────────────────────────────────────────────
  service: [
    {
      id: "s1",
      role: "Mentor",
      organization: "REMUS Program (Research Experience for Minority Undergraduate Students)",
      institution: "UNC Charlotte",
      period: "2024",
    },
    {
      id: "s2",
      role: "Vice President",
      organization: "Student Union, College of Tourism",
      institution: "Huaqiao University",
      period: "2018 – 2019",
    },
    {
      id: "s3",
      role: "Member",
      organization: "American Association of Geographers (AAG)",
      period: "2024 – present",
    },
    {
      id: "s4",
      role: "Member",
      organization: "Chinese Professionals in Geographic Information Science (CPGIS)",
      period: "2026 – present",
    },
    {
      id: "s5",
      role: "Member",
      organization: "Women in Geographic Sciences (WiGS) at UCSB",
      period: "2025 – present",
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // CONTACT
  // ─────────────────────────────────────────────────────────────────────────────
  contact: {
    name: "Die (Diane) Hu",
    email: "diehu@ucsb.edu",
    phone: "(704) 390-4337",
    linkedin: "https://linkedin.com/in/die-diane-hu-370007270",
    github: "",        // fill in if applicable
    googleScholar: "", // fill in if applicable
    location: "Santa Barbara, California",
    officeAddress: "",
    preferredContact: "email",
  },

};

// ─────────────────────────────────────────────────────────────────────────────
// EXPORTS
// Browser (script tag):   window.DIANE is set below
// ES module (import):     export default DIANE  (see below)
// Both coexist safely.
// ─────────────────────────────────────────────────────────────────────────────

// Browser global — works when loaded via <script src="js/content.js"></script>
if (typeof window !== "undefined") {
  window.DIANE = DIANE;
}

// Make available globally when loaded as a plain <script> tag.
// (The original `export default DIANE` caused a parse error in non-module contexts.)
if (typeof window !== 'undefined') {
  window.DIANE = DIANE;
}
