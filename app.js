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
        "#card-service-1 p": "Sistemas sob medida em Python, Java, ASP.NET e C#. Seguimos a Regra de Ouro: composição sobre herança (herança apenas para 'é um') e uso de Guard Clauses para eliminação de aninhamentos e robustez.",
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
        
        // Regras de Ouro
        "#rules-badge-text": "QUALIDADE DE CÓDIGO",
        "#rules-card-title": "Nossas Regras de Ouro",
        "#rules-card-desc": "Aplicamos princípios rígidos de design de software para construir sistemas altamente manuteníveis, modulares e imunes a falhas.",
        "#tab-label-composition": "Composição sobre Herança",
        "#tab-label-guards": "Guard Clauses",
        "#visual-panel-title": "Funcionamento Dinâmico",
        "#code-panel-title": "Refatoração Didática",
        "#code-toggle-before": "Antes",
        "#code-toggle-after": "Depois",
        
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
        "#card-service-1 p": "Tailor-made systems built with Python, Java, ASP.NET, and C#. We follow our Golden Rule: composition over inheritance (inheritance only for 'is-a' relationships) and Guard Clauses to eliminate nesting and ensure code robustness.",
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
        
        // Regras de Ouro
        "#rules-badge-text": "CODE QUALITY",
        "#rules-card-title": "Our Golden Rules",
        "#rules-card-desc": "We apply strict software design principles to build highly maintainable, modular, and fault-tolerant systems.",
        "#tab-label-composition": "Composition over Inheritance",
        "#tab-label-guards": "Guard Clauses",
        "#visual-panel-title": "Dynamic Simulator",
        "#code-panel-title": "Didactic Refactoring",
        "#code-toggle-before": "Before",
        "#code-toggle-after": "After",
        
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
        "#card-service-1 p": "Индивидуальные системы на Python, Java, ASP.NET и C#. Мы следуем Золотому правилу: композиция вместо наследования (наследование только для отношений 'является') и использование Guard Clauses для устранения вложенности и надежности.",
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
        
        // Regras de Ouro
        "#rules-badge-text": "КАЧЕСТВО КОДА",
        "#rules-card-title": "Наши Золотые Правила",
        "#rules-card-desc": "Мы применяем строгие принципы проектирования ПО для создания легко поддерживаемых, модульных и отказоустойчивых систем.",
        "#tab-label-composition": "Композиция вместо Наследования",
        "#tab-label-guards": "Guard Clauses",
        "#visual-panel-title": "Динамический симулятор",
        "#code-panel-title": "Дидактический рефакторинг",
        "#code-toggle-before": "До",
        "#code-toggle-after": "После",
        
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
        "#card-service-1 p": "Sistemas a medida construidos con Python, Java, ASP.NET y C#. Seguimos nuestra Regla de Oro: composición sobre herencia (herencia solo para relaciones 'es-un') y Guard Clauses para eliminar anidamientos y garantizar la robustez.",
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
        
        // Regras de Ouro
        "#rules-badge-text": "CALIDAD DE CÓDIGO",
        "#rules-card-title": "Nuestras Reglas de Oro",
        "#rules-card-desc": "Aplicamos principios estrictos de diseño de software para construir sistemas altamente mantenibles, modulares y tolerantes a fallos.",
        "#tab-label-composition": "Composición sobre Herencia",
        "#tab-label-guards": "Guard Clauses",
        "#visual-panel-title": "Funcionamiento Dinámico",
        "#code-panel-title": "Refactorización Didáctica",
        "#code-toggle-before": "Antes",
        "#code-toggle-after": "Después",
        
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

// --- CLASSE DE AVISO E PREFERÊNCIAS DE COOKIES (DYNAMIC & MULTILINGUAL) ---
class CookieConsentManager {
    constructor(config) {
        this.config = config;
        this.consentKey = "supe-cookie-consent";
        this.isOpen = false;
        this.bannerEl = null;
        
        this.init();
    }
    
    init() {
        const savedConsent = localStorage.getItem(this.consentKey);
        if (savedConsent) return; // Consentimento já fornecido
        
        // Criar o wrapper do banner no body
        const wrapper = document.createElement("div");
        wrapper.className = "cookie-banner-wrapper";
        wrapper.id = "cookie-consent-banner";
        document.body.appendChild(wrapper);
        this.bannerEl = wrapper;
        
        this.render();
        this.bindEvents();
        
        // Smooth fade-in
        setTimeout(() => {
            const card = this.bannerEl.querySelector(".cookie-card");
            if (card) card.classList.add("show");
        }, 100);
    }
    
