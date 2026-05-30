/* ==========================================================================
   SUPÉ SOFTWARE ENGINEERING - INTERACTIVE LOGIC (app.js)
   ========================================================================== */

// --- 1. CONFIGURAÇÃO DE INTERNACIONALIZAÇÃO (i18n) ---
const i18nConfig = {
    currentLanguage: localStorage.getItem("supe-lang") || 'pt',
    languages: [
        { code: 'pt', name: 'Português', iso: 'PT' },
        { code: 'en', name: 'English', iso: 'EN' },
        { code: 'ru', name: 'Русский', iso: 'RU' },
        { code: 'es', name: 'Español', iso: 'ES' }
    ]
};

// --- Dicionário de Traduções de Elementos por Seletores CSS ---
const translations = {
    pt: {
        // Navigation (Header & Footer)
        "#nav-item-hero, .footer-column:nth-child(1) ul li:nth-child(1) a": "Home",
        "#nav-item-dna, .footer-column:nth-child(1) ul li:nth-child(2) a": "DNA Supé",
        "#nav-item-servicos, .footer-column:nth-child(1) ul li:nth-child(3) a": "Soluções",
        "#nav-item-processo, .footer-column:nth-child(1) ul li:nth-child(4) a": "Integração",
        "#nav-item-portfolio, .footer-column:nth-child(1) ul li:nth-child(5) a": "Casos de Uso",
        "#nav-item-terminal": "Console",
        "#btn-header-cta span, .btn-cta-nav span": "Fale Conosco",
        
        // Hero
        ".hero-badge span:nth-child(2)": "Líderes em Engenharia de Software Suprema",
        ".hero-title": "Construindo o Amanhã com <span class=\"gradient-text\">Engenharia Suprema</span>",
        ".hero-description": "Integramos inteligência artificial, arquitetura robusta e design de ponta. Moldamos códigos elegantes para converter desafios de negócios complexos em softwares inovadores de escala global.",
        "#hero-cta-primary span": "Iniciar um Projeto",
        "#hero-cta-secondary span": "Explorar Soluções",
        ".scroll-text": "Deslize para integrar",
        
        // DNA
        ".dna-section .section-tag span": "Nosso DNA",
        ".dna-section h2.section-title": "Engenharia e Liderança de <span class=\"gradient-text-alt\">Elite</span>",
        ".dna-section p.section-desc": "Na Supé, entendemos que software de alto nível não se resume apenas a linhas de código. É a união simbiótica entre matemática, design e inteligência de negócios. Desenvolvemos ecossistemas integrados focados no futuro digital das corporações mais exigentes.",
        ".ceo-quote": "\"A tecnologia de verdade é invisível e perfeitamente integrada. Nosso compromisso na Supé é arquitetar sistemas que parecem simples para o usuário final, mas operam com robustez e inteligência extremas no núcleo de cada negócio.\"",
        ".ceo-name": "Josafá de Pinho Souza",
        ".ceo-title": "Fundador & CEO",
        ".stat-experience .stat-label": "Anos de Inovação",
        ".stat-satisfaction span": "Qualidade Suprema",
        
        // Soluções
        ".servicos-section .section-tag span": "Nossa Expertise",
        ".servicos-section h2.section-title": "Soluções de <span class=\"gradient-text\">Nova Geração</span>",
        ".servicos-section p.section-desc": "Do design à infraestrutura, cobrimos todo o espectro do ciclo de engenharia de software com tecnologias modernas e metodologias ágeis de ponta.",
        "#card-service-1 h3": "Sistemas Customizados",
        "#card-service-1 p": "Plataformas corporativas sob medida, APIs escaláveis e integrações complexas construídas com as tecnologias mais eficientes do mercado.",
        "#card-service-1 .card-features li:nth-child(1)": "<i data-lucide=\"check-circle-2\"></i> React / Next.js / NestJS",
        "#card-service-1 .card-features li:nth-child(2)": "<i data-lucide=\"check-circle-2\"></i> Arquitetura em Microsserviços",
        "#card-service-1 .card-features li:nth-child(3)": "<i data-lucide=\"check-circle-2\"></i> Performance Ultra Otimizada",
        
        "#card-service-2 h3": "Inteligência Artificial",
        "#card-service-2 p": "Integramos Modelos de Linguagem (LLMs), Visão Computacional e IA Generativa diretamente nos fluxos de trabalho e produtos de nossos parceiros.",
        "#card-service-2 .card-features li:nth-child(1)": "<i data-lucide=\"check-circle-2\"></i> Agentes Autônomos de IA",
        "#card-service-2 .card-features li:nth-child(2)": "<i data-lucide=\"check-circle-2\"></i> RAG (Retrieval-Augmented Generation)",
        "#card-service-2 .card-features li:nth-child(3)": "<i data-lucide=\"check-circle-2\"></i> Modelos Preditivos Dedicados",
        
        "#card-service-3 h3": "Arquitetura Cloud & DevOps",
        "#card-service-3 p": "Infraestruturas resilientes na nuvem, pipelines automatizados de CI/CD e práticas de segurança corporativa robustas baseadas em conformidade (IaC).",
        "#card-service-3 .card-features li:nth-child(1)": "<i data-lucide=\"check-circle-2\"></i> AWS / GCP / Azure",
        "#card-service-3 .card-features li:nth-child(2)": "<i data-lucide=\"check-circle-2\"></i> Kubernetes & Docker",
        "#card-service-3 .card-features li:nth-child(3)": "<i data-lucide=\"check-circle-2\"></i> Segurança Zero-Trust",
        
        "#card-service-4 h3": "Design de Experiência",
        "#card-service-4 p": "Interfaces disruptivas, protótipos de alta fidelidade e pesquisas com usuários para garantir taxas extraordinárias de adoção e engajamento digital.",
        "#card-service-4 .card-features li:nth-child(1)": "<i data-lucide=\"check-circle-2\"></i> UX Research Baseado em Dados",
        "#card-service-4 .card-features li:nth-child(2)": "<i data-lucide=\"check-circle-2\"></i> Design System Escalável",
        "#card-service-4 .card-features li:nth-child(3)": "<i data-lucide=\"check-circle-2\"></i> Animações de Altíssima Fluidez",
        
        // Processo
        ".processo-section .section-tag span": "O Motor de Integração",
        ".processo-section h2.section-title": "Nossa Engenharia <span class=\"gradient-text-alt\">na Prática</span>",
        ".processo-section p.section-desc": "Veja como integramos estratégia, desenvolvimento, inteligência artificial e computação em nuvem para criar ecossistemas digitais indestrutíveis.",
        
        // Portfólio
        ".portfolio-section .section-tag span": "Showcase Tecnológico",
        ".portfolio-section h2.section-title": "Nossas <span class=\"gradient-text\">Obras de Engenharia</span>",
        ".portfolio-section p.section-desc": "Aplicações de altíssimo desempenho, sistemas inteligentes de tomada de decisão e plataformas web construídas de ponta a ponta pela nossa equipe.",
        "#project-case-1 h3": "AetherFlow AI Enterprise",
        "#project-case-1 p": "Orquestrador inteligente de fluxos organizacionais integrado com IA Generativa privada e RAG para o setor financeiro.",
        "#project-case-1 .stat-highlight": "99.9% Disponibilidade",
        "#project-case-1 .project-link span": "Ver Detalhes",
        "#project-case-2 h3": "Helios Analytics Suite",
        "#project-case-2 p": "Dashboard de processamento de Big Data com atualizações em tempo real para controle logístico de grandes frotas transcontinentais.",
        "#project-case-2 .stat-highlight": "10M+ Eventos/sec",
        "#project-case-2 .project-link span": "Ver Detalhes",
        
        // Terminal
        ".terminal-section .section-tag span": "Console de Integração",
        ".terminal-section h2.section-title": "Interaja com o <span class=\"gradient-text-alt\">Nosso Núcleo</span>",
        ".terminal-section p.section-desc": "Experimente nossa simulação de console de engenharia em tempo real. Digite comandos ou clique nos atalhos para verificar a resiliência e compilar novos módulos.",
        ".shortcut-label": "Atalhos rápidos:",
        "#terminal-input": "Digite 'help' e aperte Enter...",
        
        // Contato
        ".contato-section .section-tag span": "Fale com Engenheiros",
        ".contato-section h2.section-title": "Pronto para Iniciar sua <span class=\"gradient-text\">Evolução Digital?</span>",
        ".contato-section p.section-desc": "Nossa equipe está pronta para desenhar a melhor arquitetura técnica sob medida para o seu desafio corporativo. Diga-nos o que você deseja criar e nós entregamos a melhor engenharia.",
        ".contact-detail-item:nth-child(1) .detail-label": "E-mail corporativo",
        ".contact-detail-item:nth-child(2) .detail-label": "Matriz",
        ".contact-detail-item:nth-child(3) .detail-label": "Privacidade & Conformidade",
        ".contact-detail-item:nth-child(3) .detail-value": "LGPD e ISO 27001 em conformidade",
        
        ".project-planner-form h3": "Planeje seu Software",
        ".form-subtitle": "Selecione suas preferências e entraremos em contato com uma proposta de arquitetura inicial.",
        "label[for='form-name']": "Seu Nome *",
        "label[for='form-email']": "E-mail Corporativo *",
        "#form-name": "Ex: Josafá de Pinho",
        "#form-email": "Ex: josafa@supe.dev",
        ".form-group:nth-child(3) > label": "Qual é a principal necessidade? *",
        ".radio-card:nth-child(1) span": "Software Customizado",
        ".radio-card:nth-child(2) span": "Integração de IA",
        ".radio-card:nth-child(3) span": "Nuvem e Escala",
        "label[for='form-message']": "Breve descrição do desafio *",
        "#form-message": "Descreva brevemente sua ideia ou o problema de negócio que deseja solucionar...",
        "#btn-submit-form span": "Enviar Requisição de Arquitetura",
        
        ".form-success-state h3": "Requisição Compilada!",
        ".form-success-state p": "Sua requisição de arquitetura foi enviada e processada. Um arquiteto de software da Supé entrará em contato em menos de 2 horas úteis.",
        "#btn-reset-form": "Enviar outra mensagem",
        
        // Footer (Extra)
        ".brand-slogan": "Engenharia de software de altíssimo desempenho. Projetando o futuro através de ecossistemas perfeitamente integrados.",
        ".footer-column:nth-child(1) h4": "Navegação",
        ".footer-column:nth-child(2) h4": "Conecte-se",
        ".footer-column:nth-child(3) h4": "Segurança e Termos",
        ".footer-column:nth-child(3) ul li:nth-child(1) a": "Privacidade",
        ".footer-column:nth-child(3) ul li:nth-child(2) a": "Termos de Uso",
        ".footer-column:nth-child(3) ul li:nth-child(3) a": "SLA de Engenharia",
        ".footer-column:nth-child(3) ul li:nth-child(4) a": "Status do Núcleo",
        ".footer-bottom p:nth-child(1)": "© 2026 Supé Software Engineering. Todos os direitos reservados. CEO Josafá de Pinho Souza.",
        ".tech-signature": "Compilado com ⚡ Vanilla HTML/CSS/JS",
        
        // Subpáginas (Geral)
        ".back-home-link": "<i data-lucide=\"arrow-left\"></i> Voltar para Home",
        ".whatsapp-tooltip": "Fale com o CEO Josafá",

        // Metadados de Títulos de Abas e Cabeçalhos específicos
        "title": "Diretrizes de Privacidade | Supé Software Engineering",
        "title-terms": "Termos de Uso | Supé Software Engineering",
        "title-sla": "SLA de Engenharia | Supé Software Engineering",
        "title-status": "Status do Núcleo | Supé Software Engineering",
        ".privacy-title": "Política de Privacidade",
        ".privacy-code": "Código do Núcleo: SP-PRIV-2026",
        ".privacy-compiled": "Última Compilação: 30 de Maio de 2026",
        ".terms-title": "Termos de Uso",
        ".terms-code": "Código do Núcleo: SP-TERMS-2026",
        ".terms-compiled": "Última Compilação: 30 de Maio de 2026",
        ".sla-title": "Acordo de SLA de Engenharia",
        ".sla-code": "Código do Núcleo: SP-SLA-ENG-3.0",
        ".sla-compiled": "Última Compilação: 30 de Maio de 2026",
        ".status-title": "Status do Núcleo",
        ".status-desc": "Mapeamento de telemetria em tempo real dos microsserviços Supé.",
        ".status-badge-text": "TODOS OS SISTEMAS ONLINE",
        ".subsystem-status-text": "OPERACIONAL",
        ".status-chart-title": "<i data-lucide=\"activity\" style=\"color: var(--accent-cyan);\"></i> Latência Geral da Rede (ms)"
    },
    en: {
        // Navigation (Header & Footer)
        "#nav-item-hero, .footer-column:nth-child(1) ul li:nth-child(1) a": "Home",
        "#nav-item-dna, .footer-column:nth-child(1) ul li:nth-child(2) a": "Supé DNA",
        "#nav-item-servicos, .footer-column:nth-child(1) ul li:nth-child(3) a": "Solutions",
        "#nav-item-processo, .footer-column:nth-child(1) ul li:nth-child(4) a": "Integration",
        "#nav-item-portfolio, .footer-column:nth-child(1) ul li:nth-child(5) a": "Cases",
        "#nav-item-terminal": "Console",
        "#btn-header-cta span, .btn-cta-nav span": "Contact Us",
        
        // Hero
        ".hero-badge span:nth-child(2)": "Leaders in Supreme Software Engineering",
        ".hero-title": "Building Tomorrow with <span class=\"gradient-text\">Supreme Engineering</span>",
        ".hero-description": "We integrate artificial intelligence, robust architecture, and cutting-edge design. We shape elegant code to convert complex business challenges into innovative global-scale software.",
        "#hero-cta-primary span": "Start a Project",
        "#hero-cta-secondary span": "Explore Solutions",
        ".scroll-text": "Scroll to integrate",
        
        // DNA
        ".dna-section .section-tag span": "Our DNA",
        ".dna-section h2.section-title": "Elite <span class=\"gradient-text-alt\">Engineering & Leadership</span>",
        ".dna-section p.section-desc": "At Supé, we understand that high-level software is not just about lines of code. It is the symbiotic union of mathematics, design, and business intelligence. We develop integrated ecosystems focused on the digital future of the most demanding corporations.",
        ".ceo-quote": "\"Real technology is invisible and perfectly integrated. Our commitment at Supé is to architect systems that look simple to the end-user, but operate with extreme robustness and intelligence at the core of each business.\"",
        ".ceo-name": "Josafá de Pinho Souza",
        ".ceo-title": "Founder & CEO",
        ".stat-experience .stat-label": "Years of Innovation",
        ".stat-satisfaction span": "Supreme Quality",
        
        // Soluções
        ".servicos-section .section-tag span": "Our Expertise",
        ".servicos-section h2.section-title": "New Generation <span class=\"gradient-text\">Solutions</span>",
        ".servicos-section p.section-desc": "From design to infrastructure, we cover the entire spectrum of the software engineering cycle with modern technologies and state-of-the-art agile methodologies.",
        "#card-service-1 h3": "Custom Systems",
        "#card-service-1 p": "Tailor-made corporate platforms, scalable APIs, and complex integrations built with the most efficient technologies on the market.",
        "#card-service-1 .card-features li:nth-child(1)": "<i data-lucide=\"check-circle-2\"></i> React / Next.js / NestJS",
        "#card-service-1 .card-features li:nth-child(2)": "<i data-lucide=\"check-circle-2\"></i> Microservices Architecture",
        "#card-service-1 .card-features li:nth-child(3)": "<i data-lucide=\"check-circle-2\"></i> Ultra Optimized Performance",
        
        "#card-service-2 h3": "Artificial Intelligence",
        "#card-service-2 p": "We integrate Language Models (LLMs), Computer Vision, and Generative AI directly into our partners' workflows and products.",
        "#card-service-2 .card-features li:nth-child(1)": "<i data-lucide=\"check-circle-2\"></i> Autonomous AI Agents",
        "#card-service-2 .card-features li:nth-child(2)": "<i data-lucide=\"check-circle-2\"></i> RAG (Retrieval-Augmented Generation)",
        "#card-service-2 .card-features li:nth-child(3)": "<i data-lucide=\"check-circle-2\"></i> Dedicated Predictive Models",
        
        "#card-service-3 h3": "Cloud & DevOps Architecture",
        "#card-service-3 p": "Resilient cloud infrastructures, automated CI/CD pipelines, and robust enterprise security practices based on compliance (IaC).",
        "#card-service-3 .card-features li:nth-child(1)": "<i data-lucide=\"check-circle-2\"></i> AWS / GCP / Azure",
        "#card-service-3 .card-features li:nth-child(2)": "<i data-lucide=\"check-circle-2\"></i> Kubernetes & Docker",
        "#card-service-3 .card-features li:nth-child(3)": "<i data-lucide=\"check-circle-2\"></i> Zero-Trust Security",
        
        "#card-service-4 h3": "Experience Design",
        "#card-service-4 p": "Disruptive interfaces, high-fidelity prototypes, and user research to ensure extraordinary rates of digital adoption and engagement.",
        "#card-service-4 .card-features li:nth-child(1)": "<i data-lucide=\"check-circle-2\"></i> Data-Driven UX Research",
        "#card-service-4 .card-features li:nth-child(2)": "<i data-lucide=\"check-circle-2\"></i> Scalable Design System",
        "#card-service-4 .card-features li:nth-child(3)": "<i data-lucide=\"check-circle-2\"></i> Ultra Fluid Animations",
        
        // Processo
        ".processo-section .section-tag span": "The Integration Engine",
        ".processo-section h2.section-title": "Our Engineering <span class=\"gradient-text-alt\">in Practice</span>",
        ".processo-section p.section-desc": "See how we integrate strategy, development, artificial intelligence, and cloud computing to create indestructible digital ecosystems.",
        
        // Portfólio
        ".portfolio-section .section-tag span": "Tech Showcase",
        ".portfolio-section h2.section-title": "Our <span class=\"gradient-text\">Engineering Masterpieces</span>",
        ".portfolio-section p.section-desc": "Ultra-performance applications, intelligent decision-making systems, and web platforms built end-to-end by our team.",
        "#project-case-1 h3": "AetherFlow AI Enterprise",
        "#project-case-1 p": "Intelligent organizational workflow orchestrator integrated with private Generative AI and RAG for the financial sector.",
        "#project-case-1 .stat-highlight": "99.9% Availability",
        "#project-case-1 .project-link span": "View Details",
        "#project-case-2 h3": "Helios Analytics Suite",
        "#project-case-2 p": "Big Data processing dashboard with real-time updates for logistical control of large transcontinental fleets.",
        "#project-case-2 .stat-highlight": "10M+ Events/sec",
        "#project-case-2 .project-link span": "View Details",
        
        // Terminal
        ".terminal-section .section-tag span": "Integration Console",
        ".terminal-section h2.section-title": "Interact with <span class=\"gradient-text-alt\">Our Core</span>",
        ".terminal-section p.section-desc": "Experience our real-time engineering console simulation. Type commands or click the shortcuts to check resilience and compile new modules.",
        ".shortcut-label": "Quick shortcuts:",
        "#terminal-input": "Type 'help' and press Enter...",
        
        // Contato
        ".contato-section .section-tag span": "Talk to Engineers",
        ".contato-section h2.section-title": "Ready to Start your <span class=\"gradient-text\">Digital Evolution?</span>",
        ".contato-section p.section-desc": "Our team is ready to design the best custom technical architecture for your corporate challenge. Tell us what you want to create and we deliver the best engineering.",
        ".contact-detail-item:nth-child(1) .detail-label": "Corporate Email",
        ".contact-detail-item:nth-child(2) .detail-label": "HQ Address",
        ".contact-detail-item:nth-child(3) .detail-label": "Privacy & Compliance",
        ".contact-detail-item:nth-child(3) .detail-value": "LGPD and ISO 27001 compliant",
        
        ".project-planner-form h3": "Plan your Software",
        ".form-subtitle": "Select your preferences and we will contact you with an initial architecture proposal.",
        "label[for='form-name']": "Your Name *",
        "label[for='form-email']": "Corporate Email *",
        "#form-name": "e.g., John Doe",
        "#form-email": "e.g., john@supe.dev",
        ".form-group:nth-child(3) > label": "What is the main requirement? *",
        ".radio-card:nth-child(1) span": "Custom Software",
        ".radio-card:nth-child(2) span": "AI Integration",
        ".radio-card:nth-child(3) span": "Cloud & Scale",
        "label[for='form-message']": "Brief description of the challenge *",
        "#form-message": "Briefly describe your idea or the business problem you want to solve...",
        "#btn-submit-form span": "Send Architecture Request",
        
        ".form-success-state h3": "Request Compiled!",
        ".form-success-state p": "Your architecture request has been sent and processed. A software architect from Supé will contact you in less than 2 business hours.",
        "#btn-reset-form": "Send another message",
        
        // Footer (Extra)
        ".brand-slogan": "Ultra-performance software engineering. Designing the future through perfectly integrated ecosystems.",
        ".footer-column:nth-child(1) h4": "Navigation",
        ".footer-column:nth-child(2) h4": "Connect",
        ".footer-column:nth-child(3) h4": "Security & Terms",
        ".footer-column:nth-child(3) ul li:nth-child(1) a": "Privacy Policy",
        ".footer-column:nth-child(3) ul li:nth-child(2) a": "Terms of Use",
        ".footer-column:nth-child(3) ul li:nth-child(3) a": "Engineering SLA",
        ".footer-column:nth-child(3) ul li:nth-child(4) a": "Core Status",
        ".footer-bottom p:nth-child(1)": "© 2026 Supé Software Engineering. All rights reserved. CEO Josafá de Pinho Souza.",
        ".tech-signature": "Compiled with ⚡ Vanilla HTML/CSS/JS",
        
        // Subpages
        ".back-home-link": "<i data-lucide=\"arrow-left\"></i> Back to Home",
        ".whatsapp-tooltip": "Talk with CEO Josafá",

        // Tab titles and header elements
        "title": "Privacy Guidelines | Supé Software Engineering",
        "title-terms": "Terms of Use | Supé Software Engineering",
        "title-sla": "Engineering SLA | Supé Software Engineering",
        "title-status": "Core Status | Supé Software Engineering",
        ".privacy-title": "Privacy Policy",
        ".privacy-code": "Core Code: SP-PRIV-2026",
        ".privacy-compiled": "Last Compiled: May 30, 2026",
        ".terms-title": "Terms of Use",
        ".terms-code": "Core Code: SP-TERMS-2026",
        ".terms-compiled": "Last Compiled: May 30, 2026",
        ".sla-title": "Engineering SLA Agreement",
        ".sla-code": "Core Code: SP-SLA-ENG-3.0",
        ".sla-compiled": "Last Compiled: May 30, 2026",
        ".status-title": "Core Status",
        ".status-desc": "Real-time telemetry mapping of Supé microservices.",
        ".status-badge-text": "ALL SYSTEMS OPERATIONAL",
        ".subsystem-status-text": "OPERATIONAL",
        ".status-chart-title": "<i data-lucide=\"activity\" style=\"color: var(--accent-cyan);\"></i> General Network Latency (ms)"
    },
    ru: {
        // Navigation (Header & Footer)
        "#nav-item-hero, .footer-column:nth-child(1) ul li:nth-child(1) a": "Главная",
        "#nav-item-dna, .footer-column:nth-child(1) ul li:nth-child(2) a": "ДНК Supé",
        "#nav-item-servicos, .footer-column:nth-child(1) ul li:nth-child(3) a": "Решения",
        "#nav-item-processo, .footer-column:nth-child(1) ul li:nth-child(4) a": "Интеграция",
        "#nav-item-portfolio, .footer-column:nth-child(1) ul li:nth-child(5) a": "Кейсы",
        "#nav-item-terminal": "Консоль",
        "#btn-header-cta span, .btn-cta-nav span": "Связаться с нами",
        
        // Hero
        ".hero-badge span:nth-child(2)": "Лидеры Высшего Инженерного Искусства",
        ".hero-title": "Строим Будущее с <span class=\"gradient-text\">Высшим Инженерным Искусством</span>",
        ".hero-description": "Мы интегрируем искусственный интеллект, надежную архитектуру и передовой дизайн. Мы создаем элегантный код для превращения сложных бизнес-задач в инновационное программное обеспечение мирового масштаба.",
        "#hero-cta-primary span": "Начать Проект",
        "#hero-cta-secondary span": "Изучить Решения",
        ".scroll-text": "Прокрутите для интеграции",
        
        // DNA
        ".dna-section .section-tag span": "Наш ДНК",
        ".dna-section h2.section-title": "Элитное <span class=\"gradient-text-alt\">Инженерное Искусство и Руководство</span>",
        ".dna-section p.section-desc": "В компании Supé мы понимаем, что высококлассное программное обеспечение — это не просто строки кода. Это симбиоз математики, дизайна и бизнес-аналитики. Мы разрабатываем интегрированные экосистемы для удовлетворения цифровых потребностей самых требовательных корпораций.",
        ".ceo-quote": "\"Настоящие технологии невидимы и идеально интегрированы. Наша цель в Supé — создавать системы, которые кажутся простыми конечному пользователю, но работают с исключительной надежностью и интеллектом в основе каждого бизнеса.\"",
        ".ceo-name": "Жозафа де Пиньо Соуза",
        ".ceo-title": "Основатель и генеральный директор (CEO)",
        ".stat-experience .stat-label": "Лет Инноваций",
        ".stat-satisfaction span": "Высшее Качество",
        
        // Soluções
        ".servicos-section .section-tag span": "Наш Опыт",
        ".servicos-section h2.section-title": "Решения <span class=\"gradient-text\">Нового Поколения</span>",
        ".servicos-section p.section-desc": "От дизайна до инфраструктуры, мы охватываем весь спектр цикла разработки ПО с использованием современных технологий и передовых гибких методологий.",
        "#card-service-1 h3": "Индивидуальные Системы",
        "#card-service-1 p": "Корпоративные платформы под заказ, масштабируемые API и сложные интеграции, построенные на самых эффективных технологиях рынка.",
        "#card-service-1 .card-features li:nth-child(1)": "<i data-lucide=\"check-circle-2\"></i> React / Next.js / NestJS",
        "#card-service-1 .card-features li:nth-child(2)": "<i data-lucide=\"check-circle-2\"></i> Микросервисная Архитектура",
        "#card-service-1 .card-features li:nth-child(3)": "<i data-lucide=\"check-circle-2\"></i> Ультра-оптимизированная Производительность",
        
        "#card-service-2 h3": "Искусственный Интеллект",
        "#card-service-2 p": "Мы внедряем языковые модели (LLM), компьютерное зрение и генеративный ИИ непосредственно в рабочие процессы и продукты наших партнеров.",
        "#card-service-2 .card-features li:nth-child(1)": "<i data-lucide=\"check-circle-2\"></i> Автономные Агенты ИИ",
        "#card-service-2 .card-features li:nth-child(2)": "<i data-lucide=\"check-circle-2\"></i> RAG (Retrieval-Augmented Generation)",
        "#card-service-2 .card-features li:nth-child(3)": "<i data-lucide=\"check-circle-2\"></i> Выделенные Прогностические Модели",
        
        "#card-service-3 h3": "Облачная Архитектура & DevOps",
        "#card-service-3 p": "Надежная облачная инфраструктура, автоматизированные конвейеры CI/CD и строгие корпоративные стандарты безопасности (IaC).",
        "#card-service-3 .card-features li:nth-child(1)": "<i data-lucide=\"check-circle-2\"></i> AWS / GCP / Azure",
        "#card-service-3 .card-features li:nth-child(2)": "<i data-lucide=\"check-circle-2\"></i> Kubernetes & Docker",
        "#card-service-3 .card-features li:nth-child(3)": "<i data-lucide=\"check-circle-2\"></i> Безопасность Zero-Trust",
        
        "#card-service-4 h3": "Дизайн Взаимодействия (UX/UI)",
        "#card-service-4 p": "Прорывные интерфейсы, высокоточные прототипы и исследования пользователей для обеспечения исключительных показателей вовлеченности.",
        "#card-service-4 .card-features li:nth-child(1)": "<i data-lucide=\"check-circle-2\"></i> UX-исследования на Основе Данных",
        "#card-service-4 .card-features li:nth-child(2)": "<i data-lucide=\"check-circle-2\"></i> Масштабируемая Система Дизайна",
        "#card-service-4 .card-features li:nth-child(3)": "<i data-lucide=\"check-circle-2\"></i> Ультра-плавная Анимация",
        
        // Processo
        ".processo-section .section-tag span": "Двигатель Интеграции",
        ".processo-section h2.section-title": "Наш Инжиниринг <span class=\"gradient-text-alt\">на Практике</span>",
        ".processo-section p.section-desc": "Узнайте, как мы объединяем стратегию, разработку, искусственный интеллект и облачные вычисления для создания неуязвимых цифровых систем.",
        
        // Portfólio
        ".portfolio-section .section-tag span": "Технологическая Витрина",
        ".portfolio-section h2.section-title": "Наши <span class=\"gradient-text\">Шедевры Инженерии</span>",
        ".portfolio-section p.section-desc": "Высокопроизводительные приложения, интеллектуальные системы принятия решений и веб-платформы, созданные нашей командой под ключ.",
        "#project-case-1 h3": "AetherFlow AI Enterprise",
        "#project-case-1 p": "Интеллектуальный оркестратор организационных рабочих процессов с интеграцией приватного генеративного ИИ и RAG для финансового сектора.",
        "#project-case-1 .stat-highlight": "99.9% Доступность",
        "#project-case-1 .project-link span": "Подробнее",
        "#project-case-2 h3": "Helios Analytics Suite",
        "#project-case-2 p": "Панель обработки больших данных с обновлениями в реальном времени для логистического контроля крупных трансконтинентальных флотов.",
        "#project-case-2 .stat-highlight": "10M+ Соб./сек",
        "#project-case-2 .project-link span": "Подробнее",
        
        // Terminal
        ".terminal-section .section-tag span": "Консоль Интеграции",
        ".terminal-section h2.section-title": "Взаимодействуйте с <span class=\"gradient-text-alt\">Нашим Ядром</span>",
        ".terminal-section p.section-desc": "Испытайте нашу симуляцию инженерной консоли в реальном времени. Вводите команды или нажимайте ярлыки, чтобы проверить устойчивость и собрать новые модули.",
        ".shortcut-label": "Быстрые клавиши:",
        "#terminal-input": "Введите 'help' и нажмите Enter...",
        
        // Contato
        ".contato-section .section-tag span": "Связь с Инженерами",
        ".contato-section h2.section-title": "Готовы Начать <span class=\"gradient-text\">Цифровую Эволюцию?</span>",
        ".contato-section p.section-desc": "Наша команда готова разработать лучшую индивидуальную техническую архитектуру для ваших корпоративных задач. Расскажите нам о своей идее, и мы предоставим лучшие инженерные решения.",
        ".contact-detail-item:nth-child(1) .detail-label": "Корпоративная Почта",
        ".contact-detail-item:nth-child(2) .detail-label": "Штаб-квартира",
        ".contact-detail-item:nth-child(3) .detail-label": "Конфиденциальность и Соответствие",
        ".contact-detail-item:nth-child(3) .detail-value": "Соответствие LGPD и ISO 27001",
        
        ".project-planner-form h3": "Запланируйте ваше ПО",
        ".form-subtitle": "Выберите ваши предпочтения, и мы свяжемся с вами с первоначальным архитектурным предложением.",
        "label[for='form-name']": "Ваше Имя *",
        "label[for='form-email']": "Корпоративная Почта *",
        "#form-name": "Например, Иван Иванов",
        "#form-email": "Например, ivan@supe.dev",
        ".form-group:nth-child(3) > label": "Каковы основные требования? *",
        ".radio-card:nth-child(1) span": "Собственное ПО",
        ".radio-card:nth-child(2) span": "Интеграция ИИ",
        ".radio-card:nth-child(3) span": "Облако и Масштаб",
        "label[for='form-message']": "Краткое описание задачи *",
        "#form-message": "Кратко опишите свою идею или бизнес-проблему, которую вы хотите решить...",
        "#btn-submit-form span": "Отправить Запрос на Архитектуру",
        
        ".form-success-state h3": "Запрос Скомпилирован!",
        ".form-success-state p": "Ваш запрос на архитектуру был отправлен и обработан. Архитектор программного обеспечения Supé свяжется с вами менее чем за 2 рабочих часа.",
        "#btn-reset-form": "Отправить другое сообщение",
        
        // Footer (Extra)
        ".brand-slogan": "Высокопроизводительное программное обеспечение. Проектирование будущего посредством идеально интегрированных экосистем.",
        ".footer-column:nth-child(1) h4": "Navigation",
        ".footer-column:nth-child(2) h4": "Связь",
        ".footer-column:nth-child(3) h4": "Безопасность & Условия",
        ".footer-column:nth-child(3) ul li:nth-child(1) a": "Политика Конфиденциальности",
        ".footer-column:nth-child(3) ul li:nth-child(2) a": "Условия Использования",
        ".footer-column:nth-child(3) ul li:nth-child(3) a": "Инженерное SLA",
        ".footer-column:nth-child(3) ul li:nth-child(4) a": "Статус Ядра",
        ".footer-bottom p:nth-child(1)": "© 2026 Supé Software Engineering. Все права защищены. Генеральный директор Josafá de Pinho Souza.",
        ".tech-signature": "Создано с помощью ⚡ Vanilla HTML/CSS/JS",
        
        // Subpages
        ".back-home-link": "<i data-lucide=\"arrow-left\"></i> Вернуться на Главную",
        ".whatsapp-tooltip": "Связаться с генеральным директором",

        // Tab titles and header elements
        "title": "Правила Конфиденциальности | Supé Software Engineering",
        "title-terms": "Условия Использования | Supé Software Engineering",
        "title-sla": "Инженерное SLA | Supé Software Engineering",
        "title-status": "Статус Ядра | Supé Software Engineering",
        ".privacy-title": "Политика конфиденциальности",
        ".privacy-code": "Код Ядра: SP-PRIV-2026",
        ".privacy-compiled": "Последняя компиляция: 30 мая 2026",
        ".terms-title": "Условия использования",
        ".terms-code": "Код Ядра: SP-TERMS-2026",
        ".terms-compiled": "Последняя компиляция: 30 мая 2026",
        ".sla-title": "Соглашение об инженерном SLA",
        ".sla-code": "Код Ядра: SP-SLA-ENG-3.0",
        ".sla-compiled": "Последняя компиляция: 30 мая 2026",
        ".status-title": "Статус Ядра",
        ".status-desc": "Картирование телеметрии микрослужб Supé в реальном времени.",
        ".status-badge-text": "ВСЕ СИСТЕМЫ РАБОТАЮТ",
        ".subsystem-status-text": "РАБОТАЕТ",
        ".status-chart-title": "<i data-lucide=\"activity\" style=\"color: var(--accent-cyan);\"></i> Общая задержка сети (мс)"
    },
    es: {
        // Navigation (Header & Footer)
        "#nav-item-hero, .footer-column:nth-child(1) ul li:nth-child(1) a": "Inicio",
        "#nav-item-dna, .footer-column:nth-child(1) ul li:nth-child(2) a": "DNA Supé",
        "#nav-item-servicos, .footer-column:nth-child(1) ul li:nth-child(3) a": "Soluciones",
        "#nav-item-processo, .footer-column:nth-child(1) ul li:nth-child(4) a": "Integración",
        "#nav-item-portfolio, .footer-column:nth-child(1) ul li:nth-child(5) a": "Casos de Uso",
        "#nav-item-terminal": "Consola",
        "#btn-header-cta span, .btn-cta-nav span": "Contáctenos",
        
        // Hero
        ".hero-badge span:nth-child(2)": "Líderes en Ingeniería de Software Suprema",
        ".hero-title": "Construyendo el Mañana con <span class=\"gradient-text\">Ingeniería Suprema</span>",
        ".hero-description": "Integramos inteligencia artificial, arquitectura robusta y diseño de vanguardia. Moldeamos código elegante para convertir desafíos de negocios complejos en software innovador de escala global.",
        "#hero-cta-primary span": "Iniciar un Proyecto",
        "#hero-cta-secondary span": "Explorar Soluciones",
        ".scroll-text": "Deslice para integrar",
        
        // DNA
        ".dna-section .section-tag span": "Nuestro DNA",
        ".dna-section h2.section-title": "Ingeniería y Liderazgo de <span class=\"gradient-text-alt\">Élite</span>",
        ".dna-section p.section-desc": "En Supé, entendemos que el software de alto nivel no se limita a líneas de código. Es la unión simbiótica entre matemáticas, diseño e inteligencia de negocios. Desarrollamos ecosistemas integrados enfocados en el futuro digital de las corporaciones más exigentes.",
        ".ceo-quote": "\"La verdadera tecnología es invisible y perfectamente integrada. Nuestro compromiso en Supé es diseñar sistemas que parezcan simples para el usuario final, pero que operen con extrema robustez e inteligencia en el núcleo de cada negocio.\"",
        ".ceo-name": "Josafá de Pinho Souza",
        ".ceo-title": "Fundador & CEO",
        ".stat-experience .stat-label": "Años de Innovación",
        ".stat-satisfaction span": "Calidad Suprema",
        
        // Soluções
        ".servicos-section .section-tag span": "Nuestra Experiencia",
        ".servicos-section h2.section-title": "Soluciones de <span class=\"gradient-text\">Nueva Generación</span>",
        ".servicos-section p.section-desc": "Desde el diseño hasta la infraestructura, cubrimos todo el espectro del ciclo de ingeniería de software con tecnologías modernas y metodologías ágiles de vanguardia.",
        "#card-service-1 h3": "Sistemas Personalizados",
        "#card-service-1 p": "Plataformas corporativas a medida, APIs escalables e integraciones complejas construidas con las tecnologías más eficientes del mercado.",
        "#card-service-1 .card-features li:nth-child(1)": "<i data-lucide=\"check-circle-2\"></i> React / Next.js / NestJS",
        "#card-service-1 .card-features li:nth-child(2)": "<i data-lucide=\"check-circle-2\"></i> Arquitectura de Microservicios",
        "#card-service-1 .card-features li:nth-child(3)": "<i data-lucide=\"check-circle-2\"></i> Rendimiento Ultra Optimizado",
        
        "#card-service-2 h3": "Inteligencia Artificial",
        "#card-service-2 p": "Integramos Modelos de Lenguaje (LLMs), Visión Artificial e IA Generativa directamente en los flujos de trabajo y productos de nuestros socios.",
        "#card-service-2 .card-features li:nth-child(1)": "<i data-lucide=\"check-circle-2\"></i> Agentes Autónomos de IA",
        "#card-service-2 .card-features li:nth-child(2)": "<i data-lucide=\"check-circle-2\"></i> RAG (Retrieval-Augmented Generation)",
        "#card-service-2 .card-features li:nth-child(3)": "<i data-lucide=\"check-circle-2\"></i> Modelos Predictivos Dedicados",
        
        "#card-service-3 h3": "Arquitectura Cloud & DevOps",
        "#card-service-3 p": "Infraestructuras resilientes en la nube, pipelines automatizados de CI/CD y prácticas de seguridad corporativa robustas basadas en el cumplimiento (IaC).",
        "#card-service-3 .card-features li:nth-child(1)": "<i data-lucide=\"check-circle-2\"></i> AWS / GCP / Azure",
        "#card-service-3 .card-features li:nth-child(2)": "<i data-lucide=\"check-circle-2\"></i> Kubernetes & Docker",
        "#card-service-3 .card-features li:nth-child(3)": "<i data-lucide=\"check-circle-2\"></i> Seguridad Zero-Trust",
        
        "#card-service-4 h3": "Design de Experiência",
        "#card-service-4 p": "Interfaces disruptivas, prototipos de alta fidelidad e investigación con usuarios para garantizar tasas extraordinarias de adopción y compromiso digital.",
        "#card-service-4 .card-features li:nth-child(1)": "<i data-lucide=\"check-circle-2\"></i> Investigación de UX Basada en Datos",
        "#card-service-4 .card-features li:nth-child(2)": "<i data-lucide=\"check-circle-2\"></i> Sistema de Diseño Escalable",
        "#card-service-4 .card-features li:nth-child(3)": "<i data-lucide=\"check-circle-2\"></i> Animaciones de Altísima Fluidez",
        
        // Processo
        ".processo-section .section-tag span": "El Motor de Integración",
        ".processo-section h2.section-title": "Nuestra Ingeniería <span class=\"gradient-text-alt\">en la Práctica</span>",
        ".processo-section p.section-desc": "Vea cómo integramos estrategia, desarrollo, inteligencia artificial y computación en la nube para crear ecosistemas digitales indestructibles.",
        
        // Portfólio
        ".portfolio-section .section-tag span": "Vitrina Tecnológica",
        ".portfolio-section h2.section-title": "Nuestras <span class=\"gradient-text\">Obras de Ingeniería</span>",
        ".portfolio-section p.section-desc": "Aplicaciones de muy alto rendimiento, sistemas inteligentes de toma de decisiones y plataformas web construidas de extremo a extremo por nuestro equipo.",
        "#project-case-1 h3": "AetherFlow AI Enterprise",
        "#project-case-1 p": "Orquestador inteligente de flujos organizacionales integrado con IA Generativa privada y RAG para el sector financiero.",
        "#project-case-1 .stat-highlight": "99.9% Disponibilidad",
        "#project-case-1 .project-link span": "Ver Detalles",
        "#project-case-2 h3": "Helios Analytics Suite",
        "#project-case-2 p": "Panel de procesamiento de Big Data con actualizaciones en tiempo real para el control logístico de grandes flotas transcontinentales.",
        "#project-case-2 .stat-highlight": "10M+ Eventos/seg",
        "#project-case-2 .project-link span": "Ver Detalles",
        
        // Terminal
        ".terminal-section .section-tag span": "Consola de Integración",
        ".terminal-section h2.section-title": "Interactúe con <span class=\"gradient-text-alt\">Nuestro Núcleo</span>",
        ".terminal-section p.section-desc": "Experimente nuestra simulación de consola de ingeniería en tiempo real. Escriba comandos o haga clic en los accesos directos para verificar la resiliencia y compilar nuevos módulos.",
        ".shortcut-label": "Accesos rápidos:",
        "#terminal-input": "Escriba 'help' y presione Enter...",
        
        // Contato
        ".contato-section .section-tag span": "Hable con Ingenieros",
        ".contato-section h2.section-title": "¿Listo para Iniciar su <span class=\"gradient-text\">Evolución Digital?</span>",
        ".contato-section p.section-desc": "Nuestro equipo está listo para diseñar la mejor arquitectura técnica a medida para su desafío corporativo. Cuéntenos qué desea crear y nosotros entregamos la mejor ingeniería.",
        ".contact-detail-item:nth-child(1) .detail-label": "Correo corporativo",
        ".contact-detail-item:nth-child(2) .detail-label": "Sede central",
        ".contact-detail-item:nth-child(3) .detail-label": "Privacidad & Cumplimiento",
        ".contact-detail-item:nth-child(3) .detail-value": "LGPD e ISO 27001 en conformidad",
        
        ".project-planner-form h3": "Planifique su Software",
        ".form-subtitle": "Seleccione sus preferencias y nos pondremos en contacto con una propuesta de arquitectura inicial.",
        "label[for='form-name']": "Su Nombre *",
        "label[for='form-email']": "Correo Corporativo *",
        "#form-name": "Ej: Josafá de Pinho",
        "#form-email": "Ej: josafa@supe.dev",
        ".form-group:nth-child(3) > label": "¿Cuál es la necesidad principal? *",
        ".radio-card:nth-child(1) span": "Software Personalizado",
        ".radio-card:nth-child(2) span": "Integración de IA",
        ".radio-card:nth-child(3) span": "Nube y Escala",
        "label[for='form-message']": "Breve descripción del desafío *",
        "#form-message": "Describa brevemente su idea o el problema de negocio que desea solucionar...",
        "#btn-submit-form span": "Enviar Solicitud de Arquitectura",
        
        ".form-success-state h3": "¡Solicitud Compilada!",
        ".form-success-state p": "Su solicitud de arquitectura ha sido enviada y procesada. Un arquitecto de software de Supé se pondrá en contacto en menos de 2 horas hábiles.",
        "#btn-reset-form": "Enviar otro mensaje",
        
        // Footer (Extra)
        ".brand-slogan": "Ingeniería de software de muy alto rendimiento. Diseñando el futuro a través de ecosistemas perfectamente integrados.",
        ".footer-column:nth-child(1) h4": "Navegación",
        ".footer-column:nth-child(2) h4": "Conectar",
        ".footer-column:nth-child(3) h4": "Seguridad y Términos",
        ".footer-column:nth-child(3) ul li:nth-child(1) a": "Privacidad",
        ".footer-column:nth-child(3) ul li:nth-child(2) a": "Términos de Uso",
        ".footer-column:nth-child(3) ul li:nth-child(3) a": "SLA de Engenharia",
        ".footer-column:nth-child(3) ul li:nth-child(4) a": "Status del Núcleo",
        ".footer-bottom p:nth-child(1)": "© 2026 Supé Software Engineering. Todos os direitos reservados. CEO Josafá de Pinho Souza.",
        ".tech-signature": "Compilado con ⚡ Vanilla HTML/CSS/JS",
        
        // Subpages (Geral)
        ".back-home-link": "<i data-lucide=\"arrow-left\"></i> Volver al Inicio",
        ".whatsapp-tooltip": "Hablar con el CEO Josafá",

        // Metadados de Títulos de Abas e Cabeçalhos específicos
        "title": "Directrices de Privacidad | Supé Software Engineering",
        "title-terms": "Términos de Uso | Supé Software Engineering",
        "title-sla": "SLA de Ingeniería | Supé Software Engineering",
        "title-status": "Estado del Núcleo | Supé Software Engineering",
        ".privacy-title": "Política de Privacidad",
        ".privacy-code": "Código del Núcleo: SP-PRIV-2026",
        ".privacy-compiled": "Última Compilación: 30 de Mayo de 2026",
        ".terms-title": "Términos de Uso",
        ".terms-code": "Código del Núcleo: SP-TERMS-2026",
        ".terms-compiled": "Última Compilación: 30 de Mayo de 2026",
        ".sla-title": "Acuerdo de SLA de Ingeniería",
        ".sla-code": "Código del Núcleo: SP-SLA-ENG-3.0",
        ".sla-compiled": "Última Compilación: 30 de Mayo de 2026",
        ".status-title": "Estado del Núcleo",
        ".status-desc": "Mapeo de telemetría en tiempo real de los microservicios de Supé.",
        ".status-badge-text": "TODOS LOS SISTEMAS ONLINE",
        ".subsystem-status-text": "OPERATIVO",
        ".status-chart-title": "<i data-lucide=\"activity\" style=\"color: var(--accent-cyan);\"></i> Latencia General de Red (ms)"
    }
};

