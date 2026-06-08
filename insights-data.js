const articleContents = {
    "pt": {
        "guard-clauses": {
            category: "Código",
            title: "Uso de Guard Clauses no C# e Java",
            readTime: "6 min",
            author: "Time de Engenharia",
            content: `
                <p>Na engenharia de software de alto nível, a legibilidade e a robustez do código são pilares fundamentais. Um dos problemas mais comuns em bases de código legadas é o chamado "Arrow Anti-pattern" (Anti-padrão de Flecha) ou "Pirâmide do Destino", caracterizado por aninhamentos excessivos de blocos condicionais <code>if-else</code>.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">O Problema do Aninhamento Excessivo</h4>
                <p>Quando escrevemos lógica validando múltiplas pré-condições sequencialmente, a tendência natural é aninhar as validações. Isso afasta a lógica principal (o "happy path") para a direita da tela, aumentando a carga cognitiva necessária para ler e depurar a função.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">A Regra de Ouro das Cláusulas de Guarda</h4>
                <p>As <strong>Guard Clauses</strong> (Cláusulas de Guarda) resolvem esse problema invertendo as condições. Validamos os casos de erro ou exceções no topo do método e retornamos imediatamente (via <code>return</code> ou lançando uma exceção). Se todas as cláusulas passarem, a lógica principal roda linearmente no menor nível de indentação possível.</p>
                
                <div style="background: #090714; padding: 1.2rem; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.06); font-family: monospace; font-size: 0.85rem; color: #4ade80;">
                    <span style="color: #64748b;">// Refatoração Didática em C#</span><br>
                    <span style="color: #f35588;">public void</span> ProcessarPedido(Pedido pedido) {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #64748b;">// Cláusulas de Guarda (Retornos Antecipados)</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">if</span> (pedido == <span style="color: #c084fc;">null</span>) <span style="color: #f35588;">throw new</span> ArgumentNullException();<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">if</span> (!pedido.IsValido) <span style="color: #f35588;">throw new</span> InvalidOperationException();<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">if</span> (pedido.Itens.Count == 0) <span style="color: #f35588;">return</span>;<br>
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #64748b;">// Happy Path (Sem aninhamento)</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;pedido.Status = Status.Processado;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;SalvarNoBanco(pedido);<br>
                    }
                </div>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Benefícios de Negócio e Engenharia</h4>
                <ul>
                    <li><strong>Manutenibilidade:</strong> Adicionar novas validações torna-se trivial, bastando inserir uma nova linha no topo do método.</li>
                    <li><strong>Testabilidade:</strong> Testar fluxos de erro torna-se isolado e direto.</li>
                    <li><strong>Robustez:</strong> O código falha rápido (*fail-fast*), prevenindo que erros silenciosos se propaguem pela execução.</li>
                </ul>
            `
        },
        "composition": {
            category: "Arquitetura",
            title: "Design Patterns na Prática: Composição",
            readTime: "8 min",
            author: "CEO Josafá de Pinho",
            content: `
                <p>Há décadas o paradigma de Programação Orientada a Objetos ensina que a herança é o mecanismo primário para reutilização de código. No entanto, na engenharia de software corporativo moderna, a aplicação cega da herança cria acoplamentos indesejados e estruturas rígidas difíceis de alterar.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">O Problema da Herança (Fragilidade de Base)</h4>
                <p>A herança viola o encapsulamento porque a classe filha depende dos detalhes de implementação da classe mãe. Esse acoplamento é conhecido como o "problema da classe base frágil" (*fragile base class*): se você alterar um método na classe base para consertar um bug, poderá quebrar silenciosamente dezenas de subclasses herdeiras.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">A Solução: Composição sobre Herança</h4>
                <p>A composição resolve o problema estabelecendo uma relação de "tem um" (*has-a*) em vez de "é um" (*is-a*). Em vez de herdar comportamentos, uma classe delega tarefas para instâncias de classes menores e altamente focadas, injetadas através de interfaces.</p>
                
                <div style="background: #090714; padding: 1.2rem; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.06); font-family: monospace; font-size: 0.85rem; color: #4ade80;">
                    <span style="color: #64748b;">// Exemplo de Composição Flexível</span><br>
                    <span style="color: #f35588;">public interface</span> IComportamentoAndar { <span style="color: #f35588;">void</span> Andar(); }<br>
                    <br>
                    <span style="color: #f35588;">public class</span> RoboCao {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">private readonly</span> IComportamentoAndar _andar;<br>
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">public</span> RoboCao(IComportamentoAndar andar) {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_andar = andar;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">public void</span> Executar() {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_andar.Andar(); <span style="color: #64748b;">// Delegando comportamento</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                    }
                </div>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Quando usar Herança?</h4>
                <p>Nossa Regra de Ouro é clara: a herança deve ser restrita apenas para relações estritamente semânticas do tipo "é um" (ex: <code>Square</code> herda de <code>Shape</code>). Para reutilização de comportamento dinâmico, utilize sempre a composição.</p>
            `
        },
        "rag": {
            category: "IA",
            title: "Otimizando RAG com Embeddings e Vector DB",
            readTime: "10 min",
            author: "Time de Engenharia",
            content: `
                <p>Com a ascensão dos Modelos de Linguagem (LLMs), a arquitetura RAG (Retrieval-Augmented Generation) tornou-se a abordagem padrão para fornecer inteligência privada e atualizada baseada em documentos corporativos sem custos de ajuste fino (*fine-tuning*).</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">O Fluxo de Processamento RAG</h4>
                <p>RAG atua injetando o contexto relevante diretamente no prompt do LLM. O processo envolve converter documentos em vetores matemáticos (embeddings) e buscar a similaridade de cossenos em um banco de dados vetorial de alta performance.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Técnicas de Otimização no pgvector</h4>
                <p>Para buscar milhões de documentos com latências abaixo de 10 milissegundos, a escolha dos índices no banco de dados é crítica. O pgvector (PostgreSQL) suporta dois tipos principais de índices aproximados:</p>
                <ul>
                    <li><strong>IVFFlat:</strong> Indexa dividindo o espaço vetorial em partições. É rápido de construir, mas perde precisão se o número de partições estiver incorreto.</li>
                    <li><strong>HNSW (Hierarchical Navigable Small World):</strong> Constrói um grafo em multicamadas. É extremamente rápido de buscar e muito mais preciso, embora consuma mais memória e tempo de compilação do índice.</li>
                </ul>
                
                <div style="background: #090714; padding: 1.2rem; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.06); font-family: monospace; font-size: 0.85rem; color: #4ade80;">
                    <span style="color: #64748b;">-- Configuração de Índice HNSW no PostgreSQL</span><br>
                    <span style="color: #f35588;">CREATE INDEX</span> ON documentos_embeddings <br>
                    <span style="color: #f35588;">USING</span> hnsw (vetor_conteudo vector_cosine_ops)<br>
                    <span style="color: #f35588;">WITH</span> (m = 16, ef_construction = 64);
                </div>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Impacto de Latência</h4>
                <p>Ao implementar o índice HNSW, reduzimos a latência de busca por vetores de 120ms para apenas 8ms em nossa plataforma AetherFlow AI, garantindo que as respostas de chat de IA fluam instantaneamente para o usuário.</p>
            `
        },
        "terraform": {
            category: "Nuvem",
            title: "Infraestrutura Imutável com Terraform e AWS",
            readTime: "7 min",
            author: "CEO Josafá de Pinho",
            content: `
                <p>O gerenciamento manual de recursos em nuvem é o maior responsável por vulnerabilidades de segurança e falhas operacionais (*configuration drift*). A prática moderna de DevOps exige que toda infraestrutura seja imutável e descrita declarativamente através de código.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Infraestrutura Mutável vs. Imutável</h4>
                <p>Em infraestruturas mutáveis, servidores ativos são alterados continuamente através de scripts ou painéis administrativos. Na infraestrutura imutável, novos servidores ou serviços são criados a partir de imagens imutáveis e substituem os antigos completamente. Se algo falha, o rollback é instantâneo e sem efeitos colaterais.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Configurando VPC e EKS com Terraform</h4>
                <p>Usando o Terraform, declaramos os limites de rede isolada (VPC) e o orquestrador de microsserviços (EKS) de forma declarativa e versionada.</p>
                
                <div style="background: #090714; padding: 1.2rem; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.06); font-family: monospace; font-size: 0.85rem; color: #4ade80;">
                    <span style="color: #64748b;"># Provedor Terraform AWS</span><br>
                    <span style="color: #f35588;">resource</span> "aws_vpc" "supe_main" {<br>
                    &nbsp;&nbsp;cidr_block = "10.0.0.0/16"<br>
                    &nbsp;&nbsp;enable_dns_hostnames = true<br>
                    &nbsp;&nbsp;tags = {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Name = "supe-vpc-producao"<br>
                    &nbsp;&nbsp;}<br>
                    }
                </div>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Práticas Recomendadas</h4>
                <ul>
                    <li><strong>State Remoto:</strong> Mantenha o estado do Terraform em um bucket seguro (ex: AWS S3) com travamento via DynamoDB para evitar edições simultâneas e conflitos de escrita.</li>
                    <li><strong>GitOps:</strong> Qualquer mudança de infraestrutura deve passar por pull requests com execução automatizada prévia de <code>terraform plan</code> em pipelines seguros de CI/CD.</li>
                </ul>
            `
        }
    },
    "en": {
        "guard-clauses": {
            category: "Code",
            title: "Using Guard Clauses in C# and Java",
            readTime: "6 min",
            author: "Engineering Team",
            content: `
                <p>In high-level software engineering, code readability and robustness are fundamental pillars. One of the most common issues in legacy codebases is the "Arrow Anti-pattern" or "Pyramid of Doom," characterized by excessive nesting of conditional <code>if-else</code> blocks.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">The Problem of Excessive Nesting</h4>
                <p>When writing logic that validates multiple preconditions sequentially, the natural tendency is to nest the validations. This pushes the main logic (the "happy path") to the right of the screen, increasing the cognitive load required to read and debug the function.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">The Golden Rule of Guard Clauses</h4>
                <p><strong>Guard Clauses</strong> solve this problem by inverting the conditions. We validate the error cases or exceptions at the top of the method and return immediately (via <code>return</code> or by throwing an exception). If all guard clauses pass, the main logic runs linearly at the lowest indentation level possible.</p>
                
                <div style="background: #090714; padding: 1.2rem; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.06); font-family: monospace; font-size: 0.85rem; color: #4ade80;">
                    <span style="color: #64748b;">// C# Refactoring Example</span><br>
                    <span style="color: #f35588;">public void</span> ProcessOrder(Order order) {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #64748b;">// Guard Clauses (Early Returns)</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">if</span> (order == <span style="color: #c084fc;">null</span>) <span style="color: #f35588;">throw new</span> ArgumentNullException();<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">if</span> (!order.IsValid) <span style="color: #f35588;">throw new</span> InvalidOperationException();<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">if</span> (order.Items.Count == 0) <span style="color: #f35588;">return</span>;<br>
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #64748b;">// Happy Path (No nesting)</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;order.Status = Status.Processed;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;SaveToDatabase(order);<br>
                    }
                </div>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Business and Engineering Benefits</h4>
                <ul>
                    <li><strong>Maintainability:</strong> Adding new validations becomes trivial, simply insert a new line at the top of the method.</li>
                    <li><strong>Testability:</strong> Testing error flows becomes isolated and straightforward.</li>
                    <li><strong>Robustness:</strong> The code fails fast, preventing silent errors from propagating during execution.</li>
                </ul>
            `
        },
        "composition": {
            category: "Architecture",
            title: "Design Patterns in Practice: Composition",
            readTime: "8 min",
            author: "CEO Josafá de Pinho",
            content: `
                <p>For decades, the Object-Oriented Programming paradigm has taught that inheritance is the primary mechanism for code reuse. However, in modern corporate software engineering, blind application of inheritance creates unwanted coupling and rigid structures that are difficult to alter.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">The Inheritance Problem (Fragile Base Class)</h4>
                <p>Inheritance violates encapsulation because the child class depends on the implementation details of the parent class. This coupling is known as the "fragile base class problem": if you change a method in the base class to fix a bug, you could silently break dozens of inheriting subclasses.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">The Solution: Composition over Inheritance</h4>
                <p>Composition solves this problem by establishing a "has-a" relationship instead of an "is-a" relationship. Instead of inheriting behaviors, a class delegates tasks to instances of smaller, highly focused classes injected through interfaces.</p>
                
                <div style="background: #090714; padding: 1.2rem; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.06); font-family: monospace; font-size: 0.85rem; color: #4ade80;">
                    <span style="color: #64748b;">// Flexible Composition Example</span><br>
                    <span style="color: #f35588;">public interface</span> IWalkBehavior { <span style="color: #f35588;">void</span> Walk(); }<br>
                    <br>
                    <span style="color: #f35588;">public class</span> RobotDog {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">private readonly</span> IWalkBehavior _walk;<br>
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">public</span> RobotDog(IWalkBehavior walk) {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_walk = walk;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">public void</span> Execute() {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_walk.Walk(); <span style="color: #64748b;">// Delegating behavior</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                    }
                </div>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">When to use Inheritance?</h4>
                <p>Our Golden Rule is clear: inheritance must be restricted only to strictly semantic "is-a" relationships (e.g., <code>Square</code> inherits from <code>Shape</code>). For dynamic behavior reuse, always use composition.</p>
            `
        },
        "rag": {
            category: "AI",
            title: "Optimizing RAG with Embeddings and Vector DB",
            readTime: "10 min",
            author: "Engineering Team",
            content: `
                <p>With the rise of Large Language Models (LLMs), RAG (Retrieval-Augmented Generation) architecture has become the standard approach for providing private, up-to-date intelligence based on enterprise documents without the cost of fine-tuning.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">The RAG Processing Pipeline</h4>
                <p>RAG operates by injecting relevant context directly into the LLM's prompt. The process involves converting documents into mathematical vectors (embeddings) and searching for cosine similarity in a high-performance vector database.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Optimization Techniques in pgvector</h4>
                <p>To query millions of documents with latencies below 10 milliseconds, database index selection is critical. pgvector (PostgreSQL) supports two main types of approximate indexes:</p>
                <ul>
                    <li><strong>IVFFlat:</strong> Indexes by dividing the vector space into partitions. It is fast to build but loses accuracy if the partition count is incorrect.</li>
                    <li><strong>HNSW (Hierarchical Navigable Small World):</strong> Builds a multi-layer graph. It is extremely fast to search and much more accurate, although it consumes more memory and index build time.</li>
                </ul>
                
                <div style="background: #090714; padding: 1.2rem; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.06); font-family: monospace; font-size: 0.85rem; color: #4ade80;">
                    <span style="color: #64748b;">-- HNSW Index Setup in PostgreSQL</span><br>
                    <span style="color: #f35588;">CREATE INDEX</span> ON document_embeddings <br>
                    <span style="color: #f35588;">USING</span> hnsw (content_vector vector_cosine_ops)<br>
                    <span style="color: #f35588;">WITH</span> (m = 16, ef_construction = 64);
                </div>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Latency Impact</h4>
                <p>By implementing the HNSW index, we reduced vector search latency from 120ms to just 8ms on our AetherFlow AI platform, ensuring that AI chat responses flow instantly to the user.</p>
            `
        },
        "terraform": {
            category: "Cloud",
            title: "Immutable Infrastructure with Terraform and AWS",
            readTime: "7 min",
            author: "CEO Josafá de Pinho",
            content: `
                <p>Manual management of cloud resources is the leading cause of security vulnerabilities and operational failures (configuration drift). Modern DevOps practices demand that all infrastructure be immutable and described declaratively via code.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Mutable vs. Immutable Infrastructure</h4>
                <p>In mutable infrastructures, active servers are continuously altered via scripts or admin panels. In immutable infrastructure, new servers or services are created from immutable images and replace the old ones entirely. If something fails, the rollback is instant and without side effects.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Configuring VPC and EKS with Terraform</h4>
                <p>Using Terraform, we declare the boundaries of the isolated network (VPC) and the microservices orchestrator (EKS) in a declarative, version-controlled manner.</p>
                
                <div style="background: #090714; padding: 1.2rem; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.06); font-family: monospace; font-size: 0.85rem; color: #4ade80;">
                    <span style="color: #64748b;"># Terraform AWS Provider</span><br>
                    <span style="color: #f35588;">resource</span> "aws_vpc" "supe_main" {<br>
                    &nbsp;&nbsp;cidr_block = "10.0.0.0/16"<br>
                    &nbsp;&nbsp;enable_dns_hostnames = true<br>
                    &nbsp;&nbsp;tags = {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Name = "supe-prod-vpc"<br>
                    &nbsp;&nbsp;}<br>
                    }
                </div>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Recommended Best Practices</h4>
                <ul>
                    <li><strong>Remote State:</strong> Keep the Terraform state in a secure bucket (e.g., AWS S3) with state locking via DynamoDB to prevent concurrent executions and state conflicts.</li>
                    <li><strong>GitOps:</strong> Any infrastructure change must go through pull requests with an automated execution of <code>terraform plan</code> in secure CI/CD pipelines.</li>
                </ul>
            `
        }
    },
    "ru": {
        "guard-clauses": {
            category: "Код",
            title: "Использование Guard Clauses в C# и Java",
            readTime: "6 мин",
            author: "Инженерная команда",
            content: `
                <p>В высокоуровневой программной инженерии удобочитаемость и надежность кода являются фундаментальными столпами. Одной из наиболее распространенных проблем в устаревших базах кода является так называемый «шаблон стрелки» (Arrow Anti-pattern) или «пирамида судьбы», характеризующаяся чрезмерным вложением условных блоков <code>if-else</code>.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Проблема избыточной вложенности</h4>
                <p>При написании логики, которая последовательно проверяет несколько предварительных условий, естественная тенденция состоит во вложении проверок. Это отодвигает основную логику («счастливый путь») в правый край экрана, увеличивая когнитивную нагрузку при чтении и отладке функции.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Золотое правило защитных условий (Guard Clauses)</h4>
                <p>Защитные условия (<strong>Guard Clauses</strong>) решают эту проблему путем инвертирования условий. Мы обрабатываем случаи ошибок или исключений в самом начале метода и немедленно выходим (с помощью <code>return</code> или выбрасывания исключения). Если все защитные условия пройдены, основная логика выполняется линейно на самом низком уровне вложенности.</p>
                
                <div style="background: #090714; padding: 1.2rem; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.06); font-family: monospace; font-size: 0.85rem; color: #4ade80;">
                    <span style="color: #64748b;">// Пример рефакторинга на C#</span><br>
                    <span style="color: #f35588;">public void</span> ProcessOrder(Order order) {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #64748b;">// Защитные условия (Ранний возврат)</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">if</span> (order == <span style="color: #c084fc;">null</span>) <span style="color: #f35588;">throw new</span> ArgumentNullException();<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">if</span> (!order.IsValid) <span style="color: #f35588;">throw new</span> InvalidOperationException();<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">if</span> (order.Items.Count == 0) <span style="color: #f35588;">return</span>;<br>
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #64748b;">// Основной поток выполнения (Без вложенности)</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;order.Status = Status.Processed;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;SaveToDatabase(order);<br>
                    }
                </div>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Преимущества для бизнеса и разработки</h4>
                <ul>
                    <li><strong>Удобство сопровождения:</strong> Добавить новые проверки становится тривиальной задачей — достаточно вставить строку в начале метода.</li>
                    <li><strong>Тестируемость:</strong> Тестирование потоков ошибок становится изолированным и прозрачным.</li>
                    <li><strong>Надежность:</strong> Код падает быстро (*fail-fast*), предотвращая распространение скрытых ошибок.</li>
                </ul>
            `
        },
        "composition": {
            category: "Архитектура",
            title: "Шаблоны проектирования на практике: композиция",
            readTime: "8 мин",
            author: "CEO Жозафа де Пиньо",
            content: `
                <p>На протяжении десятилетий парадигма ООП утверждала, что наследование является основным механизмом повторного использования кода. Однако в современной корпоративной разработке слепое использование наследования приводит к нежелательной связности и жестким структурам, которые сложно изменить.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Проблема наследования (Хрупкий базовый класс)</h4>
                <p>Наследование нарушает инкапсуляцию, поскольку дочерний класс зависит от деталей реализации родительского класса. Эта связность известна как «проблема хрупкого базового класса»: изменение метода в базовом классе для исправления бага может незаметно сломать десятки дочерних классов.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Решение: Композиция вместо наследования</h4>
                <p>Композиция решает эту проблему, устанавливая отношения типа «содержит» (*has-a*) вместо «является» (*is-a*). Вместо наследования поведения класс делегирует задачи экземплярам небольших, специализированных классов, внедряемых через интерфейсы.</p>
                
                <div style="background: #090714; padding: 1.2rem; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.06); font-family: monospace; font-size: 0.85rem; color: #4ade80;">
                    <span style="color: #64748b;">// Пример гибкой композиции</span><br>
                    <span style="color: #f35588;">public interface</span> IWalkBehavior { <span style="color: #f35588;">void</span> Walk(); }<br>
                    <br>
                    <span style="color: #f35588;">public class</span> RobotDog {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">private readonly</span> IWalkBehavior _walk;<br>
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">public</span> RobotDog(IWalkBehavior walk) {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_walk = walk;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">public void</span> Execute() {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_walk.Walk(); <span style="color: #64748b;">// Делегирование поведения</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                    }
                </div>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Когда использовать наследование?</h4>
                <p>Наше Золотое правило четко гласит: наследование должно быть ограничено только строгими семантическими отношениями вида «является» (например, <code>Square</code> наследует от <code>Shape</code>). Для динамического повторного использования поведения всегда применяйте композицию.</p>
            `
        },
        "rag": {
            category: "ИИ",
            title: "Оптимизация RAG с эмбеддингами и векторными БД",
            readTime: "10 мин",
            author: "Инженерная команда",
            content: `
                <p>С развитием больших языковых моделей (LLM) архитектура RAG (Retrieval-Augmented Generation) стала стандартным подходом для предоставления актуальных и закрытых корпоративных данных без затрат на тонкую настройку моделей (fine-tuning).</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Процесс обработки данных RAG</h4>
                <p>RAG работает путем внедрения релевантного контекста непосредственно в промпт LLM. Процесс включает преобразование документов в математические векторы (эмбеддинги) и поиск по косинусному сходству в высокопроизводительной векторной базе данных.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Методы оптимизации в pgvector</h4>
                <p>Для выполнения запросов по миллионам документов с задержкой менее 10 миллисекунд выбор индексов базы данных имеет решающее значение. pgvector (PostgreSQL) поддерживает два основных типа приблизительных индексов:</p>
                <ul>
                    <li><strong>IVFFlat:</strong> Индексирует путем разделения векторного пространства на ячейки. Строится быстро, но теряет точность, если количество разделов выбрано неверно.</li>
                    <li><strong>HNSW (Hierarchical Navigable Small World):</strong> Строит многослойный граф. Обладает высочайшей скоростью поиска и более точен, хотя потребляет больше памяти и времени на создание индекса.</li>
                </ul>
                
                <div style="background: #090714; padding: 1.2rem; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.06); font-family: monospace; font-size: 0.85rem; color: #4ade80;">
                    <span style="color: #64748b;">-- Настройка индекса HNSW в PostgreSQL</span><br>
                    <span style="color: #f35588;">CREATE INDEX</span> ON document_embeddings <br>
                    <span style="color: #f35588;">USING</span> hnsw (content_vector vector_cosine_ops)<br>
                    <span style="color: #f35588;">WITH</span> (m = 16, ef_construction = 64);
                </div>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Влияние на задержку</h4>
                <p>Внедрение индекса HNSW на нашей платформе AetherFlow AI снизило задержку векторного поиска со 120 мс до 8 мс, обеспечивая мгновенный вывод ответов ИИ-чата пользователю.</p>
            `
        },
        "terraform": {
            category: "Облако",
            title: "Иммутабельная инфраструктура с Terraform и AWS",
            readTime: "7 мин",
            author: "CEO Жозафа де Пиньо",
            content: `
                <p>Ручное управление облачными ресурсами — основная причина уязвимостей безопасности и операционных сбоев (дрейф конфигурации). Современный DevOps требует декларативного описания всей инфраструктуры в виде кода.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Мутабельная и иммутабельная инфраструктура</h4>
                <p>В мутабельных инфраструктурах запущенные серверы постоянно изменяются через скрипты или панели администрирования. В иммутабельной инфраструктуре новые серверы или службы развертываются из неизменяемых образов и полностью заменяют старые. В случае сбоя откат происходит мгновенно и без побочных эффектов.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Настройка VPC и EKS с помощью Terraform</h4>
                <p>С помощью Terraform мы объявляем границы изолированной сети (VPC) и оркестратора микрослужб (EKS) декларативным способом с версионированием.</p>
                
                <div style="background: #090714; padding: 1.2rem; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.06); font-family: monospace; font-size: 0.85rem; color: #4ade80;">
                    <span style="color: #64748b;"># Провайдер Terraform AWS</span><br>
                    <span style="color: #f35588;">resource</span> "aws_vpc" "supe_main" {<br>
                    &nbsp;&nbsp;cidr_block = "10.0.0.0/16"<br>
                    &nbsp;&nbsp;enable_dns_hostnames = true<br>
                    &nbsp;&nbsp;tags = {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Name = "supe-prod-vpc"<br>
                    &nbsp;&nbsp;}<br>
                    }
                </div>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Рекомендуемые практики</h4>
                <ul>
                    <li><strong>Удаленный стейт (Remote State):</strong> Храните стейт Terraform в надежном бакете (например, AWS S3) с блокировкой через DynamoDB для предотвращения параллельного изменения.</li>
                    <li><strong>GitOps:</strong> Любое изменение инфраструктуры должно проходить через pull requests с автоматическим выполнением <code>terraform plan</code> в CI/CD конвейерах.</li>
                </ul>
            `
        }
    },
    "es": {
        "guard-clauses": {
            category: "Código",
            title: "Uso de Guard Clauses en C# y Java",
            readTime: "6 min",
            author: "Equipo de Ingeniería",
            content: `
                <p>En la ingeniería de software de alto nivel, la legibilidad y robustez del código son pilares fundamentales. Uno de los problemas más comunes en bases de código legadas es el llamado "Arrow Anti-pattern" o "Pirámide del Destino", caracterizado por el anidamiento excesivo de bloques condicionales <code>if-else</code>.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">El Problema del Anidamiento Excesivo</h4>
                <p>Al escribir una lógica que valida múltiples condiciones secuencialmente, la tendencia natural es anidar las validaciones. Esto aleja la lógica principal (el "happy path") hacia la derecha de la pantalla, incrementando la carga cognitiva necesaria para leer y depurar la función.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">La Regla de Oro de las Cláusulas de Guarda</h4>
                <p>Las cláusulas de guarda (<strong>Guard Clauses</strong>) resuelven este problema invirtiendo las condiciones. Validamos los casos de error o excepciones al inicio del método y retornamos inmediatamente (vía <code>return</code> o lanzando una excepción). Si todas las cláusulas de guarda pasan, la lógica principal se ejecuta de forma lineal en el nivel de sangría más bajo posible.</p>
                
                <div style="background: #090714; padding: 1.2rem; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.06); font-family: monospace; font-size: 0.85rem; color: #4ade80;">
                    <span style="color: #64748b;">// Ejemplo de Refactorización en C#</span><br>
                    <span style="color: #f35588;">public void</span> ProcesarPedido(Pedido pedido) {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #64748b;">// Cláusulas de Guarda (Retornos Anticipados)</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">if</span> (pedido == <span style="color: #c084fc;">null</span>) <span style="color: #f35588;">throw new</span> ArgumentNullException();<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">if</span> (!pedido.IsValido) <span style="color: #f35588;">throw new</span> InvalidOperationException();<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">if</span> (pedido.Itens.Count == 0) <span style="color: #f35588;">return</span>;<br>
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #64748b;">// Happy Path (Sin anidamientos)</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;pedido.Status = Status.Processado;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;SalvarEnBD(pedido);<br>
                    }
                </div>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Beneficios de Negocio e Ingeniería</h4>
                <ul>
                    <li><strong>Mantenibilidad:</strong> Añadir nuevas validaciones se vuelve trivial, simplemente insertando una nueva línea al inicio del método.</li>
                    <li><strong>Testabilidad:</strong> Probar flujos de error se vuelve aislado y directo.</li>
                    <li><strong>Robustez:</strong> El código falla rápido (*fail-fast*), previniendo que errores silenciosos se propaguen.</li>
                </ul>
            `
        },
        "composition": {
            category: "Arquitectura",
            title: "Design Patterns en la Práctica: Composición",
            readTime: "8 min",
            author: "CEO Josafá de Pinho",
            content: `
                <p>Durante décadas, el paradigma de Programación Orientada a Objetos ha enseñado que la herencia es el mecanismo principal para la reutilización de código. Sin embargo, en la ingeniería moderna, la aplicación ciega de la herencia crea acoplamientos no deseados y estructuras rígidas difíciles de alterar.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">El Problema de la Herencia (Clase Base Frágil)</h4>
                <p>La herencia viola el encapsulamiento porque la clase hija depende de los detalles de implementación de la clase madre. Este acoplamiento se conoce como "problema de la clase base frágil": si cambia un método en la clase base para corregir un bug, podría romper silenciosamente decenas de subclases herederas.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">La Solución: Composición sobre Herencia</h4>
                <p>La composición resuelve este problema estableciendo una relación de "tiene un" (*has-a*) en lugar de "es un" (*is-a*). En lugar de heredar comportamientos, una clase delega tareas a instancias de clases más pequeñas y altamente enfocadas, inyectadas a través de interfaces.</p>
                
                <div style="background: #090714; padding: 1.2rem; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.06); font-family: monospace; font-size: 0.85rem; color: #4ade80;">
                    <span style="color: #64748b;">// Ejemplo de Composición Flexible</span><br>
                    <span style="color: #f35588;">public interface</span> IWalkBehavior { <span style="color: #f35588;">void</span> Walk(); }<br>
                    <br>
                    <span style="color: #f35588;">public class</span> RobotDog {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">private readonly</span> IWalkBehavior _walk;<br>
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">public</span> RobotDog(IWalkBehavior walk) {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_walk = walk;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #f35588;">public void</span> Ejecutar() {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_walk.Walk(); <span style="color: #64748b;">// Delegando comportamiento</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                    }
                </div>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">¿Cuándo usar Herencia?</h4>
                <p>Nuestra Regla de Oro es clara: la herencia debe restringirse únicamente a relaciones estrictamente semánticas del tipo "es un" (ej: <code>Square</code> hereda de <code>Shape</code>). Para la reutilización dinámica de comportamiento, utilice siempre composición.</p>
            `
        },
        "rag": {
            category: "AI",
            title: "Optimizando RAG con Embeddings y Vector DB",
            readTime: "10 min",
            author: "Equipo de Ingeniería",
            content: `
                <p>Con el auge de los Modelos de Lenguaje Grandes (LLM), la arquitectura RAG (Retrieval-Augmented Generation) se ha convertido en el enfoque estándar para proporcionar inteligencia privada y actualizada basada en documentos corporativos sin incurrir en costos de ajuste fino.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">El Flujo de Procesamiento RAG</h4>
                <p>RAG funciona inyectando contexto relevante directamente en el prompt del LLM. El proceso implica convertir documentos en vectores matemáticos (embeddings) y buscar similitud de coseno en una base de datos vectorial de alto rendimiento.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Técnicas de Optimización en pgvector</h4>
                <p>Para buscar millones de documentos con latencias inferiores a 10 milisegundos, la selección del índice es crítica. pgvector (PostgreSQL) admite dos tipos principales de índices aproximados:</p>
                <ul>
                    <li><strong>IVFFlat:</strong> Indexa dividiendo el espacio vectorial en particiones. Se construye rápido, pero pierde precisión si el número de particiones es incorrecto.</li>
                    <li><strong>HNSW (Hierarchical Navigable Small World):</strong> Construye un grafo multicapa. Es extremadamente rápido de consultar y mucho más preciso, aunque consume más memoria y tiempo de creación.</li>
                </ul>
                
                <div style="background: #090714; padding: 1.2rem; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.06); font-family: monospace; font-size: 0.85rem; color: #4ade80;">
                    <span style="color: #64748b;">-- Configuración de Índice HNSW en PostgreSQL</span><br>
                    <span style="color: #f35588;">CREATE INDEX</span> ON document_embeddings <br>
                    <span style="color: #f35588;">USING</span> hnsw (content_vector vector_cosine_ops)<br>
                    <span style="color: #f35588;">WITH</span> (m = 16, ef_construction = 64);
                </div>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Impacto de Latencia</h4>
                <p>Al implementar el índice HNSW, redujimos la latencia de búsqueda de vectores de 120ms a tan solo 8ms en nuestra plataforma AetherFlow AI, garantizando respuestas instantáneas al usuario.</p>
            `
        },
        "terraform": {
            category: "Nube",
            title: "Infraestrucutra Inmutable con Terraform y AWS",
            readTime: "7 min",
            author: "CEO Josafá de Pinho",
            content: `
                <p>El manejo manual de recursos en la nube es la principal causa de fallas operativas y brechas de seguridad (configuration drift). DevOps moderno exige que toda la infraestructura sea inmutable y declarada a través de código.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Infraestructura Mutable vs. Inmutable</h4>
                <p>En infraestructuras mutables, los servidores activos se modifican continuamente vía scripts o paneles de administración. En infraestructura inmutable, los nuevos servidores se crean a partir de imágenes inmutables y reemplazan a los antiguos por completo. Si algo falla, el rollback es inmediato y sin efectos secundarios.</p>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Configurando VPC y EKS con Terraform</h4>
                <p>Usando Terraform, declaramos los límites de la red aislada (VPC) y el orquestador de microservicios (EKS) de forma declarativa y bajo control de versiones.</p>
                
                <div style="background: #090714; padding: 1.2rem; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.06); font-family: monospace; font-size: 0.85rem; color: #4ade80;">
                    <span style="color: #64748b;"># Proveedor AWS en Terraform</span><br>
                    <span style="color: #f35588;">resource</span> "aws_vpc" "supe_main" {<br>
                    &nbsp;&nbsp;cidr_block = "10.0.0.0/16"<br>
                    &nbsp;&nbsp;enable_dns_hostnames = true<br>
                    &nbsp;&nbsp;tags = {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Name = "supe-prod-vpc"<br>
                    &nbsp;&nbsp;}<br>
                    }
                </div>
                
                <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Prácticas Recomendadas</h4>
                <ul>
                    <li><strong>Remote State:</strong> Mantenga el estado de Terraform en un bucket seguro (ej: AWS S3) con bloqueo a través de DynamoDB para evitar ejecuciones simultáneas y conflictos de estado.</li>
                    <li><strong>GitOps:</strong> Cualquier cambio en la infraestructura debe realizarse mediante pull requests con ejecuciones automatizadas de <code>terraform plan</code> en pipelines de CI/CD.</li>
                </ul>
            `
        }
    }
};