    render() {
        if (!this.bannerEl) return;
        
        const lang = this.config.currentLanguage;
        
        // Dicionário local de cookies nas quatro línguas oficiais do portal
        const dict = {
            pt: {
                title: "Preferências de Cookies",
                desc: "Utilizamos cookies essenciais e tecnologias semelhantes para otimizar sua experiência, analisar o tráfego cibernético de produção e customizar propostas de arquitetura. Você pode gerenciar suas preferências a qualquer momento.",
                acceptAll: "Aceitar Todos",
                reject: "Rejeitar",
                manage: "Personalizar",
                save: "Salvar Preferências",
                essential: "Necessários",
                essentialDesc: "Essenciais para segurança e operação do núcleo do portal. Não podem ser desativados.",
                pref: "Preferências",
                prefDesc: "Salva suas preferências de visualização (como idioma ativo).",
                analytics: "Analíticos",
                analyticsDesc: "Permite analisar a telemetria do SRE de produção e latência de rede.",
                marketing: "Marketing",
                marketingDesc: "Usado para customizar campanhas e recomendações comerciais da fábrica.",
                alwaysActive: "Sempre Ativo"
            },
            en: {
                title: "Cookie Preferences",
                desc: "We use essential cookies and similar technologies to optimize your experience, analyze our production cyber traffic, and customize architecture proposals. You can manage your preferences at any time.",
                acceptAll: "Accept All",
                reject: "Reject",
                manage: "Manage",
                save: "Save Preferences",
                essential: "Essential",
                essentialDesc: "Essential for the portal core's security and operation. Cannot be disabled.",
                pref: "Preferences",
                prefDesc: "Saves your viewing settings (such as active language).",
                analytics: "Analytics",
                analyticsDesc: "Allows us to analyze production SRE telemetry and network latency.",
                marketing: "Marketing",
                marketingDesc: "Used to customize campaigns and business recommendations from the factory.",
                alwaysActive: "Always Active"
            },
            ru: {
                title: "Настройки куки",
                desc: "Мы используем необходимые куки и аналогичные технологии для оптимизации вашего опыта, анализа трафика и настройки архитектурных предложений. Вы можете управлять настройками в любое время.",
                acceptAll: "Принять все",
                reject: "Отклонить",
                manage: "Настроить",
                save: "Сохранить настройки",
                essential: "Необходимые",
                essentialDesc: "Необходимы для безопасности и работы ядра портала. Не могут быть отключены.",
                pref: "Предпочтения",
                prefDesc: "Сохраняет настройки просмотра (например, активный язык).",
                analytics: "Аналитика",
                analyticsDesc: "Позволяет нам анализировать телеметрию SRE и сетевую задержку.",
                marketing: "Маркетинг",
                marketingDesc: "Используется для настройки кампаний и коммерческих рекомендаций фабрики.",
                alwaysActive: "Всегда активно"
            },
            es: {
                title: "Preferencias de Cookies",
                desc: "Utilizamos cookies esenciales y tecnologías similares para optimizar su experiencia, analizar nuestro tráfico cibernético de producción y personalizar propuestas de arquitectura. Puede gestionar sus preferencias en cualquier momento.",
                acceptAll: "Aceptar Todo",
                reject: "Rechazar",
                manage: "Configurar",
                save: "Guardar Preferencias",
                essential: "Esenciales",
                essentialDesc: "Esenciales para la seguridad y operación del núcleo del portal. No se pueden desactivar.",
                pref: "Preferencias",
                prefDesc: "Guarda sus preferencias de visualización (como el idioma activo).",
                analytics: "Analíticas",
                analyticsDesc: "Permite analizar la telemetría del SRE de producción y la latencia de red.",
                marketing: "Marketing",
                marketingDesc: "Utilizado para personalizar campañas y recomendaciones comerciales de la fábrica.",
                alwaysActive: "Siempre Activo"
            }
        };
        
        const t = dict[lang] || dict.pt;
        
        this.bannerEl.innerHTML = `
            <div class="cookie-card glass-panel" role="dialog" aria-modal="true" aria-labelledby="cookie-banner-title">
                <div class="cookie-header">
                    <i data-lucide="cookie" class="cookie-header-icon"></i>
                    <h4 class="cookie-title" id="cookie-banner-title">${t.title}</h4>
                </div>
                <p class="cookie-desc">${t.desc}</p>
                
                <div class="cookie-actions">
                    <button class="btn-cookie btn-cookie-primary" id="btn-cookie-accept-all">${t.acceptAll}</button>
                    <button class="btn-cookie btn-cookie-secondary" id="btn-cookie-reject-all">${t.reject}</button>
                    <button class="btn-cookie btn-cookie-secondary" id="btn-cookie-customize">${t.manage}</button>
                </div>
                
                <div class="cookie-preferences-drawer" id="cookie-pref-drawer">
                    <div class="cookie-pref-item">
                        <div class="cookie-pref-info">
                            <h5>${t.essential}</h5>
                            <p>${t.essentialDesc}</p>
                        </div>
                        <span class="cookie-pref-badge">${t.alwaysActive}</span>
                    </div>
                    
                    <div class="cookie-pref-item">
                        <div class="cookie-pref-info">
                            <h5>${t.pref}</h5>
                            <p>${t.prefDesc}</p>
                        </div>
                        <label class="cookie-switch">
                            <input type="checkbox" id="cookie-pref-toggle-pref" checked disabled>
                            <span class="cookie-slider"></span>
                        </label>
                    </div>
                    
                    <div class="cookie-pref-item">
                        <div class="cookie-pref-info">
                            <h5>${t.analytics}</h5>
                            <p>${t.analyticsDesc}</p>
                        </div>
                        <label class="cookie-switch">
                            <input type="checkbox" id="cookie-pref-toggle-analytics" checked>
                            <span class="cookie-slider"></span>
                        </label>
                    </div>
                    
                    <div class="cookie-pref-item">
                        <div class="cookie-pref-info">
                            <h5>${t.marketing}</h5>
                            <p>${t.marketingDesc}</p>
                        </div>
                        <label class="cookie-switch">
                            <input type="checkbox" id="cookie-pref-toggle-marketing">
                            <span class="cookie-slider"></span>
                        </label>
                    </div>
                    
                    <button class="btn-cookie btn-cookie-primary" id="btn-cookie-save-prefs" style="width: 100%; margin-top: 0.5rem;">
                        ${t.save}
                    </button>
                </div>
            </div>
        `;
        
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
    
    bindEvents() {
        if (!this.bannerEl) return;
        
        const acceptAllBtn = this.bannerEl.querySelector("#btn-cookie-accept-all");
        const rejectBtn = this.bannerEl.querySelector("#btn-cookie-reject-all");
        const customizeBtn = this.bannerEl.querySelector("#btn-cookie-customize");
        const savePrefsBtn = this.bannerEl.querySelector("#btn-cookie-save-prefs");
        const drawer = this.bannerEl.querySelector("#cookie-pref-drawer");
        
        acceptAllBtn.addEventListener("click", () => {
            this.saveConsent({
                essential: true,
                preferences: true,
                analytics: true,
                marketing: true
            });
        });
        
        rejectBtn.addEventListener("click", () => {
            this.saveConsent({
                essential: true,
                preferences: true,
                analytics: false,
                marketing: false
            });
        });
        
        customizeBtn.addEventListener("click", () => {
            this.isOpen = !this.isOpen;
            drawer.classList.toggle("open", this.isOpen);
            
            // Trocar foco para o primeiro switch analítico se aberto
            if (this.isOpen) {
                setTimeout(() => {
                    const analyticsToggle = this.bannerEl.querySelector("#cookie-pref-toggle-analytics");
                    if (analyticsToggle) analyticsToggle.focus();
                }, 300);
            }
        });
        
        savePrefsBtn.addEventListener("click", () => {
            const hasAnalytics = this.bannerEl.querySelector("#cookie-pref-toggle-analytics").checked;
            const hasMarketing = this.bannerEl.querySelector("#cookie-pref-toggle-marketing").checked;
            
            this.saveConsent({
                essential: true,
                preferences: true,
                analytics: hasAnalytics,
                marketing: hasMarketing
            });
        });
    }
    
    saveConsent(settings) {
        localStorage.setItem(this.consentKey, JSON.stringify(settings));
        
        // Fade-out suave do card
        const card = this.bannerEl.querySelector(".cookie-card");
        if (card) {
            card.classList.remove("show");
            setTimeout(() => {
                this.bannerEl.remove();
                this.bannerEl = null;
            }, 500);
        }
    }
    
    // Método para permitir a re-tradução externa ao alternar idioma
    translate() {
        if (this.bannerEl) {
            this.render();
            this.bindEvents();
            // Manter a gaveta aberta se estivesse aberta
            if (this.isOpen) {
                const drawer = this.bannerEl.querySelector("#cookie-pref-drawer");
                if (drawer) drawer.classList.add("open");
            }
            const card = this.bannerEl.querySelector(".cookie-card");
            if (card) card.classList.add("show");
        }
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
        
        // Traduzir o banner de cookies em tempo real se estiver aberto!
        if (window.cookieConsentManager) {
            window.cookieConsentManager.translate();
        }
        
        // Se estivermos na subpágina de Status, forçar redesenho do canvas imediatamente
        const chartCanvas = document.getElementById("latency-chart");
        if (chartCanvas && typeof drawChart === "function") {
            drawChart();
        }

        // Se o modal do portfólio estiver aberto, atualizar o conteúdo no novo idioma
        if (typeof activeProjectId !== "undefined" && activeProjectId) {
            openProjectModal(activeProjectId);
        }

        // Se o simulador de Regras de Ouro estiver ativo, atualizar os textos explicativos
        if (typeof activeRuleId !== "undefined" && activeRuleId) {
            switchGoldenRule(activeRuleId);
        }
    });
    
    // Aplicar tradução inicial salva ou padrão
    translatePage(i18nConfig.currentLanguage);
    
    // --- Inicialização do Consentimento de Cookies (Dynamic & DRY) ---
    window.cookieConsentManager = new CookieConsentManager(i18nConfig);
    
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
                
