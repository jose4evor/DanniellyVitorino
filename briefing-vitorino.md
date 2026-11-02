# Vitorino Saúde — briefing para reconstrução do website

**Documento para TI, design e conteúdo**  
**Atualizado em:** 1º de novembro de 2026  
**Site:** https://vitorinosaude.com.br/  
**Versão:** 2.2 — nome profissional corrigido e links de blog e livro incorporados

## Orientação principal para o TI — ordem de apresentação

O site deve começar pela **Vitorino Saúde e sua visão de cuidado integral**. Essa é a porta de entrada institucional. A apresentação não deve começar exclusivamente pela oferta odontológica.

**Ordem da página inicial:**

1. **Abertura interativa:** VITORINO estático; Saúde, Odontologia e outras áreas se alternam conforme a rolagem, seguindo a referência visual enviada.
2. **Propósito da Vitorino Saúde:** cuidado centrado no paciente, visão integral, missão e valores; explicar que a construção de novas frentes está em desenvolvimento.
3. **Origem da Vitorino Odontologia e apresentação da fundadora:** Dra. Danielly Vitorino, sua foto, história, experiências e relação com o cuidado integral durante sua trajetória.
4. **Vitorino Odontologia em detalhes:** o que faz, para quem é, como funciona e como solicitar atendimento. É a frente assistencial atual.
5. **Parceiros, profissionais e instituições:** integração do cuidado, encaminhamentos e possibilidades de parceria confirmadas.
6. **Blog e conteúdos:** integrar o blog existente e, quando disponíveis, os projetos de conteúdo aprovados.
7. **Como iniciar o atendimento, perguntas frequentes e contato:** reforçar os próximos passos e os canais próprios para cada público.

O botão de novo paciente deve estar acessível desde a primeira tela. A seção detalhada da jornada pode aparecer mais abaixo sem dificultar esse acesso.

Os blocos editoriais da seção 6 seguem esta sequência. A origem da Odontologia e a apresentação da fundadora antecedem o detalhamento dos atendimentos.

## 1. Objetivo

Reconstruir a experiência do website no domínio existente para apresentar a **Vitorino Saúde como marca principal**, com foco no cuidado integral e no acolhimento do novo paciente. A **Vitorino Odontologia será apresentada como o primeiro braço de atuação e a frente assistencial atual**, preservando a visibilidade dos atendimentos odontológicos já divulgados.

A responsável relata que o desenvolvedor prevê começar a implementação do zero. A reconstrução técnica deve preservar o que for válido do site e do blog existentes, incluindo conteúdo, domínio e endereços ou seus redirecionamentos. Este briefing define a experiência desejada; a escolha técnica cabe ao desenvolvedor conforme o ambiente encontrado.

A atualização deve incluir nova identidade visual, página institucional, trajetória de Danielly Vitorino, blog, fotografias e uma jornada clara de primeiro contato.

Este arquivo especifica mudanças; não representa uma alteração já executada no site. Os textos abaixo são propostas editoriais para revisão pela responsável antes da publicação.

## 2. Referências e prioridade das decisões

- Orientações da responsável nesta conversa: índigo como cor principal; laranja para Odontologia; azul-claro para Saúde; entrada institucional, quem somos, trajetória, fotos e blog.
- Definição de 01/11/2026: abertura com VITORINO estático e palavras de áreas da saúde animadas pela rolagem; propósito da Saúde em construção; origem da Odontologia; fundadora; explicação detalhada da operação e parcerias.
- Referência visual: **Captura de tela 2026-11-01 191457.png**, enviada pela responsável. Usar como referência de composição, não como uma imagem única que substitui todo o conteúdo interativo.
- Cópia da referência para acompanhar a entrega ao TI: **REFERENCIA-ABERTURA-VITORINO.png**, na mesma pasta deste Markdown. Enviar os dois arquivos juntos.
- Briefing complementar enviado pela responsável: “Briefing de atualização do site — Vitorino Odontologia”. Incorporar seus detalhes de públicos, operação, encaminhamentos, Saturno, blog existente e canais. A apresentação institucional deste documento segue a orientação de Vitorino Saúde como marca principal; a atuação clínica atual continua identificada como Vitorino Odontologia.
- Manual enviado: **ONBORDING VITORINO (2).pdf**, especialmente páginas 2–8, 13–20, 23–35, 36–46, 66 e 72.
- Inspeção do site público: página inicial e página institucional `/code.html` em 30/10/2026. Os demais endereços citados foram identificados nos links dessas páginas; seu conteúdo e funcionamento ainda precisam ser verificados pelo TI.
- Dados profissionais e experiências foram informados diretamente pela responsável em 01/11/2026 e estão consolidados na seção 8. Os links do blog e do livro foram fornecidos e consultados em 01/11/2026; o raio-x 360 ainda não foi disponibilizado. Não preencher datas, publicações ou episódios por suposição.

**Decisão de identidade:** o manual atribui ao coral um papel institucional primário. Para esta atualização do website, prevalece a orientação mais recente da responsável: **índigo protagonista; coral/laranja na Odontologia; azul-claro na Saúde**. Utilizar os códigos do manual com essa nova hierarquia.

**Decisão de posicionamento:** o manual menciona assistência médica e odontológica, mas também explica que a marca começa pela odontologia. Apresentar integração em saúde como visão e forma de cuidado. Anunciar como disponíveis somente os serviços e profissionais confirmados pela responsável.

## 3. Diagnóstico do site atual e ações

