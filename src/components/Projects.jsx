import { useLanguage } from "../hooks/useLanguage";
import GlassCard from "./ui/GlassCard";
import Section from "./ui/Section";
import TagList from "./ui/TagList";
import {
  accentBadgeCompactClass,
  compactTechTagClass,
  secondaryActionClass,
  techTagClass,
} from "./ui/styles";

const content = {
  pt: {
    titulo: "Projetos",
    botao: "Visualizar o projeto",
    destaque: "Projeto principal",
    projetos: [
      {
        titulo: "Dr. Rafael Pazzelo | Aplicação Frontend",
        descricao:
          "Aplicação web desenvolvida para o Dr. Rafael Pazello utilizando Next.js, React, TypeScript e Tailwind CSS. O projeto foi construído com foco em desempenho, responsividade e experiência do usuário, apresentando uma interface moderna, navegação intuitiva e componentes reutilizáveis para garantir escalabilidade e facilidade de manutenção.",
        tecnologias: ["Tailwind CSS", "NextJs", "React", "TypeScript"],
        link: "https://drrafaelpazello.vercel.app/",
        principal: true,
      },
      {
        titulo: "Gym Center",
        descricao:
          "Desenvolvimento da página inicial da academia Gym Center utilizando HTML, CSS e JavaScript. O projeto foi criado com foco em boas práticas de desenvolvimento front-end, layout responsivo, design moderno e uma navegação intuitiva para proporcionar uma melhor experiência ao usuário.",
        link: "https://gym-center-mocha.vercel.app/",
        tecnologias: ["HTML", "CSS", "JavaScript"],
      },
      {
        titulo: "Odonto Clinic",
        descricao:
          "Aplicação front-end desenvolvida para uma clínica odontológica utilizando React, JavaScript, HTML e CSS. O projeto contempla um layout responsivo, componentes reutilizáveis e uma interface moderna, com foco em boas práticas de desenvolvimento, organização do código e experiência do usuário na apresentação dos serviços e informações da clínica.",
        link: "https://github.com/pedrogattosch/populacao-toledo",
        tecnologias: ["React", "JavaScript", "HTML", "CSS"],
      },
      {
        titulo: "API Java",
        descricao:
          "Aplicação backend desenvolvida com Spring Boot, Spring Data JPA e H2, implementando uma API REST com operações CRUD. O projeto foi estruturado seguindo boas práticas de arquitetura em camadas, organização de código e persistência de dados.",
        link: "https://github.com/annalaura2/api-java-main",
        tecnologias: ["Java", "Spring Boot", "Spring Data JPA"],
      },
      {
        titulo: "WikiMoedas",
        descricao:
          "Wikimoeda é um projeto sobre o mundo financeiro, o objetivo é manter os usuários atualizados com as últimas cotações de moedas, notícias financeiras e informações detalhadas sobre diversos investimentos.",
        link: "wikimoeda-murex.vercel.app",
        tecnologias: ["React", "TypeScript", "tailwindcss"],
      },
    ],
  },
  en: {
    titulo: "Projects",
    botao: "View project",
    destaque: "Main project",
    projetos: [
      {
        titulo: "Dr. Rafael Pazzelo | Frontend Application",
        descricao:
          "Web application developed for Dr. Rafael Pazzelo using Next.js, React, TypeScript, and Tailwind CSS. The project was built with a strong focus on performance, responsiveness, and user experience, featuring a modern interface, intuitive navigation, and reusable components to ensure scalability and maintainability.",
        link: "https://drrafaelpazello.vercel.app/",
        tecnologias: ["Tailwind CSS", "NextJs", "React", "TypeScript"],
        principal: true,
      },
      {
        titulo: "Gym Center",
        descricao:
          "Landing page developed for Gym Center using HTML, CSS, and JavaScript. The project was built following front-end development best practices, with a responsive layout, modern design, and intuitive navigation to provide an engaging user experience.",
        link: "https://gym-center-mocha.vercel.app/",
        tecnologias: ["HTML", "CSS", "JavaScript"],
      },
      {
        titulo: "Odonto Clinic",
        descricao:
          "Front-end application developed for a dental clinic using React, JavaScript, HTML, and CSS. The project features a responsive layout, reusable components, and a modern interface, following front-end best practices with a strong focus on code organization, maintainability, and user experience when presenting the clinic's services and information.",
        link: "https://github.com/pedrogattosch/populacao-toledo",
        tecnologias: ["React", "JavaScript", "HTML", "CSS"],
      },
      {
        titulo: "Java REST API",
        descricao:
          "Backend application developed using Spring Boot, Spring Data JPA, and the H2 database, implementing a RESTful API with full CRUD operations. The project follows a layered architecture and software development best practices, emphasizing clean code, maintainability, and efficient data persistence.",
        link: "https://github.com/annalaura2/api-java-main",
        tecnologias: ["Java", "Spring Boot", "Spring Data JPA"],
      },
      {
        titulo: "WikiMoedas",
        descricao:
          "Wikimoeda is a project focused on the financial world; its goal is to keep users up to date with the latest currency exchange rates, financial news, and detailed information on various investments.",
        link: "wikimoeda-murex.vercel.app",
        tecnologias: ["React", "TypeScript", "tailwindcss"],
      },
    ],
  },
};

function Projects() {
  const { lang } = useLanguage();
  const featuredProject = content[lang].projetos.find((project) => project.principal);
  const secondaryProjects = content[lang].projetos.filter((project) => !project.principal);

  return (
    <Section id="projetos" title={content[lang].titulo}>
      {featuredProject ? (
        <GlassCard hover className="overflow-hidden p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.9fr)] lg:gap-8">
            <div>
              <div className={accentBadgeCompactClass}>{content[lang].destaque}</div>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                {featuredProject.titulo}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                {featuredProject.descricao}
              </p>
              <a
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${secondaryActionClass} mt-6 w-fit`}
              >
                {content[lang].botao}
              </a>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-5">
              <TagList
                items={featuredProject.tecnologias}
                className="mt-4 flex flex-wrap gap-2.5"
                itemClassName={techTagClass}
              />
            </div>
          </div>
        </GlassCard>
      ) : null}

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        {secondaryProjects.map((project) => (
          <GlassCard
            key={project.titulo}
            hover
            className="flex h-full flex-col justify-between p-6 sm:p-7"
          >
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {project.titulo}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {project.descricao}
              </p>
              <TagList
                items={project.tecnologias}
                className="mt-5 flex flex-wrap gap-2"
                itemClassName={compactTechTagClass}
              />
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${secondaryActionClass} mt-8 w-fit`}
            >
              {content[lang].botao}
            </a>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