                let color = i % 2 === 0 ? "#0098b0" : "#6c19d4";
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
                        ctx.strokeStyle = `rgba(0, 152, 176, ${alpha * 0.18})`;
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
                        ctx.strokeStyle = `rgba(108, 25, 212, ${alpha * 0.22})`;
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

    // --- 8. FECHAMENTO DO MODAL DE PORTFÓLIO (TECLADO E CLIQUE FORA) ---
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            const modal = document.getElementById("portfolio-modal");
            if (modal && modal.classList.contains("active")) {
                closeProjectModal();
            }
        }
    });

    const modalOverlay = document.getElementById("portfolio-modal");
    if (modalOverlay) {
        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) {
                closeProjectModal();
            }
        });
    }

    // Inicializar o painel de Regras de Ouro
    switchGoldenRule('composition');
});

// ==========================================================================
// PORTFOLIO DETAILS MODAL LOGIC (FLUXOS E TELAS)
// ==========================================================================
let activeProjectId = null;
let activeTabId = null;

const projectDetails = {
    "aetherflow": {
        "tag": {
            "pt": "INTELIGÊNCIA ARTIFICIAL",
            "en": "ARTIFICIAL INTELLIGENCE",
            "ru": "ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ",
            "es": "INTELIGENCIA ARTIFICIAL"
        },
        "title": {
            "pt": "AetherFlow AI Enterprise",
            "en": "AetherFlow AI Enterprise",
            "ru": "AetherFlow AI Enterprise",
            "es": "AetherFlow AI Enterprise"
        },
        "subtitle": {
            "pt": "Orquestrador inteligente de fluxos organizacionais integrado com IA Generativa privada e RAG para o setor financeiro.",
            "en": "Intelligent organizational workflow orchestrator integrated with private Generative AI and RAG for the financial sector.",
            "ru": "Интеллектуальный оркестратор организационных процессов, интегрированный с частным генеративным ИИ и RAG для финансового сектора.",
            "es": "Orquestador inteligente de flujos organizacionales integrado con IA Generativa privada y RAG para el sector financiero."
        },
        "stack": "Next.js / NestJS / Python / LangChain / pgvector / AWS",
        "impact": {
            "pt": "99.9% Disponibilidade | Redução de 40% no tempo de análise",
            "en": "99.9% Availability | 40% reduction in analysis time",
            "ru": "99.9% Доступность | Сокращение времени анализа на 40%",
            "es": "99.9% Disponibilidad | Reducción del 40% en tiempo de análisis"
        },
        "flow": {
            "pt": [
                { "title": "1. Ingestão de Documentos", "desc": "Upload seguro de PDFs, relatórios e dados estruturados criptografados." },
                { "title": "2. Processamento RAG (Vetorização)", "desc": "Divisão de texto em blocos, geração de embeddings e inserção no pgvector." },
                { "title": "3. Orquestração de Agente", "desc": "Decisão inteligente sobre ferramentas, busca semântica e contextualização." },
                { "title": "4. Validação e Filtros (Guardrails)", "desc": "Verificação de conformidade de segurança e formatação contra alucinações." },
                { "title": "5. Resposta ao Usuário", "desc": "Exibição de insights formatados com links diretos para as fontes citadas." }
            ],
            "en": [
                { "title": "1. Document Ingestion", "desc": "Secure upload of encrypted PDFs, reports, and structured data." },
                { "title": "2. RAG Processing (Vectorization)", "desc": "Splitting text into blocks, generating embeddings, and inserting into pgvector." },
                { "title": "3. Agent Orchestration", "desc": "Intelligent decision on tools, semantic search, and contextualization." },
                { "title": "4. Validation & Filters (Guardrails)", "desc": "Security compliance check and formatting to prevent hallucinations." },
                { "title": "5. Response to User", "desc": "Display of formatted insights with direct links to cited sources." }
            ],
            "ru": [
                { "title": "1. Загрузка документов", "desc": "Безопасная загрузка зашифрованных PDF, отчетов и структурированных данных." },
                { "title": "2. Обработка RAG (Векторизация)", "desc": "Разбивка текста на блоки, генерация эмбеддингов и вставка в pgvector." },
                { "title": "3. Оркестрация агентов", "desc": "Интеллектуальное решение о выборе инструментов, семантический поиск." },
                { "title": "4. Валидация и фильтрация (Guardrails)", "desc": "Проверка безопасности и форматирования для исключения галлюцинаций." },
                { "title": "5. Ответ пользователю", "desc": "Вывод форматированных ответов со ссылками на использованные источники." }
            ],
            "es": [
                { "title": "1. Ingestión de Documentos", "desc": "Carga segura de PDFs, informes y datos estructurados cifrados." },
                { "title": "2. Procesamiento RAG (Vectorización)", "desc": "División de texto en bloques, generación de embeddings e inserción en pgvector." },
                { "title": "3. Orquestación del Agente", "desc": "Decisión inteligente sobre herramientas, búsqueda semántica y contextualización." },
                { "title": "4. Validación y Filtros (Guardrails)", "desc": "Verificación de cumplimiento de seguridad y formateo contra alucinaciones." },
                { "title": "5. Respuesta al Usuario", "desc": "Exhibición de respuestas formateadas con enlaces directos a las fuentes citadas." }
            ]
        },
        "tabs": {
            "pt": [
                { "id": "chat", "label": "Workspace de Chat" },
                { "id": "pipeline", "label": "Orquestrador de Pipeline" }
            ],
            "en": [
                { "id": "chat", "label": "Chat Workspace" },
                { "id": "pipeline", "label": "Pipeline Orchestrator" }
            ],
            "ru": [
                { "id": "chat", "label": "Рабочая область чата" },
                { "id": "pipeline", "label": "Оркестратор конвейера" }
            ],
            "es": [
                { "id": "chat", "label": "Espacio de Chat" },
                { "id": "pipeline", "label": "Orquestador de Pipeline" }
            ]
        }
    },
    "helios": {
        "tag": {
            "pt": "SaaS DE BIG DATA & LOGÍSTICA",
            "en": "BIG DATA & LOGISTICS SaaS",
            "ru": "SaaS ДЛЯ BIG DATA И ЛОГИСТИКИ",
            "es": "SaaS DE BIG DATA Y LOGÍSTICA"
        },
        "title": {
            "pt": "Helios Analytics Suite",
            "en": "Helios Analytics Suite",
            "ru": "Helios Analytics Suite",
            "es": "Helios Analytics Suite"
        },
        "subtitle": {
            "pt": "Dashboard de processamento de Big Data com atualizações em tempo real para controle logístico de grandes frotas transcontinentais.",
            "en": "Big Data processing dashboard with real-time updates for logistical control of large transcontinental fleets.",
            "ru": "Панель обработки больших данных с обновлениями в реальном времени для логистического контроля крупных трансконтинентальных автопарков.",
            "es": "Dashboard de procesamiento de Big Data con actualizaciones en tiempo real para el control logístico de grandes flotas transcontinentales."
        },
        "stack": "Next.js / Go (Golang) / Apache Kafka / InfluxDB (Time Series) / Kubernetes",
        "impact": {
            "pt": "10M+ Eventos/seg | Latência < 50ms | Economia de 15% em combustível",
            "en": "10M+ Events/sec | Latency < 50ms | 15% fuel savings",
            "ru": "10M+ Событий/сек | Задержка < 50мс | Экономия топлива на 15%",
            "es": "10M+ Eventos/seg | Latencia < 50ms | Ahorro del 15% en combustible"
        },
        "flow": {
            "pt": [
                { "title": "1. Telemetria IoT", "desc": "Dispositivos embarcados transmitem velocidade, carga, temperatura e rotas via 4G/Satélite." },
                { "title": "2. Ingestão Distribuída (Kafka)", "desc": "Mensageria de alta vazão enfileira milhões de mensagens por segundo de forma resiliente." },
                { "title": "3. Processamento de Stream (Go)", "desc": "Filtragem rápida de ruídos, cálculo instantâneo de KPIs e alertas operacionais automáticos." },
                { "title": "4. Banco de Séries Temporais", "desc": "Inserção eficiente no InfluxDB para telemetria histórica e relatórios estatísticos." },
                { "title": "5. WebSockets Real-Time", "desc": "Propagação instantânea dos eventos para o frontend dos operadores em milissegundos." }
            ],
            "en": [
                { "title": "1. IoT Telemetry", "desc": "Embedded devices transmit speed, load, temperature, and routes via 4G/Satellite." },
                { "title": "2. Distributed Ingestion (Kafka)", "desc": "High-throughput messaging queues millions of messages per second resiliently." },
                { "title": "3. Stream Processing (Go)", "desc": "Fast noise filtering, instant KPI calculations, and automatic operational alerts." },
                { "title": "4. Time Series Database", "desc": "Efficient insertion into InfluxDB for historical telemetry and statistical reports." },
                { "title": "5. Real-Time WebSockets", "desc": "Instant event propagation to operators' frontend in milliseconds." }
            ],
            "ru": [
                { "title": "1. Телеметрия IoT", "desc": "Встроенные устройства передают скорость, нагрузку, температуру и маршруты через 4G/спутник." },
                { "title": "2. Распределенный прием (Kafka)", "desc": "Высокопроизводительная очередь обрабатывает миллионы сообщений в секунду." },
                { "title": "3. Потоковая обработка (Go)", "desc": "Быстрая фильтрация шума, мгновенный расчет KPI и автоматические оповещения." },
                { "title": "4. БД временных рядов", "desc": "Эффективная запись в InfluxDB для хранения истории телеметрии и аналитики." },
                { "title": "5. WebSockets в реальном времени", "desc": "Мгновенная передача событий на фронтенд операторов за миллисекунды." }
            ],
            "es": [
                { "title": "1. Telemetría IoT", "desc": "Dispositivos integrados transmiten velocidad, carga, temperatura y rutas vía 4G/Satélite." },
                { "title": "2. Ingestión Distribuida (Kafka)", "desc": "Mensajería de alta capacidad encola millones de mensajes por segundo de forma resiliente." },
                { "title": "3. Procesamiento de Stream (Go)", "desc": "Filtrado rápido de ruidos, cálculo instantáneo de KPIs y alertas operacionales automáticas." },
                { "title": "4. Banco de Series Temporales", "desc": "Inserción eficiente en InfluxDB para telemetría histórica e informes estadísticos." },
                { "title": "5. WebSockets Real-Time", "desc": "Propagación instantánea de eventos hacia el frontend de los operadores en milisegundos." }
            ]
        },
        "tabs": {
            "pt": [
                { "id": "live-map", "label": "Mapa de Telemetria" },
                { "id": "alerts", "label": "Central de Alertas" }
            ],
            "en": [
                { "id": "live-map", "label": "Telemetry Map" },
                { "id": "alerts", "label": "Alert Control" }
            ],
            "ru": [
                { "id": "live-map", "label": "Карта телеметрии" },
                { "id": "alerts", "label": "Центр оповещений" }
            ],
            "es": [
                { "id": "live-map", "label": "Mapa de Telemetría" },
                { "id": "alerts", "label": "Centro de Alertas" }
            ]
        }
    }
};