| Elemento observado | Alteração solicitada |
| --- | --- |
| Cabeçalho e rodapé apresentam Vitorino Odontologia | Apresentar Vitorino Saúde nas áreas institucionais e manter a assinatura de Odontologia nas páginas desse braço. Usar arquivos oficiais dos logotipos. |
| Primeira tela comunica exclusivamente odontologia domiciliar e hospitalar | Abrir com a visão da Vitorino Saúde e oferecer acesso direto à Odontologia e ao primeiro atendimento. |
| Visual observado no celular usa azul-escuro, dourado e título com serifa | Migrar para a paleta do onboarding com protagonismo do índigo e tipografia sem serifa, conforme seção 4. |
| Menu: Início, A Vitorino, Atendimentos, Educação, Parcerias e Contato | Reorganizar a navegação conforme seção 5, preservando Educação e Parcerias. |
| Home apresenta modalidades, públicos e especialidades odontológicas em vários blocos | Distribuir o conteúdo detalhado na área de Odontologia e resumir na home para reduzir repetição. |
| Bloco de indicadores exibe `[+X]` | Ocultar até haver números confirmados, com fonte e data de atualização. |
| Página institucional exibe campos como `[inserir instituição/ano]`, `[inserir certificações]` e CRO incompleto | Substituir por dados confirmados ou ocultar os blocos incompletos. |
| Depoimentos aparecem com nomes e histórias clínicas | Confirmar autenticidade, autorização e redação antes de reaproveitar; ocultar enquanto não houver confirmação. |
| Instagram aponta para `#` | Substituir pelo perfil oficial confirmado ou remover o link. |
| Cartão de Periodontia aponta para `/servicos-empresas.html` | Conferir se o destino corresponde ao serviço e corrigir se necessário. |
| Formulário atual encaminha solicitação por WhatsApp | Evoluir para a entrada de novo paciente, deixando claro o encaminhamento e que a consulta depende de confirmação da equipe. |

## 4. Direção visual

### Paleta para o website

| Papel | Cor | Aplicação |
| --- | --- | --- |
| Principal institucional | Índigo `#30358F` | Marca principal, navegação, títulos, botões institucionais e rodapé. |
| Complementar institucional | Índigo vivo `#5C63E8` | Destaques e variações interativas, após teste de contraste. |
| Odontologia | Laranja coral `#FF7668` | Identificação do braço, marcadores e detalhes de suas páginas. |
| Saúde | Azul-claro `#8EB9FC` | Blocos de cuidado integral e superfícies de acolhimento. |
| Fundo principal | Bege-claro `#FFF3E7` | Base acolhedora para leitura. |
| Apoio | Lavanda `#AAA7FF` | Categorias e pequenos detalhes. |
| Apoio discreto | Amarelo suave `#FFF7C6` | Notas e informações complementares. |
| Confirmação | Verde suave `#EBFFDC` | Mensagens de sucesso com texto escuro e ícone. |

O índigo deve dar unidade ao site inteiro. As cores das áreas ajudam a orientar, sem substituir a marca principal. Evitar grandes áreas coral e excesso de cores simultâneas.

Não aplicar automaticamente texto branco sobre coral ou azul-claro. Verificar contraste em cada combinação; nessas superfícies, priorizar texto índigo quando adequado.

### Tipografia e composição

- Proposta de base web: **Source Sans 3**, presente no onboarding, para textos, navegação e títulos.
- O manual também cita Azo Sans e Co Headline. Usá-las somente se os arquivos e licenças web forem fornecidos; confirmar a hierarquia tipográfica com o design antes da implantação.
- Usar os logotipos oficiais; não reconstruir o lettering digitando o nome.
- Textos com tamanho confortável, entrelinha generosa, títulos objetivos e espaços claros entre seções.
- Fotografias humanas e reais, grafismos oficiais e “Linhas da Vida” usados com discrição, sem prejudicar a leitura.
- Menu simples no celular. Botão flutuante de WhatsApp não pode cobrir formulário, texto, rodapé ou outros botões.

## 5. Navegação proposta

**Menu principal:** Início · Quem somos · Vitorino Odontologia · Parceiros · Blog · Contato  
**Botão de destaque:** Sou novo paciente

Manter Educação acessível em uma navegação complementar e no rodapé. O item “Parceiros” leva à área de profissionais, instituições, encaminhamentos e parcerias. Apresentar a fundadora com destaque dentro de Quem somos e em bloco próprio na home. No celular, apresentar essas entradas dentro do menu recolhível.

### Organização das páginas

- **Início:** visão da Vitorino Saúde, pilares, primeiro braço, entrada do paciente, fundadora e blog.
- **Vitorino Odontologia:** apresentação do braço e acesso aos serviços existentes.
- **Quem somos:** propósito, história da marca, Danielly, trajetória documentada, missão, visão e valores.
- **Blog:** lista de artigos, categorias e páginas individuais.
- **Contato / novo paciente:** primeiro contato e orientações sobre as próximas etapas.
- **Educação e Parcerias:** preservar os conteúdos úteis existentes e integrar à identidade atualizada.

Rotas novas podem ser definidas pelo TI conforme a tecnologia atual. Preservar endereços existentes sempre que possível. Não é necessário trocar a plataforma para cumprir este briefing.

## 6. Página inicial — sequência e textos propostos

### 6.1. Primeira tela — marca estática e roleta de palavras ligada à rolagem

**Referência visual:** fundo índigo, VITORINO grande em tom claro e palavras dispostas verticalmente como uma roleta tipográfica. A palavra em evidência é maior e mais nítida; as vizinhas perdem destaque conforme se afastam do foco. A screenshot apresenta Saúde, Odontologia, fisioterapia, fonoaudiologia, estética e psicologia.

**Comportamento obrigatório:**