// --- Dicionário de Textos dos Passos do Motor de Integração ---
const stepsTranslations = {
    pt: {
        1: {
            title: "Concepção Estrutural & Discovery",
            desc: "Imersão completa no ecossistema de negócios do cliente para mapear fluxos, identificar gargalos técnicos e arquitetar a melhor fusão tecnológica customizada. Aqui alinhamos as metas com os diretores de UX e arquitetos chefes.",
            metrics: ["2 semanas", "Analistas e UX Directors"]
        },
        2: {
            title: "Arquitetura e Modelagem Resiliente",
            desc: "Modelagem das fundações técnicas do sistema utilizando microsserviços, modelagem de banco de dados distribuídos de alta resiliência e design de fluxos de eventos assíncronos prontos para escalabilidade astronômica.",
            metrics: ["3 semanas", "Arquitetos de Sistemas e DBAs"]
        },
        3: {
            title: "Codificação Limpa e Modular",
            desc: "Os engenheiros mais experientes entram em ação criando módulos com cobertura de testes automatizados rígida, obedecendo às diretrizes mais rígidas de arquitetura limpa (Clean Architecture), padrões SOLID e performance máxima.",
            metrics: ["Variável", "Líderes de Desenvolvimento"]
        },
        4: {
            title: "Fusão de Inteligência Artificial",
            desc: "Integração cirúrgica de inteligência artificial de última geração. Acoplamos pipelines de aprendizado de máquina, modelos preditivos ou agentes conversacionais baseados em LLMs diretamente no motor central do software.",
            metrics: ["2 a 4 semanas", "Engenheiros de IA e Cientistas"]
        },
        5: {
            title: "Deploy Contínuo & Nuvem Zero-Trust",
            desc: "Automatização de toda a esteira de implantação via pipelines CI/CD ultra-seguros, empacotando os artefatos em Kubernetes na nuvem (AWS/GCP), protegidos por arquitetura de segurança perimetral zero-trust.",
            metrics: ["Segundos (Real-time)", "DevOps Engineers & SecOps"]
        }
    },
    en: {
        1: {
            title: "Discovery & Strategy",
            desc: "Full immersion in the client's business ecosystem to map flows, identify technical bottlenecks, and architect the best custom technological fusion. Here we align goals with UX Directors and Chief Architects.",
            metrics: ["2 weeks", "Analysts & UX Directors"]
        },
        2: {
            title: "Architecture & Resilient Modeling",
            desc: "Modeling the technical foundations of the system using microservices, modeling high-resilience distributed databases, and designing asynchronous event flows ready for astronomical scalability.",
            metrics: ["3 weeks", "Systems Architects & DBAs"]
        },
        3: {
            title: "Clean & Modular Coding",
            desc: "Most experienced engineers get to work building modules with tight automated test coverage, following clean architecture guidelines, SOLID design principles, and maximum performance.",
            metrics: ["Variable", "Development Leads"]
        },
        4: {
            title: "Artificial Intelligence Fusion",
            desc: "Surgical integration of next-generation artificial intelligence. We couple machine learning pipelines, predictive models, or LLM-based conversational agents directly into the core engine of the software.",
            metrics: ["2 to 4 weeks", "AI Engineers & Scientists"]
        },
        5: {
            title: "Continuous Deploy & Zero-Trust Cloud",
            desc: "Automation of the entire deployment pipeline via ultra-secure CI/CD pipelines, containerizing artifacts in Kubernetes in the cloud (AWS/GCP), secured by zero-trust security perimeters.",
            metrics: ["Seconds (Real-time)", "DevOps & SecOps Engineers"]
        }
    },
    ru: {
        1: {
            title: "Исследование и Концепция",
            desc: "Полное погружение в бизнес-экосистему клиента для картирования потоков, выявления технических узких мест и проектирования наилучшего индивидуального технологического слияния. Здесь мы согласовываем цели с UX-директорами и главными архитекторами.",
            metrics: ["2 недели", "Аналитики и UX-директора"]
        },
        2: {
            title: "Архитектура и Резолютивное Моделирование",
            desc: "Моделирование технических основ системы с использованием микросервисов, проектирование распределенных баз данных высокой отказоустойчивости и проектирование асинхронных потоков событий, готовых к колоссальному масштабированию.",
            metrics: ["3 недели", "Архитекторы систем и DBA"]
        },
        3: {
            title: "Чистый и Модульный Код",
            desc: "Опытные инженеры приступают к созданию модулей с жестким покрытием автоматизированными тестами, соблюдая строгие стандарты чистой архитектуры (Clean Architecture), принципы SOLID и требования к максимальной производительности.",
            metrics: ["Зависит от проекта", "Ведущие разработчики"]
        },
        4: {
            title: "Слияние с Искусственным Интеллектом",
            desc: "Хирургическая интеграция искусственного интеллекта последнего поколения. Мы подключаем конвейеры машинного обучения, прогностические модели или разговорных агентов на базе LLM непосредственно в центральный двигатель ПО.",
            metrics: ["2-4 недели", "Инженеры ИИ и Ученые"]
        },
        5: {
            title: "Непрерывное Развертывание и Безопасное Облако",
            desc: "Автоматизация конвейеров CI/CD для безопасного развертывания, упаковка контейнеров в Kubernetes в облаке (AWS/GCP), защищенных архитектурой безопасности Zero-Trust.",
            metrics: ["Секунды", "DevOps и SRE инженеры"]
        }
    },
    es: {
        1: {
            title: "Concepción Estructural & Discovery",
            desc: "Inmersión completa en el ecosistema de negocios del cliente para mapear flujos, identificar cuellos de botella técnicos y diseñar la mejor fusión tecnológica personalizada. Aquí alineamos metas con Directores de UX y Arquitectos Jefes.",
            metrics: ["2 semanas", "Analistas y UX Directors"]
        },
        2: {
            title: "Arquitectura y Modelagem Resiliente",
            desc: "Modelado de las bases técnicas del sistema utilizando microservicios, modelado de bases de datos distribuidas de alta resiliencia y diseño de flujos de eventos asíncronos listos para una escalabilidad astronómica.",
            metrics: ["3 semanas", "Arquitectos de Sistemas y DBAs"]
        },
        3: {
            title: "Codificación Limpa y Modular",
            desc: "Nuestros ingenieros más experimentados entran en acción creando módulos con una cobertura rígida de pruebas automatizadas, obedeciendo las directrices más estrictas de Arquitectura Limpia, principios SOLID y rendimiento máximo.",
            metrics: ["Variable", "Líderes de Desarrollo"]
        },
        4: {
            title: "Fusión de Inteligencia Artificial",
            desc: "Integración quirúrgica de inteligencia artificial de última generación. Acoplamos pipelines de aprendizaje automático, modelos predictivos o agentes conversacionales basados en LLMs directamente en el motor central del software.",
            metrics: ["2 a 4 semanas", "Ingenieros de IA y Científicos"]
        },
        5: {
            title: "Despliegue Continuo & Nube Zero-Trust",
            desc: "Automatización de todo el flujo de implementación a través de pipelines CI/CD ultra seguros, empaquetando los artefactos en Kubernetes en la nube (AWS/GCP), protegidos por arquitectura de seguridad perimetral Zero-Trust.",
            metrics: ["Segundos (Real-time)", "DevOps Engineers & SecOps"]
        }
    }
};

