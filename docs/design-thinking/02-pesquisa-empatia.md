# Etapa 2 — Pesquisa e Empatia

## Objetivo

Investigar em profundidade o contexto do problema de onboarding em times de software, por meio de análise documental, construção de personas, mapas de empatia e jornadas de usuário, a fim de reunir dados qualitativos e quantitativos que comprovem a relevância e urgência do problema.

---

## 2.1. Análise Documental

### Pesquisas e Dados de Mercado

| Fonte | Dado Relevante |
|-------|---------------|
| State of DevOps Report (DORA/Google) | Times com bom onboarding apresentam 2x mais deployment frequency e 50% menos tempo de recuperação de falhas |
| Stack Overflow Developer Survey 2025 | 72% dos devs consideram a qualidade da documentação como fator decisivo para permanecer em um projeto |
| Glassdoor Research | Empresas com onboarding estruturado melhoram a retenção de novos funcionários em 82% |
| Harvard Business Review | O período de "ramp-up" de um novo funcionário custa em média 1-2% da receita anual da empresa |
| GitLab Remote Work Report | 55% dos desenvolvedores remotos relatam dificuldades extremas no onboarding |
| LinkedIn Workforce Report | A rotatividade em tech é 13,2% ao ano — mais alta que qualquer outra indústria |

### Análise de Soluções Existentes

| Solução | O que faz | Limitações |
|---------|-----------|------------|
| **Confluence/Notion** | Wiki interna de documentação | Documentação fica desatualizada rapidamente; não é interativa |
| **README.md do projeto** | Documentação básica no repositório | Superficial; raramente mantida; não guia o aprendizado |
| **Pair Programming** | Mentor programa junto com o novo dev | Consome tempo do sênior; não escala; depende de disponibilidade |
| **Onboarding Buddies** | Pessoa designada para ajudar o novo dev | Dependência de 1 pessoa; sem estrutura formal |
| **Loom/Vídeos gravados** | Walkthroughs em vídeo do codebase | Ficam desatualizados; difícil de buscar informação específica |

**Gap identificado:** Nenhuma solução existente combina (1) visualização interativa da arquitetura, (2) trilhas de aprendizado estruturadas e (3) métricas de progresso em uma única plataforma.

---

## 2.2. Personas

### Persona 1: Lucas — O Dev Junior Recém-Contratado

| Atributo | Detalhe |
|----------|---------|
| **Nome** | Lucas Silva |
| **Idade** | 23 anos |
| **Cargo** | Desenvolvedor Júnior Frontend |
| **Experiência** | 1 ano (estágio + primeiro emprego) |
| **Contexto** | Acabou de entrar em uma startup de fintech com um monorepo de 200k linhas |
| **Objetivo** | Conseguir fazer sua primeira contribuição significativa o mais rápido possível |
| **Frustração** | Se sente perdido no código, tem medo de perguntar demais e parecer incompetente |
| **Frase representativa** | *"Eu olho pra esse código e não faço ideia por onde começar. O README tem 3 parágrafos e a última atualização foi há 2 anos."* |

**Necessidades:**
- Caminho claro e estruturado de aprendizado
- Visualização macro da arquitetura antes de mergulhar no código
- Feedback de progresso para se sentir motivado
- Autonomia para aprender sem depender exclusivamente de outras pessoas

---

### Persona 2: Marina — A Dev Sênior/Mentora

| Atributo | Detalhe |
|----------|---------|
| **Nome** | Marina Costa |
| **Idade** | 31 anos |
| **Cargo** | Desenvolvedora Sênior Backend |
| **Experiência** | 8 anos |
| **Contexto** | É a pessoa de referência do time — todos procuram ela quando têm dúvidas |
| **Objetivo** | Ajudar novos devs a ficarem produtivos sem comprometer seu próprio trabalho |
| **Frustração** | É interrompida 5-10 vezes por dia com perguntas que poderiam ser respondidas por boa documentação |
| **Frase representativa** | *"Eu amo ajudar, mas não consigo entregar minhas próprias tarefas. Ontem fui interrompida 8 vezes pra explicar o mesmo fluxo de pagamento."* |