- VITORINO permanece estático dentro da composição durante a sequência. Não gira, não muda de palavra e não se desloca junto com as especialidades.
- Ao entrar na página, começar com **Saúde** em destaque.
- A rolagem para baixo movimenta a faixa vertical de palavras, trazendo a seguinte para a posição de destaque. A rolagem para cima reverte o movimento.
- Sequência proposta: **Saúde → Odontologia → Fisioterapia → Fonoaudiologia → Psicologia → Estética**. As áreas além de Saúde e Odontologia vêm da referência visual e são conceitos de visão futura, não ofertas anunciadas.
- Usar transição vertical suave com variação discreta de escala e opacidade. Evitar flashes, giros rápidos, efeitos de sorteio aleatório ou movimento automático contínuo.
- A animação responde ao avanço da página; não depende de uma contagem de giros do mouse. Deve funcionar também com trackpad, toque e navegação por teclado.
- É possível manter a composição temporariamente fixa na tela enquanto a rolagem percorre a sequência. Usar um trecho finito e curto; ao terminar, a página continua normalmente para o propósito. Não prender o visitante em um ciclo nem bloquear a rolagem.
- Disponibilizar **Conheça nosso propósito**, que permite pular a sequência e chegar diretamente ao próximo bloco.
- O menu e o acesso a **Atendimento odontológico** permanecem acessíveis sem exigir que a pessoa percorra todas as palavras.

**Mensagem visível junto à composição:**

> Um propósito de cuidado integral, centrado em cada paciente.
>
> A Vitorino Saúde está em construção. Hoje, nossa atuação assistencial acontece pela Vitorino Odontologia. As demais áreas representam a visão que orienta o desenvolvimento da marca.

Não depender de uma nota escondida no rodapé para distinguir visão e oferta atual. As palavras de áreas futuras não levam a agendamentos, páginas de serviço ou profissionais ainda inexistentes.

**Cores:** fundo índigo `#30358F`; VITORINO em tom claro da identidade; Saúde em azul-claro `#8EB9FC`; Odontologia em coral `#FF7668`. A screenshot usa coral também em Saúde, mas a orientação verbal de cores por área prevalece. Para outras palavras, usar tons secundários já aprovados, sem inventar identidades definitivas para futuras frentes. Testar a legibilidade; palavras atenuadas são decorativas e não podem carregar informação essencial exclusiva.

**Construção:** usar o logotipo oficial em formato adequado e palavras como texto real. Não aplicar a screenshot como fundo contendo todo o lettering, pois isso impediria a animação independente, o ajuste no celular e a leitura acessível. Não alterar o desenho do logotipo para imitar a referência.

**Celular e movimento reduzido:** ajustar o tamanho do nome sem cortar a marca; reorganizar a roleta abaixo ou ao lado conforme espaço. Respeitar a preferência de movimento reduzido, mostrando uma versão estática com Vitorino Saúde e a explicação do propósito. A informação deve continuar disponível se a animação não carregar. Não anunciar cada troca de palavra repetidamente para leitores de tela; oferecer uma descrição textual única da marca e da visão em construção.

**Aceite específico:** em um protótipo, demonstrar rolagem para baixo e para cima, passagem normal à seção seguinte, salto pelo botão, uso no celular e alternativa sem animação. Submeter a abertura à responsável antes de desenvolver todas as páginas.

### 6.2. Propósito, missão, visão e valores da Vitorino Saúde

**Título:** Cuidar é enxergar a pessoa antes da condição.

**Texto:** Acreditamos que o cuidado precisa considerar a pessoa em sua totalidade. Por isso, nossa proposta conecta conhecimento técnico, escuta e planejamento para construir uma assistência adaptada a diferentes condições e realidades de vida.

**Complemento:** A Vitorino Saúde expressa o propósito que orienta nossa construção: olhar para as diferentes necessidades de saúde em torno de um mesmo paciente. Esse caminho começa na Vitorino Odontologia; novas frentes serão apresentadas quando estiverem estruturadas.

Apresentar missão, visão e valores do onboarding, com as adaptações editoriais da seção 8. Falar de propósito, princípios e direção de desenvolvimento, sem descrever uma operação multiprofissional já disponível.

**Três pilares, baseados no onboarding:**

1. **Assistência adaptada e acessível:** caminhos de atendimento que consideram mobilidade, rotina e contexto de cada paciente.
2. **Segurança clínica e personalização:** avaliação individual e planejamento conforme as necessidades de cuidado.
3. **Integração e continuidade:** diálogo com familiares, cuidadores e profissionais envolvidos na jornada.

### 6.3. Origem da marca e fundadora

**Título:** Uma história de cuidado que começa pela odontologia.

**Texto de ligação:** A Vitorino Odontologia é o ponto de partida dessa construção. Fundada pela Dra. Danielly Vitorino, nasce para aproximar o cuidado odontológico de pessoas que encontram barreiras no modelo convencional de atendimento.

Apresentar neste bloco a foto real de Danielly, seu papel como fundadora e referência clínica, a origem da marca e os marcos documentados de sua trajetória. Relacionar as experiências efetivamente confirmadas ao olhar para o paciente, a família, os cuidadores e os outros profissionais envolvidos no cuidado.

**Nome de apresentação confirmado:** **Dra. Danielly Vitorino — Dra HospitalLAR**. Registro informado pela profissional: **CRO-DF 14.465**. Usar exatamente a grafia **Dra HospitalLAR**, preservando o destaque em LAR. O nome profissional informado mais recentemente prevalece sobre as grafias de versões anteriores e do site atual. Manter o endereço de Instagram fornecido, sem presumir mudança de usuário.