// --- Dicionário de Traduções dos Comandos do Terminal ---
const terminalTranslations = {
    pt: {
        help: `
Comandos disponíveis no núcleo Supé:
  <span class="highlight-cmd">about</span>     - Filosofia de liderança da empresa e palavras do CEO Josafá.
  <span class="highlight-cmd">stack</span>     - Exibe as tecnologias integradas de alta performance.
  <span class="highlight-cmd">compile</span>   - Executa simulação de compilação da infraestrutura Supé.
  <span class="highlight-cmd">clear</span>     - Limpa o console do terminal.
  <span class="highlight-cmd">help</span>      - Exibe este painel de comandos do desenvolvedor.
`,
        about: `
[DNA SUPÉ SOFTWARE ENGINEERING]
  Fundada e dirigida pelo CEO <span class="cyan-text">Josafá de Pinho Souza</span>, a Supé nasceu do
  desejo supremo de elevar a engenharia de software brasileira ao padrão global de elite.
  
  "Nossa missão é a integridade: conectar arquitetura limpa, código resiliente
  e inteligência artificial pragmática para que grandes corporações escalem de forma indestrutível."
  
  [LIDERANÇA]
  Josafá de Pinho Souza - CEO & Chief Systems Architect
  Mais de 15 anos modelando ecossistemas empresariais de alta resiliência.
`,
        stack: `
[INTEGRATED TECHNOLOGY STACK]
  * <span class="cyan-text">Frontend Premium:</span> Next.js, React, TailwindCSS, WebGL
  * <span class="purple-text">Core Backend:</span> NestJS, Node.js, Go (Golang), Python, Rust
  * <span class="green-text">Machine Learning:</span> OpenAI API, LangChain, PyTorch, RAG Pipelines
  * <span class="gray-text">Cloud & DevOps:</span> AWS Cloud, Kubernetes, Terraform IaC, Docker
  * <span class="cyan-text">Banco de Dados:</span> PostgreSQL (distribuído), Redis, MongoDB, Pinecone Vector DB
`,
        compileStart: "Conectando ao cluster Kubernetes Supé-PRO-01...",
        compileAI: "Inicializando modelos de Inteligência Artificial AetherFlow...",
        compileAIOK: "[OK] OpenAI API v4.2.1 sincronizada com chave TLS 1.3.",
        compileVDBOK: "[OK] Embeddings carregados no Pinecone Vector Database.",
        compileBack: "Compilando pacotes backend de alta latência (Go-Rest-Engine)...",
        compileBackOK: "[OK] 1,024 microsserviços respondendo com SLA de 99.99%.",
        compileCEO: "Autenticando credenciais do CEO Josafá de Pinho Souza...",
        compileSuccess: "[COMPILADO COM SUCESSO] Núcleo operacional online e integrado!",
        errorCmd: "Comando não reconhecido: <span class=\"highlight-cmd\">{cmd}</span>. Digite <span class=\"highlight-cmd\">help</span> para obter assistência."
    },
    en: {
        help: `
Available commands in Supé Core:
  <span class="highlight-cmd">about</span>     - Company leadership philosophy and words from the CEO Josafá.
  <span class="highlight-cmd">stack</span>     - Displays high-performance integrated technologies.
  <span class="highlight-cmd">compile</span>   - Simulates compilation of Supé architecture infrastructure.
  <span class="highlight-cmd">clear</span>     - Clears the terminal screen.
  <span class="highlight-cmd">help</span>      - Displays this developer help panel.
`,
        about: `
[DNA SUPÉ SOFTWARE ENGINEERING]
  Founded and led by CEO <span class="cyan-text">Josafá de Pinho Souza</span>, Supé was born 
  from the supreme desire to elevate software engineering to elite global standards.
  
  "Our mission is integrity: connecting clean architecture, resilient code,
  and pragmatic artificial intelligence for large corporations to scale indestructibly."
  
  [LEADERSHIP]
  Josafá de Pinho Souza - CEO & Chief Systems Architect
  Over 15 years modeling high-resilience corporate ecosystems.
`,
        stack: `
[INTEGRATED TECHNOLOGY STACK]
  * <span class="cyan-text">Premium Frontend:</span> Next.js, React, TailwindCSS, WebGL
  * <span class="purple-text">Core Backend:</span> NestJS, Node.js, Go (Golang), Python, Rust
  * <span class="green-text">Machine Learning:</span> OpenAI API, LangChain, PyTorch, RAG Pipelines
  * <span class="gray-text">Cloud & DevOps:</span> AWS Cloud, Kubernetes, Terraform IaC, Docker
  * <span class="cyan-text">Databases:</span> PostgreSQL (distributed), Redis, MongoDB, Pinecone Vector DB
`,
        compileStart: "Connecting to Kubernetes cluster Supé-PRO-01...",
        compileAI: "Initializing AetherFlow Artificial Intelligence models...",
        compileAIOK: "[OK] OpenAI API v4.2.1 synchronized with TLS 1.3 key.",
        compileVDBOK: "[OK] Embeddings loaded in Pinecone Vector Database.",
        compileBack: "Compiling high-performance backend packages (Go-Rest-Engine)...",
        compileBackOK: "[OK] 1,024 microservices responding with a 99.99% SLA.",
        compileCEO: "Authenticating CEO Josafá de Pinho Souza credentials...",
        compileSuccess: "[COMPILED SUCCESSFULLY] Operational core online and integrated!",
        errorCmd: "Unrecognized command: <span class=\"highlight-cmd\">{cmd}</span>. Type <span class=\"highlight-cmd\">help</span> for assistance."
    },
    ru: {
        help: `
Доступные команды в Ядре Supé:
  <span class="highlight-cmd">about</span>     - Философия руководства компании и слова генерального директора Жозафа.
  <span class="highlight-cmd">stack</span>     - Отображает высокопроизводительные интегрированные технологии.
  <span class="highlight-cmd">compile</span>   - Симулирует компиляцию инфраструктуры архитектуры Supé.
  <span class="highlight-cmd">clear</span>     - Очищает экран терминала.
  <span class="highlight-cmd">help</span>      - Отображает эту справочную панель разработчика.
`,
        about: `
[ДНК SUPÉ SOFTWARE ENGINEERING]
  Основанная под руководством генерального директора <span class="cyan-text">Жозафа де Пиньо Соуза</span>,
  компания Supé родилась из стремления поднять инженерию ПО до элитарных стандартов.
  
  "Наша миссия — это целостность: соединение чистой архитектуры, отказоустойчивого кода
  и прагматичного искусственного интеллекта для неуязвимого масштабирования корпораций."
  
  [РУКОВОДСТВО]
  Жозафа де Пиньо Соуза - генеральный директор (CEO) и главный системный архитектор.
  Более 15 лет моделирования высоконадежных корпоративных экосистем.
`,
        stack: `
[ИНТЕГРИРОВАННЫЙ СТЭК ТЕХНОЛОГИЙ]
  * <span class="cyan-text">Премиальный Фронтенд:</span> Next.js, React, TailwindCSS, WebGL
  * <span class="purple-text">Ядро Бэкенда:</span> NestJS, Node.js, Go (Golang), Python, Rust
  * <span class="green-text">Машинное Обучение:</span> OpenAI API, LangChain, PyTorch, RAG Pipelines
  * <span class="gray-text">Облако и DevOps:</span> AWS Cloud, Kubernetes, Terraform IaC, Docker
  * <span class="cyan-text">Базы Данных:</span> PostgreSQL (распределенная), Redis, MongoDB, Pinecone Vector DB
`,
        compileStart: "Подключение к кластеру Kubernetes Supé-PRO-01...",
        compileAI: "Инициализация моделей искусственного интеллекта AetherFlow...",
        compileAIOK: "[OK] API OpenAI v4.2.1 синхронизирован с ключом TLS 1.3.",
        compileVDBOK: "[OK] Векторные эмбеддинги загружены в базу данных Pinecone.",
        compileBack: "Компиляция высокопроизводительных бэкенд-пакетов (Go-Rest-Engine)...",
        compileBackOK: "[OK] 1024 микросервиса отвечают по SLA 99.99%.",
        compileCEO: "Аутентификация учетных данных CEO Жозафа де Пиньо Соуза...",
        compileSuccess: "[СКОМПИЛИРОВАНО УСПЕШНО] Операционное ядро в сети и интегрировано!",
        errorCmd: "Нераспознанная команда: <span class=\"highlight-cmd\">{cmd}</span>. Введите <span class=\"highlight-cmd\">help</span> для справки."
    },
    es: {
        help: `
Comandos disponibles en el núcleo Supé:
  <span class="highlight-cmd">about</span>     - Filosofía de liderazgo de la empresa y palabras del CEO Josafá.
  <span class="highlight-cmd">stack</span>     - Muestra las tecnologías integradas de alto rendimiento.
  <span class="highlight-cmd">compile</span>   - Simula la compilación de la infraestructura de arquitectura Supé.
  <span class="highlight-cmd">clear</span>     - Limpia la pantalla de la consola.
  <span class="highlight-cmd">help</span>      - Muestra este panel de ayuda para desarrolladores.
`,
        about: `
[DNA SUPÉ SOFTWARE ENGINEERING]
  Fundada y dirigida por el CEO <span class="cyan-text">Josafá de Pinho Souza</span>, Supé nació del
  deseo supremo de elevar la ingeniería de software a un estándar global de élite.
  
  "Nuestra misión es la integridad: conectar arquitectura limpia, código resiliente
  e inteligencia artificial pragmática para que las grandes corporaciones escalen de forma indestructible."
  
  [LIDERAZGO]
  Josafá de Pinho Souza - CEO & Chief Systems Architect
  Más de 15 años modelando ecosistemas empresariales de alta resiliencia.
`,
        stack: `
[INTEGRATED TECHNOLOGY STACK]
  * <span class="cyan-text">Frontend Premium:</span> Next.js, React, TailwindCSS, WebGL
  * <span class="purple-text">Core Backend:</span> NestJS, Node.js, Go (Golang), Python, Rust
  * <span class="green-text">Machine Learning:</span> OpenAI API, LangChain, PyTorch, RAG Pipelines
  * <span class="gray-text">Cloud & DevOps:</span> AWS Cloud, Kubernetes, Terraform IaC, Docker
  * <span class="cyan-text">Bases de Datos:</span> PostgreSQL (distribuida), Redis, MongoDB, Pinecone Vector DB
`,
        compileStart: "Conectando al clúster de Kubernetes Supé-PRO-01...",
        compileAI: "Inicializando modelos de Inteligencia Artificial AetherFlow...",
        compileAIOK: "[OK] OpenAI API v4.2.1 sincronizada con clave TLS 1.3.",
        compileVDBOK: "[OK] Embeddings cargados en Pinecone Vector Database.",
        compileBack: "Compilando paquetes backend de alto rendimiento (Go-Rest-Engine)...",
        compileBackOK: "[OK] 1,024 microservicios respondiendo con un SLA de 99.99%.",
        compileCEO: "Autenticando credenciales del CEO Josafá de Pinho Souza...",
        compileSuccess: "[COMPILADO CON ÉXITO] ¡Núcleo operativo en línea e integrado!",
        errorCmd: "Comando no reconocido: <span class=\"highlight-cmd\">{cmd}</span>. Escriba <span class=\"highlight-cmd\">help</span> para obtener asistencia."
    }
};