**Necessidades:**
- Ferramenta que responda perguntas básicas automaticamente
- Documentação viva que não precise ser mantida manualmente
- Forma de delegar mentoria sem perder qualidade
- Menos interrupções no seu fluxo de trabalho

---

### Persona 3: Ricardo — O Tech Lead

| Atributo | Detalhe |
|----------|---------|
| **Nome** | Ricardo Mendes |
| **Idade** | 35 anos |
| **Cargo** | Tech Lead |
| **Experiência** | 12 anos (4 como líder técnico) |
| **Contexto** | Gerencia um time de 8 devs e acaba de contratar 2 juniors |
| **Objetivo** | Garantir que os novos devs fiquem produtivos rapidamente sem sobrecarregar o time |
| **Frustração** | Não tem visibilidade real do progresso do onboarding — só perguntando "e aí, tá entendendo?" |
| **Frase representativa** | *"Eu preciso saber se o Lucas já está pronto pra pegar tasks reais. Hoje eu descubro isso quando algo dá errado."* |

**Necessidades:**
- Dashboard com métricas objetivas de progresso do onboarding
- Alertas quando um dev está travado ou atrasado
- Padronização do processo de onboarding
- Redução do impacto do onboarding na velocity do time

---

## 2.3. Mapas de Empatia

### Mapa de Empatia — Lucas (Dev Junior)

| Dimensão | Conteúdo |
|----------|----------|
| **O que PENSA e SENTE?** | "Será que estou demorando demais?", "Tenho medo de quebrar algo em produção", "Quero provar que sou competente", "Me sinto sobrecarregado com a quantidade de código" |
| **O que OUVE?** | "Leia a documentação" (mas ela está desatualizada), "Pergunta pro fulano" (mas ele está sempre ocupado), "Vai com calma, todo mundo passa por isso" |
| **O que VÊ?** | Repositório com centenas de arquivos, Slack com canais que não entende, colegas produtivos entregando features enquanto ele ainda está tentando fazer o setup |
| **O que FALA e FAZ?** | Faz perguntas básicas, lê código tentando entender padrões, assiste vídeos antigos do onboarding, anota num caderno as coisas que descobre |
| **DORES** | Falta de direção clara, medo de parecer incompetente, informação fragmentada, feedback tardio |
| **GANHOS** | Primeiro PR mergeado, elogio do mentor, entender um fluxo completo sozinho, sentir que está evoluindo |

### Mapa de Empatia — Marina (Dev Sênior)

| Dimensão | Conteúdo |
|----------|----------|
| **O que PENSA e SENTE?** | "Eu gosto de ensinar, mas preciso entregar minhas tarefas", "Se eu não ajudar, ninguém vai ajudar", "Gostaria de ter uma ferramenta que fizesse esse trabalho por mim" |
| **O que OUVE?** | "Marina, como funciona X?", "Marina, onde fica Y?", "Marina, pode revisar meu PR?" |
| **O que VÊ?** | Slack piscando com mensagens de novos devs, sua sprint atrasando por causa das interrupções, documentação que ela mesma escreveu já desatualizada |
| **O que FALA e FAZ?** | Para o que está fazendo para explicar, faz pair programming, cria docs rápidos no Notion, delega quando possível |
| **DORES** | Interrupções constantes, responsabilidade informal de mentoria, burnout, culpa quando não consegue ajudar |
| **GANHOS** | Ver um novo dev evoluir, ter ferramenta que automatize explicações, recuperar foco no próprio trabalho |

### Mapa de Empatia — Ricardo (Tech Lead)

| Dimensão | Conteúdo |
|----------|----------|
| **O que PENSA e SENTE?** | "Preciso de números, não de sensações", "O time está produtivo ou estamos só apagando incêndio?", "O investimento em contratação precisa dar retorno rápido" |
| **O que OUVE?** | "O novo dev está indo bem" (mas sem dados concretos), "Precisamos de mais gente" (mas o onboarding é um gargalo) |
| **O que VÊ?** | Velocity do time caindo quando entra gente nova, sprint reviews com menos entregas, devs seniores sobrecarregados |
| **O que FALA e FAZ?** | Pergunta informalmente "tá tudo bem?", tenta criar docs de onboarding (que ficam desatualizadas), agenda 1:1s |
| **DORES** | Sem métricas objetivas, sem controle do processo, impacto na velocity, pressão do management |
| **GANHOS** | Dashboard com visibilidade total, processo padronizado e escalável, time produtivo mais rápido |