**Apresentação breve proposta:** Sou Danielly Vitorino, também conhecida como Dra HospitalLAR, cirurgiã-dentista e fundadora e CEO da Vitorino Odontologia e da Vitorino Saúde. Minha trajetória começou na enfermagem, onde trabalhei por sete anos como técnica. Essa experiência, somada à atuação na odontologia hospitalar, intensiva e oncológica, ajuda a construir meu olhar para o paciente em sua totalidade, sua rotina e as pessoas que participam de seu cuidado.

**Conteúdo do bloco:** utilizar a biografia e a formação descritas na seção 8. O livro terá um espaço próprio, com acesso à página oficial informada pela responsável, conforme seção 8.4. Não inventar datas ou episódios para completar a linha do tempo.

**Botão:** Conheça minha trajetória

### 6.4. Vitorino Odontologia — atuação atual em detalhes

**Título:** Começamos pela odontologia. Pensamos além dela.

**Texto:** A Vitorino Odontologia é o primeiro braço da Vitorino Saúde. Seu propósito é levar cuidado odontológico adaptado a pessoas que encontram barreiras no atendimento convencional, com avaliação individual e integração com quem participa de seu cuidado.

**Resumo visual:** atendimento domiciliar · hospitalar · à beira-leito · Home Care · ILPIs · cuidado odontológico em oncologia.

**Botão:** Conheça nossos atendimentos  
**Direção visual:** detalhes coral sobre a base institucional índigo.

Neste bloco, responder em linguagem simples: **o que fazemos; para quem é; onde e como acontece; como solicitar avaliação; e como propor encaminhamento ou parceria**. As páginas detalhadas devem seguir a seção 7 e a área de parcerias da seção 10A.

### 6.5. Parceiros, profissionais e instituições

**Título:** O cuidado se constrói em conexão.

**Texto:** Familiares, cuidadores e profissionais podem participar da mesma jornada de cuidado. Conheça a atuação da Vitorino Odontologia e converse conosco sobre encaminhamentos ou possibilidades de parceria.

**Botões:** Conversar sobre encaminhamento · Conversar sobre parceria.

Não exibir logotipos de parceiros sem confirmação do vínculo e autorização. A proposta de integração não significa que todas as especialidades da abertura integram hoje a empresa.

### 6.6. Blog

**Título:** Conhecimento também é cuidado.

**Texto:** Conteúdos para ajudar pacientes, familiares e cuidadores a compreender o cuidado e participar dessa jornada com mais clareza.

Integrar o blog existente em https://vitorino-odontologia.blogspot.com/, preservando acervo e endereços. Exibir até três artigos reais aprovados e acesso à lista completa. Ver requisitos na seção 9.

**Botão:** Explorar o blog

### 6.7. Entrada do novo paciente

**Título:** Vamos entender de que cuidado você precisa?

**Texto:** Se você procura atendimento para si, para um familiar ou para alguém de quem cuida, o primeiro passo é conversar com a nossa equipe. Vamos compreender sua necessidade e orientar os próximos passos.

**Etapas exibidas:** primeiro contato → compreensão inicial da necessidade → avaliação e planejamento → orientações e acompanhamento, conforme o caso.

**Botão:** Iniciar meu atendimento

Não apresentar a solicitação como consulta confirmada nem estabelecer prazo de resposta sem validação operacional.

Logo após a apresentação inicial, oferecer entradas por intenção: **Busco atendimento para mim ou um familiar**, **Sou profissional de saúde** e **Represento uma instituição ou empresa**. Cada entrada deve levar ao conteúdo e contato correspondentes.

### 6.8. Perguntas frequentes, contato e rodapé

**Título:** O primeiro passo pode ser uma conversa.

**Texto:** Conte com a equipe Vitorino para entender as possibilidades de atendimento e orientar o próximo passo.

**Botão:** Falar com a Vitorino

Rodapé com marca Vitorino Saúde, acesso à Odontologia, Quem somos, Blog, Educação, Parcerias, contato e política de privacidade. Exibir informações profissionais e institucionais confirmadas.

## 7. Página Vitorino Odontologia

- Apresentar a relação com a Vitorino Saúde logo na abertura.
- Reaproveitar os conteúdos úteis de modalidades e públicos do site atual, reduzindo repetições.
- Organizar modalidades de atendimento separadamente das especialidades. Periodontia é uma especialidade; domicílio e hospital são contextos de atendimento.
- Explicar como o atendimento começa e como é definido o ambiente adequado, conforme avaliação.
- Preservar as perguntas frequentes odontológicas e revisar sua redação.
- Evitar promessas absolutas como “total segurança” e resultados garantidos. Usar linguagem precisa sobre avaliação, planejamento e redução de riscos.
- Mostrar serviços, localidades e disponibilidade somente após confirmação da operação.
- Dar destaque aos idosos, especialmente pessoas acamadas ou com restrição de mobilidade. Apresentar pacientes oncológicos, pessoas com condições sistêmicas, pessoas com necessidades especiais e crianças atípicas ou neurodivergentes conforme o escopo real e avaliação individual.
- Explicar ILPI como instituição de longa permanência para idosos na primeira ocorrência.
- Não sugerir acesso irrestrito a qualquer hospital nem realização de qualquer procedimento em qualquer ambiente.

### Endereços existentes identificados na navegação

- `/odontologia-domiciliar.html`
- `/odontologia-hospitalar.html`
- `/atendimento-a-beira-leito.html`
- `/odontologia-para-home-care.html`
- `/odontologia-para-ilpis.html`
- `/odontologia-para-pacientes-oncologicos.html`
- `/servicos-empresas.html`
- `/educacao-continuada.html`

