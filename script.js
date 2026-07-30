const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navAnchors = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('main section[id]');
const revealTargets = document.querySelectorAll('.hero-panel, .about-text-card, .stat-card, .highlight-card, .exp-card, .project-card, .skill-group, .edu-card, .org-card, .honor-card, .bootcamp-card, .contact-method, .gallery-card');
const langToggle = document.querySelector('[data-lang-toggle]');
const translatableNodes = document.querySelectorAll('[data-i18n]');
const languageStorageKey = 'medy-portfolio-language';

const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.gallery': 'Gallery',
        'nav.organization': 'Organization',
        'nav.education': 'Education',
        'nav.contact': 'Contact',
        'hero.kicker': 'PORTFOLIO / PERSONAL BRAND',
        'hero.subtitle': 'Project Management · Product Strategy · Data Science',
        'hero.greeting': 'Hello, I\'m Medy Febriyansyah',
        'hero.title': 'Building clarity, momentum, and execution across digital products.',
        'hero.badgeOne': 'Project Management',
        'hero.badgeTwo': 'Product Strategy',
        'hero.badgeThree': 'Data Science',
        'hero.descriptionPrimary': 'Graduated in Information Systems with strong hands-on experience in Product Management, Project Management, and Data Science. Skilled in Agile & Scrum, product discovery, stakeholder communication, data analysis, and data visualization.',
        'hero.descriptionSecondary': 'Passionate about transforming data-driven insights into actionable strategies that improve decision-making, product value, and user experience.',
        'hero.ctaPrimary': 'Let\'s Work Together',
        'hero.ctaSecondary': 'Explore Projects',
        'hero.trustOne': '8+ PM roles',
        'hero.trustTwo': '15+ digital initiatives',
        'hero.trustThree': 'CITM certified',
        'hero.trustFour': 'GPA 3.81',
        'hero.trustFive': 'TOEFL 633',
        'hero.snapshotLabel': 'Professional Snapshot',
        'hero.snapshotTitle': 'Confident, approachable, and ready to lead meaningful delivery.',
        'hero.snapshotBadge': 'PM · Product · Data',
        'hero.contactLabel': 'Direct Contact',
        'about.kicker': 'About Me',
        'about.title': 'Information Systems graduate with a passion for product, project, and data-driven execution.',
        'about.intro': 'Graduated in Information Systems, with strong interest and hands-on experience in Product Management, Project Management, and Data Science.',
        'about.lead': 'Skilled in Agile & Scrum framework, product discovery, product lifecycle management, stakeholder communication, data analysis, and data visualization.',
        'about.paraOne': 'Experienced in applying design thinking, business analysis, and financial modeling to drive product growth and project success.',
        'about.paraTwo': 'Passionate about transforming data-driven insights into actionable strategies that improve decision-making, product value, and user experience.',
        'about.paraThree': 'IPK 3.81/4.00 · AAEPT 564 · TOEFL 633',
        'about.statOne': 'Project & product roles',
        'about.statTwo': 'Digital initiatives delivered',
        'about.statThree': 'GPA in Information Systems',
        'about.statFour': 'TOEFL score',
        'about.highKickerOne': 'Leadership',
        'about.highTitleOne': 'Project & Product Management',
        'about.highDescOne': 'Leading cross-functional teams, managing stakeholders, and delivering digital products using Agile & Scrum framework.',
        'about.highKickerTwo': 'Analysis',
        'about.highTitleTwo': 'Data Science & Analytics',
        'about.highDescTwo': 'Data screening, analysis, machine learning implementation, and data visualization to drive business decisions.',
        'about.highKickerThree': 'Design',
        'about.highTitleThree': 'UI/UX & Design Thinking',
        'about.highDescThree': 'Applying design thinking methodology, wireframing, prototyping, and user research to create impactful product experiences.',
        'experience.kicker': 'Career Journey',
        'experience.title': 'Professional experience across project management, product strategy, and digital execution.',
        'experience.intro': 'From startups to enterprise clients, each role strengthened my ability to lead delivery, align stakeholders, and drive product value.',
        'exp.gitsPm.summary': 'Leading multiple enterprise-scale projects with full ownership of delivery, stakeholder alignment, and team coordination.',
        'exp.gitsPm.li1': 'Product Owner of Product Carte',
        'exp.gitsPm.li2': 'Project Manager of JRKU Approval and Mobile Service',
        'exp.gitsPm.li3': 'Project Manager of JRKU Rebuild',
        'exp.gitsPm.li4': 'Project Manager of JRKU External and Web Partner',
        'exp.gitsPm.li5': 'Project Manager of Tellin Batic 2026',
        'exp.gitsPm.li6': 'Project Manager of Warehouse Management System PLN Kaltimra',
        'exp.gitsPm.li7': 'Project Manager of Danone Adop Asset',
        'exp.gitsPm.li8': 'Project Manager of Auresys Audit AI Platform',
        'exp.gitsIntern.summary': 'Managed and co-managed multiple enterprise-scale initiatives with structured execution and stakeholder coordination.',
        'exp.gitsIntern.li1': 'Project Manager of Warehouse Management System PLN Kaltimra',
        'exp.gitsIntern.li2': 'Project Manager of Danone Adop Asset',
        'exp.gitsIntern.li3': 'Co-Project Manager of Jasa Raharja JRKU Employee',
        'exp.gitsIntern.li4': 'Co-Project Manager of myPertamina Merchant',
        'exp.gitsIntern.li5': 'Co-Project Manager of Auresys Audit AI Platform',
        'exp.qiscus.summary': 'Led execution of 7 major AI-focused initiatives with Agile coordination, client communication, and cross-functional team management.',
        'exp.qiscus.li1': 'Lead execution of Project KP2MI (Form Pengaduan Imigrant)',
        'exp.qiscus.li2': 'Lead Assistant Project Paragon AI',
        'exp.qiscus.li3': 'Lead execution of Project Instaperfect AI',
        'exp.qiscus.li4': 'Lead execution of Project OMG AI',
        'exp.qiscus.li5': 'Lead execution of Project Paragon',
        'exp.qiscus.li6': 'Lead execution of Project IZI Custom Agent Allocation',
        'exp.qiscus.li7': 'Lead Assistant Project Makeover AI',
        'exp.wesclic.summary': 'Led app development projects and UI/UX design initiatives using Agile Scrum methodology and Asana for management.',
        'exp.wesclic.li1': 'Lead Project Zendo Apps (Mobile Transportation)',
        'exp.wesclic.li2': 'Lead Project Merapi Apps (Information System of Wonosobo Health Center)',
        'exp.wesclic.li3': 'Lead Project Sumu Apps (Mobile Lifestyle Muhammadiyah)',
        'exp.wesclic.li4': 'Lead Assistant Project Muslim Super Apps (Mobile Lifestyle Muslim)',
        'exp.wesclic.li5': 'Lead UI/UX Design for multiple projects',
        'exp.rakaminPm.summary': 'Built product management foundations in stakeholder management, problem framing, and product release.',
        'exp.rakaminPm.li1': 'Stakeholder Management',
        'exp.rakaminPm.li2': 'Problem Framing',
        'exp.rakaminPm.li3': 'Product Release',
        'exp.rakaminUx.summary': 'Learned and applied UI/UX fundamentals through design thinking methodology and prototyping.',
        'exp.rakaminUx.li1': 'UI/UX Fundamentals & Design Thinking',
        'exp.rakaminUx.li2': 'User and Product Research',
        'exp.rakaminUx.li3': 'User Journey & Visual Design',
        'exp.rakaminUx.li4': 'Prototyping',
        'exp.vinix.summary': 'Optimized sales of training products through market analysis and marketing funnel strategies.',
        'exp.vinix.li1': 'Designed product information series through social media',
        'exp.vinix.li2': 'Analyzed market size for training programs',
        'exp.vinix.li3': 'Created Marketing Funnel for user segmentation',
        'exp.tam.summary': 'Optimized product sales through social media marketing and brand awareness strategies.',
        'exp.tam.li1': 'Optimized product sales through digital channels',
        'exp.tam.li2': 'Designed product information content for social media',
        'projects.kicker': 'Featured Projects',
        'projects.title': 'Projects that reflect range, ownership, and product understanding.',
        'projects.intro': 'From AI platforms and enterprise systems to mobile apps and UX redesigns — each project strengthened my delivery capability.',
        'project.wms.role': 'Role: Project Manager',
        'project.wms.desc': 'Led delivery of warehouse management platform with emphasis on operational clarity, stakeholder coordination, and execution flow.',
        'project.ai.role': 'Role: Project Manager Lead',
        'project.ai.desc': 'Managed delivery of AI Agents for Instaperfect, OMG, Paragon, and Makeover brands across multiple social media platforms.',
        'project.auresys.role': 'Role: Project Manager',
        'project.auresys.desc': 'Managed development of AI-based audit platform with cross-functional team coordination and Agile delivery.',
        'project.jrku.role': 'Role: Project Manager',
        'project.jrku.desc': 'Managed JRKU Approval, Mobile Service, Rebuild, External, and Web Partner projects for Jasa Raharja.',
        'project.zendo.role': 'Role: Project Manager',
        'project.zendo.desc': 'Led mobile app delivery across transportation, health center information system, and Muhammadiyah lifestyle contexts.',
        'project.izi.role': 'Role: Project Manager',
        'project.izi.desc': 'Developed a system that automatically assigns broadcasting agents when users respond to a broadcast, ensuring stable broadcast-agent integration.',
        'project.ecolog.role': 'Role: Scrum Master & Lead Business',
        'project.ecolog.desc': 'Built a waste tracking system for TPS Gosari with Scrum framework, market research (TAM, SAM, SOM), and stakeholder needs collection.',
        'project.sukabuah.role': 'Role: Scrum Master',
        'project.sukabuah.desc': 'Facilitated a three-sprint digital product cycle with PRD creation, pitch deck delivery, design thinking, and burndown chart tracking.',
        'project.ml.role': 'Role: Data Scientist',
        'project.ml.desc': 'Identified product package combinations using R programming, market basket analysis, and statistical analysis of sales transaction data.',
        'project.maxim.role': 'Role: UI/UX Designer',
        'project.maxim.desc': 'Revamped Maxim app with Design Thinking method, including empathy maps, wireframing, design systems, and high-fidelity prototype.',
        'project.ecoenzym.role': 'Role: Chairman / Founder',
        'project.ecoenzym.desc': 'Created cleaning products from fruit waste with 7P marketing analysis, financial projections, and growth plan strategy.',
        'project.muslim.role': 'Role: Assistant Project Manager',
        'project.muslim.desc': 'Supported delivery of a comprehensive mobile lifestyle application for the Muslim community with Scrum framework.',
        'project.kp2mi.role': 'Role: Project Manager Lead',
        'project.kp2mi.desc': 'Led execution of immigration complaint form project for the Indonesian Ministry of Manpower and Immigration.',
        'project.pertamina.role': 'Role: Co-Project Manager',
        'project.pertamina.desc': 'Co-managed the merchant platform project for myPertamina with structured coordination and delivery tracking.',
        'skills.kicker': 'Core Strengths',
        'skills.title': 'Built from management fundamentals, product thinking, data science, and communication.',
        'skills.intro': 'A diverse skill set combining hard skills, soft skills, and technical tools for end-to-end delivery.',
        'skills.hardTitle': 'Hard Skills',
        'skills.softTitle': 'Soft Skills',
        'skills.softwareTitle': 'Software & Tools',
        'skills.frameworkTitle': 'Frameworks & Methods',
        'skills.interpersonalTitle': 'Interpersonal Skills',
        'skills.langTitle': 'Language',
        'org.kicker': 'Community & Leadership',
        'org.title': 'Organizational experience that shaped leadership and collaboration.',
        'org.intro': 'Active involvement in campus organizations, startup communities, and social initiatives.',
        'org.bim.title': 'BIM (Business Initiative Movement)',
        'org.bim.role': 'Member of the Community',
        'org.bim.desc': 'A collection of startup founders in Bandung. Participating in community events from startup training to soft skills development and cross-team collaborations.',
        'org.komunitas.title': 'Komunitas Startup Jogja',
        'org.komunitas.role': 'Member of the Community',
        'org.komunitas.desc': 'A collection of startup founders in Jakarta. Participating in community events and collaborations between teams and startups.',
        'org.fossei.title': 'FoSSEI Regional Yogyakarta',
        'org.fossei.role': 'Secretary of Media and Technology Department',
        'org.fossei.desc': 'Responsible for providing education on Sharia Economics and optimizing potential talent interests of cadres through competitions and work programs.',
        'org.bem.title': 'BEM Alma Ata University',
        'org.bem.role': 'Coordinator of the Ministry of Home Affairs',
        'org.bem.desc': 'Coordinated campus activities, actively addressed campus issues and problems, and served as a forum for student aspirations regarding campus policies.',
        'org.duta.title': 'Duta UMKM Ekonom Rabbani',
        'org.duta.role': 'Rabbani Economist MSME Ambassador',
        'org.duta.desc': 'Served as MSME Ambassador under FOSSEI in Yogyakarta, participating in startup training events and facilitating collaborations between teams and startups.',
        'org.hima.title': 'Information Systems Student Association',
        'org.hima.role': 'External Department Coordinator',
        'org.hima.desc': 'Built external relations between study programs, contributed to activities outside the study program scope, and ensured work program success.',
        'honors.kicker': 'Recognition',
        'honors.title': 'Honors, awards, and competitive achievements.',
        'honors.intro': 'Recognition from campus ambassador programs, business plan competitions, and national-level contests.',
        'honors.uaa.place': '1st Place — Campus Ambassador',
        'honors.uaa.desc': 'Winner as 1st Place Campus Ambassador of Alma Ata University in 2022.',
        'honors.pkm.place': '1st Place — PKM-K (Entrepreneurship)',
        'honors.pkm.desc': 'Won the campus level PKM idea competition in the field of entrepreneurship in 2023 and 2022.',
        'honors.gemastik.place': 'Participant — User Experience',
        'honors.gemastik.desc': 'Participated in Gemastik competition in the field of User Experience Design.',
        'education.kicker': 'Credentials',
        'education.title': 'Academic foundation and certifications that support execution quality.',
        'education.intro': 'A mix of formal education and practical upskilling in management, product, data, and digital technology.',
        'education.cardOneDetail': 'Data Analysis, Data Visualization, System Integration, Design Thinking, UML, Business Process Analysis, Supply Chain Management, Basic Programming, Risk Management, Enterprise Architecture, Digital Innovation, and more.',
        'education.cardOneHighlight': 'GPA 3.81/4.00 · AAEPT 564 · TOEFL 633',
        'education.cardTwoDetail': '32-hour training on IT roles, project management, information security, vendor coordination, application lifecycle, virtualization, storage solutions, and security logging operations.',
        'education.cardTwoHighlight': 'Final Grade: 89.8/100',
        'education.certTitle': 'Certifications',
        'education.bootcampTitle': 'Bootcamp & Training',
        'bootcamp.binar.li1': 'Deliver Pitch Deck Products to Stakeholders',
        'bootcamp.binar.li2': 'Waterfall and Agile methodologies',
        'bootcamp.binar.li3': 'Six Thinking Hat implementation',
        'bootcamp.binar.li4': 'Scrum Framework (Agile Method)',
        'bootcamp.binar.li5': 'Basic Product Management & Data Analysis',
        'bootcamp.binar.li6': 'Product Discovery & Product Economics',
        'bootcamp.binar.li7': 'SDLC in product development',
        'bootcamp.kominfo.li1': 'Data Screening & Data Analysis',
        'bootcamp.kominfo.li2': 'Data Objects & Basic Analysis',
        'bootcamp.kominfo.li3': 'Data Construction and Documentation',
        'bootcamp.kominfo.li4': 'Model Design Strategies',
        'bootcamp.kominfo.li5': 'Machine Learning Model Implementation',
        'bootcamp.kominfo.li6': 'Models Evaluation and Interpretation',
        'bootcamp.micro.li1': 'AI and Cloud Computing Introduction',
        'bootcamp.micro.li2': 'Machine Learning: Supervised & Unsupervised',
        'bootcamp.micro.li3': 'Gemini for Google Cloud',
        'bootcamp.micro.li4': 'Cloud Digital Leader',
        'bootcamp.micro.li5': 'Generative AI',
        'bootcamp.dsarea.li1': 'Excel for Advanced',
        'bootcamp.dsarea.li2': 'Excel Data Analyst',
        'bootcamp.dsarea.li3': 'Python',
        'bootcamp.dsarea.li4': 'SPSS',
        'bootcamp.dsarea.li5': 'R-Stats',
        'bootcamp.dsarea.li6': 'SQL',
        'bootcamp.dqlab.li1': 'Retail Market Basket Analysis',
        'bootcamp.dqlab.li2': 'R Language Programming',
        'bootcamp.dqlab.li3': 'Data Types and Variables in R',
        'bootcamp.dqlab.li4': 'Data Science Fundamentals',
        'bootcamp.myskill.li1': 'Fundamental UI-UX Design',
        'bootcamp.myskill.li2': 'UX Design, Research & Writing',
        'bootcamp.myskill.li3': 'Wireframing',
        'bootcamp.myskill.li4': 'Introduction to Figma',
        'bootcamp.myskill.li5': 'Visual Design Mockup',
        'bootcamp.myskill.li6': 'High Fidelity Prototype',
        'contact.kicker': 'Contact',
        'contact.title': 'Let\'s build something structured, useful, and well-executed.',
        'contact.intro': 'Open to professional opportunities, collaboration, and conversations around project delivery, product direction, and digital execution.',
        'contact.emailLabel': 'Email',
        'contact.phoneLabel': 'Phone',
        'contact.linkedinLabel': 'LinkedIn',
        'contact.portfolioLabel': 'Portfolio',
        'contact.locationLabel': 'Location',
        'contact.locationValue': 'Bantul, Yogyakarta, Indonesia',
        'gallery.kicker': 'Project Gallery',
        'gallery.title': 'Screenshots & activity highlights across projects.',
        'gallery.intro': 'A visual look at dashboards, platforms, and documentation from the initiatives I led or contributed to.',
        'footer.copy': '\u00a9 2026 Medy Febriyansyah, S.Kom., CITM. Designed to communicate clarity, leadership, and product-focused execution.'
    },
    id: {
        'nav.home': 'Beranda',
        'nav.about': 'Tentang',
        'nav.experience': 'Pengalaman',
        'nav.projects': 'Proyek',
        'nav.skills': 'Keahlian',
        'nav.gallery': 'Galeri',
        'nav.organization': 'Organisasi',
        'nav.education': 'Pendidikan',
        'nav.contact': 'Kontak',
        'hero.kicker': 'PORTOFOLIO / PERSONAL BRAND',
        'hero.subtitle': 'Manajemen Proyek · Strategi Produk · Sains Data',
        'hero.greeting': 'Halo, saya Medy Febriyansyah',
        'hero.title': 'S.Kom., CITM — Membangun kejelasan, momentum, dan eksekusi di berbagai produk digital.',
        'hero.badgeOne': 'Manajemen Proyek',
        'hero.badgeTwo': 'Strategi Produk',
        'hero.badgeThree': 'Sains Data',
        'hero.descriptionPrimary': 'Lulusan Sistem Informasi dengan pengalaman langsung yang kuat di Manajemen Produk, Manajemen Proyek, dan Sains Data. Terampil dalam Agile & Scrum, product discovery, komunikasi stakeholder, analisis data, dan visualisasi data.',
        'hero.descriptionSecondary': 'Bersemangat dalam mengubah wawasan berbasis data menjadi strategi yang dapat ditindaklanjuti untuk meningkatkan pengambilan keputusan, nilai produk, dan pengalaman pengguna.',
        'hero.ctaPrimary': 'Mari Bekerja Sama',
        'hero.ctaSecondary': 'Lihat Proyek',
        'hero.trustOne': '8+ peran PM',
        'hero.trustTwo': '15+ inisiatif digital',
        'hero.trustThree': 'Bersertifikasi CITM',
        'hero.trustFour': 'IPK 3.81',
        'hero.trustFive': 'TOEFL 633',
        'hero.snapshotLabel': 'Ringkasan Profesional',
        'hero.snapshotTitle': 'Percaya diri, mudah diajak bekerja sama, dan siap memimpin delivery yang bermakna.',
        'hero.snapshotBadge': 'PM · Produk · Data',
        'hero.contactLabel': 'Kontak Langsung',
        'about.kicker': 'Tentang Saya',
        'about.title': 'Lulusan Sistem Informasi dengan passion di eksekusi produk, proyek, dan berbasis data.',
        'about.intro': 'Lulusan Sistem Informasi, dengan minat kuat dan pengalaman langsung di Manajemen Produk, Manajemen Proyek, dan Sains Data.',
        'about.lead': 'Terampil dalam framework Agile & Scrum, product discovery, manajemen siklus hidup produk, komunikasi stakeholder, analisis data, dan visualisasi data.',
        'about.paraOne': 'Berpengalaman dalam menerapkan design thinking, analisis bisnis, dan pemodelan keuangan untuk mendorong pertumbuhan produk dan kesuksesan proyek.',
        'about.paraTwo': 'Bersemangat mengubah wawasan berbasis data menjadi strategi yang dapat ditindaklanjuti untuk meningkatkan pengambilan keputusan, nilai produk, dan pengalaman pengguna.',
        'about.paraThree': 'IPK 3.81/4.00 · AAEPT 564 · TOEFL 633',
        'about.statOne': 'Peran proyek & produk',
        'about.statTwo': 'Inisiatif digital selesai',
        'about.statThree': 'IPK Sistem Informasi',
        'about.statFour': 'Skor TOEFL',
        'about.highKickerOne': 'Kepemimpinan',
        'about.highTitleOne': 'Manajemen Proyek & Produk',
        'about.highDescOne': 'Memimpin tim lintas fungsi, mengelola stakeholder, dan mengirimkan produk digital menggunakan framework Agile & Scrum.',
        'about.highKickerTwo': 'Analisis',
        'about.highTitleTwo': 'Sains Data & Analitik',
        'about.highDescTwo': 'Penyaringan data, analisis, implementasi machine learning, dan visualisasi data untuk mendorong keputusan bisnis.',
        'about.highKickerThree': 'Desain',
        'about.highTitleThree': 'UI/UX & Design Thinking',
        'about.highDescThree': 'Menerapkan metodologi design thinking, wireframing, prototyping, dan riset pengguna untuk menciptakan pengalaman produk yang berdampak.',
        'experience.kicker': 'Perjalanan Karir',
        'experience.title': 'Pengalaman profesional di manajemen proyek, strategi produk, dan eksekusi digital.',
        'experience.intro': 'Dari startup hingga klien enterprise, setiap peran memperkuat kemampuan saya dalam memimpin delivery, menyelaraskan stakeholder, dan mendorong nilai produk.',
        'exp.gitsPm.summary': 'Memimpin beberapa proyek skala enterprise dengan kepemilikan penuh atas delivery, penyelarasan stakeholder, dan koordinasi tim.',
        'exp.gitsPm.li1': 'Product Owner dari Product Carte',
        'exp.gitsPm.li2': 'Project Manager JRKU Approval dan Mobile Service',
        'exp.gitsPm.li3': 'Project Manager JRKU Rebuild',
        'exp.gitsPm.li4': 'Project Manager JRKU Eksternal dan Web Partner',
        'exp.gitsPm.li5': 'Project Manager Tellin Batic 2026',
        'exp.gitsPm.li6': 'Project Manager Warehouse Management System PLN Kaltimra',
        'exp.gitsPm.li7': 'Project Manager Danone Adop Asset',
        'exp.gitsPm.li8': 'Project Manager Auresys Audit AI Platform',
        'exp.gitsIntern.summary': 'Mengelola dan bersama mengelola beberapa inisiatif skala enterprise dengan eksekusi terstruktur dan koordinasi stakeholder.',
        'exp.gitsIntern.li1': 'Project Manager Warehouse Management System PLN Kaltimra',
        'exp.gitsIntern.li2': 'Project Manager Danone Adop Asset',
        'exp.gitsIntern.li3': 'Co-Project Manager Jasa Raharja JRKU Employee',
        'exp.gitsIntern.li4': 'Co-Project Manager myPertamina Merchant',
        'exp.gitsIntern.li5': 'Co-Project Manager Auresys Audit AI Platform',
        'exp.qiscus.summary': 'Memimpin eksekusi 7 inisiatif AI utama dengan koordinasi Agile, komunikasi klien, dan manajemen tim lintas fungsi.',
        'exp.qiscus.li1': 'Memimpin eksekusi Proyek KP2MI (Form Pengaduan Imigrant)',
        'exp.qiscus.li2': 'Lead Assistant Project Paragon AI',
        'exp.qiscus.li3': 'Memimpin eksekusi Proyek Instaperfect AI',
        'exp.qiscus.li4': 'Memimpin eksekusi Proyek OMG AI',
        'exp.qiscus.li5': 'Memimpin eksekusi Proyek Paragon',
        'exp.qiscus.li6': 'Memimpin eksekusi Proyek IZI Custom Agent Allocation',
        'exp.qiscus.li7': 'Lead Assistant Project Makeover AI',
        'exp.wesclic.summary': 'Memimpin proyek pengembangan aplikasi dan inisiatif desain UI/UX menggunakan metodologi Agile Scrum dan Asana untuk manajemen.',
        'exp.wesclic.li1': 'Lead Project Zendo Apps (Mobile Transportation)',
        'exp.wesclic.li2': 'Lead Project Merapi Apps (Sistem Informasi Puskesmas Wonosobo)',
        'exp.wesclic.li3': 'Lead Project Sumu Apps (Mobile Lifestyle Muhammadiyah)',
        'exp.wesclic.li4': 'Lead Assistant Project Muslim Super Apps (Mobile Lifestyle Muslim)',
        'exp.wesclic.li5': 'Lead UI/UX Design untuk berbagai proyek',
        'exp.rakaminPm.summary': 'Membangun fondasi manajemen produk dalam manajemen stakeholder, problem framing, dan rilis produk.',
        'exp.rakaminPm.li1': 'Manajemen Stakeholder',
        'exp.rakaminPm.li2': 'Problem Framing',
        'exp.rakaminPm.li3': 'Rilis Produk',
        'exp.rakaminUx.summary': 'Mempelajari dan menerapkan fundamental UI/UX melalui metodologi design thinking dan pembuatan prototipe.',
        'exp.rakaminUx.li1': 'Fundamental UI/UX & Design Thinking',
        'exp.rakaminUx.li2': 'Riset Pengguna dan Produk',
        'exp.rakaminUx.li3': 'User Journey & Desain Visual',
        'exp.rakaminUx.li4': 'Pembuatan Prototipe',
        'exp.vinix.summary': 'Mengoptimalkan penjualan produk pelatihan melalui analisis pasar dan strategi marketing funnel.',
        'exp.vinix.li1': 'Merancang seri informasi produk melalui media sosial',
        'exp.vinix.li2': 'Menganalisis ukuran pasar untuk program pelatihan',
        'exp.vinix.li3': 'Membuat Marketing Funnel untuk segmentasi pengguna',
        'exp.tam.summary': 'Mengoptimalkan penjualan produk melalui pemasaran media sosial dan strategi brand awareness.',
        'exp.tam.li1': 'Mengoptimalkan penjualan produk melalui saluran digital',
        'exp.tam.li2': 'Merancang konten informasi produk untuk media sosial',
        'projects.kicker': 'Proyek Unggulan',
        'projects.title': 'Proyek yang mencerminkan jangkauan, kepemilikan, dan pemahaman produk.',
        'projects.intro': 'Dari platform AI dan sistem enterprise hingga aplikasi mobile dan redesign UX — setiap proyek memperkuat kapabilitas delivery saya.',
        'project.wms.role': 'Peran: Project Manager',
        'project.wms.desc': 'Memimpin pengiriman platform manajemen gudang dengan penekanan pada kejelasan operasional, koordinasi stakeholder, dan alur eksekusi.',
        'project.ai.role': 'Peran: Project Manager Lead',
        'project.ai.desc': 'Mengelola pengiriman AI Agents untuk merek Instaperfect, OMG, Paragon, dan Makeover di berbagai platform media sosial.',
        'project.auresys.role': 'Peran: Project Manager',
        'project.auresys.desc': 'Mengelola pengembangan platform audit berbasis AI dengan koordinasi tim lintas fungsi dan pengiriman Agile.',
        'project.jrku.role': 'Peran: Project Manager',
        'project.jrku.desc': 'Mengelola proyek JRKU Approval, Mobile Service, Rebuild, Eksternal, dan Web Partner untuk Jasa Raharja.',
        'project.zendo.role': 'Peran: Project Manager',
        'project.zendo.desc': 'Memimpin pengiriman aplikasi mobile di bidang transportasi, sistem informasi puskesmas, dan gaya hidup Muhammadiyah.',
        'project.izi.role': 'Peran: Project Manager',
        'project.izi.desc': 'Mengembangkan sistem yang secara otomatis menetapkan agen broadcasting saat pengguna merespons broadcast, memastikan integrasi agen-broadcast yang stabil.',
        'project.ecolog.role': 'Peran: Scrum Master & Lead Business',
        'project.ecolog.desc': 'Membangun sistem pencatatan limbah untuk TPS Gosari dengan framework Scrum, riset pasar (TAM, SAM, SOM), dan pengumpulan kebutuhan stakeholder.',
        'project.sukabuah.role': 'Peran: Scrum Master',
        'project.sukabuah.desc': 'Memfasilitasi siklus produk digital tiga sprint dengan pembuatan PRD, pitch deck, design thinking, dan pelacakan burndown chart.',
        'project.ml.role': 'Peran: Data Scientist',
        'project.ml.desc': 'Mengidentifikasi kombinasi paket produk menggunakan pemrograman R, market basket analysis, dan analisis statistik data transaksi penjualan.',
        'project.maxim.role': 'Peran: UI/UX Designer',
        'project.maxim.desc': 'Merombak aplikasi Maxim dengan metode Design Thinking, termasuk empathy maps, wireframing, design system, dan prototipe hi-fi.',
        'project.ecoenzym.role': 'Peran: Ketua / Founder',
        'project.ecoenzym.desc': 'Membuat produk pembersih dari limbah buah dengan analisis pemasaran 7P, proyeksi keuangan, dan strategi rencana pertumbuhan.',
        'project.muslim.role': 'Peran: Assistant Project Manager',
        'project.muslim.desc': 'Mendukung pengiriman aplikasi gaya hidup mobile yang komprehensif untuk komunitas Muslim dengan framework Scrum.',
        'project.kp2mi.role': 'Peran: Project Manager Lead',
        'project.kp2mi.desc': 'Memimpin eksekusi proyek formulir pengaduan imigran untuk Kementerian Tenaga Kerja dan Imigrasi Indonesia.',
        'project.pertamina.role': 'Peran: Co-Project Manager',
        'project.pertamina.desc': 'Bersama mengelola proyek platform merchant untuk myPertamina dengan koordinasi terstruktur dan pelacakan pengiriman.',
        'skills.kicker': 'Kekuatan Inti',
        'skills.title': 'Dibangun dari fondasi manajemen, product thinking, sains data, dan komunikasi.',
        'skills.intro': 'Keterampilan beragam menggabungkan hard skills, soft skills, dan alat teknis untuk pengiriman end-to-end.',
        'skills.hardTitle': 'Hard Skills',
        'skills.softTitle': 'Soft Skills',
        'skills.softwareTitle': 'Software & Tools',
        'skills.frameworkTitle': 'Framework & Metode',
        'skills.interpersonalTitle': 'Keterampilan Interpersonal',
        'skills.langTitle': 'Bahasa',
        'org.kicker': 'Komunitas & Kepemimpinan',
        'org.title': 'Pengalaman organisasi yang membentuk kepemimpinan dan kolaborasi.',
        'org.intro': 'Keterlibatan aktif dalam organisasi kampus, komunitas startup, dan inisiatif sosial.',
        'org.bim.title': 'BIM (Business Initiative Movement)',
        'org.bim.role': 'Anggota Komunitas',
        'org.bim.desc': 'Kumpulan pendiri startup di Bandung. Berpartisipasi dalam acara komunitas dari pelatihan startup hingga pengembangan soft skills dan kolaborasi antar tim.',
        'org.komunitas.title': 'Komunitas Startup Jogja',
        'org.komunitas.role': 'Anggota Komunitas',
        'org.komunitas.desc': 'Kumpulan pendiri startup di Jakarta. Berpartisipasi dalam acara komunitas dan kolaborasi antar tim dan startup.',
        'org.fossei.title': 'FoSSEI Regional Yogyakarta',
        'org.fossei.role': 'Sekretaris Departemen Media dan Teknologi',
        'org.fossei.desc': 'Bertanggung jawab memberikan edukasi tentang Ekonomi Syariah dan mengoptimalkan potensi minat bakat kader melalui kompetisi dan program kerja.',
        'org.bem.title': 'BEM Universitas Alma Ata',
        'org.bem.role': 'Koordinator Kementerian Dalam Negeri',
        'org.bem.desc': 'Mengkoordinasikan kegiatan kampus, secara aktif menangani isu dan masalah kampus, serta menjadi wadah aspirasi mahasiswa terkait kebijakan kampus.',
        'org.duta.title': 'Duta UMKM Ekonom Rabbani',
        'org.duta.role': 'Duta UMKM Ekonom Rabbani',
        'org.duta.desc': 'Menjadi Duta UMKM di bawah FOSSEI Yogyakarta, berpartisipasi dalam acara pelatihan startup dan memfasilitasi kolaborasi antar tim dan startup.',
        'org.hima.title': 'Himpunan Mahasiswa Sistem Informasi',
        'org.hima.role': 'Koordinator Departemen Eksternal',
        'org.hima.desc': 'Membangun hubungan eksternal antar program studi, berkontribusi pada kegiatan di luar lingkup program studi, dan memastikan keberhasilan program kerja.',
        'honors.kicker': 'Penghargaan',
        'honors.title': 'Penghargaan, prestasi, dan pencapaian kompetitif.',
        'honors.intro': 'Pengakuan dari program duta kampus, kompetisi business plan, dan kontes tingkat nasional.',
        'honors.uaa.place': 'Juara 1 — Duta Kampus',
        'honors.uaa.desc': 'Pemenang sebagai Duta Kampus Universitas Alma Ata tahun 2022.',
        'honors.pkm.place': 'Juara 1 — PKM-K (Kewirausahaan)',
        'honors.pkm.desc': 'Memenangkan kompetisi ide PKM tingkat kampus di bidang kewirausahaan tahun 2023 dan 2022.',
        'honors.gemastik.place': 'Peserta — User Experience',
        'honors.gemastik.desc': 'Berpartisipasi dalam kompetisi Gemastik di bidang User Experience Design.',
        'education.kicker': 'Kredensial',
        'education.title': 'Fondasi akademik dan sertifikasi yang mendukung kualitas eksekusi.',
        'education.intro': 'Kombinasi pendidikan formal dan upskilling praktis di bidang manajemen, produk, data, dan teknologi digital.',
        'education.cardOneDetail': 'Analisis Data, Visualisasi Data, Integrasi Sistem, Design Thinking, UML, Analisis Proses Bisnis, Manajemen Rantai Pasok, Pemrograman Dasar, Manajemen Risiko, Arsitektur Enterprise, Inovasi Digital, dan lainnya.',
        'education.cardOneHighlight': 'IPK 3.81/4.00 · AAEPT 564 · TOEFL 633',
        'education.cardTwoDetail': 'Pelatihan 32 jam tentang peran IT, manajemen proyek, keamanan informasi, koordinasi vendor, siklus hidup aplikasi, virtualisasi, solusi penyimpanan, dan operasi security logging.',
        'education.cardTwoHighlight': 'Nilai Akhir: 89.8/100',
        'education.certTitle': 'Sertifikasi',
        'education.bootcampTitle': 'Bootcamp & Pelatihan',
        'bootcamp.binar.li1': 'Menyampaikan Pitch Deck Produk ke Stakeholder',
        'bootcamp.binar.li2': 'Metodologi Waterfall dan Agile',
        'bootcamp.binar.li3': 'Implementasi Six Thinking Hat',
        'bootcamp.binar.li4': 'Scrum Framework (Metode Agile)',
        'bootcamp.binar.li5': 'Manajemen Produk Dasar & Analisis Data',
        'bootcamp.binar.li6': 'Product Discovery & Product Economics',
        'bootcamp.binar.li7': 'SDLC dalam pengembangan produk',
        'bootcamp.kominfo.li1': 'Penyaringan Data & Analisis Data',
        'bootcamp.kominfo.li2': 'Objek Data & Analisis Dasar',
        'bootcamp.kominfo.li3': 'Konstruksi Data dan Dokumentasi',
        'bootcamp.kominfo.li4': 'Strategi Desain Model',
        'bootcamp.kominfo.li5': 'Implementasi Model Machine Learning',
        'bootcamp.kominfo.li6': 'Evaluasi dan Interpretasi Model',
        'bootcamp.micro.li1': 'Pengantar AI dan Cloud Computing',
        'bootcamp.micro.li2': 'Machine Learning: Supervised & Unsupervised',
        'bootcamp.micro.li3': 'Gemini untuk Google Cloud',
        'bootcamp.micro.li4': 'Cloud Digital Leader',
        'bootcamp.micro.li5': 'Generative AI',
        'bootcamp.dsarea.li1': 'Excel untuk Lanjutan',
        'bootcamp.dsarea.li2': 'Excel Data Analyst',
        'bootcamp.dsarea.li3': 'Python',
        'bootcamp.dsarea.li4': 'SPSS',
        'bootcamp.dsarea.li5': 'R-Stats',
        'bootcamp.dsarea.li6': 'SQL',
        'bootcamp.dqlab.li1': 'Retail Market Basket Analysis',
        'bootcamp.dqlab.li2': 'Pemrograman Bahasa R',
        'bootcamp.dqlab.li3': 'Tipe Data dan Variabel di R',
        'bootcamp.dqlab.li4': 'Fundamental Sains Data',
        'bootcamp.myskill.li1': 'Desain UI-UX Fundamental',
        'bootcamp.myskill.li2': 'Desain UX, Riset & Menulis',
        'bootcamp.myskill.li3': 'Wireframing',
        'bootcamp.myskill.li4': 'Pengenalan Figma',
        'bootcamp.myskill.li5': 'Mockup Desain Visual',
        'bootcamp.myskill.li6': 'Prototipe High Fidelity',
        'contact.kicker': 'Kontak',
        'contact.title': 'Mari membangun sesuatu yang terstruktur, berguna, dan dieksekusi dengan baik.',
        'contact.intro': 'Terbuka untuk peluang profesional, kolaborasi, dan diskusi seputar delivery proyek, arah produk, dan eksekusi digital.',
        'contact.emailLabel': 'Email',
        'contact.phoneLabel': 'Telepon',
        'contact.linkedinLabel': 'LinkedIn',
        'contact.portfolioLabel': 'Portofolio',
        'contact.locationLabel': 'Lokasi',
        'contact.locationValue': 'Bantul, Yogyakarta, Indonesia',
        'gallery.kicker': 'Galeri Proyek',
        'gallery.title': 'Cuplikan layar & sorotan aktivitas di berbagai proyek.',
        'gallery.intro': 'Tampilan visual dari dashboard, platform, dan dokumentasi dari inisiatif yang saya pimpin atau kontribusikan.',
        'footer.copy': '\u00a9 2026 Medy Febriyansyah, S.Kom., CITM. Dirancang untuk menyampaikan kejelasan, kepemimpinan, dan eksekusi yang berfokus pada produk.'
    }
};