// --- 2. CLASSE DE SELECÇÃO DE IDIOMAS (ABSTRAÇÃO POR COMPOSIÇÃO) ---
class LanguageSelector {
    constructor(containerId, config, onLanguageChange) {
        this.container = document.getElementById(containerId);
        this.config = config;
        this.onLanguageChange = onLanguageChange;
        this.isOpen = false;
        
        this.init();
    }
    
    init() {
        if (!this.container) return;
        this.render();
        this.bindEvents();
    }
    
    render() {
        const currentLangObj = this.config.languages.find(l => l.code === this.config.currentLanguage) 
            || this.config.languages[0];
            
        this.container.innerHTML = `
            <div class="lang-selector">
                <button class="lang-trigger" aria-haspopup="listbox" aria-expanded="${this.isOpen}" type="button">
                    <i data-lucide="languages" class="lang-icon-left"></i>
                    <span class="lang-current-label">${currentLangObj.iso}</span>
                    <i data-lucide="chevron-down" class="lang-chevron"></i>
                </button>
                <ul class="lang-dropdown" role="listbox">
                    ${this.config.languages.map(lang => `
                        <li class="lang-option ${lang.code === this.config.currentLanguage ? 'active' : ''}" 
                            data-lang="${lang.code}" role="option" aria-selected="${lang.code === this.config.currentLanguage}">
                            <span class="lang-name">${lang.name}</span>
                            <span class="lang-iso-badge">${lang.iso}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        // Forçar renderização de ícones internos
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
    
    bindEvents() {
        const trigger = this.container.querySelector(".lang-trigger");
        const dropdown = this.container.querySelector(".lang-dropdown");
        
        trigger.addEventListener("click", (e) => {
            e.stopPropagation();
            this.isOpen = !this.isOpen;
            trigger.setAttribute("aria-expanded", this.isOpen);
            dropdown.classList.toggle("show", this.isOpen);
            
            const chevron = this.container.querySelector(".lang-chevron");
            if (chevron) {
                chevron.style.transform = this.isOpen ? "rotate(180deg)" : "none";
            }
        });
        
        const options = this.container.querySelectorAll(".lang-option");
        options.forEach(opt => {
            opt.addEventListener("click", () => {
                const selectedLang = opt.getAttribute("data-lang");
                this.isOpen = false;
                dropdown.classList.remove("show");
                
                const chevron = this.container.querySelector(".lang-chevron");
                if (chevron) chevron.style.transform = "none";
                
                if (selectedLang !== this.config.currentLanguage) {
                    this.config.currentLanguage = selectedLang;
                    this.render();
                    this.bindEvents();
                    this.onLanguageChange(selectedLang);
                }
            });
        });
        
        // Fechar ao clicar fora do componente
        document.addEventListener("click", () => {
            if (this.isOpen) {
                this.isOpen = false;
                dropdown.classList.remove("show");
                const chevron = this.container.querySelector(".lang-chevron");
                if (chevron) chevron.style.transform = "none";
            }
        });
    }
}

// --- Função Global para Tradução da Página baseada nos Seletores CSS ---
function translatePage(lang) {
    const dict = translations[lang];
    if (!dict) return;
    
    // Armazenar persistência local
    localStorage.setItem("supe-lang", lang);
    i18nConfig.currentLanguage = lang;
    
    // Atualizar títulos das abas dependendo da página
    if (document.title.includes("Privacidade") || document.title.includes("Privacy") || document.title.includes("Правила")) {
        document.title = dict["title"];
    } else if (document.title.includes("Termos") || document.title.includes("Terms") || document.title.includes("Условия")) {
        document.title = dict["title-terms"];
    } else if (document.title.includes("SLA")) {
        document.title = dict["title-sla"];
    } else if (document.title.includes("Status")) {
        document.title = dict["title-status"];
    } else if (lang === 'en') {
        document.title = "Supé Software Engineering | Supreme Software Engineering";
    } else if (lang === 'ru') {
        document.title = "Supé Software Engineering | Supreme Software Engineering";
    } else {
        document.title = "Supé Software Engineering | Engenharia de Software Suprema";
    }

    // Tradução em lote de todos os elementos
    for (const selector in dict) {
        if (selector === "title" || selector === "title-terms" || selector === "title-sla" || selector === "title-status" || selector === "whatsapp-tooltip") continue;
        
        const elements = document.querySelectorAll(selector);
        elements.forEach(elem => {
            if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
                elem.placeholder = dict[selector];
            } else {
                elem.innerHTML = dict[selector];
            }
        });
    }
    