O TI deve inventariar e testar essas páginas antes de alterar a navegação. Preservar seu conteúdo válido, links de entrada e posicionamento em buscas.

## 8. Quem somos e trajetória de Danielly

Estrutura da página:

1. Propósito da Vitorino Saúde.
2. Origem da marca e início pela Odontologia.
3. Apresentação de Danielly e retrato.
4. Linha do tempo com marcos comprovados.
5. Experiências e relação com o cuidado integral.
6. Livro e produção de conteúdo, quando os materiais forem fornecidos.
7. Missão, visão e valores do onboarding, revisados para leitura web.
8. Equipe e rede de atuação, com integrantes e vínculos confirmados.

**Missão — proposta de adaptação:** Construir caminhos de cuidado que se adaptem à vida e às necessidades de cada paciente.

**Visão — proposta de adaptação:** Evoluir a partir da odontologia para um ecossistema de saúde integrado, mantendo o cuidado humano, acessível e individualizado.

**Valores presentes no manual:** humanidade, cuidado, segurança, acessibilidade, individualidade, integração, excelência e clareza.

**Materiais ainda necessários:** fotografia aprovada; anos e marcos para a linha do tempo; denominação oficial das instituições formadoras e cursos para apresentação curricular; arquivos oficiais de capa e dados editoriais adicionais, se necessários; trechos autorizados; artigos e raio-x 360. Nome profissional, CRO e cargos foram informados e estão registrados abaixo.

Não publicar os campos pendentes nem converter exemplos do manual em serviços ou credenciais reais.

O briefing complementar esclarece que a assistência clínica ainda está concentrada na Dra. Danielly. O apoio de comunicação, audiovisual e desenvolvimento comercial não deve ser apresentado como equipe de dentistas. Ajustar o link “Nossa equipe” à estrutura real e distinguir rede de integração de profissionais contratados.

### 8.1. Identificação e cargos informados pela responsável

- **Nome profissional:** Danielly Vitorino.
- **Nome de comunicação:** Dra HospitalLAR.
- **Registro:** CRO-DF 14.465.
- **Cargo atual:** fundadora e CEO da Vitorino Odontologia e da Vitorino Saúde.

Essas informações foram fornecidas pela própria profissional. Conferir a transcrição final da identificação profissional antes de publicar; este documento não constitui consulta ao cadastro do conselho.

### 8.2. Formação

- Especialista em **Odontologia Hospitalar**, com formação informada como Faculdade Albert Einstein, em São Paulo. Para a apresentação curricular completa, usar a denominação institucional constante do certificado, sem presumir outro nome.
- Especialista em **Periodontia**, com ênfase em periodontia médica.
- Formação complementar em **Odontologia Domiciliar**.
- Formação complementar em **Odontologia Oncológica**.
- Formação complementar voltada a **pacientes com necessidades especiais**, conforme relato da responsável; confirmar o nome exato do curso para a ficha curricular.
- **Formação em Estomatologia em andamento**. Não apresentar como especialidade concluída.

Distinguir especializações, cursos complementares e formação em andamento. Não converter cursos em títulos de especialista.

### 8.3. Trajetória e experiência

**Enfermagem:** sete anos de atuação como técnica de enfermagem, com experiências em estética, Home Care, internação e UTI, conforme relato da profissional.

**Odontologia:** experiência como dentista hospitalar, intensivista e oncológica. A responsável mencionou atuação nos seguintes ambientes e instituições:

- Rede D’Or, incluindo DF Star, conforme relato.
- Grupo Santa, incluindo Santa Lúcia, Santa Lúcia Gama e Santa Lúcia Sul, conforme relato.
- Hospital do Coração.
- Rede Kora, citada oralmente como “Rede Cora”, com menção a Anchieta Ceilândia e Anchieta Taguatinga; confirmar denominações oficiais e vínculos entre rede e unidades antes de publicar essa associação.
- Hospital HOME.

**Nota editorial para o TI:** a fala agrupa várias redes e hospitais e pode conter imprecisões de transcrição. A lista acima registra os nomes relatados, sem constituir verificação externa da vinculação entre eles. Antes de publicar a lista institucional, confirmar com Danielly a grafia, a unidade e o vínculo correspondente. Não atribuir função específica a cada hospital sem essa informação, nem presumir que todas as experiências são vínculos atuais.

Na versão pública, apresentar essas instituições como **experiência profissional**, sem confundi-las com parceiros comerciais atuais. Não usar logotipos sem autorização.

**Texto biográfico proposto para revisão:**

> Sou Danielly Vitorino, também conhecida como Dra HospitalLAR. Antes da odontologia, trabalhei por sete anos como técnica de enfermagem, passando por diferentes contextos de cuidado, incluindo Home Care, internação e UTI.
>
> Na odontologia, construí experiência no atendimento hospitalar, intensivo e oncológico. Sou especialista em Odontologia Hospitalar e em Periodontia, com ênfase na periodontia médica, e tenho formação complementar em odontologia domiciliar, oncológica e no cuidado de pacientes com necessidades especiais. Atualmente, estou em formação em Estomatologia.
>
> Essa trajetória sustenta meu olhar para além de um procedimento: o paciente tem uma história, uma condição de saúde, uma rotina e uma rede de pessoas que participam de seu cuidado. É a partir desse olhar que conduzo a Vitorino Odontologia e construo o propósito da Vitorino Saúde, como fundadora e CEO.

### 8.4. Livro e capítulo da fundadora

**Página oficial fornecida pela responsável:** https://daniellyvitorino.wperfil.com.br/  
**Consulta:** 01/11/2026.

**Distinção editorial confirmada na página:**