const updateLanguageToggle = (language) => {
    if (!langToggle) return;
    langToggle.textContent = language === 'en' ? 'EN' : 'ID';
    langToggle.setAttribute('aria-label', language === 'en' ? 'Switch language to Indonesian' : 'Ganti bahasa ke Inggris');
};

const applyLanguage = (language) => {
    const dictionary = translations[language] || translations.en;

    translatableNodes.forEach((node) => {
        const key = node.dataset.i18n;
        if (!key || !dictionary[key]) return;
        node.textContent = dictionary[key];
    });

    document.documentElement.lang = language;
    localStorage.setItem(languageStorageKey, language);
    updateLanguageToggle(language);
};

const initialLanguage = localStorage.getItem(languageStorageKey) === 'id' ? 'id' : 'en';
applyLanguage(initialLanguage);

if (langToggle) {
    langToggle.addEventListener('click', () => {
        const nextLanguage = document.documentElement.lang === 'id' ? 'en' : 'id';
        applyLanguage(nextLanguage);
    });
}

const closeMenu = () => {
    if (!hamburger || !navLinks) return;
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('is-open');
    document.body.classList.remove('menu-open');
};

const openMenu = () => {
    if (!hamburger || !navLinks) return;
    hamburger.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    navLinks.classList.add('is-open');
    document.body.classList.add('menu-open');
};

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.contains('is-open');
        if (isOpen) {
            closeMenu();
            return;
        }
        openMenu();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 820) {
            closeMenu();
        }
    });
}

