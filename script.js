// Ambil elemen-elemen utama yang dipakai untuk navigasi, animasi, dan toggle bahasa.
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navAnchors = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('main section[id]');
const revealTargets = document.querySelectorAll('.hero-panel, .about-text-card, .stat-card, .highlight-card, .exp-card, .project-card, .skill-group, .edu-card, .contact-method');
const langToggle = document.querySelector('[data-lang-toggle]');
const translatableNodes = document.querySelectorAll('[data-i18n]');
const languageStorageKey = 'medy-portfolio-language';

// Kamus teks untuk dua bahasa. Key di sini dipasangkan dengan atribut data-i18n di HTML.
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        'hero.kicker': 'PORTFOLIO / PERSONAL BRAND',
        'hero.subtitle': 'Project Management · Product Strategy · Digital Execution',
        'hero.greeting': 'Hello, I’m Medy Febriyansyah',
        'hero.title': 'Building clarity, momentum, and execution across digital products.',
        'hero.badgeOne': 'Project Management',
        'hero.badgeTwo': 'Product Strategy',
        'hero.descriptionPrimary': 'I help teams translate business goals into structured delivery, better stakeholder alignment, and stronger product outcomes.',
        'hero.descriptionSecondary': 'Focused on digital project execution, cross-functional coordination, and product thinking that makes delivery more organized, intentional, and valuable.',
        'hero.ctaPrimary': 'Let’s Work Together',
        'hero.ctaSecondary': 'Explore Projects',
        'hero.trustOne': '5+ PM roles',
        'hero.trustTwo': '10+ digital initiatives',
        'hero.trustThree': 'CITM certified',
        'hero.trustFour': 'Information Systems graduate',
        'hero.snapshotLabel': 'Professional Snapshot',
        'hero.snapshotTitle': 'Confident, approachable, and ready to lead meaningful delivery.',
        'hero.snapshotBadge': 'PM · Product Strategy',
        'hero.contactLabel': 'Direct Contact',
        'about.kicker': 'Value proposition',
        'about.title': 'Strategic thinking with execution discipline.',
        'about.intro': 'A profile built for recruiters, collaborators, and teams who need someone that can drive momentum from planning to delivery.',
        'experience.kicker': 'Experience impact',
        'experience.title': 'Professional experience shaped by delivery, ownership, and collaboration.',
        'experience.intro': 'Each role strengthened a blend of project leadership, product thinking, and execution under real business constraints.',
        'projects.kicker': 'Selected work',
        'projects.title': 'Projects that reflect range, ownership, and product understanding.',
        'projects.intro': 'A curated view of initiatives across enterprise systems, AI products, mobile apps, and UX-driven work.',
        'skills.kicker': 'Core strengths',
        'skills.title': 'Built from management fundamentals, product thinking, and communication.',
        'skills.intro': 'Tools and skills that support planning, delivery, stakeholder handling, and better decision making.',
        'education.kicker': 'Credentials',
        'education.title': 'Academic foundation and certifications that support execution quality.',
        'education.intro': 'A mix of formal education and practical upskilling in management, product, data, and digital technology.',
        'education.cardOneTitle': 'S1 Information Systems',
        'education.cardOneInstitution': 'Alma Ata University, Yogyakarta',
        'education.cardOneDate': 'August 2021 – September 2025',
        'education.cardOneHighlight': 'GPA 3.81/4.00 · TOEFL 633',
        'education.cardTwoTitle': 'Certified IT Manager (CITM)',
        'education.cardTwoInstitution': 'ESAS Management, Jakarta',
        'education.cardTwoDate': 'April 2025',
        'education.cardTwoHighlight': 'Score 89.8/100 · 32-hour intensive training',
        'education.certTitle': 'Selected Certifications',
        'contact.kicker': 'Contact',
        'contact.title': 'Let’s build something structured, useful, and well-executed.',
        'contact.intro': 'Open to professional opportunities, collaboration, and conversations around project delivery, product direction, and digital execution.',
        'contact.emailLabel': 'Email',
        'contact.phoneLabel': 'Phone',
        'contact.linkedinLabel': 'LinkedIn',
        'contact.locationLabel': 'Location',
        'contact.locationValue': 'Bantul, Yogyakarta, Indonesia',
        'footer.copy': '© 2026 Medy Febriyansyah. Designed to communicate clarity, leadership, and product-focused execution.'
    },
    id: {
        'nav.home': 'Beranda',
        'nav.about': 'Tentang',
        'nav.experience': 'Pengalaman',
        'nav.projects': 'Proyek',
        'nav.skills': 'Keahlian',
        'nav.contact': 'Kontak',
        'hero.kicker': 'PORTOFOLIO / PERSONAL BRAND',
        'hero.subtitle': 'Manajemen Proyek · Strategi Produk · Eksekusi Digital',
        'hero.greeting': 'Halo, saya Medy Febriyansyah',
        'hero.title': 'Membangun kejelasan, momentum, dan eksekusi di berbagai produk digital.',
        'hero.badgeOne': 'Manajemen Proyek',
        'hero.badgeTwo': 'Strategi Produk',
        'hero.descriptionPrimary': 'Saya membantu tim menerjemahkan target bisnis menjadi delivery yang terstruktur, alignment stakeholder yang lebih baik, dan hasil produk yang lebih kuat.',
        'hero.descriptionSecondary': 'Berfokus pada eksekusi proyek digital, koordinasi lintas fungsi, dan product thinking yang membuat delivery lebih rapi, terarah, dan bernilai.',
        'hero.ctaPrimary': 'Mari Bekerja Sama',
        'hero.ctaSecondary': 'Lihat Proyek',
        'hero.trustOne': '5+ peran PM',
        'hero.trustTwo': '10+ inisiatif digital',
        'hero.trustThree': 'Bersertifikasi CITM',
        'hero.trustFour': 'Lulusan Sistem Informasi',
        'hero.snapshotLabel': 'Ringkasan Profesional',
        'hero.snapshotTitle': 'Percaya diri, mudah diajak bekerja sama, dan siap memimpin delivery yang bermakna.',
        'hero.snapshotBadge': 'PM · Strategi Produk',
        'hero.contactLabel': 'Kontak Langsung',
        'about.kicker': 'Nilai utama',
        'about.title': 'Berpikir strategis dengan disiplin eksekusi.',
        'about.intro': 'Profil yang dibangun untuk recruiter, kolaborator, dan tim yang membutuhkan seseorang yang mampu mendorong momentum dari perencanaan sampai delivery.',
        'experience.kicker': 'Dampak pengalaman',
        'experience.title': 'Pengalaman profesional yang dibentuk oleh delivery, ownership, dan kolaborasi.',
        'experience.intro': 'Setiap peran memperkuat kombinasi kepemimpinan proyek, product thinking, dan eksekusi di bawah kebutuhan bisnis yang nyata.',
        'projects.kicker': 'Pilihan karya',
        'projects.title': 'Proyek yang mencerminkan range, ownership, dan pemahaman produk.',
        'projects.intro': 'Gambaran terkurasi dari inisiatif di enterprise system, produk AI, aplikasi mobile, dan pekerjaan berbasis UX.',
        'skills.kicker': 'Kekuatan inti',
        'skills.title': 'Dibangun dari fondasi manajemen, product thinking, dan komunikasi.',
        'skills.intro': 'Tools dan kemampuan yang mendukung perencanaan, delivery, pengelolaan stakeholder, dan pengambilan keputusan yang lebih baik.',
        'education.kicker': 'Kredensial',
        'education.title': 'Fondasi akademik dan sertifikasi yang mendukung kualitas eksekusi.',
        'education.intro': 'Kombinasi pendidikan formal dan upskilling praktis di bidang manajemen, produk, data, dan teknologi digital.',
        'education.cardOneTitle': 'S1 Sistem Informasi',
        'education.cardOneInstitution': 'Universitas Alma Ata, Yogyakarta',
        'education.cardOneDate': 'Agustus 2021 – September 2025',
        'education.cardOneHighlight': 'IPK 3.81/4.00 · TOEFL 633',
        'education.cardTwoTitle': 'Certified IT Manager (CITM)',
        'education.cardTwoInstitution': 'ESAS Management, Jakarta',
        'education.cardTwoDate': 'April 2025',
        'education.cardTwoHighlight': 'Skor 89.8/100 · Pelatihan intensif 32 jam',
        'education.certTitle': 'Sertifikasi Pilihan',
        'contact.kicker': 'Kontak',
        'contact.title': 'Mari membangun sesuatu yang terstruktur, berguna, dan dieksekusi dengan baik.',
        'contact.intro': 'Terbuka untuk peluang profesional, kolaborasi, dan diskusi seputar delivery proyek, arah produk, dan eksekusi digital.',
        'contact.emailLabel': 'Email',
        'contact.phoneLabel': 'Telepon',
        'contact.linkedinLabel': 'LinkedIn',
        'contact.locationLabel': 'Lokasi',
        'contact.locationValue': 'Bantul, Yogyakarta, Indonesia',
        'footer.copy': '© 2026 Medy Febriyansyah. Dirancang untuk menyampaikan kejelasan, kepemimpinan, dan eksekusi yang berfokus pada produk.'
    }
};