- **Livro:** *As Coras – Conexões Femininas*.
- **Capítulo de Danielly Vitorino:** *A menina que desenhou o hospital*.
- **Organização informada:** Gisela Salles.
- **Publicação informada:** Livro Editora.

Não apresentar o capítulo como título de um livro independente nem Danielly como única autora da obra coletiva.

**Bloco proposto para a página da fundadora, com chamada opcional na home:**

**Título:** A menina que desenhou o hospital.

**Texto:** No livro *As Coras – Conexões Femininas*, Danielly Vitorino compartilha um capítulo de sua trajetória: da infância ao encontro com um propósito de cuidado. Conheça essa história e a obra da qual ela faz parte.

**Botão principal:** Conheça o livro  
**Destino:** https://daniellyvitorino.wperfil.com.br/

**Imagem:** capa oficial de *As Coras – Conexões Femininas*, preservando proporções e créditos. A página consultada já apresenta capa e retratos; solicitar os arquivos originais aprovados para o novo site.

A página externa oferece contato para aquisição pelo WhatsApp. Manter esse fluxo na página do livro, sem criar loja própria no website da Vitorino. Não copiar preço, disponibilidade de exemplar autografado ou condições de compra como informação permanente sem confirmação.

**Contato comercial do livro observado:** `https://wa.me/556193949965`. Esse número difere do contato clínico observado no site da Vitorino. Não substituir um pelo outro: o botão do livro deve levar à página oficial, que mantém seu próprio canal de aquisição. Confirmar separadamente o canal clínico antes de publicar o website.

**Relação com a trajetória:** a página apresenta a passagem da enfermagem à odontologia, a formação hospitalar e a origem do cuidado que chega ao paciente. Utilizar esses temas como apoio à narrativa da fundadora, sem reproduzir integralmente a página ou acrescentar episódios pessoais sem seleção editorial da responsável.

## 9. Blog e fotografias

### Blog

**Endereço confirmado:** https://vitorino-odontologia.blogspot.com/  
**Plataforma:** Blogger.  
**Título observado:** Vitorino Odontologia | Dentista em Casa e no Hospital.

O item **Blog** do menu, o botão **Explorar o blog** e o link no rodapé devem abrir esse endereço. Na etapa inicial, manter o acervo no Blogger; não criar um segundo blog vazio nem copiar integralmente os artigos para novas URLs sem um plano de migração.

Na home, apresentar cartões com títulos, resumos curtos, imagens autorizadas e links diretos para os artigos. Exemplos reais identificados na consulta de 01/11/2026:

