export interface PublishedApp {
  id: string;
  name: string;
  tagline: string;
  packageName: string;
  category: string;
  rating: number;
  reviewsCount: string;
  downloads: string;
  version: string;
  lastUpdated: string;
  minAndroid: string;
  playStoreUrl: string;
  webAppUrl?: string;
  platforms?: { label: string; status: "Live" | "Coming Soon" }[];
  iconUrl: string;
  featureGraphic: string;
  accentColor: string;
  iconGradient: string;
  consoleMetrics: {
    acquisitions: string;
    growth: string;
    activeDevices: string;
  };
  description: string;
  highlights: string[];
  techStack: string[];
  architectureNotes: string;
  screenshots: string[];
}

export interface ClosedTestingApp {
  id: string;
  name: string;
  tagline: string;
  packageName: string;
  trackName: string;
  version: string;
  testingDay: number;
  totalRequiredDays: number;
  activeTesters: number;
  targetTesters: number;
  status: "Active Closed Track" | "Ready for Production Review" | "Recruiting Testers";
  iconUrl?: string;
  accentColor: string;
  description: string;
  whatToTest: string[];
  recentChangelog: string[];
  techStack: string[];
  googleGroupUrl: string;
  webOptInUrl: string;
  androidTestUrl: string;
  screenshots?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  badgeColor: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface CertificationItem {
  name: string;
  provider: string;
  year?: string;
}

export const portfolioData = {
  domain: "johnabisheksoftwares.dev",
  developer: {
    name: "Abishekkumar V",
    displayAlias: "John Abishek",
    photoUrl: "/profile.jpg",
    secondaryPhotoUrl: "/johnImage.png",
    handle: "@Abishek7200",
    developerId: "8836865850863154479",
    title: "Automation Test Engineer & Mobile App Developer",
    brandName: "John Abishek Softwares",
    playDeveloperName: "Abishekkumar V (John Abishek Softwares)",
    playDeveloperUrl: "https://play.google.com/store/apps/developer?id=Abishekkumar",
    location: "Chennai, Tamil Nadu, India",
    phone: "+91 7200943439",
    email: "vabishekkumar@gmail.com",
    github: "https://github.com/Abishek7200",
    linkedin: "https://www.linkedin.com/in/abishekkumar-v/",
    availability: "Shipping Play Store Apps & Enterprise Automation • Open for Collaboration",
    shortBio:
      "Automation Test Engineer with 5+ years of specialized UI/API test automation and nearly 9 years in technology. Creator of John Abishek Softwares with 4 live Google Play production apps and games plus active Google Play closed testing titles.",
    detailedBio:
      "I am Abishekkumar V (John Abishek), founder of John Abishek Softwares (johnabisheksoftwares.dev). As an Automation Test Engineer at Exeter Premedia Services and an independent mobile app & game engineer, I specialize in combining rigorous test automation (Playwright JS, Jenkins CI/CD, AWS EC2, Postman) with polished Android products. My Google Play Console showcases 4 live production titles (Worship Connect, Bottle Shoot: Target Shooter, Arrow Go: Zen Logic Puzzle, Birthday Reminder: Wish Cards) alongside active Closed Testing cohorts for VerseSnap.",
    stats: [
      { label: "Google Play Store", value: "4 Live", sublabel: "Production Apps & Games" },
      { label: "Closed Testing Track", value: "1 Active", sublabel: "VerseSnap Scripture Puzzle" },
      { label: "Regression Coverage Boost", value: "+60%", sublabel: "Playwright Automation" },
      { label: "Total Tech Experience", value: "9 Yrs", sublabel: "5+ Yrs QA Automation" },
    ],
  },

  awards: [
    {
      id: "award-1",
      title: "Torch Bearer Award",
      issuer: "Exeter Premedia Services",
      date: "Mar 2025 & May 2023",
      description:
        "Earned two-time recognition for delivering exceptional software quality, streamlining enterprise testing processes, and spearheading test coverage across core publishing platforms.",
      badgeColor: "from-amber-400 to-orange-500",
    },
    {
      id: "award-2",
      title: "Flash Forward Award",
      issuer: "Exeter Premedia Services",
      date: "Aug 2024",
      description:
        "Secured this prestigious company award by engineering innovative test automation solutions in Playwright JS that significantly slashed test execution time and accelerated delivery cycles.",
      badgeColor: "from-indigo-500 to-purple-600",
    },
  ] as AwardItem[],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "SRM Institute of Science and Technology",
      location: "Chennai, Tamil Nadu, India",
      period: "Expected 2027",
    },
  ] as EducationItem[],

  certifications: [
    { name: "Playwright JS Automation", provider: "Udemy" },
    { name: "Selenium WebDriver", provider: "Testleaf" },
    { name: "CI/CD with Jenkins & Docker", provider: "Udemy" },
    { name: "MySQL Database Specialist", provider: "GUVI" },
    { name: "AI for India Official Participant", provider: "GUVI" },
  ] as CertificationItem[],

  publishedApps: [
    {
      id: "worship-connect",
      name: "Worship Connect",
      tagline: "Live Church Media Presentation, Multilingual Lyrics & Songbook",
      packageName: "com.abishekkumar.worshipconnect",
      category: "Music & Event Productivity",
      rating: 4.9,
      reviewsCount: "37+ Active Devices",
      downloads: "11+ Acquisitions (+57%)",
      version: "2.4.0",
      lastUpdated: "Oct 29, 2026",
      minAndroid: "Android 9.0 (API 28)+ / Web",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.abishekkumar.worshipconnect",
      webAppUrl: "https://worshipconnectlive.com/",
      platforms: [
        { label: "Android Play Store", status: "Live" },
        { label: "Web App (worshipconnectlive.com)", status: "Live" },
        { label: "Windows Desktop", status: "Coming Soon" },
        { label: "macOS Desktop", status: "Coming Soon" },
      ],
      iconUrl:
        "https://play-lh.googleusercontent.com/NJbNcfLrbadNVOQVPDOaeo0inFGD2VZSpo3qaVTl8QtGoVHHs22AkdB5k9HfrnBmu_14zOdoFN0aNeUK03F19mA=w240-h240-rw",
      featureGraphic:
        "https://play-lh.googleusercontent.com/ncG42ujU1gdq0CElSe26Ep1hMIOGT9HVRELoy4jIDNhtsg3jMftkGio-OioUv7bZagHddLu31UYMR6polAmh=w1024-h500-rw",
      accentColor: "#6366f1",
      iconGradient: "from-blue-600 via-indigo-600 to-purple-600",
      consoleMetrics: {
        acquisitions: "11 (+57%)",
        growth: "+19% Active Devices",
        activeDevices: "37 Devices",
      },
      description:
        "Comprehensive media presentation ecosystem designed for church and live event media management. Available as a live Android app and cloud web application (worshipconnectlive.com), with dedicated native Windows and macOS desktop applications coming soon.",
      highlights: [
        "Live Web Application available at worshipconnectlive.com with instant browser access",
        "Dedicated native desktop applications for Windows and macOS coming soon with dual-display support",
        "AI-assisted song formatting & instant multilingual lyrics rendering (Tamil, English, Hindi)",
        "Live dual-screen projection mode with zero-latency slide transitions & band team sync",
      ],
      techStack: ["Node.js / React", "Flutter / Android", "WebSockets", "AI Automation", "Material 3"],
      architectureNotes:
        "Hybrid mobile/web ecosystem with low-latency WebSockets stage sync and offline-first delta caching.",
      screenshots: [
        "https://play-lh.googleusercontent.com/EBfYp-ndsD0teo0tl13AIouNQwpU1dMMWF62xR0f0ySbQ7M_Hut88ISUQcaW2n9eENnqeQiyRhnXgUOecJlYdQU=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/jsH7LQ1jBOzZcO96gkwid3soQPhRTRxiLDtBnwzYligd5yMbOuZ7SvBH4XaDFM3x5mzyzkpwvt4s13cHeqV3ug=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/BXmBPs8Tkf07UszV0_i9oT7INs7dOTyiCEHgCs-6owfB1hjCvEXY5Ea8pcVZRbpFyfkstNcuX7bCpfvlEfS5xA=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/HPi2mbTZLmxMPH9NbS8VVlfP_6_0zXPSvVKTHlGVNk7X3U10W9kkCmzNMDzbK7IJuqzXE3KNvc3XCPHg85HY5A=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/clIUqfPfwdy-9L8jZEp3QbQoEZkFe055hngp9YSknglueKiWVBZ0nym8tIaYGYbOVHA1soRB4Uflnq1InzdI=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/b8aUYk9tifFayJtj8_e5p-El6xyIL_26fGFnclshCKKgyg2OQOIausnhfsKWqxOYmZvhPu4mzr2qNGZGRUycOtQ=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/OEUwZJZJ06ikUA33TUedIc_BLBkhHvaxikayUEZrt6foz25IoYJvCVLmCq-GLkOJhFeQdep99ACXCsxD3dbT=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/6ElmP2K24nTOZU2IKhawl8gsl8iW1HC7E0_J1PcJobyPzlzUxNJr4YQYDIeULVG4gf4YGUoQl1wFa6r4Wlg4kw=w720-h1280-rw",
      ],
    },
    {
      id: "bottle-shoot",
      name: "Bottle Shoot: Target Shooter",
      tagline: "Interactive 3D Arcade Mobile Game with Physics Trajectory",
      packageName: "com.abishekkumar.bottle_shoot",
      category: "Action & Arcade Game",
      rating: 4.8,
      reviewsCount: "246+ Active Devices",
      downloads: "411+ Acquisitions",
      version: "1.4.2",
      lastUpdated: "Oct 29, 2026",
      minAndroid: "Android 8.0 (API 26)+",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.abishekkumar.bottle_shoot",
      iconUrl:
        "https://play-lh.googleusercontent.com/O2TpM95rNcubXyyyjuZNFP1S4836upDGcwSZ7vscE6vap3v_ZKZaS6kM2A3VpPEkZ5eW6aBbJzunCd0rYleR=w240-h240-rw",
      featureGraphic:
        "https://play-lh.googleusercontent.com/heXr0rF4nqeYTpqj08yovEFjIcbWzjhrzHYs3-FKnDRhHOx80_bEYsuU2mVWNe2spZub97P26G-VOvMzi9nKyJ0=w1024-h500-rw",
      accentColor: "#f97316",
      iconGradient: "from-orange-500 via-amber-500 to-yellow-500",
      consoleMetrics: {
        acquisitions: "411 (+97%)",
        growth: "+84% Active Devices",
        activeDevices: "246 Devices",
      },
      description:
        "Official Google Play Store game: An interactive arcade target shooter featuring real-time physics trajectory simulation, progressive bottle distance challenges, dynamic sound effects, and steady 60fps frame rates across Android devices.",
      highlights: [
        "411+ acquisitions with +97% growth and 246+ monthly active devices",
        "Deterministic collision detection & realistic bottle shatter physics",
        "Optimized game loop delivering 60 FPS with low battery consumption",
        "Google Play Console continuous release management & AAB artifact delivery",
      ],
      techStack: ["Java / Kotlin", "Android SDK", "Canvas / Physics Engine", "Google Play Services"],
      architectureNotes:
        "Engineered with a lightweight custom render loop to maximize frame rates and minimize memory footprint under 28MB.",
      screenshots: [
        "https://play-lh.googleusercontent.com/SK250dL4YHV96wQcP1h7IWezldgEnzqBzId7fpnxdYBn90OPv304oiip5DWcjNnBew6OwzTNci9o2AR2EDttsw=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/TlIKRCzgEjlypcLFH8NPtQUfkhJsswAYvhsJNXRupTGV0mIKoHpqGcDQrvQ9ESspf9tmhyu0kn_18IqwR2e5MAs=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/ARol87fDsBhkkvKwOFtDbJ5Enn3Y8eTz-LcRJ1GAxFs5WX4krEnWP_sFLZho4azae-YgIW6OOc8dlVN_EFRlKQ=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/jxpzOktJuocAb33d2enVCPwViNc1n7EJI09SWJXch_aH24hF4z1vvgEXtrmXc09qB7irSoJXCpCela1XYUJ9DmI=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/_EjDccRfyoG0nDMPOEQIqbGBC19v9nc36fCXb0Id-WqrevN-F4mhPCTqKERuXdpaVTXQq3i6z8mqqz4U2-QTZw=w720-h1280-rw",
      ],
    },
    {
      id: "arrow-go",
      name: "Arrow Go: Zen Logic Puzzle",
      tagline: "Minimalist Directional Flow, Spatial Path & Brain Logic Puzzle",
      packageName: "com.abishekkumar.arrow_go",
      category: "Puzzle & Brain Games",
      rating: 4.9,
      reviewsCount: "27+ Active Devices",
      downloads: "35+ Acquisitions",
      version: "1.2.0",
      lastUpdated: "Oct 10, 2026",
      minAndroid: "Android 8.0 (API 26)+",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.abishekkumar.arrow_go",
      iconUrl:
        "https://play-lh.googleusercontent.com/G4kjNtwHkG1rT9SB9CWG0oFVTAnsO6fBZbGDRg_yPOT_nUCgNpUQEEaaCSEJcwBqSYmPnv_nqZnAKmZLqRvSqIk=w240-h240-rw",
      featureGraphic:
        "https://play-lh.googleusercontent.com/DB06DwtOf0otLv8e9VIOwqE3o_cUFBA0JtLpKvfzMUQHkFe0oh4KS8pD7B5ntw8dyLSJKzUZ33uHQAhYGw_kFg=w1024-h500-rw",
      accentColor: "#06b6d4",
      iconGradient: "from-cyan-500 via-teal-500 to-indigo-600",
      consoleMetrics: {
        acquisitions: "35 (+289%)",
        growth: "+325% First Opens",
        activeDevices: "27 Devices (+108%)",
      },
      description:
        "Official Google Play Store game: A soothing yet challenging spatial puzzle game designed to test directional logic and problem-solving skills. Players untangle interwoven arrow pathways without collision, advancing through hundreds of handcrafted zen levels.",
      highlights: [
        "Rapid growth in Google Play Console: +289% acquisitions & +325% first opens",
        "Interlocking arrow pathway mechanics with zero-distraction ambient soundscapes",
        "Smooth gesture controls with tactile haptic feedback on puzzle completion",
        "Completely offline-playable with zero load screen delays",
      ],
      techStack: ["Flutter / Dart", "Custom Painter", "State Management", "Google Play Services"],
      architectureNotes:
        "Vector-based dynamic grid rendering algorithm ensuring crisp rendering across any aspect ratio or DPI scaling.",
      screenshots: [
        "https://play-lh.googleusercontent.com/w7nxNLKuKZ6x6U00AWt7Yy8374JueOd9pifF2kTSZMmOWzFL8w0S3KnYPTWbc1FuXLlpSLZFQo1CLRDefD2b1pI=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/cHouo-u5CDelD6Y_TirjLSXl5OoAokYVFGC5yo2djz2Wbq0fL7SdU8dG61ueMduNs91nRK7keqRODyo3zGPFmQ=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/5PgXWiTA9Ox0qXqQ5P630kWrL9o9WF2i5b521UbAE-hn72jMhvEXAo6MEd9ayH0SN8MnJrntlqsostS8hquaHmQ=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/2-fUObCGWXgD0emEwG-CRHsQHsn86ZsAzW_To2zrXM2HnkuRP3NgH84aAtjR6NVuOBRHqrqUAFYfygCEhYwE=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/hViQivaubvETSqNzrzVl2z8ef9toRNk2mcJr__33FJrhRN0kznAl-Nt66RA73F8Rl68rXsceUoNeS6-_nh7g9A=w720-h1280-rw",
      ],
    },
    {
      id: "birthday-reminder",
      name: "Birthday Reminder: Wish Cards",
      tagline: "Milestone Event Tracking, Background Radar & Greeting Cards",
      packageName: "com.abishekkumar.birthday_remainder",
      category: "Productivity & Lifestyle",
      rating: 4.8,
      reviewsCount: "14+ Active Devices",
      downloads: "Active Play Store App",
      version: "1.1.0",
      lastUpdated: "Sep 24, 2026",
      minAndroid: "Android 8.0 (API 26)+",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.abishekkumar.birthday_remainder",
      iconUrl:
        "https://play-lh.googleusercontent.com/UTBkRNp0AxxbVbgzEAQn2MrDw4LCWYVYJ1e2tZr_aq1ob40qXEuI00fIl-PwYr5bvfbEbsYxmCs9M2toeFHGCQ=w240-h240-rw",
      featureGraphic:
        "https://play-lh.googleusercontent.com/YWw4zWFTdb2f3oxQiA_IWCjThIeld3zJDhpxBYPXu0btQsJczzlaUJPgjtjHM6_UVgOJAXmSBvPS69Nn6s0P=w1024-h500-rw",
      accentColor: "#ec4899",
      iconGradient: "from-pink-500 via-rose-500 to-purple-500",
      consoleMetrics: {
        acquisitions: "Play Store Live",
        growth: "Active Users",
        activeDevices: "14 Devices",
      },
      description:
        "Official Google Play Store app: Built with Flutter, a smart event tracking and reminder tool that keeps users connected with family and colleagues through customizable greeting wish cards and accurate automated background notifications.",
      highlights: [
        "Background alarm radar using Android WorkManager & ExactAlarm permissions",
        "Personalized greeting cards generator with instant share to WhatsApp/Telegram",
        "Secure local SQLite database with optional encrypted backup/export",
        "Minimal battery drain with smart periodic sync algorithms",
      ],
      techStack: ["Flutter", "Dart", "WorkManager", "Local Notifications API", "SQLite"],
      architectureNotes:
        "Clean architecture with offline-first local storage, reactive state management, and strict battery optimization compliance.",
      screenshots: [
        "https://play-lh.googleusercontent.com/VBN-3zBE2EIBb6xwPUXuQb3fzce0fIcuK5WUzE3BhQ-LVmTDbdUyx5lddAARIZC8CGY3FjgS3G2adHD7Zui0Yw=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/FHxrzg1j8QgQHOr6qRWtWSrGOI6b6yQczPoKUz5Hkmqh3fX25KolVhSrDYZAVRpECFt078e2GeEsYcjWCXhQrw=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/3Eu6qdllS1y9xy6JEY78vIXtS2ot40oSidp4MhzKhRCqVP2dMmjgZ8GoXLhMkXkizl-Bm1k8xffsNrqR_rsXUw=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/LhO6Dr6SgkXCsFolVtcb3ZNyDU1dBX8R52SSLiPQOZZpzbEQpyl7FYKKoXFPDQ93M0V_MLVsensCQIdiybCp=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/xA78um7sBKvGkUKX6cRo1nrHguuEjIunvbszQy0RQc7ORUtFpm2dasizAczeM9BFCFf0AnTsBDiDyuQSjfseoA=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/95rwFIBb8zBZdV-xoAEztTBSNNVQfJGhlr4OBvL7U8cbKdmbbmzuLQ8029JcLWLyL6geOSV8N4k2yn2kcBA1-g=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/IEdMvYe4tfnXU33vTw8F921hqFisns8ByTPxoDboL3f_UT2VSX7O85gjTkWj9U2vW1GWK4O5mFPeb4ZGPqWELFA=w720-h1280-rw",
        "https://play-lh.googleusercontent.com/JzwsZD9D8mipeuK2FCBhetpd4olChdKOXmQ_re8zqYH08pAiJPiua1mU6muKFiKSOkJesnZEzalqdAliS3DXSlY=w720-h1280-rw",
      ],
    },
  ] as PublishedApp[],

  closedTestingApps: [
    {
      id: "versesnap-app",
      name: "VerseSnap - Bible Word Puzzle",
      tagline: "Swipe-to-Solve Word Puzzles, Anagrams & Scripture Discovery",
      packageName: "com.abishekkumar.versesnap",
      trackName: "Google Play Closed Testing • Active Track",
      version: "1.0.2-beta (Build 12)",
      testingDay: 11,
      totalRequiredDays: 14,
      activeTesters: 24,
      targetTesters: 20,
      status: "Active Closed Track",
      accentColor: "#8b5cf6",
      description:
        "Directly visible in Google Play Console under Closed Testing: VerseSnap is an engaging word connect game that combines anagram solving with inspiring Bible verse discovery. Currently in the mandatory 14-day closed testing cohort before production release.",
      whatToTest: [
        "Test smooth touch response when connecting letter tiles in word wheels",
        "Verify verse reveal animations and chapter completion progression",
        "Validate offline dictionary lookup performance and hint reward system",
      ],
      recentChangelog: [
        "Last updated Oct 29, 2026: Enhanced letter wheel animation and added 250 new scripture levels",
        "Fixed landscape orientation layout edge cases on Android 14/15 tablets",
      ],
      techStack: ["Flutter", "Dart", "Trie Word Search", "SQLite", "Google Play Billing"],
      googleGroupUrl: "https://groups.google.com/g/johnabishek-beta-testers",
      webOptInUrl:
        "https://play.google.com/apps/testing/com.abishekkumar.versesnap",
      androidTestUrl:
        "https://play.google.com/store/apps/details?id=com.abishekkumar.versesnap",
    },
  ] as ClosedTestingApp[],

  skillCategories: [
    {
      title: "QA Automation & Test Engineering",
      badge: "Core Specialization (5+ Yrs)",
      color: "indigo",
      skills: [
        { name: "Playwright JS Framework Engineering", level: 98 },
        { name: "Selenium WebDriver & Java POM", level: 95 },
        { name: "REST API Automated Testing (Postman)", level: 96 },
        { name: "Jenkins CI/CD Pipeline Automation", level: 94 },
        { name: "AWS EC2 Test Infrastructure & Azure DevOps", level: 91 },
        { name: "Agile QA Leadership & PR Reviews", level: 95 },
      ],
    },
    {
      title: "Mobile App & Google Play Systems",
      badge: "Google Play Developer",
      color: "orange",
      skills: [
        { name: "Google Play Console (Production & Closed Tracks)", level: 98 },
        { name: "Flutter & Dart Mobile Development", level: 94 },
        { name: "Android SDK, APK/AAB Signing & Vitals", level: 95 },
        { name: "Game Loop & 2D/3D Physics (Bottle Shoot / Arrow Go)", level: 90 },
        { name: "SQLite, WorkManager & Local Notifications", level: 93 },
        { name: "Word Search Algorithms & State Management", level: 88 },
      ],
    },
    {
      title: "Full-Stack Development & Cloud Tools",
      badge: "Full-Stack & Cloud",
      color: "purple",
      skills: [
        { name: "JavaScript, Node.js & TypeScript", level: 94 },
        { name: "Next.js, React 19 & Modern Web UIs", level: 92 },
        { name: "SQL, MySQL & Relational Modeling", level: 93 },
        { name: "WebSockets, Real-Time Sync & AI Integration", level: 90 },
        { name: "Docker & Containerized Environments", level: 88 },
        { name: "Jira, TestGrid, AIO Test & n8n Automation", level: 95 },
      ],
    },
  ],

  experience: [
    {
      id: "exp-johnabisheksoftwares",
      role: "Founder & Google Play Developer",
      company: "John Abishek Softwares (johnabisheksoftwares.dev)",
      period: "2023 — Present",
      location: "Chennai, India",
      type: "Product Studio",
      description:
        "Managing the end-to-end Google Play Console lifecycle: published 4 production applications/games and actively operating 14-day closed testing tracks for upcoming titles.",
      achievements: [
        "Published 'Bottle Shoot: Target Shooter' on Google Play Console, scaling to 411+ acquisitions and 246+ active devices.",
        "Developed and published 'Arrow Go: Zen Logic Puzzle' achieving +289% acquisition growth.",
        "Created and shipped 'Worship Connect' media presentation software with AI-assisted song formatting.",
        "Engineered 'Birthday Reminder: Wish Cards' in Flutter with background notification radar.",
        "Orchestrating Google Play Closed Testing cohorts for 'VerseSnap - Bible Word Puzzle'.",
      ],
      technologies: ["Flutter", "Java/Kotlin", "Google Play Console", "React / Next.js", "Node.js", "SQLite"],
    },
    {
      id: "exp-exeter-automation",
      role: "Automation Test Engineer",
      company: "Exeter Premedia Services",
      period: "Apr 2023 — Present",
      location: "Chennai, Tamil Nadu, India",
      type: "Full-Time Engineering",
      description:
        "Spearheading end-to-end UI and API test automation frameworks, CI/CD pipeline reliability, and cloud execution environments for enterprise e-publishing systems.",
      achievements: [
        "Built a scalable Playwright JS framework from scratch, boosting automated regression coverage by 60% for core publishing platforms.",
        "Optimized CI/CD pipelines in Jenkins by designing logic that ensures commands execute sequentially using absolute paths, preventing build failures.",
        "Maintained AWS EC2 servers for continuous and seamless automated test execution.",
        "Validated ServiceNow Incident APIs using Postman, delivering detailed reports for stakeholder reviews.",
        "Led test strategy execution, mentored junior engineers, and conducted rigorous PR reviews to improve Agile QA workflows.",
        "Honored with the Torch Bearer Award (Mar 2025, May 2023) and Flash Forward Award (Aug 2024).",
      ],
      technologies: ["Playwright JS", "Jenkins CI/CD", "AWS EC2", "Postman", "ServiceNow APIs", "Node.js", "Agile QA"],
    },
    {
      id: "exp-exeter-ste",
      role: "Software Test Engineer 1",
      company: "Exeter Premedia Services",
      period: "Mar 2021 — Mar 2023",
      location: "Chennai, Tamil Nadu, India",
      type: "Engineering",
      description:
        "Executed manual and automated testing, created comprehensive test specifications, and conducted defect triage for complex publishing platforms.",
      achievements: [
        "Developed detailed test cases and conducted thorough regression testing for system enhancements, reducing defect leakage by 15%.",
        "Authored Selenium Java automated test scripts using Page Object Model (POM) for regression stability.",
        "Earned the Torch Bearer Award (May 2023) for exceptional testing dedication and quality delivery.",
      ],
      technologies: ["Selenium Java", "POM Architecture", "TestRail", "Jira", "Regression Testing"],
    },
    {
      id: "exp-exeter-copyeditor",
      role: "Associate Copyeditor 1 & Production Executive",
      company: "Exeter Premedia Services",
      period: "Nov 2018 — Feb 2021",
      location: "Chennai, Tamil Nadu, India",
      type: "Digital Production",
      description:
        "Foundation in digital publishing, digital media formatting, HTML layouts, and styling standards.",
      achievements: [
        "Streamlined content delivery by refining documentation and applying styling standards using Adobe InDesign and Photoshop, improving formatting efficiency by 20%.",
        "Coordinated digital production workflows, leveraging HTML and proofreading skills to finalize media formatting with 100% adherence to publishing guidelines.",
      ],
      technologies: ["HTML", "Adobe InDesign", "Photoshop", "Proofreading", "Digital Publishing"],
    },
  ] as ExperienceItem[],
};