// Ubah label tombol sesuai bahasa aktif agar user tahu klik berikutnya akan pindah ke bahasa mana.
const updateLanguageToggle = (language) => {
    if (!langToggle) return;
    langToggle.textContent = language === 'en' ? 'EN' : 'ID';
    langToggle.setAttribute('aria-label', language === 'en' ? 'Switch language to Indonesian' : 'Ganti bahasa ke Inggris');
};

// Terapkan bahasa yang dipilih ke semua elemen bertanda data-i18n lalu simpan pilihannya.
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

// Saat halaman dibuka, pakai bahasa terakhir yang disimpan. Jika belum ada, gunakan English.
const initialLanguage = localStorage.getItem(languageStorageKey) === 'id' ? 'id' : 'en';
applyLanguage(initialLanguage);

// Toggle bahasa bolak-balik antara English dan Indonesia saat tombol diklik.
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const nextLanguage = document.documentElement.lang === 'id' ? 'en' : 'id';
        applyLanguage(nextLanguage);
    });
}

// Tutup menu mobile dan kembalikan state tombol ke kondisi nonaktif.
const closeMenu = () => {
    if (!hamburger || !navLinks) return;
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('is-open');
    document.body.classList.remove('menu-open');
};

// Buka menu mobile dan tandai bahwa navigasi sedang aktif.
const openMenu = () => {
    if (!hamburger || !navLinks) return;
    hamburger.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    navLinks.classList.add('is-open');
    document.body.classList.add('menu-open');
};

// Handle klik hamburger dan pastikan menu otomatis tertutup saat keluar dari breakpoint mobile.
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

// Saat menu diklik, lakukan smooth scroll ke section tujuan lalu tutup menu mobile.
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

// Tandai link navigasi yang sedang aktif berdasarkan section yang sedang terlihat di viewport.
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