function renderAetherflowChat(lang) {
    const userMsg = {
        "pt": "Analise o desempenho financeiro do Q2 e me dê os 3 principais pontos de atenção.",
        "en": "Analyze Q2 financial performance and give me the top 3 points of attention.",
        "ru": "Проанализируйте финансовые показатели за 2 квартал и назовите 3 основных момента.",
        "es": "Analice el desempeño financiero del Q2 y déme los 3 puntos principales de atención."
    }[lang];
    
    const assistantMsg = {
        "pt": "Com base nos relatórios auditados do Q2, identifiquei três pontos críticos:<br><br>1. <strong>Aumento de 12% nos custos operacionais</strong> de logística na América Latina.<br>2. <strong>Margem EBITDA contraída em 1.5%</strong> devido ao preço das commodities.<br>3. <strong>Oportunidade de Hedge Cambial</strong> devido à volatilidade cambial das subsidiárias.",
        "en": "Based on the audited Q2 reports, I identified three critical points:<br><br>1. <strong>12% increase in operational costs</strong> of logistics in Latin America.<br>2. <strong>EBITDA margin contracted by 1.5%</strong> due to commodity pricing.<br>3. <strong>Currency Hedging opportunity</strong> due to FX volatility in subsidiaries.",
        "ru": "На основе аудированных отчетов за 2 квартал выявлено три критических момента:<br><br>1. <strong>Рост операционных расходов на 12%</strong> на логистику в Латинской Америке.<br>2. <strong>Сокращение маржи EBITDA на 1,5%</strong> из-за цен на сырье.<br>3. <strong>Возможность валютного хеджирования</strong> из-за колебаний курсов дочерних компаний.",
        "es": "Basado en los informes auditados del Q2, identifiqué tres puntos críticos:<br><br>1. <strong>Aumento del 12% en los costos operativos</strong> de logística en América Latina.<br>2. <strong>Margen EBITDA contraído en 1.5%</strong> debido al precio de las materias primas.<br>3. <strong>Oportunidad de Cobertura Cambiaria</strong> debido a la volatilidad cambiaria de las subsidiarias."
    }[lang];

    const sourceLabel = {
        "pt": "Fontes consultadas:",
        "en": "Sources consulted:",
        "ru": "Использованные источники:",
        "es": "Fuentes consultadas:"
    }[lang];

    const placeholder = {
        "pt": "Digite uma pergunta sobre conformidade ou finanças...",
        "en": "Type a question about compliance or finance...",
        "ru": "Введите вопрос о комплаенсе или финансах...",
        "es": "Escriba una pregunta sobre cumplimiento o finanzas..."
    }[lang];

    return `
        <div class="mockup-chat-container">
            <div class="mockup-chat-sidebar">
                <div class="sidebar-chat-item active"><i data-lucide="message-square" style="width:12px;height:12px;display:inline-block;margin-right:4px;"></i> Q2 Performance</div>
                <div class="sidebar-chat-item"><i data-lucide="message-square" style="width:12px;height:12px;display:inline-block;margin-right:4px;"></i> Risk Compliance</div>
                <div class="sidebar-chat-item"><i data-lucide="message-square" style="width:12px;height:12px;display:inline-block;margin-right:4px;"></i> Tax Audit 2025</div>
            </div>
            <div class="mockup-chat-area">
                <div class="chat-history">
                    <div class="chat-bubble user">${userMsg}</div>
                    <div class="chat-bubble assistant">
                        ${assistantMsg}
                        <div class="rag-sources">
                            <span style="font-size:0.65rem;color:#718096;width:100%;margin-bottom:0.2rem;">${sourceLabel}</span>
                            <span class="source-tag">audit_report_q2_2026.pdf</span>
                            <span class="source-tag">compliance_v4.db</span>
                        </div>
                    </div>
                </div>
                <div class="chat-input-box">
                    <span>${placeholder}</span>
                    <button><i data-lucide="send" style="width:12px;height:12px;"></i></button>
                </div>
            </div>
        </div>
    `;
}