    // Traduzir especificamente o tooltip flutuante do WhatsApp
    const wppTooltip = document.querySelector(".whatsapp-tooltip");
    if (wppTooltip && dict[".whatsapp-tooltip"]) {
        wppTooltip.textContent = dict[".whatsapp-tooltip"];
    }
    
    // Atualizar placeholders nos formulários de contato das subpáginas
    const nameInput = document.getElementById("form-name");
    const emailInput = document.getElementById("form-email");
    const messageInput = document.getElementById("form-message");
    
    if (nameInput && dict["#form-name"]) nameInput.placeholder = dict["#form-name"];
    if (emailInput && dict["#form-email"]) emailInput.placeholder = dict["#form-email"];
    if (messageInput && dict["#form-message"]) messageInput.placeholder = dict["#form-message"];
    
    // Recarregar os ícones do Lucide
    if (window.lucide) {
        window.lucide.createIcons();
    }
}


// --- 3. INICIALIZAÇÃO E EVENTOS GERAIS DA APLICAÇÃO ---
document.addEventListener("DOMContentLoaded", () => {
    
    // --- Inicialização do Componente de Idioma (i18n) ---
    const langSelector = new LanguageSelector("lang-selector-container", i18nConfig, (selectedLang) => {
        translatePage(selectedLang);
        
        // Se estivermos na subpágina de Status, forçar redesenho do canvas imediatamente
        const chartCanvas = document.getElementById("latency-chart");
        if (chartCanvas && typeof drawChart === "function") {
            drawChart();
        }
    });
    
    // Aplicar tradução inicial salva ou padrão
    translatePage(i18nConfig.currentLanguage);
    
    // --- 1. MENU MOBILE ---
    const mobileToggle = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-menu");
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            mobileToggle.classList.toggle("active");
            
            // Animando o ícone hamburguer
            const bars = mobileToggle.querySelectorAll(".bar");
            if (mobileToggle.classList.contains("active")) {
                bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
                bars[1].style.opacity = "0";
                bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
            } else {
                bars[0].style.transform = "none";
                bars[1].style.opacity = "1";
                bars[2].style.transform = "none";
            }
        });

        // Fechar menu ao clicar em links
        const navLinks = navMenu.querySelectorAll(".nav-link");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                mobileToggle.classList.remove("active");
                mobileToggle.querySelectorAll(".bar").forEach(bar => bar.style.transform = "none");
                mobileToggle.querySelectorAll(".bar")[1].style.opacity = "1";
            });
        });
    }

    // --- 2. HEADER DINÂMICO NO SCROLL & ACTIVE LINKS ---
    const header = document.getElementById("main-header");
    const sections = document.querySelectorAll("section[id]");
    
    window.addEventListener("scroll", () => {
        // Sticky header
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Active link highlight
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute("id");
            const navItem = document.getElementById(`nav-item-${sectionId}`);
            
            if (navItem) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
                    navItem.classList.add("active");
                }
            }
        });
    });

    // --- 3. CANVAS INTERATIVO DE PARTÍCULAS (HERO) ---
    const canvas = document.getElementById("hero-canvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        
        let particlesArray = [];
        const numberOfParticles = 80;
        
        // Mouse coords
        let mouse = {
            x: null,
            y: null,
            radius: 150
        };

        // Ouvir movimentos do mouse
        window.addEventListener("mousemove", (event) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        });

        window.addEventListener("mouseleave", () => {
            mouse.x = null;
            mouse.y = null;
        });

        // Redimensionamento
        function resizeCanvas() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            initParticles();
        }
        
        window.addEventListener("resize", resizeCanvas);
        
        // Construtor de Partícula
        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;
                ctx.fill();
                ctx.shadowBlur = 0; // Reset shadow
            }
            
            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }
                
                this.x += this.directionX;
                this.y += this.directionY;
                
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < mouse.radius + this.size) {
                        if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                            this.x += 1.5;
                        }
                        if (mouse.x > this.x && this.x > this.size * 10) {
                            this.x -= 1.5;
                        }
                        if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                            this.y += 1.5;
                        }
                        if (mouse.y > this.y && this.y > this.size * 10) {
                            this.y -= 1.5;
                        }
                    }
                }
                this.draw();
            }
        }

        function initParticles() {
            particlesArray = [];
            let num = numberOfParticles;
            if (window.innerWidth < 768) num = 40;
            
            for (let i = 0; i < num; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 0.8) - 0.4;
                let directionY = (Math.random() * 0.8) - 0.4;
                
                let color = i % 2 === 0 ? "#00f2fe" : "#7f00ff";
                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        function connect() {
            let maxDist = 130;
            if (window.innerWidth < 768) maxDist = 90;
            
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let dx = particlesArray[a].x - particlesArray[b].x;
                    let dy = particlesArray[a].y - particlesArray[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < maxDist) {
                        let alpha = 1 - (distance / maxDist);
                        ctx.strokeStyle = `rgba(0, 242, 254, ${alpha * 0.12})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
                
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = particlesArray[a].x - mouse.x;
                    let dy = particlesArray[a].y - mouse.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < mouse.radius) {
                        let alpha = 1 - (distance / mouse.radius);
                        ctx.strokeStyle = `rgba(127, 0, 255, ${alpha * 0.15})`;
                        ctx.lineWidth = 1.2;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            connect();
            requestAnimationFrame(animate);
        }

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        initParticles();
        animate();
    }

    // --- 4. MOTOR DE INTEGRAÇÃO (PROCESSO INTERATIVO COM GETTERS DINÂMICOS) ---
    const nodes = document.querySelectorAll(".integration-node");
    const stepTitle = document.getElementById("step-title-display");
    const stepDesc = document.getElementById("step-desc-display");
    const stepNumber = document.getElementById("step-number-display");
    
    // Objeto stepsData estruturado com Getters para tradução automatizada
    const stepsData = {
        1: {
            get title() { return stepsTranslations[i18nConfig.currentLanguage][1].title; },
            get desc() { return stepsTranslations[i18nConfig.currentLanguage][1].desc; },
            number: "Etapa 01",
            get metrics() { return stepsTranslations[i18nConfig.currentLanguage][1].metrics; }
        },
        2: {
            get title() { return stepsTranslations[i18nConfig.currentLanguage][2].title; },
            get desc() { return stepsTranslations[i18nConfig.currentLanguage][2].desc; },
            number: "Etapa 02",
            get metrics() { return stepsTranslations[i18nConfig.currentLanguage][2].metrics; }
        },
        3: {
            get title() { return stepsTranslations[i18nConfig.currentLanguage][3].title; },
            get desc() { return stepsTranslations[i18nConfig.currentLanguage][3].desc; },
            number: "Etapa 03",
            get metrics() { return stepsTranslations[i18nConfig.currentLanguage][3].metrics; }
        },
        4: {
            get title() { return stepsTranslations[i18nConfig.currentLanguage][4].title; },
            get desc() { return stepsTranslations[i18nConfig.currentLanguage][4].desc; },
            number: "Etapa 04",
            get metrics() { return stepsTranslations[i18nConfig.currentLanguage][4].metrics; }
        },
        5: {
            get title() { return stepsTranslations[i18nConfig.currentLanguage][5].title; },
            get desc() { return stepsTranslations[i18nConfig.currentLanguage][5].desc; },
            number: "Etapa 05",
            get metrics() { return stepsTranslations[i18nConfig.currentLanguage][5].metrics; }
        }
    };

    function updateIntegrationStep(step) {
        if (!stepTitle) return;
        
        nodes.forEach(node => node.classList.remove("active"));
        document.querySelectorAll(".integration-line").forEach(l => l.classList.remove("active"));
        
        for (let i = 1; i <= step; i++) {
            const node = document.querySelector(`.integration-node[data-step="${i}"]`);
            if (node) node.classList.add("active");
            
            if (i < step) {
                const line = document.querySelector(`.integration-line.line-${i}${i+1}`);
                if (line) line.classList.add("active");
            }
        }
        
        const data = stepsData[step];
        if (data) {
            stepTitle.textContent = data.title;
            stepDesc.textContent = data.desc;
            stepNumber.textContent = i18nConfig.currentLanguage === 'en' ? `Step 0${step}` : (i18nConfig.currentLanguage === 'ru' ? `Шаг 0${step}` : data.number);
            
            const colors = { 1: "#00f2fe", 2: "#7f00ff", 3: "#4facfe", 4: "#00ff87", 5: "#f35588" };
            stepNumber.style.borderColor = colors[step];
            stepNumber.style.color = colors[step];
            
            const metricsText = document.querySelectorAll(".step-metrics .metric-item");
            if (metricsText.length >= 2) {
                metricsText[0].innerHTML = `<i data-lucide="clock"></i> ${i18nConfig.currentLanguage === 'en' ? 'Avg. Time' : (i18nConfig.currentLanguage === 'ru' ? 'Среднее время' : 'Tempo médio')}: ${data.metrics[0]}`;
                metricsText[1].innerHTML = `<i data-lucide="users"></i> ${i18nConfig.currentLanguage === 'en' ? 'Squad' : (i18nConfig.currentLanguage === 'ru' ? 'Команда' : 'Time')}: ${data.metrics[1]}`;
                lucide.createIcons();
            }
        }
    }

    if (nodes.length > 0) {
        nodes.forEach(node => {
            node.addEventListener("click", () => {
                const step = parseInt(node.getAttribute("data-step"));
                updateIntegrationStep(step);
                clearInterval(autoCycleInterval);
            });
        });

        let currentStep = 1;
        let autoCycleInterval = setInterval(() => {
            currentStep = currentStep >= 5 ? 1 : currentStep + 1;
            updateIntegrationStep(currentStep);
        }, 6000);
        
        updateIntegrationStep(1); // Set inicial
    }

    // --- 5. TERMINAL INTERATIVO DE DEPURAÇÃO COM SUPORTE DILIGENTE A i18n ---
    const terminalInput = document.getElementById("terminal-input");
    const terminalOutput = document.getElementById("terminal-output-area");
    const terminalBody = document.getElementById("terminal-body-console");
    const shortcuts = document.querySelectorAll(".btn-shortcut");

    const commands = {
        help: () => {
            return terminalTranslations[i18nConfig.currentLanguage].help;
        },
        about: () => {
            return terminalTranslations[i18nConfig.currentLanguage].about;
        },
        stack: () => {
            return terminalTranslations[i18nConfig.currentLanguage].stack;
        },
        compile: () => {
            return "simulating"; 
        },
        clear: () => {
            terminalOutput.innerHTML = "";
            return "";
        }
    };

    function handleTerminalSubmit(cmdText) {
        if (!terminalOutput) return;
        
        const cleanedText = cmdText.trim().toLowerCase();
        let response = "";
        
        const echoLine = document.createElement("p");
        echoLine.className = "terminal-text";
        echoLine.innerHTML = `<span class="terminal-prompt">></span> ${cmdText}`;
        terminalOutput.appendChild(echoLine);
        
        if (cleanedText === "") return;
        
        if (cleanedText === "clear") {
            commands.clear();
        } else if (cleanedText === "compile") {
            simulateCompilation();
        } else if (commands[cleanedText]) {
            response = commands[cleanedText]();
            const resLine = document.createElement("p");
            resLine.className = "terminal-text";
            resLine.innerHTML = response;
            terminalOutput.appendChild(resLine);
        } else {
            const errorLine = document.createElement("p");
            errorLine.className = "terminal-text";
            let errT = terminalTranslations[i18nConfig.currentLanguage].errorCmd;
            errorLine.innerHTML = errT.replace("{cmd}", cmdText);
            terminalOutput.appendChild(errorLine);
        }
        
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function simulateCompilation() {
        const dict = terminalTranslations[i18nConfig.currentLanguage];
        const compileLines = [
            { text: dict.compileStart, color: "gray-text", delay: 100 },
            { text: dict.compileAI, color: "purple-text", delay: 400 },
            { text: dict.compileAIOK, color: "green-text", delay: 700 },
            { text: dict.compileVDBOK, color: "green-text", delay: 1000 },
            { text: dict.compileBack, color: "gray-text", delay: 1300 },
            { text: dict.compileBackOK, color: "green-text", delay: 1600 },
            { text: dict.compileCEO, color: "cyan-text", delay: 1900 },
            { text: dict.compileSuccess, color: "cyan-text", delay: 2300 }
        ];

        compileLines.forEach(line => {
            setTimeout(() => {
                const textLine = document.createElement("p");
                textLine.className = `terminal-text ${line.color}`;
                textLine.innerHTML = line.text;
                terminalOutput.appendChild(textLine);
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }, line.delay);
        });
    }

    if (terminalInput) {
        terminalInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                const text = terminalInput.value;
                handleTerminalSubmit(text);
                terminalInput.value = "";
            }
        });
    }

    shortcuts.forEach(btn => {
        btn.addEventListener("click", () => {
            const cmd = btn.getAttribute("data-cmd");
            if (cmd === "clear_console") {
                commands.clear();
            } else {
                handleTerminalSubmit(cmd);
            }
            if (terminalInput) terminalInput.focus();
        });
    });

    // --- 6. CONFIGURADOR / PLANEJADOR DE PROJETO (CONTATO FORM) ---
    const radioCards = document.querySelectorAll(".radio-card");
    const plannerForm = document.getElementById("project-planner-form");
    const successState = document.getElementById("form-success-state");
    const resetFormBtn = document.getElementById("btn-reset-form");

    radioCards.forEach(card => {
        card.addEventListener("click", () => {
            radioCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            const radioInput = card.querySelector("input[type='radio']");
            if (radioInput) radioInput.checked = true;
        });
    });

    if (plannerForm && successState) {
        plannerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const btnSubmit = document.getElementById("btn-submit-form");
            btnSubmit.disabled = true;
            btnSubmit.innerHTML = `<span>${i18nConfig.currentLanguage === 'en' ? 'Compiling...' : (i18nConfig.currentLanguage === 'ru' ? 'Компиляция...' : 'Compilando...')}</span> <div class="pulse-dot"></div>`;

            setTimeout(() => {
                plannerForm.style.display = "none";
                successState.classList.remove("hidden");
                btnSubmit.disabled = false;
                btnSubmit.innerHTML = `<span>${translations[i18nConfig.currentLanguage]["#btn-submit-form span"]}</span> <i data-lucide="send"></i>`;
                lucide.createIcons();
            }, 1800);
        });

        if (resetFormBtn) {
            resetFormBtn.addEventListener("click", () => {
                plannerForm.reset();
                radioCards.forEach(c => c.classList.remove("active"));
                radioCards[0].classList.add("active");
                radioCards[0].querySelector("input[type='radio']").checked = true;

                successState.classList.add("hidden");
                plannerForm.style.display = "block";
            });
        }
    }

    // --- 7. POLIMENTO E ANIMAÇÃO DE HOVER EM CARDS 3D (TILT SUTIL) ---
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty("--x", `${x}px`);
            card.style.setProperty("--y", `${y}px`);
        });
    });
});