- [Outubro Rosa e saúde bucal: o cuidado também passa pela boca](https://vitorino-odontologia.blogspot.com/2026/10/outubro-rosa-e-saude-bucal-o-cuidado.html) — publicado em 30/10/2026.
- [Um sonho também se constrói com quatro, seis, muitas mãos](https://vitorino-odontologia.blogspot.com/2026/10/um-sonho-tambem-se-constroi-com-quatro.html) — publicado em 19/10/2026; possível ligação com a construção da marca.
- [Cada criança tem seu jeito. Todas merecem cuidado.](https://vitorino-odontologia.blogspot.com/2026/10/cada-crianca-tem-seu-jeito-todas.html) — publicado em 12/10/2026.

A seleção dos destaques pode mudar com novas publicações. O artigo sobre a origem da Dra HospitalLAR também pode apoiar a página da fundadora. Revisar a seleção antes de reutilizar informações curriculares: o blog apresenta referências a mestrado com situações diferentes entre artigo e perfil. Não acrescentar esse título à biografia atual sem confirmação da responsável. Preservar Estomatologia como formação em andamento, conforme sua declaração direta.

Inspecionar o blog existente antes de propor mudanças ou migração. Prever edição de artigos pela equipe, com título, endereço amigável, resumo, capa, texto, categoria, autor, data de publicação e data de atualização quando houver revisão efetiva.

Categorias iniciais propostas: cuidado integral; saúde bucal; cuidado domiciliar e hospitalar; orientação para familiares e cuidadores; trajetória e bastidores da Vitorino.

Pautas sugeridas, ainda não produzidas:

- Como começa o atendimento odontológico domiciliar?
- Saúde bucal e cuidado integral: por que olhar para o conjunto?
- O papel da família e dos cuidadores na rotina de saúde bucal.
- Por que a Vitorino começa pela odontologia?

Conteúdos de saúde devem passar por revisão profissional antes da publicação.

Preparar a estrutura para incorporar minissérie documental, conversas com outras especialidades, podcast e artigos de dicionário quando houver materiais publicados e aprovados. Usar páginas de episódios com resumo, participantes e mídia leve; não criar áreas vazias nem prometer convidados ou periodicidade. Não é necessária uma plataforma própria de podcast.

### Fotografias

Priorizar retratos reais de Danielly, equipe confirmada, ambientes e bastidores autorizados. Fotografias de pacientes e depoimentos dependem de autorização e revisão antes do uso. Não usar banco de imagens para representar uma equipe real ou um atendimento efetivamente realizado.

Solicitar arquivos originais e preparar versões leves para web, com descrição alternativa, recortes responsivos e crédito quando aplicável. Utilizar grafismos oficiais para complementar as fotos.

## 10. Entrada do novo paciente e contato

Reaproveitar a integração existente com WhatsApp, se confirmada pelo TI. A proposta inicial não exige prontuário nem portal do paciente.

**Campos sugeridos para primeiro contato:**

- Nome de quem entra em contato.
- Telefone / WhatsApp.
- Relação com o atendimento: paciente, familiar, cuidador, profissional ou instituição.
- Cidade ou região.
- Interesse: atendimento odontológico, orientação inicial, parceria ou educação/capacitação.
- Mensagem opcional, com orientação para evitar o envio de exames ou informações clínicas detalhadas nessa etapa.

Os campos adicionais de perfil, região e interesse são opcionais: priorizar um formulário curto. Nenhum serviço deve vir pré-selecionado; usar “Selecione uma opção”.

Solicitar apenas o necessário ao contato inicial. Explicar, junto ao botão, que os dados preenchidos serão encaminhados pelo WhatsApp. Não disparar envio automaticamente ao selecionar opções.

**Botão:** Continuar no WhatsApp  
**Aviso:** A solicitação de contato não confirma o agendamento. A equipe orientará os próximos passos.

Informar a finalidade dos dados e oferecer acesso à política de privacidade. Caso o TI proponha salvar dados em servidor, detalhar antes onde serão armazenados, quem acessará e por quanto tempo.

### Dados atualmente publicados — confirmar antes de reutilizar

- WhatsApp: link `https://wa.me/556182559552`; exibição atual `(61) 8255-9552`.
- E-mail: `vitorinossaude@gmail.com`.
- Cobertura: Brasília, DF e entorno, conforme o site atual.

Não corrigir o telefone por suposição. Validar o número completo e o funcionamento com a responsável, bem como a grafia do e-mail e a área real de cobertura.

### Redes sociais fornecidas no briefing complementar

- **Dra. Danielly — trajetória e conteúdo profissional:** https://www.instagram.com/dra.hospitallar/
- **Vitorino — atendimentos e parcerias:** https://www.instagram.com/vitorinosaude/

Usar links separados com esses papéis claros. Os endereços foram fornecidos pela responsável e ainda precisam de teste pelo TI. Não alterar os usuários das contas.

## 10A. Profissionais, instituições e parcerias

Criar duas entradas na mesma área:

1. **Encaminhamento profissional:** explicar a integração com os profissionais que já acompanham o paciente, indicar como iniciar contato e combinar o compartilhamento necessário de informações. Botão: **Conversar sobre encaminhamento**.
2. **Parcerias institucionais e empresariais:** apresentar possibilidades confirmadas para hospitais, Home Care, ILPIs e empresas. Botão: **Conversar sobre parceria**. Oferecer solicitação de reunião e apresentação institucional somente quando houver material aprovado.

**Perfis de parceria buscados pela fundadora:**

- Instituições de longa permanência para idosos e centros de convivência para idosos.
- Instituições que atendem pessoas com necessidades especiais, crianças típicas, atípicas e neurodivergentes.
- Hospitais gerais e hospitais de transição.
- Empresas de Home Care.
- Empresas interessadas em atendimento individualizado e personalizado no local, reduzindo a necessidade de deslocamento, conforme avaliação e viabilidade assistencial.

**Texto público proposto:** A Vitorino Odontologia busca construir parcerias com instituições, serviços de saúde e empresas que compartilham o compromisso com um cuidado individualizado. Converse conosco sobre as necessidades do seu público e as possibilidades de atendimento no local, conforme avaliação e organização do serviço.

Esses perfis representam **parcerias em prospecção**, não uma lista de contratos firmados. Cada proposta deve refletir serviços odontológicos e estrutura efetivamente disponíveis.

Não anunciar contratos em negociação, parceiros sem confirmação ou integrações tecnológicas inexistentes. Empresários e contatos de networking não devem ser confundidos com equipe assistencial.

Separar as mensagens iniciais do WhatsApp:

- Atendimento: “Olá! Gostaria de informações sobre atendimento odontológico.”
- Encaminhamento: “Olá! Sou profissional de saúde e gostaria de conversar sobre um encaminhamento.”
- Parceria: “Olá! Represento uma instituição ou empresa e gostaria de conversar sobre parceria.”

## 10B. Espaço de apoio no coworking Saturno

O briefing fornecido informa três funções: apoio à operação, reuniões e atendimento clínico destinado às empresas integrantes do coworking. Apresentar esse ponto dentro de Contato ou Parcerias, sem substituir o posicionamento principal da Vitorino.

**Texto proposto, condicionado à confirmação operacional:** A Vitorino conta com um espaço de apoio e reuniões no coworking Saturno, onde também realiza atendimento clínico destinado às empresas integrantes do coworking. Consulte disponibilidade e condições de agendamento.

Antes de publicar, confirmar endereço e autorização de divulgação; público elegível; serviços disponíveis; início da operação; dias e horários; canal de agendamento; e condições aplicáveis ao funcionamento clínico.

Não apresentar o Saturno como consultório aberto ao público geral. Endereço e mapa devem esclarecer a função real do espaço.

## 11. Requisitos para o TI

- Fazer cópia de segurança e preparar as alterações em ambiente de prévia para revisão.
- Inventariar páginas, formulários, links, métricas e integrações antes da mudança.
- Preservar o domínio e os endereços válidos. Se mudar uma URL, configurar redirecionamento permanente para o conteúdo equivalente e atualizar links internos.
- Preservar âncoras úteis, como `#contato`, ou atualizar todos os pontos de entrada correspondentes.
- Atualizar títulos e descrições: home institucional da Vitorino Saúde; páginas odontológicas com o serviço e a localização confirmada.
- Ajustar prévias de compartilhamento, ícone do site e logotipos.
- Garantir edição de textos, fotos, artigos e contatos pela equipe, usando a plataforma existente quando viável.
- Testar celular e computador, menu, teclado, foco visível, rótulos de formulário e contraste.
- Não depender apenas de cores para identificar áreas: sempre acompanhar com o nome Saúde ou Odontologia.
- Otimizar imagens e evitar animações que atrapalhem leitura ou carregamento.
- Remover indicadores, links vazios e campos de exemplo das páginas públicas.
- Não registrar nomes, telefones, mensagens livres ou dados de saúde em eventos de análise e parâmetros de campanha.
- Inventariar cookies e ferramentas de análise atuais. Definir com o responsável de tráfego a medição necessária antes de adicionar rastreadores.
- Medir separadamente cliques para atendimento, encaminhamento e parceria, quando a configuração permitir. Abertura do WhatsApp não significa mensagem enviada, consulta agendada ou paciente atendido.
- Atualizar sitemap quando necessário e conferir indexação. Dados estruturados devem refletir apenas informações confirmadas.
- Evitar reprodução automática de vídeos com som.

## 12. Ordem de execução

### Prioridade 1 — identidade e correções

Validar primeiro o protótipo da abertura interativa e sua alternativa sem movimento; aplicar marca principal, paleta e tipografia; reorganizar cabeçalho e rodapé; corrigir campos provisórios e contatos; apresentar a home institucional e o acesso à Odontologia.

### Prioridade 2 — conteúdo e jornada

Reorganizar a área odontológica; atualizar Quem somos com os dados disponíveis; implementar a entrada de novo paciente; inserir fotografias autorizadas.

### Prioridade 3 — blog e complementos

Integrar o blog existente e preparar a estrutura editorial; publicar artigos revisados; integrar a página do livro e completar a trajetória com os materiais adicionais e o raio-x 360 quando recebidos; incluir indicadores e depoimentos somente após confirmação. Publicar Saturno e novos projetos de conteúdo quando suas dependências estiverem resolvidas; preparar a medição acordada com o responsável de tráfego.

## 13. Critérios de aceite

- [ ] Ao abrir a home, fica claro o que é a Vitorino Saúde e que sua expansão está em construção.
- [ ] VITORINO permanece estático enquanto as palavras mudam conforme a rolagem.
- [ ] A abertura funciona com mouse, trackpad, toque e teclado, tem opção de pular e respeita movimento reduzido.
- [ ] As áreas futuras não aparecem como serviços disponíveis ou especialidades de uma equipe já formada.
- [ ] A narrativa segue: abertura, propósito, origem da Odontologia e fundadora, atuação odontológica, parceiros, blog e contato.
- [ ] A Odontologia aparece como o primeiro braço, com acesso direto aos serviços.
- [ ] Índigo predomina; coral identifica Odontologia; azul-claro identifica Saúde.
- [ ] A identidade usa os arquivos oficiais e mantém boa leitura no celular.
- [ ] O visitante encontra Quem somos, Blog e a entrada do novo paciente.
- [ ] Familiares, profissionais e instituições encontram caminhos próprios de contato.
- [ ] O acervo e os endereços do blog existente foram preservados ou redirecionados.
- [ ] Os dois perfis de Instagram estão identificados e funcionam.
- [ ] O menu Blog e os cartões de artigos levam ao Blogger existente.
- [ ] O bloco do livro distingue a obra coletiva do capítulo e leva à página oficial de aquisição.
- [ ] O nome está padronizado como Danielly Vitorino — Dra HospitalLAR, CRO-DF 14.465.
- [ ] A apresentação da operação clínica corresponde à estrutura real da Dra. Danielly.
- [ ] A eventual seção Saturno informa somente público, serviços e disponibilidade confirmados.
- [ ] Não há `[+X]`, `[inserir...]`, credenciais incompletas ou links `#` sem função.
- [ ] Serviços, biografia, equipe, indicadores e depoimentos publicados foram confirmados.
- [ ] Número de WhatsApp, e-mail e cobertura foram validados.
- [ ] O formulário explica seu destino e não promete consulta confirmada.
- [ ] Nenhum botão flutuante cobre o conteúdo.
- [ ] Páginas e links antigos continuam funcionando ou têm redirecionamento equivalente.
- [ ] A prévia foi revisada pela responsável antes de substituir o site público.

## 14. Entregas esperadas do TI

1. Prévia navegável do site atualizado, em celular e computador.
2. Relação das páginas alteradas e dos redirecionamentos necessários.
3. Relação objetiva de textos, fotos e dados que ainda impedem a conclusão.
4. Orientação para editar blog, contatos e conteúdo institucional.
5. Publicação da versão revisada e verificação dos principais caminhos após a atualização.

## 15. Pendências e limites do trabalho

Solicitar à responsável: arquivos finais dos logotipos e grafismos; confirmação da aplicação tipográfica; revisão da seleção de artigos do Blogger; conferência das denominações institucionais e cursos; datas para a trajetória; arquivos oficiais do livro e raio-x 360; fotos autorizadas; contatos e cobertura; oferta real de serviços e capacitações; condições do Saturno; responsáveis pela revisão de conteúdo e manutenção.

Entregar acessos por canal apropriado, sem incluir senhas no documento. Preparar os elementos dependentes em prévia; não publicar campos provisórios como fatos.

Este briefing não autoriza contratação de ferramentas, mudança de domínio, exclusão do blog, anúncio de novos serviços ou alteração de preços. Não exige prontuário, plataforma clínica nem plataforma própria de podcast. A revisão de informações profissionais e de privacidade deve acompanhar o funcionamento real implementado; o documento não substitui essa validação.

**Síntese do pedido:** atualizar o site existente para que a Vitorino Saúde apresente sua visão de cuidado integral, acolha o novo paciente e mostre a Vitorino Odontologia como seu primeiro braço, com identidade índigo, conteúdo humano e navegação clara.
