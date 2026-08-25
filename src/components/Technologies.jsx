import { useLanguage } from "../hooks/useLanguage";
import GlassCard from "./ui/GlassCard";
import Section from "./ui/Section";
import TagList from "./ui/TagList";
import { techTagClass } from "./ui/styles";

const content = {
  pt: {
    titulo: "Tecnologias",
    categorias: [
      {
        titulo: "Back-end",
        skills: ["C#", ".NET", "ASP.NET Core", "NodeJS", "Java"],
      },
      {
        titulo: "Front-end",
        skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Angular"],
      },
      {
        titulo: "Banco de dados",
        skills: ["SQL Server", "SQL"],
      },
      
      {
        titulo: "Ferramentas",
        skills: ["Git", "GitHub", "GitLab", "Docker", "Postman", "Swagger", "Figma", "Azure", "Claude Code"],
      },
    ],
  },
  en: {
    titulo: "Technologies",
    categorias: [
      {
        titulo: "Back-end",
        skills: ["C#", ".NET", "ASP.NET Core", "NodeJS", "APIs REST"],
      },
      {
        titulo: "Front-end",
        skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "Angular"],
      },
      {
        titulo: "Databases",
        skills: ["SQL Server", "SQL"],
      },
      {
        titulo: "Tools",
        skills: ["Git", "GitHub", "GitLab", "Docker", "Postman", "Swagger", "Figma", "Codex", "Claude Code"],
      },
    ],
  },
};

function Technologies() {
  const { lang } = useLanguage();

  return (
    <Section id="tecnologias" title={content[lang].titulo}>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {content[lang].categorias.map((category) => (
          <GlassCard key={category.titulo} hover className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold tracking-tight text-white">
              {category.titulo}
            </h3>
            <TagList
              items={category.skills}
              className="mt-5 flex flex-wrap gap-2.5"
              itemClassName={techTagClass}
            />
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

export default Technologies;
