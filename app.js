/* ==========================================================================
   SUPÉ SOFTWARE ENGINEERING - INTERACTIVE LOGIC (app.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
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
            // Checar limites do Canvas e reverter velocidade
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY;
            }
            
            // Movimentação
            this.x += this.directionX;
            this.y += this.directionY;
            
            // Interação com Mouse (efeito de proximidade)
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

    // Inicialização do Array
    function initParticles() {
        particlesArray = [];
        let num = numberOfParticles;
        if (window.innerWidth < 768) num = 40; // Menos partículas no mobile para melhor performance
        
        for (let i = 0; i < num; i++) {
            let size = (Math.random() * 2) + 1;
            let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * 0.8) - 0.4;
            let directionY = (Math.random() * 0.8) - 0.4;
            
            // Gradiente ciano/roxo
            let color = i % 2 === 0 ? "#00f2fe" : "#7f00ff";
            
            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    // Conectar partículas próximas com linhas cibernéticas
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
            
            // Conectar partículas ao mouse se ele estiver ativo
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

    // Loop de Animação
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connect();
        requestAnimationFrame(animate);
    }

    // Start Particles
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    initParticles();
    animate();

    // --- 4. MOTOR DE INTEGRAÇÃO (PROCESSO INTERATIVO) ---
    const nodes = document.querySelectorAll(".integration-node");
    const stepTitle = document.getElementById("step-title-display");
    const stepDesc = document.getElementById("step-desc-display");
    const stepNumber = document.getElementById("step-number-display");
    
    const stepsData = {
        1: {
            title: "Concepção Estrutural & Discovery",
            desc: "Imersão completa no ecossistema de negócios do cliente para mapear fluxos, identificar gargalos técnicos e arquitetar a melhor fusão tecnológica customizada. Aqui alinhamos as metas com os diretores de UX e arquitetos chefes.",
            number: "Etapa 01",
            metrics: ["2 semanas", "Analistas e UX Directors"]
        },
        2: {
            title: "Arquitetura e Modelagem Resiliente",
            desc: "Modelagem das fundações técnicas do sistema utilizando microsserviços, modelagem de banco de dados distribuídos de alta resiliência e design de fluxos de eventos assíncronos prontos para escalabilidade astronômica.",
            number: "Etapa 02",
            metrics: ["3 semanas", "Arquitetos de Sistemas e DBAs"]
        },
        3: {
            title: "Codificação Limpa e Modular",
            desc: "Os engenheiros mais experientes entram em ação criando módulos com cobertura de testes automatizados rígida, obedecendo às diretrizes mais rígidas de arquitetura limpa (Clean Architecture), padrões SOLID e performance máxima.",
            number: "Etapa 03",
            metrics: ["Variável", "Líderes de Desenvolvimento"]
        },
        4: {
            title: "Fusão de Inteligência Artificial",
            desc: "Integração cirúrgica de inteligência artificial de última geração. Acoplamos pipelines de aprendizado de máquina, modelos preditivos ou agentes conversacionais baseados em LLMs diretamente no motor central do software.",
            number: "Etapa 04",
            metrics: ["2 a 4 semanas", "Engenheiros de IA e Cientistas"]
        },
        5: {
            title: "Deploy Contínuo & Nuvem Zero-Trust",
            desc: "Automatização de toda a esteira de implantação via pipelines CI/CD ultra-seguros, empacotando os artefatos em Kubernetes na nuvem (AWS/GCP), protegidos por arquitetura de segurança perimetral zero-trust.",
            number: "Etapa 05",
            metrics: ["Segundos (Real-time)", "DevOps Engineers & SecOps"]
        }
    };

    function updateIntegrationStep(step) {
        // Desativar nós e linhas
        nodes.forEach(node => node.classList.remove("active"));
        document.querySelectorAll(".integration-line").forEach(l => l.classList.remove("active"));
        
        // Ativar nós até o passo atual
        for (let i = 1; i <= step; i++) {
            const node = document.querySelector(`.integration-node[data-step="${i}"]`);
            if (node) node.classList.add("active");
            
            if (i < step) {
                const line = document.querySelector(`.integration-line.line-${i}${i+1}`);
                if (line) line.classList.add("active");
            }
        }
        
        // Atualizar textos e badges do detalhe
        const data = stepsData[step];
        if (data) {
            stepTitle.textContent = data.title;
            stepDesc.textContent = data.desc;
            stepNumber.textContent = data.number;
            
            // Efeitos de gradiente dinâmicos para a borda do badge dependendo do passo
            const colors = { 1: "#00f2fe", 2: "#7f00ff", 3: "#4facfe", 4: "#00ff87", 5: "#f35588" };
            stepNumber.style.borderColor = colors[step];
            stepNumber.style.color = colors[step];
            
            const metricsText = document.querySelectorAll(".step-metrics .metric-item");
            if (metricsText.length >= 2) {
                metricsText[0].innerHTML = `<i data-lucide="clock"></i> Tempo médio: ${data.metrics[0]}`;
                metricsText[1].innerHTML = `<i data-lucide="users"></i> Time: ${data.metrics[1]}`;
                lucide.createIcons();
            }
        }
    }

    // Ouvir cliques nos nós
    nodes.forEach(node => {
        node.addEventListener("click", () => {
            const step = parseInt(node.getAttribute("data-step"));
            updateIntegrationStep(step);
            
            // Resetar ciclo automático se o usuário interagir
            clearInterval(autoCycleInterval);
        });
    });

    // Ciclo automático sutil no motor de processos
    let currentStep = 1;
    let autoCycleInterval = setInterval(() => {
        currentStep = currentStep >= 5 ? 1 : currentStep + 1;
        updateIntegrationStep(currentStep);
    }, 6000); // muda a cada 6 segundos

    // --- 5. TERMINAL INTERATIVO DE DEPURAÇÃO ---
    const terminalInput = document.getElementById("terminal-input");
    const terminalOutput = document.getElementById("terminal-output-area");
    const terminalBody = document.getElementById("terminal-body-console");
    const shortcuts = document.querySelectorAll(".btn-shortcut");

    const commands = {
        help: () => {
            return `
Comandos disponíveis no núcleo Supé:
  <span class="highlight-cmd">about</span>     - Filosofia de liderança da empresa e palavras do CEO Josafá.
  <span class="highlight-cmd">stack</span>     - Exibe as tecnologias integradas de alta performance.
  <span class="highlight-cmd">compile</span>   - Executa simulação de compilação da infraestrutura Supé.
  <span class="highlight-cmd">clear</span>     - Limpa o console do terminal.
  <span class="highlight-cmd">help</span>      - Exibe este painel de comandos do desenvolvedor.
`;
        },
        about: () => {
            return `
[DNA SUPÉ SOFTWARE ENGINEERING]
  Fundada e dirigida pelo CEO <span class="cyan-text">Josafá de Pinho Souza</span>, a Supé nasceu do
  desejo supremo de elevar a engenharia de software brasileira ao padrão global de elite.
  
  "Nossa missão é a integridade: conectar arquitetura limpa, código resiliente
  e inteligência artificial pragmática para que grandes corporações escalem de forma indestrutível."
  
  [LIDERANÇA]
  Josafá de Pinho Souza - CEO & Chief Systems Architect
  Mais de 15 anos modelando ecossistemas empresariais de alta resiliência.
`;
        },
        stack: () => {
            return `
[INTEGRATED TECHNOLOGY STACK]
  * <span class="cyan-text">Frontend Premium:</span> Next.js, React, TailwindCSS, WebGL
  * <span class="purple-text">Core Backend:</span> NestJS, Node.js, Go (Golang), Python, Rust
  * <span class="green-text">Machine Learning:</span> OpenAI API, LangChain, PyTorch, RAG Pipelines
  * <span class="gray-text">Cloud & DevOps:</span> AWS Cloud, Kubernetes, Terraform IaC, Docker
  * <span class="cyan-text">Banco de Dados:</span> PostgreSQL (distribuído), Redis, MongoDB, Pinecone Vector DB
`;
        },
        compile: () => {
            return "simulating"; // Lógica de delay especial implementada abaixo
        },
        clear: () => {
            terminalOutput.innerHTML = "";
            return "";
        }
    };

    function handleTerminalSubmit(cmdText) {
        const cleanedText = cmdText.trim().toLowerCase();
        let response = "";
        
        // Criar linha de eco do comando digitado
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
            errorLine.innerHTML = `Comando não reconhecido: <span class="highlight-cmd">${cmdText}</span>. Digite <span class="highlight-cmd">help</span> para obter assistência.`;
            terminalOutput.appendChild(errorLine);
        }
        
        // Scroll para o fim
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    // Simulação animada do compile para wow effect
    function simulateCompilation() {
        const compileLines = [
            { text: "Conectando ao cluster Kubernetes Supé-PRO-01...", color: "gray-text", delay: 100 },
            { text: "Inicializando modelos de Inteligência Artificial AetherFlow...", color: "purple-text", delay: 400 },
            { text: "[OK] OpenAI API v4.2.1 sincronizada com chave TLS 1.3.", color: "green-text", delay: 700 },
            { text: "[OK] Embeddings carregados no Pinecone Vector Database.", color: "green-text", delay: 1000 },
            { text: "Compilando pacotes backend de alta latência (Go-Rest-Engine)...", color: "gray-text", delay: 1300 },
            { text: "[OK] 1,024 microsserviços respondendo com SLA de 99.99%.", color: "green-text", delay: 1600 },
            { text: "Autenticando credenciais do CEO Josafá de Pinho Souza...", color: "cyan-text", delay: 1900 },
            { text: "[COMPILADO COM SUCESSO] Núcleo operacional online e integrado!", color: "cyan-text", delay: 2300 }
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

    // Atalhos rápidos
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

    // Lógica para marcar rádio customizado ativamente
    radioCards.forEach(card => {
        card.addEventListener("click", () => {
            radioCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            const radioInput = card.querySelector("input[type='radio']");
            if (radioInput) radioInput.checked = true;
        });
    });

    // Submissão do Formulário
    if (plannerForm && successState) {
        plannerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Coletar dados
            const name = document.getElementById("form-name").value;
            const email = document.getElementById("form-email").value;
            const projectType = plannerForm.querySelector("input[name='project-type']:checked").value;
            const message = document.getElementById("form-message").value;

            // Simulação de envio para o servidor local com micro-animação
            const btnSubmit = document.getElementById("btn-submit-form");
            btnSubmit.disabled = true;
            btnSubmit.innerHTML = `<span>Compilando...</span> <div class="pulse-dot"></div>`;

            setTimeout(() => {
                // Esconder formulário, mostrar estado de sucesso
                plannerForm.style.display = "none";
                successState.classList.remove("hidden");
                btnSubmit.disabled = false;
                btnSubmit.innerHTML = `<span>Enviar Requisição de Arquitetura</span> <i data-lucide="send"></i>`;
                lucide.createIcons();
            }, 1800);
        });

        // Resetar Formulário
        if (resetFormBtn) {
            resetFormBtn.addEventListener("click", () => {
                plannerForm.reset();
                // Setar ativo padrão
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
            
            // Injetar variáveis CSS de posição no card para o efeito radial de reflexo
            card.style.setProperty("--x", `${x}px`);
            card.style.setProperty("--y", `${y}px`);
        });
    });
});
