// Função para carregar cursos do localStorage
function loadCourses() {
    return JSON.parse(localStorage.getItem('courses')) || [];
}

// Função para exibir resultados da busca
function displaySearchResults(results) {
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = ''; // Limpar resultados anteriores

    // Se não houver resultados
    if (results.length === 0) {
        searchResults.innerHTML = '<p>Nenhum curso encontrado.</p>';
        return;
    }

    // Criar e adicionar elementos para cada curso encontrado
    results.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        courseItem.innerHTML = `
            <a href="${course.url}" target="_blank">${course.title}</a>
        `;
        searchResults.appendChild(courseItem);
    });
}

// Evento para buscar cursos
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar o envio do formulário
    const searchTitle = document.getElementById('search-title').value.toLowerCase();
    const courses = loadCourses();
    const results = courses.filter(course => course.title.toLowerCase().includes(searchTitle));
    displaySearchResults(results);

//lista dos cursos 
});
const courses = [
   
    { title: "Introdução à Lógica de Programação", url: "https://www.youtube.com/watch?v=jBIPvXHRYpg" },
    { title: "Lógica de programação, por onde começar ? (Guia RÁPIDO de estudos completo para INICIANTES)", url: "https://www.youtube.com/watch?v=gMxQ8vxH9Vk" },
    { title: "Curso de Lógica de Programação", url: "https://youtube.com/playlist?list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV&si=35USAC99jlwSHkzh" },
    { title: "Curso - Lógica de Programação", url: "https://youtube.com/playlist?list=PLfdDa19nz5SpJMLiGkRSctLH7QBr44goY&si=MM7zbESgs80r2eS4" },
    { title: "Curso de Lógica de Programação", url: "https://youtube.com/playlist?list=PLucm8g_ezqNpYL-z-lutCuBplhx9aqkdd&si=aeVYIrAPlSbmSmRC" },
    { title: "Lógica de Programação", url: "https://youtube.com/playlist?list=PLwXQLZ3FdTVG_mqZcOXhfFf3Po6whFv8o&si=-phFA_5NED960-J8" },
    { title: "O que é e como aprender lógica de programação de uma vez por todas", url: "https://esr.rnp.br/desenvolvimento-de-sistemas/o-que-e-logica-de-programacao/v" },
    { title: "Apostila de Lógica de Programação", url: "https://educapes.capes.gov.br/bitstream/capes/560827/2/Apostila%20-%20Curso%20de%20L%C3%B3gica%20de%20Programa%C3%A7%C3%A3o.pdf" },
    { title: "Lógica de programação: o que é, sua importância e exemplos", url: "https://www.locaweb.com.br/blog/temas/codigo-aberto/logica-de-programacao-o-que-e/" },
    { title: "Guia Completo de Lógica de Programação: Conceitos Essenciais e Exemplos Práticos", url: "https://codecrush.com.br/blog/logica-de-programacao" },
    { title: "Lógica de Programação: Como Aprender e Praticar [Completo]", url: "https://herocode.com.br/blog/logica-programacao/" },
    { title: "Lógica de programação: o que é, como estudar e exemplos", url: "https://www.remessaonline.com.br/blog/logica-de-programacao/" },
    { title: "Curso de HTML Completo", url: "https://youtube.com/playlist?list=PL2Fdisxwzt_cajoGVWTx44wM6Ht09QJ3A&si=-7IDbvMBehE3NqHr" },
    { title: "Curso Introdutório ao HTML ( Com + de 2 horas de Projeto)", url: "https://youtu.be/ijv8-PeLZ_o?si=azUdh8SUArNpeMeH" },
    { title: "Curso de HTML | Aprenda HTML em 15 minutos | Seu Primeiro site", url: "https://youtu.be/tBl8jfR05rA?si=A0jwXA1cNmVu7WTy" },
    { title: "Curso de HTML do ZERO ao Avançado - Aprenda Programação e torne-se um Programador", url: "https://www.youtube.com/live/BK3U6pnkMcU?si=9710TF_fuu-hL9VW" },
    { title: "HTML básico", url: "https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/HTML_basicsl" },
    { title: "HTML básico - códigos HTML", url: "https://www.devmedia.com.br/html-basico-codigos-html/16596" },
    { title: "HTML Básico: iniciando no desenvolvimento web com HTML", url: "https://www.homehost.com.br/blog/tutoriais/html-basico/" },
    { title: "Iniciando o código básico de HTML", url: "https://tableless.github.io/iniciantes/manual/html/estruturabasica.html" },
    { title: "Curso completo e atual de HTML5 e CSS3 - Módulo 1 de 5", url: "https://youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&si=eWB9LOgNlzRZuChc" },
    { title: "HTML Completo e Profissional, todas tags válidas de HTML5", url: "https://youtube.com/playlist?list=PLx4x_zx8csUiVHRDO_7qhOaeNrrQ5uU8c&si=Gh5ngjKw_90MeDED" },
    { title: "HTML For Beginners The Easy Way: Start Learning HTML & CSS Today", url: "fundamentos.html" },
    { title: "HTML Tutorial", url: "https://www.w3schools.com/html/" },
    { title: "Curso de Html5 e Css3 - Do Básico ao Avançado - 2023", url: "https://www.youtube.com/playlist?list=PLkJ_av-2S2p97ejPxUYHbaLfX-XMfZ1F3" },
    { title: "Curso HTML e CSS feliz (Projeto Portfólio)", url: "https://youtube.com/playlist?list=PLirko8T4cEmzrH3jIJi7R7ufeqcpXYaLa&si=NeKGVuXQ7lqHB2Ih" },
    { title: "The Ultimate Guide to HTML for Beginners: How to Write, Learn & Use It", url: "https://blog.hubspot.com/website/html" },
    { title: "HTML Living Standard — Last Updated 12 September 2024", url: "https://html.spec.whatwg.org/" },
    { title: "Curso de Java para Iniciantes - Grátis, Completo e com Certificado", url: "https://youtube.com/playlist?list=PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR&si=ONwWpX2iL4mUeFb_" },
    { title: "Java", url: "https://youtube.com/playlist?list=PLGxZ4Rq3BOBq0KXHsp5J3PxyFaBIXVs3r&si=C7K_v-Id0v8Zdyr_" },
    { title: "Curso de Java Básico Gratuito com Certificado", url: "https://youtube.com/playlist?list=PLGxZ4Rq3BOBq0KXHsp5J3PxyFaBIXVs3r&si=C7K_v-Id0v8Zdyr_" },
    { title: "Maratona Java - O maior curso Java em português.", url: "https://youtube.com/playlist?list=PL62G310vn6nHrMr1tFLNOYP_c73m6nAzL&si=28MVNoO86FquK7wD" },
    { title: "CURSO DE JAVA - PROGRAMAÇÃO", url: "https://youtube.com/playlist?list=PLJ0AcghBBWSi6nK2CUkw9ngvwWB1gE8mL&si=xZsJSq4KemvEcxCf" },
    { title: "Java tutorial for beginners", url: "https://youtube.com/playlist?list=PLZPZq0r_RZOMhCAyywfnYLlrjiVOkdAI1&si=TWv7bYT1mdQmdh_J" },
    { title: "Curso de Java", url: "https://youtube.com/playlist?list=PLesCEcYj003Rfzs39Y4Bs_chpkE276-gD&si=cOMQmzj4G2tGaZvj" },
    { title: "Java Tutorial", url: "https://www.w3schools.com/java/default.asp" },
    { title: "O que é Java?", url: "https://aws.amazon.com/pt/what-is/java/" },
    { title: "Java: o que é, linguagem e um Guia para iniciar na tecnologia", url: "https://www.alura.com.br/artigos/java?srsltid=AfmBOorD3LGP3BnsxEvCgiprBKUUJvmETkOsef9xzUMgtjg2Eq8PKi7h" },
    { title: "O que é Java? [Guia para iniciantes]", url: "https://tecnoblog.net/responde/o-que-e-java-guia-para-iniciantes/" },
    { title: "O que é Java e por onde começar?", url: "https://zup.com.br/blog/o-que-e-java" },
    { title: "Java: como funciona a linguagem e principais características", url: "https://www.remessaonline.com.br/blog/java-como-funciona-a-linguagem-e-principais-caracteristicas/" },
    { title: "Curso de POO Java (Programação Orientada a Objetos)", url: "https://youtube.com/playlist?list=PLHz_AreHm4dkqe2aR0tQK74m8SFe-aGsY&si=UkwSHcRSZhK4JkKh" },
    { title: "Curso Multithread, Paralelismo e Concorrência com Java", url: "https://youtube.com/playlist?list=PLuYctAHjg89YNXAXhgUt6ogMyPphlTVQG&si=g-TkfTg-9MU8FNie" },
    { title: "Java & DSA Course for Placement", url: "https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&si=zz8ZIGbE-ZzUV3DX" },
    { title: "Clique aqui", url: "fundamentos.html" },
    { title: "O que é tecnologia Java e por que preciso dela?", url: "https://www.java.com/pt-BR/download/help/whatis_java.html" },
    { title: "Curso de Java", url: "https://youtube.com/playlist?list=PLx4x_zx8csUjFC5WWjoNUL7LOOD7LCKRW&si=x9VTZe_EY5y--ie1" },
    { title: "Linguagem Java - Avançado", url: "https://youtube.com/playlist?list=PLKoyQ2N5NvRZrqmmcnO_l4ApxPZ4bAdVj&si=S7t3cGbnLgmjkjMf" },
    { title: "O que é Java?", url: "https://www.ibm.com/br-pt/topics/java" },
    { title: "Novo Curso de Javascript Completo, Profissional e Moderno - Curso de Javascript Moderno - Aula 01", url: "https://youtu.be/E4DBTqgxHGM?si=IlGYcbEKT3_DBmzh" },
    { title: "Curso de Javascript Completo", url: "https://youtube.com/playlist?list=PL2Fdisxwzt_d590u3uad46W-kHA0PTjjw&si=DVEveJnZ0QUhsHK4" },
    { title: "Curso de JavaScript", url: "https://youtube.com/playlist?list=PLsFVybaG4mODFwCuV06yLitVTikKF09sy&si=XczlML9baQEvx6x1" },
    { title: "JS basic", url: "https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/JavaScript_basics" },
    { title: "Curso de JavaScript 2", url: "https://youtube.com/playlist?list=PLnDvRpP8BneysKU8KivhnrVaKpILD3gZ6&si=zkaXulrIHrgnC5la" },
    { title: "Noções básicas de JavaScript", url: "fundamentos.html" },
    { title: "O que é o JavaScript (JS)?", url: "https://aws.amazon.com/pt/what-is/javascript/" },
    { title: "Curso Grátis de JavaScript e ECMAScript para Iniciantes", url: "https://youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&si=XIfDn7f8Kyd4cmtT" },
    { title: "JavaScript Tutorial Full Course - Beginner to Pro (2024)", url: "https://youtu.be/EerdGm-ehJQ?si=MaKTHGsBclERK5pf" },
    { title: "Curso de Javascript", url: "https://youtube.com/playlist?list=PLwXQLZ"},
      {title:"CURSO DE JAVASCRIPT COM EXERCÍCIOS E PROJETOS", url:"https://youtu.be/OYPbr6ZG3pc?si=Q0UhBIzCbS0j6MFD"},
      {title:"Guia de JavaScript: o que é e como aprender a linguagem mais popular do mundo?", url:"https://www.alura.com.br/artigos/javascript?srsltid=AfmBOooHF3H7Zhq5REFQqIHwgHTU32PNdoiDvtj7oix2jLnE88Xnamt1"},
      {title:"JavaScript Object Properties", url:"https://www.w3schools.com/js/js_object_property.asp"},
      {title:"JavaScript Avançado", url:"https://www.youtube.com/watch?v=kGbbPBRFCE0&list=PL-R1FQNkywO4sD42B6OI6KjG3uOPT0aNl"},
      {title:"Introdução ao Curso de Javascript em NodeJs por Rincko Dev", url:"https://www.youtube.com/watch?v=lQAJ-T1QTYc&list=PL9tY_tDo_Q0C0hs1aGgtJbEH1EBlyzZdG"},
      {title:"What is JavaScript?", url:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"},
      {title:"JavaScript onclick: executando funções ao clicar em elementos", url:"https://www.devmedia.com.br/javascript-onclick-executando-funcoes-ao-clicar-em-elementos/43486"},
      {title:"Complete MongoDB Tutorial", url:"https://youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA&si=7LLd4k4ZeXpaT0gb"},
      {title:"MongoDB Basic To Advanced", url:"https://youtube.com/playlist?list=PLNF7sp688eT_iPD_fAso0y5IonLthsasS&si=z9slbbyk-_3t-x4l"},
      {title:"MongoDB Complete Tutorial", url:"https://youtube.com/playlist?list=PL_euSNU_eLbfmDxRw-Gx45ow5MtBAM3YS&si=P6MMQetfRGazVIlb"},
      {title:"MongoDB Tutorial for Beginners", url:"https://youtube.com/playlist?list=PLWkguCWKqN9OumKjTAzbpsFFBBeem23xQ&si=_XlbCI5l_GImROac"},
      {title:"Complete MongoDB Course from Scratch", url:"https://youtube.com/playlist?list=PL1BztTYDF-QM6KSVfrbSyJNTU9inyBqYF&si=0S7K-vVgLD5H34gA"},
      {title:"MongoDB Tutorial for Beginners", url:"https://youtube.com/playlist?list=PLS1QulWo1RIZtR6bncmSaH8fB81oRl6MP&si=jXPARIF1tX--kYA"},
      {title:"MongoDB: o que é, quais suas características e benefícios e como trabalhar nessa ferramenta", url:"https://www.alura.com.br/artigos/mongodb?srsltid=AfmBOopdOfd3E5YjlSsk3t78jybOlrqFnJR4c5dQfytizwHDLGyrFu28"},
      {title:"MongoDB: O banco baseado em documentos", url:"https://www.alura.com.br/artigos/mongodb-o-banco-baseado-em-documentos?srsltid=AfmBOorUIZh3n6-NqnwW6K8DXXShPlDC_6LT9Qn82EoskGilX7c-p5fD"},
      {title:"Introdução ao MongoDB", url:"https://www.devmedia.com.br/introducao-ao-mongodb/30792"},
      {title:"Perguntas frequentes: Fundamentos do MongoDB", url:"https://www.mongodb.com/pt-br/docs/v5.0/faq/fundamentals/"},
      {title:"Node.js e MongoDB", url:"https://youtube.com/playlist?list=PLsGmTzb4NxK0_CENI1ThoFUNeyIgsZ32V&si=FB0blLuMIcsXojvR"},
      {title:"[Curso] MongoDB para Devs .NET", url:"https://youtube.com/playlist?list=PLqONbZa3fPe7tY4QoVzN3fIJ_z8YweMvp&si=V9-eHwRD2MY1w7kI"},
      {title:"MongoDB.local NYC 2023 All Sessions", url:"https://youtube.com/playlist?list=PL4RCxklHWZ9u2GenfMloNQPskKq4LZilO&si=9rNYClGP1sV9xGbb"},
      {title:"Curso React JS / MongoDB / Node JS", url:"https://youtube.com/playlist?list=PL0QN_lbTofYcw7bzm8y-l2BMslKfMfNgr&si=2WoWIgIx4rh2Y2rM"},
      {title:"Documentos", url:"https://www.mongodb.com/pt-br/docs/manual/core/document/"},
      {title:"Modelagem de dados", url:"https://www.mongodb.com/pt-br/docs/manual/data-modeling/"},
      {title:"MongoDB: O banco baseado em documentos", url:"https://www.alura.com.br/artigos/mongodb-o-banco-baseado-em-documentos?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conte%C3%BAdos&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=11384329873&hsa_grp=164240702375&hsa_ad=712801351854&hsa_src=g&hsa_tgt=dsa-2276348409543&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwxY-3BhAuEiwAu7Y6s6CD_WkUPbr-PM1SUH9FEKPFYd_Fs9jtg-4LZMLB74KiMc268nZ7rRoCD6YQAvD_BwE"},
      {title:"Advance MongoDB Tutorials | Learn MongoDB | MongoDB", url:"https://youtube.com/playlist?list=PLIRAZAlr4cfbxN_BaUlPSan9BM7rA6Pki&si=hTZdNpL0W23M003d"},
      {title:"Brian Leonard", url:"https://www.mongodb.com/pt-br/developer/author/brian-leonard/"},
      {title:"Clique aqui", url:"fundamentos.html"},
      {title:"Curso de Banco de Dados MySQL", url:"https://youtube.com/playlist?list=PLHz_AreHm4dkBs-795Dsgvau_ekxg8g1r&si=6Tg0aWLypHlyhanm"},
      {title:"SQL Tutorial - Full Database Course for Beginners", url:"https://youtu.be/HXV3zeQKqGY?si=nH2HOwQeuVMy928c"},
      {title:"SQL (Full Course)", url:"https://youtube.com/playlist?list=PLsjUcU8CQXGFFAhJI6qTA8owv3z9jBbpd&si=O1zpz_vM5RweP-ppv"},
      {title:"SQL for Beginners (MySQL)", url:"https://youtube.com/playlist?list=PLUDwpEzHYYLvWEwDxZViN1shP-pGyZdtT&si=3LyBt2LrOEyQDSoC"},
      {title:"Curso de MySQL", url:"https://youtube.com/playlist?list=PLucm8g_ezqNrWAQH2B_0AnrFY5dJcgOLR&si=pgLOWMjuP-4rWyi6"},
      {title:"MySQL/MariaDB - Do básico ao avançado", url:"https://youtube.com/playlist?list=PLfvOpw8k80WqyrR7P7fMNREW2Q82xJlpO&si=Sn2_qvYSDdh2KlfV"},
      {title:"MySQL Tutorial", url:"https://www.w3schools.com/mysql/default.asp"},
      {title:"Artigo SQL Magazine 37 - MySQL", url:"https://www.devmedia.com.br/artigo-sql-magazine-37-mysql/6890"},
      {title:"O Que É MySQL? Guia Simples e Direto para Iniciantes?", url:"https://www.hostinger.com.br/tutoriais/o-que-e-mysql"},
      {title:"Curso Básico de SQL", url:"https://www.youtube.com/watch?v=aFu4DWkScJM&list=PLk7wR0G0-Ll5TAXCCxgCkOQ2R_eKoiTWU&si=zmd1FgmZKMSvn05l"},
      {title:"Criação de banco de dados MySQL", url:"https://www.devmedia.com.br/criacao-de-banco-de-dados-mysql/28984"},
      {title:"Curso completo MySQL", url:"https://www.youtube.com/watch?v=NjTgI8lthlI&list=PLbQm7Hb9eM64H2B9eckk3TyZ2k66O8QSS&si=_M76GqI0z_V7SB7G"},
      {title:"Curso de MySQL Completo", url:"https://www.youtube.com/playlist?list=PLP5IC4nHNLZY-9g8LON3yxWk1oP7jBh6T&si=OGe2x8tBCJdFBj4b"},
      {title:"Introdução ao MySQL", url:"https://www.devmedia.com.br/introducao-ao-mysql/28271"},
      {title:"Curso MySQL - Tutorial Completo", url:"https://www.youtube.com/watch?v=4q_9O3Rkdfo&list=PL1C2vFl50i1pT0X9spz8q1jM3T0u1v7pq&si=4NoMkBrJdpP4LZlH"},
      {title:"MySQL para Iniciantes", url:"https://www.devmedia.com.br/mysql-para-iniciantes/26957"},
      {title:"Curso de MySQL Online Grátis", url:"https://www.alura.com.br/artigos/curso-mysql-online-gratis"},
      {title:"Curso Gratuito de MySQL", url:"https://www.udemy.com/course/mysql-gratuito/"},
      {title:"MySQL Tutorial for Beginners", url:"https://youtube.com/playlist?list=PLF1HClHqPQyoxsNp9ND6--uMgF4W8c40P&si=sD1m5xv2AlTXd7fu"},
      {title:"Tutorial SQL MySQL para Iniciantes", url:"https://www.youtube.com/playlist?list=PLT7mP8pQ9eWx_H0rtqzTctjVbwxI6q7Gi"},
      {title:"Curso completo de MySQL - do básico ao avançado", url:"https://www.youtube.com/playlist?list=PLy5aKTz6zNCKGTiG5uqff8RlDIBjzX3yW"},
     {title: "KODULAR com MYSQL (Nível Intermediário)", url: "https://youtube.com/playlist?list=PLV4fnRRUojs_hjQQ1geFoI3qU4qTs9lFQ&si=kdRLmkLijCAAsxTB"},
     {title: "MySQL Workbench", url: "https://youtube.com/playlist?list=PLfvOpw8k80WoSXjfGFci23SPob_PdvpHx&si=WCG9mAZGC5_gMn-9"},
    {title: "Java MySQL - Sistema comercial para gestão de serviço", url: "https://youtube.com/playlist?list=PLbEOwbQR9lqxsTusvu8wfkUECrmcV81MU&si=7y8-H-Pudgrwdg_w"},
    {title: "O que é o MySQL?", url: "https://www.oracle.com/br/mysql/what-is-mysql/"},
    {title: "O que é e como é aplicado MySQL no mercado", url: "https://www.alura.com.br/artigos/mysql-no-mercado?srsltid=AfmBOopZ5Y3untOQXWbs-FWC7kuiHP87FFZRO7JCYwedaKNluo_CLJ7A"},
    {title: "Banco de Dados - MySQL", url: "http://www.linhadecodigo.com.br/mysql.aspx"},
    {title: "Apostila MySQL", url: "http://www.telecentros.sp.gov.br/saber/apostilas/antigas/apostila_sql.pdf"},
    {title: "MySQL Advanced", url: "https://youtube.com/playlist?list=PLxQQRFTQ3zeCeFJoolWK2IWq4g8Z1Wemr&si=DUBx_Gxriw9CILwJ"},
    {title: "Curso completo MySQL WorkBench", url: "https://youtube.com/playlist?list=PLq-sApY8QuyeEq4L_ECA7yYgOJH6IUphP&si=90-8dwllqmq_ZXgd"},
    {title: "Como usar o MySQL Workbench para gerenciamento de banco de dados e modelagem", url: "https://scriptdev.com.br/como-usar-o-mysql-workbench-para-gerenciamento-de-banco-de-dados-e-modelagem/"},
    {title: "Curso de PHP 8 do Zero ao Profissional", url: "https://youtube.com/playlist?list=PL0N5TAOhX5E9eJ9Ix6YUIgEw3lNmaIEE9&si=VlKK--uCaFTZSwTO"},
    {title: "Learn PHP The Right Way - Full PHP Tutorial For Beginners", url: "https://youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&si=NAlMNqAwfZWP7_o_"},
    {title: "PHP Course for Beginners", url: "https://youtube.com/playlist?list=PL0eyrZgxdwhwwQQZA79OzYwl5ewA7HQih&si=NLFbnNnSrfdo6ZI-v"},
    {title: "PHP Course for Beginners", url: "https://youtube.com/playlist?list=PL0eyrZgxdwhwwQQZA79OzYwl5ewA7HQih&si=mapXX5vGTdun2CqU"},
    {title: "Curso de PHP", url: "https://youtube.com/playlist?list=PLwXQLZ3FdTVEITn849NlfI9BGY-hk1wkq&si=NgJaJvByRw_yCNuL"},
    {title: "PHP Full Course for non-haters", url: "https://youtu.be/zZ6vybT1HQs?si=2-RqnAx8ZKACThd6"},
    {title: "PHP Tutorial", url: "https://www.w3schools.com/php/default.asp"},
    {title: "O que é PHP e por que você precisa conhecer essa linguagem de programação web", url: "https://rockcontent.com/br/blog/o-que-e-php/"},
    {title: "O Que é PHP e Para Que Serve? Guia Simples e Completo", url: "https://www.hostinger.com.br/tutoriais/o-que-e-php-guia-basico"},
    {title: "O que é PHP? [Guia para iniciantes]", url: "https://tecnoblog.net/responde/o-que-e-php-guia-para-iniciantes/"},
    {title: "O que eu preciso saber sobre a linguagem de programação PHP?", url: "https://www.locaweb.com.br/blog/temas/codigo-aberto/tudo-sobre-linguagem-de-programacao-php/"},
    {title: "Curso de PHP Moderno - Módulo 1 - Curso em Vídeo", url: "https://youtube.com/playlist?list=PLHz_AreHm4dlFPrCXCmd5g92860x_Pbr_&si=7kErxIEytz8PA_Aa"},
    {title: "PHP 8 CURSO COMPLETO - INTERMÉDIO E AVANÇADO", url: "https://youtube.com/playlist?list=PLXik_5Br-zO9Z8l3CE8zaIBkVWjHOboeL&si=mtZHOXkTAJdxI7uv"},
    {title: "PHP - Intermediário", url: "https://youtube.com/playlist?list=PL98D2DEDD218BFF7E&si=bHWSXClQf4QfXVE0"},
    {title: "O que é o PHP?", url: "https://www.php.net/manual/pt_BR/intro-whatis.php"},
    {title: "PHP - Intermédio e Avançado", url: "https://youtube.com/playlist?list=PLXik_5Br-zO8u5mCnTdAxGuUBbhUM9fa6&si=qPjOZ63INmA9_XJf"},
    {title: "O que o PHP pode fazer?", url: "https://www.php.net/manual/pt_BR/intro-whatcando.php"},
    {title: "Curso de PostgreSQL - Bancos de Dados", url: "https://youtube.com/playlist?list=PLucm8g_ezqNoAkYKXN_zWupyH6hQCAwxY&si=wJelPkMlXSU-bgMV"},
    {title: "Curso de PostgreSql - Básico ao Avançado", url: "https://youtube.com/playlist?list=PLIGlfkzBSfnC7Wz09POTws-jvzRI8oZdg&si=OH2PZXR1U-f43QXL"},
    {title: "Guia Completo PostgreSQL", url: "https://youtube.com/playlist?list=PLDqAb8tE7SQZzMWvPG4PYevQAW1cDsbD0&si=KHceH4uD-06Buymx"},
    {title: "Curso Gratuito de PostgreSQL", url: "https://youtube.com/playlist?list=PLiLrXujC4CW0YEyTxomRYXiyQEzJB4P0l&si=f3yUHnkTNGezAZHs"},
    {title: "Curso de Introdução ao SQL com PostgreSQL", url: "https://youtube.com/playlist?list=PLLeeWxuGiPrUwZUu3hhDk2fcPwBHYFSNZ&si=OMU2b4tt91nbap0"},
    {title: "PostgreSQL - Como Programar", url: "https://youtube.com/playlist?list=PLHCyLhqWSaHDHOCJycIf4FHSU6-IMCxuN&si=pJUnqwZDtInQfd8M"},
    {title: "PostgreSQL Tutorial", url: "https://www.w3schools.com/postgresql/index.php"},
    {title: "O que é PostgreSQL?", url: "https://www.ibm.com/br-pt/topics/postgresql"},
    {title: "O que é PostgreSQL?", url: "https://geosemfronteiras.org/blog/o-que-e-postgresql/?utm_source=google&utm_medium=cpc&gad_source=1&gclid=CjwKCAjwxY-3BhAuEiwAu7Y6s2mmj83_ixUNOTCIHnu68_AIC7T-4CKRB5mlH3JGJoiLp_o714NMsRoC2AYQAvD_BwE"},
    {title: "PostgreSQL Intermediate to Advanced", url: "https://youtube.com/playlist?list=PLxtrcgLvnR2Zx2h4VYqCkwIb_vQ6WKp3L&si=yiu9Hp_F879v"},
    { title: "Curso em vídeo - Python", url: "https://youtube.com/playlist?list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0&si=jgirjRURHMLsYVet" },
    { title: "Curso Completo de Python", url: "https://youtube.com/playlist?list=PLLVddSbilcul-1bAKtMKoL6wOCmDIPzFJ&si=jgSJFITQNZ42Ju3m" },
    { title: "Curso Python p/ Iniciantes", url: "https://youtube.com/playlist?list=PLj7gJIFoP7jdirAFg-fHe9HKOnGLGXSHZ&si=iUf4RpqkBp6VbKzY" },
    { title: "Python Tutorials", url: "https://youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU&si=tU1X_VD5-HxxZFKa" },
    { title: "Aulas Python", url: "https://youtube.com/playlist?list=PLfCKf0-awunOu2WyLe2pSD2fXUo795xRe&si=o1WfPF0RV6f88hLa" },
    { title: "Complete Python Playlist", url: "https://youtube.com/playlist?list=PLZoTAELRMXVNUL99R4bDlVYsncUNvwUBB&si=15m8v77CO58ZMuNL" },
    { title: "Python Tutorial", url: "https://www.w3schools.com/python/default.asp" },
    { title: "Pensando em traçar uma carreira como Desenvolvedor Python? Veja tudo o que você precisa saber!", url: "https://blog.casadodesenvolvedor.com.br/carreira-de-desenvolvedor-python/?gad_source=1&gclid=CjwKCAjwooq3BhB3EiwAYqYoEo023fBtv6-UMslsOcXqc2UvPI5UOI5m_Q9Cv7kWbxNXQ65pWhtlphoCF_YQAvD_BwE" },
    { title: "O que é Python? — um guia completo para iniciar nessa linguagem de programação", url: "https://www.alura.com.br/artigos/python?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conte%C3%BAdos&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=11384329873&hsa_grp=164240702375&hsa_ad=712801351854&hsa_src=g&hsa_tgt=dsa-2276348409543&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwooq3BhB3EiwAYqYoEpNSvMQFHKFMpUEHqZOVZdEyrIaMbtH7G2Cc3TfOT3qPN55ClPTI-RoCPg0QAvD_BwE" },
    { title: "O que é Python e por que aprender? Guia para Iniciantes", url: "https://www.hashtagtreinamentos.com/o-que-e-python?gad_source=1&gclid=CjwKCAjwooq3BhB3EiwAYqYoElw2mQwUcZpi4M_jThUkbjblRrQIHvMPdA0P48wc2GszIYfCeRNXSBoCExYQAvD_BwE" },
    { title: "CS105: Introduction to Python", url: "https://learn.saylor.org/course/view.php?id=439&gad_source=1&gclid=CjwKCAjwooq3BhB3EiwAYqYoEtNwwREXFUnmtxyzmDm_VIrp9H3vfEU_Mf09RNGFMWcFwAj4rFyoCBoCPGcQAvD_BwE" },
    { title: "O que é Python?", url: "https://aws.amazon.com/pt/what-is/python/" },
    { title: "Python Intermediário", url: "https://youtube.com/playlist?list=PLfCKf0-awunPJCrslzgk-mcPSG4G8JviN&si=rCQccvUpNDd2Zh2w" },
    { title: "Python Tutorials", url: "https://youtube.com/playlist?list=PLWKjhJtqVAbnqBxcdjVGgT3uVR10bzTEB&si=A-Vm31g8VJ2boTzD" },
    { title: "Python Geral", url: "https://docs.python.org/pt-br/dev/faq/general.html" },
    { title: "Tutorial Intermediário De Python", url: "https://awari.com.br/tutorial-intermediario-de-python/v" },
    { title: "Curso de Python Intermediário / Avançado", url: "https://youtube.com/playlist?list=PLsMpSZTgkF5ANrrp31dmQoG0-hPoI-NoX&si=2kkUO-XRrqQRwXOx" },
    { title: "Python Advanced Tutorials", url: "https://youtube.com/playlist?list=PL7yh-TELLS1FuqLSjl5bgiQIEH25VEmIc&si=sJTcsl81U4DYMkge" },
    { title: "Machine Learning", url: "https://www.w3schools.com/python/python_ml_getting_started.aspv" },
    { title: "Curso de CSS Completo", url: "https://youtube.com/playlist?list=PL2Fdisxwzt_f5C7Mv0kg1EAHhy2VJLf1c&si=XpcOyHvJRlgax3Hk" },
    { title: "Curso de CSS para iniciantes - Aprenda CSS e crie um projeto", url: "https://youtu.be/vwbegraDXD8?si=GD4Pj208xzmB59tu" },
    { title: "CSS Tutorial – Full Course for Beginners", url: "https://youtu.be/OXGznpKZ_sA?si=cA3i7HtxCErJiXHX" },
    { title: "CURSO DE CSS PARA INICIANTES 2024 - APRENDA CSS COM EXERCÍCIOS E PROJETOS", url: "https://youtu.be/ZkAeajAlfgM?si=v3HQFSCGnWAWincs" },
    { title: "Learn CSS in 1 hour 🎨", url: "https://youtu.be/wRNinF7YQqQ?si=Fi70bJocJm4pOU_-" },
    { title: "O que é CSS? Guia Básico para Iniciantes", url: "https://www.hostinger.com.br/tutoriais/o-que-e-css-guia-basico-de-css" },
    { title: "CSS Tutorial", url: "https://www.w3schools.com/css/" },
    { title: "Curso de CSS - Curso completo de CSS3", url: "https://youtube.com/playlist?list=PLx4x_zx8csUi47Bnugpk78nqJN6rYvEnV&si=Ng5bX-JlHc07-f-V" },
    { title: "Curso de CSS3", url: "https://youtube.com/playlist?list=PLwXQLZ3FdTVGf7GUtiOFLc_9AXO25iIzG&si=VhZ7YjPBqRc5I02M" },
    { title: "Curso de CSS Flexbox", url: "https://youtube.com/playlist?list=PLwXQLZ3FdTVGjLmjwfRc0Q9TA5U-PCWp4&si=luW-HlM8sUG_2HFg" },
    { title: "CSS", url: "https://youtube.com/playlist?list=PLsFVybaG4mOAXJTzysk9-d3OeROyWhhvs&si=NRmOcFKC4WPFOm16" },
    { title: "CSS Básico: Como Começar a Estilizar Suas Páginas Web", url: "https://www.dio.me/articles/css-basico-como-comecar-a-estilizar-suas-paginas-web" },
    { title: "Cascading Style Sheets home page", url: "https://www.w3.org/Style/CSS/Overview.en.html" },
    { title: "CURSO DE CSS PARA INICIANTES 2024 - APRENDA CSS COM EXERCÍCIOS E PROJETOS", url: "https://www.youtube.com/watch?v=ZkAeajAlfgM" },
    { title: "Curso de HTML e CSS com projeto - HTML e CSS para iniciantes", url: "https://youtube.com/playlist?list=PLzA6Ejq7-QH6dHrzNupwMjkpFVqHYOgo2&si=VgMJlo2EF1YAE6Fs" },
    { title: "HTML e CSS para iniciantes - Curso Completo de HTML e CSS", url: "https://youtube.com/playlist?list=PLn7Wg06pEq0TywVw-EE7jspeSP8U9H6uE&si=rrqIRVRh_1L6Q_pS" }
      
      
]; 

// Salvar os cursos no localStorage
localStorage.setItem('courses', JSON.stringify(courses));