navAnchors.forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        const targetId = anchor.getAttribute('href');
        if (!targetId || !targetId.startsWith('#')) return;

        const target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();
        closeMenu();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

const setActiveNav = () => {
    let currentId = '';
    const triggerOffset = window.innerHeight * 0.3;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= triggerOffset && rect.bottom >= triggerOffset) {
            currentId = section.id;
        }
    });

    navAnchors.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${currentId}`;
        link.classList.toggle('active', isActive);
        if (isActive) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
};

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.14,
        rootMargin: '0px 0px -30px 0px'
    }
);

revealTargets.forEach((element) => {
    element.classList.add('reveal-on-scroll');
    revealObserver.observe(element);
});

window.addEventListener('scroll', setActiveNav, { passive: true });
window.addEventListener('resize', () => {
    if (window.innerWidth > 820) {
        closeMenu();
    }
    setActiveNav();
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('.lightbox-image');
const lightboxClose = lightbox.querySelector('.lightbox-close');
const lightboxPrev = lightbox.querySelector('.lightbox-prev');
const lightboxNext = lightbox.querySelector('.lightbox-next');

const allGalleryImages = Array.from(document.querySelectorAll('.gallery-card img'));

const openLightbox = (imgElement) => {
    const index = allGalleryImages.indexOf(imgElement);
    if (index === -1) return;
    lightboxImage.src = imgElement.src;
    lightboxImage.dataset.index = index;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
};

const navigateLightbox = (direction) => {
    const currentIndex = parseInt(lightboxImage.dataset.index, 10);
    if (isNaN(currentIndex)) return;
    const nextIndex = (currentIndex + direction + allGalleryImages.length) % allGalleryImages.length;
    const nextImg = allGalleryImages[nextIndex];
    lightboxImage.src = nextImg.src;
    lightboxImage.dataset.index = nextIndex;
};

allGalleryImages.forEach((img) => {
    img.addEventListener('click', () => openLightbox(img));
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});
lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
lightboxNext.addEventListener('click', () => navigateLightbox(1));

document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
});

document.addEventListener('click', (event) => {
    if (!hamburger || !navLinks) return;
    const clickedInsideMenu = navLinks.contains(event.target) || hamburger.contains(event.target);
    if (!clickedInsideMenu) {
        closeMenu();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeMenu();
    }
});

setActiveNav();