function renderAetherflowPipeline(lang) {
    const statusText = {
        "pt": "[15:24:02] STATUS: Ativo. Todos os nós operando com latência < 22ms. Embeddings sincronizados.",
        "en": "[15:24:02] STATUS: Active. All nodes operating with latency < 22ms. Embeddings synchronized.",
        "ru": "[15:24:02] СТАТУС: Активен. Все узлы работают с задержкой < 22мс. Эмбеддинги синхронизированы.",
        "es": "[15:24:02] ESTADO: Activo. Todos los nodos operando con latencia < 22ms. Embeddings sincronizados."
    }[lang];

    const node1 = { "pt": "Ingestão", "en": "Ingest", "ru": "Загрузка", "es": "Ingestión" }[lang];
    const node2 = { "pt": "Vetorização", "en": "Vectorize", "ru": "Векторы", "es": "Vectorización" }[lang];
    const node3 = { "pt": "RAG Search", "en": "RAG Search", "ru": "RAG Поиск", "es": "Buscar RAG" }[lang];
    const node4 = { "pt": "Filtro Guardrail", "en": "Guardrail", "ru": "Guardrail", "es": "Guardrail" }[lang];

    return `
        <div class="pipeline-builder">
            <div class="pipeline-nodes-row">
                <div class="pipeline-node-card active">
                    <i data-lucide="upload-cloud"></i>
                    <div class="pipeline-node-info">
                        <h6>${node1}</h6>
                        <span>PDF / CSV / S3</span>
                    </div>
                </div>
                <div class="pipeline-arrow active"><i data-lucide="arrow-right"></i></div>
                <div class="pipeline-node-card active">
                    <i data-lucide="database"></i>
                    <div class="pipeline-node-info">
                        <h6>${node2}</h6>
                        <span>pgvector</span>
                    </div>
                </div>
                <div class="pipeline-arrow active"><i data-lucide="arrow-right"></i></div>
                <div class="pipeline-node-card active">
                    <i data-lucide="search"></i>
                    <div class="pipeline-node-info">
                        <h6>${node3}</h6>
                        <span>Semantic Search</span>
                    </div>
                </div>
                <div class="pipeline-arrow"><i data-lucide="arrow-right"></i></div>
                <div class="pipeline-node-card">
                    <i data-lucide="shield-check"></i>
                    <div class="pipeline-node-info">
                        <h6>${node4}</h6>
                        <span>LLM LlamaGuard</span>
                    </div>
                </div>
            </div>
            <div class="pipeline-console-status">
                ${statusText}
            </div>
        </div>
    `;
}

function renderHeliosMap(lang) {
    const lblActive = { "pt": "Frotas Ativas", "en": "Active Fleets", "ru": "Активные флоты", "es": "Flotas Activas" }[lang];
    const lblOnTime = { "pt": "No Prazo", "en": "On-Time", "ru": "Вовремя", "es": "A Tiempo" }[lang];
    const lblFuel = { "pt": "Combustível", "en": "Fuel Efficiency", "ru": "Топливо", "es": "Eficiencia" }[lang];

    return `
        <div class="mockup-map-container">
            <div class="mockup-svg-map">
                <svg viewBox="0 0 500 180" style="width:100%;height:100%;">
                    <!-- Grid Background Lines -->
                    <pattern id="map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#map-grid)" />
                    
                    <!-- Routes Schematic -->
                    <path class="map-route-line" d="M 50,40 L 150,40 L 220,100 L 380,100 L 450,140" />
                    <path class="map-route-line active" d="M 50,140 L 120,90 L 280,90 L 350,130 L 450,40" />
                    <path class="map-route-line" d="M 220,100 L 280,90" />
                    
                    <!-- Vehicle nodes -->
                    <circle class="map-truck-node" cx="120" cy="90" r="5" />
                    <circle class="map-truck-node alert" cx="280" cy="90" r="5" />
                    <circle class="map-truck-node" cx="350" cy="110" r="5" />
                </svg>
            </div>
            <div class="telemetry-kpi-grid">
                <div class="telemetry-kpi-card">
                    <span>${lblActive}</span>
                    <h5 class="cyan-val">1,248</h5>
                </div>
                <div class="telemetry-kpi-card">
                    <span>${lblOnTime}</span>
                    <h5 class="green-val">98.7%</h5>
                </div>
                <div class="telemetry-kpi-card">
                    <span>${lblFuel}</span>
                    <h5>-15%</h5>
                </div>
            </div>
        </div>
    `;
}

function renderHeliosAlerts(lang) {
    const alerts = {
        "pt": [
            { "time": "15:25:01", "msg": "ALERTA: Desvio de rota detectado no Veículo #4402", "status": "Crítico", "class": "critical" },
            { "time": "15:23:44", "msg": "Temperatura de carga instável na Unidade #1904 (Carnes)", "status": "Atenção", "class": "warning" },
            { "time": "15:22:10", "msg": "Sensor de consumo de combustível calibrado no Veículo #0092", "status": "Resolvido", "class": "success" }
        ],
        "en": [
            { "time": "15:25:01", "msg": "ALERT: Route deviation detected on Vehicle #4402", "status": "Critical", "class": "critical" },
            { "time": "15:23:44", "msg": "Unstable cargo temp in Unit #1904 (Meats)", "status": "Warning", "class": "warning" },
            { "time": "15:22:10", "msg": "Fuel consumption sensor calibrated on Vehicle #0092", "status": "Resolved", "class": "success" }
        ],
        "ru": [
            { "time": "15:25:01", "msg": "ОПОВЕЩЕНИЕ: Отклонение маршрута ТС #4402", "status": "Критично", "class": "critical" },
            { "time": "15:23:44", "msg": "Нестабильная температура груза в ТС #1904 (Мясо)", "status": "Внимание", "class": "warning" },
            { "time": "15:22:10", "msg": "Датчик расхода топлива откалиброван на ТС #0092", "status": "Решено", "class": "success" }
        ],
        "es": [
            { "time": "15:25:01", "msg": "ALERTA: Desviación de ruta detectada en el Vehículo #4402", "status": "Crítico", "class": "critical" },
            { "time": "15:23:44", "msg": "Temperatura de carga inestable en Unidad #1904 (Carnes)", "status": "Atención", "class": "warning" },
            { "time": "15:22:10", "msg": "Sensor de consumo de combustible calibrado en el Vehículo #0092", "status": "Resuelto", "class": "success" }
        ]
    }[lang];

    let listHtml = "";
    alerts.forEach(item => {
        listHtml += `
            <div class="alert-row ${item.class}">
                <span class="alert-time">[${item.time}]</span>
                <span class="alert-message">${item.msg}</span>
                <span class="alert-status-badge">${item.status}</span>
            </div>
        `;
    });

    return `
        <div class="mockup-alert-console">
            ${listHtml}
        </div>
    `;
}