---

## 2.4. Jornada do Usuário (User Journey Map)

### Jornada do Lucas — Onboarding SEM o OnboardDev (Situação Atual)

| Fase | Ação | Pensamento | Emoção | Ponto de Dor |
|------|------|-----------|--------|-------------|
| **Dia 1** | Recebe acesso ao repositório e Slack | "Tá, e agora? Por onde começo?" | 😰 Ansiedade | Nenhum guia estruturado |
| **Dia 2-3** | Lê README e tenta rodar o projeto | "O README tá desatualizado, nada funciona como descrito" | 😤 Frustração | Documentação defasada |
| **Dia 4-7** | Pergunta ao mentor sobre a arquitetura | "A Marina explicou, mas era muita informação de uma vez" | 😵 Sobrecarga | Dependência do sênior |
| **Semana 2** | Tenta sua primeira task | "Não sei em qual arquivo mexer nem como testar" | 😓 Insegurança | Falta de contexto do código |
| **Semana 3** | PR rejeitado por não seguir convenções | "Ninguém me falou que tinha que fazer assim" | 😞 Desmotivação | Convenções não documentadas |
| **Semana 4-6** | Vai ganhando familiaridade aos poucos | "Acho que tô começando a entender..." | 😐 Neutralidade | Progresso lento e sem feedback |
| **Semana 7-8** | Finalmente produtivo | "Demorou, mas agora sei me virar" | 😊 Alívio | 8 semanas perdidas |

### Jornada do Lucas — Onboarding COM o OnboardDev (Cenário Ideal)

| Fase | Ação | Pensamento | Emoção | Ganho |
|------|------|-----------|--------|-------|
| **Dia 1** | Acessa OnboardDev e vê mapa do repositório | "Ah, agora eu entendo a estrutura geral!" | 😃 Clareza | Visão macro instantânea |
| **Dia 2** | Inicia trilha de onboarding guiada | "Tenho um caminho claro a seguir" | 😊 Confiança | Estrutura e direção |
| **Dia 3-4** | Completa tarefas progressivas com dicas contextuais | "Estou evoluindo — já completei 30%!" | 🚀 Motivação | Feedback de progresso |
| **Dia 5-7** | Explora módulos pelo Code Explorer com explicações IA | "Agora entendo porque essa decisão foi tomada" | 🤩 Empolgação | Autonomia no aprendizado |
| **Semana 2** | Faz primeiro PR com confiança, conhecendo convenções | "Vi as convenções na trilha, já sei como fazer" | 💪 Empoderamento | Primeira contribuição bem-sucedida |
| **Semana 2-3** | Completa trilha e recebe badge | "100% completo! Estou pronto!" | 🎉 Realização | Onboarding em 2 semanas |

---

## 2.5. Insights da Pesquisa

Com base na análise documental, nas personas e nas jornadas mapeadas, os principais insights são:

1. **O problema é universal e custoso:** Toda empresa de software enfrenta o desafio do onboarding, e o custo é mensurável em semanas de produtividade perdida.

2. **A solução precisa ser visual e interativa:** Documentação estática não funciona. O novo dev precisa de uma experiência interativa que o guie pelo codebase.

3. **Autonomia é chave:** O dev quer aprender no seu ritmo, sem depender exclusivamente de outras pessoas. Uma ferramenta de auto-serviço é essencial.

4. **Métricas são necessárias para o gestor:** Tech Leads precisam de dados objetivos, não apenas percepções informais.

5. **A solução deve ser low-maintenance:** Se depender de atualização manual constante, terá o mesmo destino da documentação — ficará desatualizada.

6. **Gamificação leve aumenta engajamento:** Progresso visual, badges e streaks são motivadores eficazes para o público-alvo (desenvolvedores jovens habituados a interfaces gamificadas).