function openProjectModal(projectId) {
    activeProjectId = projectId;
    const project = projectDetails[projectId];
    if (!project) return;
    
    const lang = i18nConfig.currentLanguage || 'pt';
    
    // Set static text
    document.getElementById("modal-tag-text").textContent = project.tag[lang];
    document.getElementById("modal-title").textContent = project.title[lang];
    document.getElementById("modal-subtitle").textContent = project.subtitle[lang];
    document.getElementById("modal-spec-stack").textContent = project.stack;
    document.getElementById("modal-spec-impact").textContent = project.impact[lang];
    
    // Set headers
    const lblFlow = { "pt": "Fluxo do Sistema", "en": "System Flow", "ru": "Процесс системы", "es": "Flujo del Sistema" }[lang];
    const lblScreens = { "pt": "Telas e Funcionalidades", "en": "Screens & Features", "ru": "Экраны и функции", "es": "Telas y Funcionalidades" }[lang];
    document.getElementById("modal-label-flow").textContent = lblFlow;
    document.getElementById("modal-label-screens").textContent = lblScreens;

    // Render flow diagram
    const flowContainer = document.getElementById("modal-flow-diagram");
    let flowHtml = "";
    project.flow[lang].forEach((step, index) => {
        flowHtml += `
            <div class="flow-step-node">
                <div class="flow-node-badge">${index + 1}</div>
                <div class="flow-node-content">
                    <h5>${step.title}</h5>
                    <p>${step.desc}</p>
                </div>
                <div class="flow-node-line"></div>
            </div>
        `;
    });
    flowContainer.innerHTML = flowHtml;
    
    // Render tabs
    const tabsContainer = document.getElementById("modal-tabs-container");
    let tabsHtml = "";
    project.tabs[lang].forEach((tab, index) => {
        const isActive = activeTabId ? activeTabId === tab.id : index === 0;
        if (isActive) activeTabId = tab.id;
        tabsHtml += `
            <button class="modal-tab-btn ${isActive ? 'active' : ''}" onclick="switchModalTab('${tab.id}')" id="tab-btn-${tab.id}">
                ${tab.label}
            </button>
        `;
    });
    tabsContainer.innerHTML = tabsHtml;
    
    // Render default screen
    renderScreenMockup();
    
    // Open modal
    const modal = document.getElementById("portfolio-modal");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    
    // Refresh Lucide Icons inside modal
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function closeProjectModal() {
    const modal = document.getElementById("portfolio-modal");
    modal.classList.remove("active");
    document.body.style.overflow = "";
    activeProjectId = null;
    activeTabId = null;
}

function switchModalTab(tabId) {
    activeTabId = tabId;
    
    // Update active class on tab buttons
    const buttons = document.querySelectorAll(".modal-tab-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    
    const activeBtn = document.getElementById(`tab-btn-${tabId}`);
    if (activeBtn) activeBtn.classList.add("active");
    
    // Redraw screen mockup
    renderScreenMockup();
}

function renderScreenMockup() {
    const lang = i18nConfig.currentLanguage || 'pt';
    const displayContainer = document.getElementById("modal-screen-display");
    if (!displayContainer || !activeProjectId || !activeTabId) return;
    
    let mockupHtml = "";
    
    // Window header wrapper mockup
    const windowTitle = {
        "chat": "AetherFlow AI Console - AgentChat v1.2",
        "pipeline": "AetherFlow Pipeline Orchestrator v1.2",
        "live-map": "Helios Fleet Telemetry Maps - Live Stream",
        "alerts": "Helios Operational Alert Center - KernelLogs"
    }[activeTabId];
    
    let innerContent = "";
    if (activeProjectId === "aetherflow") {
        if (activeTabId === "chat") {
            innerContent = renderAetherflowChat(lang);
        } else {
            innerContent = renderAetherflowPipeline(lang);
        }
    } else if (activeProjectId === "helios") {
        if (activeTabId === "live-map") {
            innerContent = renderHeliosMap(lang);
        } else {
            innerContent = renderHeliosAlerts(lang);
        }
    }
    
    mockupHtml = `
        <div class="mockup-screen">
            <div class="mockup-window-header">
                <div class="mockup-window-dots">
                    <div class="mockup-dot red"></div>
                    <div class="mockup-dot yellow"></div>
                    <div class="mockup-dot green"></div>
                </div>
                <div class="mockup-window-title">${windowTitle}</div>
            </div>
            <div class="mockup-window-body">
                ${innerContent}
            </div>
        </div>
    `;
    
    displayContainer.innerHTML = mockupHtml;
    
    // Refresh Lucide inside mockup
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Mount to window object for global availability
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.switchModalTab = switchModalTab;

// --- GOLDEN RULES INTERACTIVE CARD LOGIC ---
let activeRuleId = 'composition';
let activeCodeState = 'before';

const goldenRulesData = {
    "composition": {
        "file": "RobotDog.cs",
        "explanation": {
            "pt": "A composição permite acoplar comportamentos modulares injetando dependências, evitando a fragilidade de hierarquias rígidas de herança (onde subclasses herdam comportamentos indesejados).",
            "en": "Composition allows coupling modular behaviors by injecting dependencies, avoiding the fragility of rigid inheritance hierarchies (where subclasses inherit unwanted behaviors).",
            "ru": "Композиция позволяет связывать модульные поведения путем внедрения зависимостей, избегая хрупкости жестких иерархий наследования (где подклассы наследуют нежелательное поведение).",
            "es": "La composición permite acoplar comportamientos modulares inyectando dependencias, evitando la fragilidad de jerarquías rígidas de herencia (donde las subclases heredan comportamientos no deseados)."
        },
        "code": {
            "before": {
                "pt": `<span class="comment">// ❌ Herança rígida: Robô herdando de Animal real</span>
<span class="keyword">public class</span> <span class="type">RoboCachorro</span> : <span class="type">CachorroDomestico</span> {
    <span class="comment">// Herda métodos impróprios como Comer() e Respirar()</span>
    <span class="comment">// que falham ou quebram o fluxo físico de um robô.</span>
    <span class="keyword">public override void</span> Comer() {
        <span class="keyword">throw new</span> <span class="type">InvalidOperationException</span>(<span class="string">"Robôs não comem!"</span>);
    }
}`,
                "en": `<span class="comment">// ❌ Rigid Inheritance: Robot inheriting from real Animal</span>
<span class="keyword">public class</span> <span class="type">RobotDog</span> : <span class="type">DomesticDog</span> {
    <span class="comment">// Inherits improper methods like Eat() and Breathe()</span>
    <span class="comment">// which fail or break the physical flow of a robot.</span>
    <span class="keyword">public override void</span> Eat() {
        <span class="keyword">throw new</span> <span class="type">InvalidOperationException</span>(<span class="string">"Robots do not eat!"</span>);
    }
}`,
                "ru": `<span class="comment">// ❌ Жесткое наследование: Робот наследуется от реального Животного</span>
<span class="keyword">public class</span> <span class="type">RobotDog</span> : <span class="type">DomesticDog</span> {
    <span class="comment">// Наследует неподходящие методы вроде Eat() и Breathe(),</span>
    <span class="comment">// которые вызывают ошибки или нарушают логику робота.</span>
    <span class="keyword">public override void</span> Eat() {
        <span class="keyword">throw new</span> <span class="type">InvalidOperationException</span>(<span class="string">"Роботы не едят!"</span>);
    }
}`,
                "es": `<span class="comment">// ❌ Herencia rígida: El robot hereda del Animal real</span>
<span class="keyword">public class</span> <span class="type">RobotDog</span> : <span class="type">DomesticDog</span> {
    <span class="comment">// Hereda métodos impropios como Comer() y Respirar()</span>
    <span class="comment">// que fallan o rompen el flujo físico de un robot.</span>
    <span class="keyword">public override void</span> Comer() {
        <span class="keyword">throw new</span> <span class="type">InvalidOperationException</span>(<span class="string">"¡Los robots no comen!"</span>);
    }
}`
            },
            "after": {
                "pt": `<span class="comment">//  Composição flexível: Comportamento injetado</span>
<span class="keyword">public class</span> <span class="type">RoboCachorro</span> {
    <span class="keyword">private readonly</span> <span class="type">IMovimento</span> _movimento;
    <span class="keyword">private readonly</span> <span class="type">IAltoFalante</span> _som;
    
    <span class="comment">// Injeção de Dependência para acoplamento flexível</span>
    <span class="keyword">public</span> RoboCachorro(<span class="type">IMovimento</span> mov, <span class="type">IAltoFalante</span> som) {
        _movimento = mov;
        _som = som;
    }
    <span class="keyword">public void</span> Executar() {
        _movimento.Andar(); <span class="comment">// Comportamento composto modular</span>
    }
}`,
                "en": `<span class="comment">//  Flexible Composition: Injected behaviors</span>
<span class="keyword">public class</span> <span class="type">RobotDog</span> {
    <span class="keyword">private readonly</span> <span class="type">IMovement</span> _movement;
    <span class="keyword">private readonly</span> <span class="type">ISpeaker</span> _sound;
    
    <span class="comment">// Dependency Injection for loose coupling</span>
    <span class="keyword">public</span> RobotDog(<span class="type">IMovement</span> mov, <span class="type">ISpeaker</span> som) {
        _movement = mov;
        _sound = som;
    }
    <span class="keyword">public void</span> Run() {
        _movement.Walk(); <span class="comment">// Modular composed behavior</span>
    }
}`,
                "ru": `<span class="comment">//  Гибкая композиция: Внедренное поведение</span>
<span class="keyword">public class</span> <span class="type">RobotDog</span> {
    <span class="keyword">private readonly</span> <span class="type">IMovement</span> _movement;
    <span class="keyword">private readonly</span> <span class="type">ISpeaker</span> _sound;
    
    <span class="comment">// Внедрение зависимостей для слабой связи</span>
    <span class="keyword">public</span> RobotDog(<span class="type">IMovement</span> mov, <span class="type">ISpeaker</span> som) {
        _movement = mov;
        _sound = som;
    }
    <span class="keyword">public void</span> Run() {
        _movement.Walk(); <span class="comment">// Модульное составное поведение</span>
    }
}`,
                "es": `<span class="comment">//  Composición flexible: Comportamientos inyectados</span>
<span class="keyword">public class</span> <span class="type">RobotDog</span> {
    <span class="keyword">private readonly</span> <span class="type">IMovement</span> _movement;
    <span class="keyword">private readonly</span> <span class="type">ISpeaker</span> _sound;
    
    <span class="comment">// Inyección de dependencias para acoplamiento flexible</span>
    <span class="keyword">public</span> RobotDog(<span class="type">IMovement</span> mov, <span class="type">ISpeaker</span> som) {
        _movement = mov;
        _sound = som;
    }
    <span class="keyword">public void</span> Ejecutar() {
        _movement.Caminar(); <span class="comment">// Comportamiento compuesto modular</span>
    }
}`
            }
        }
    },
    "guards": {
        "file": "OrderProcessor.cs",
        "explanation": {
            "pt": "As Cláusulas de Guarda verificam condições inválidas imediatamente e retornam/lançam exceções mais cedo. Isso limpa a indentação do código, elimina blocos 'if-else' aninhados e melhora a legibilidade do fluxo principal.",
            "en": "Guard Clauses check invalid conditions immediately and return/throw exceptions early. This flattens code indentation, eliminates nested 'if-else' blocks, and improves main flow readability.",
            "ru": "Guard Clauses проверяют некорректные условия сразу и вызывают ранний возврат или исключение. Это уплотняет отступы кода, устраняет вложенные блоки 'if-else' и улучшает читаемость.",
            "es": "Las Cláusulas de Guarda verifican condiciones inválidas de inmediato y devuelven/lanzan excepciones antes. Esto aplana la sangría del código, elimina bloques 'if-else' anidados y mejora la legibilidad."
        },
        "code": {
            "before": {
                "pt": `<span class="comment">// ❌ Aninhamento excessivo: Código em pirâmide</span>
<span class="keyword">public void</span> Processar(<span class="type">Pedido</span> pedido) {
    <span class="keyword">if</span> (pedido != <span class="keyword">null</span>) {
        <span class="keyword">if</span> (pedido.Itens.Count > <span class="string">0</span>) {
            <span class="keyword">if</span> (pedido.Cliente.Ativo) {
                <span class="comment">// Caminho feliz espremido na direita</span>
                ExecutarProcessamento(pedido);
            }
        }
    }
}`,
                "en": `<span class="comment">// ❌ Excessive Nesting: Pyramid of Doom</span>
<span class="keyword">public void</span> Process(<span class="type">Order</span> order) {
    <span class="keyword">if</span> (order != <span class="keyword">null</span>) {
        <span class="keyword">if</span> (order.Items.Count > <span class="string">0</span>) {
            <span class="keyword">if</span> (order.Client.IsActive) {
                <span class="comment">// Happy path squeezed on the far right</span>
                ExecuteProcessing(order);
            }
        }
    }
}`,
                "ru": `<span class="comment">// ❌ Чрезмерная вложенность: Код-пирамида</span>
<span class="keyword">public void</span> Process(<span class="type">Order</span> order) {
    <span class="keyword">if</span> (order != <span class="keyword">null</span>) {
        <span class="keyword">if</span> (order.Items.Count > <span class="string">0</span>) {
            <span class="keyword">if</span> (order.Client.IsActive) {
                <span class="comment">// Основной поток зажат глубоко справа</span>
                ExecuteProcessing(order);
            }
        }
    }
}`,
                "es": `<span class="comment">// ❌ Anidamiento excesivo: Código en pirámide</span>
<span class="keyword">public void</span> Procesar(<span class="type">Pedido</span> pedido) {
    <span class="keyword">if</span> (pedido != <span class="keyword">null</span>) {
        <span class="keyword">if</span> (pedido.Articulos.Count > <span class="string">0</span>) {
            <span class="keyword">if</span> (pedido.Cliente.Activo) {
                <span class="comment">// Camino feliz exprimido en la derecha</span>
                EjecutarProcesamiento(pedido);
            }
        }
    }
}`
            },
            "after": {
                "pt": `<span class="comment">//  Guards: Retorno antecipado e fluxo linear</span>
<span class="keyword">public void</span> Processar(<span class="type">Pedido</span> pedido) {
    <span class="keyword">if</span> (pedido == <span class="keyword">null</span>) <span class="keyword">throw new</span> <span class="type">ArgumentException</span>();
    <span class="keyword">if</span> (pedido.Itens.Count == <span class="string">0</span>) <span class="keyword">return</span>;
    <span class="keyword">if</span> (!pedido.Cliente.Ativo) <span class="keyword">return</span>; <span class="comment">// Retorna cedo</span>
    
    <span class="comment">// Caminho feliz sem recuos e altamente legível</span>
    ExecutarProcessamento(pedido);
}`,
                "en": `<span class="comment">//  Guards: Early return and flat flow</span>
<span class="keyword">public void</span> Process(<span class="type">Order</span> order) {
    <span class="keyword">if</span> (order == <span class="keyword">null</span>) <span class="keyword">throw new</span> <span class="type">ArgumentException</span>();
    <span class="keyword">if</span> (order.Items.Count == <span class="string">0</span>) <span class="keyword">return</span>;
    <span class="keyword">if</span> (!order.Client.IsActive) <span class="keyword">return</span>; <span class="comment">// Early exit</span>
    
    <span class="comment">// Clean, highly readable happy path without nesting</span>
    ExecuteProcessing(order);
}`,
                "ru": `<span class="comment">//  Guards: Ранний возврат и плоский поток</span>
<span class="keyword">public void</span> Process(<span class="type">Order</span> order) {
    <span class="keyword">if</span> (order == <span class="keyword">null</span>) <span class="keyword">throw new</span> <span class="type">ArgumentException</span>();
    <span class="keyword">if</span> (order.Items.Count == <span class="string">0</span>) <span class="keyword">return</span>;
    <span class="keyword">if</span> (!order.Client.IsActive) <span class="keyword">return</span>; <span class="comment">// Выход раньше</span>
    
    <span class="comment">// Читаемый основной поток без отступов и лесенки</span>
    ExecuteProcessing(order);
}`,
                "es": `<span class="comment">//  Guards: Retorno anticipado y flujo lineal</span>
<span class="keyword">public void</span> Procesar(<span class="type">Pedido</span> pedido) {
    <span class="keyword">if</span> (pedido == <span class="keyword">null</span>) <span class="keyword">throw new</span> <span class="type">ArgumentException</span>();
    <span class="keyword">if</span> (pedido.Articulos.Count == <span class="string">0</span>) <span class="keyword">return</span>;
    <span class="keyword">if</span> (!pedido.Cliente.Activo) <span class="keyword">return</span>; <span class="comment">// Retorna temprano</span>
    
    <span class="comment">// Camino feliz sin sangrías complejas y altamente legible</span>
    EjecutarProcesamiento(pedido);
}`
            }
        }
    }
};

function switchGoldenRule(ruleId) {
    activeRuleId = ruleId;
    
    // Update active tab button style
    const tabBtns = document.querySelectorAll(".rules-tab-btn");
    tabBtns.forEach(btn => btn.classList.remove("active"));
    
    const activeBtn = document.getElementById(`rule-btn-${ruleId}`);
    if (activeBtn) activeBtn.classList.add("active");
    
    // Render visual simulator and code
    renderGoldenRuleVisual();
    renderGoldenRuleCode();
}

function switchCodeCompare(state) {
    activeCodeState = state;
    
    // Update active code toggle button style
    const toggleBtns = document.querySelectorAll(".code-toggle-btn");
    toggleBtns.forEach(btn => btn.classList.remove("active"));
    
    const activeBtn = document.getElementById(`code-toggle-${state}`);
    if (activeBtn) activeBtn.classList.add("active");
    
    // Redraw code
    renderGoldenRuleCode();
}

function renderGoldenRuleVisual() {
    const visualBox = document.getElementById("rules-visual-simulator");
    if (!visualBox) return;
    
    if (activeRuleId === 'composition') {
        const lang = i18nConfig.currentLanguage || 'pt';
        const badTitle = { "pt": "Herança Rígida (Frágil)", "en": "Rigid Inheritance", "ru": "Жесткое наследование", "es": "Herencia Rígida" }[lang];
        const goodTitle = { "pt": "Composição (Flexível)", "en": "Composition (Flexible)", "ru": "Композиция", "es": "Composición" }[lang];
        
        visualBox.innerHTML = `
            <div class="composition-sim-container">
                <div class="composition-sim-left">
                    <span class="sim-side-title">${badTitle}</span>
                    <div class="inheritance-chain">
                        <div class="chain-item">Animal</div>
                        <div class="chain-arrow"></div>
                        <div class="chain-item">Cachorro</div>
                        <div class="chain-arrow"></div>
                        <div class="chain-item" style="border-color:#f35588; color:#f35588; background:rgba(243,85,136,0.1);">RoboCachorro</div>
                    </div>
                </div>
                <div class="composition-sim-right">
                    <span class="sim-side-title">${goodTitle}</span>
                    <div class="composition-core">RobotDog</div>
                    <div class="composition-modules-grid">
                        <div class="comp-module-item mod-walk" style="--start-x: -95px; --start-y: -95px; --dock-x: -80px; --dock-y: -40px;">WalkBehavior</div>
                        <div class="comp-module-item mod-bark" style="--start-x: 95px; --start-y: -95px; --dock-x: 80px; --dock-y: -40px;">BarkBehavior</div>
                        <div class="comp-module-item mod-battery" style="--start-x: 0px; --start-y: 105px; --dock-x: 0px; --dock-y: 65px;">PowerSource</div>
                    </div>
                </div>
            </div>
        `;
    } else if (activeRuleId === 'guards') {
        const lang = i18nConfig.currentLanguage || 'pt';
        const badTitle = { "pt": "Aninhado (Instável)", "en": "Nested If-Else", "ru": "Вложенный If-Else", "es": "Anidado" }[lang];
        const goodTitle = { "pt": "Early Return (Robusto)", "en": "Early Return", "ru": "Early Return", "es": "Early Return" }[lang];

        visualBox.innerHTML = `
            <div class="guards-sim-container">
                <div class="guards-sim-left">
                    <span class="sim-side-title">${badTitle}</span>
                    <div class="nested-maze">
                        <div class="maze-branch b-1"></div>
                        <div class="maze-branch b-2"></div>
                        <div class="maze-branch b-3"></div>
                        <div class="nested-particle"></div>
                    </div>
                </div>
                <div class="guards-sim-right">
                    <span class="sim-side-title">${goodTitle}</span>
                    <div class="guards-pipeline">
                        <div class="guards-vertical-path">
                            <div class="guard-clause-bar g-1"></div>
                            <div class="guard-clause-bar g-2"></div>
                            <div class="guard-success-node"></div>
                            <div class="guards-particle"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

function renderGoldenRuleCode() {
    const lang = i18nConfig.currentLanguage || 'pt';
    const rule = goldenRulesData[activeRuleId];
    if (!rule) return;
    
    // Set file name
    document.getElementById("editor-file-name").textContent = rule.file;
    
    // Set code body
    const codeContent = rule.code[activeCodeState][lang];
    document.getElementById("editor-code-content").innerHTML = codeContent;
    
    // Set explanation
    const explanationText = rule.explanation[lang];
    document.getElementById("rule-explanation-text").textContent = explanationText;
}

// Mount to window object for global availability
window.switchGoldenRule = switchGoldenRule;
window.switchCodeCompare = switchCodeCompare;
