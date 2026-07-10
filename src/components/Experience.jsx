import { useLanguage } from "../hooks/useLanguage";
import GlassCard from "./ui/GlassCard";
import Section from "./ui/Section";

const companyTitleClass =
  "mb-7 text-xl font-semibold tracking-tight text-white sm:mb-9 sm:text-2xl";

const content = {
  pt: {
    titulo: "Experiência",
    experiencias: {
      principal: {
        empresa: "Target Sistemas",
        etapas: [
          {
            cargo: "Estagiária em Análise e Desenvolvimento de Software",
            periodo: "Julho. 2025 – Presente",
            descricao: [
              "Atuação na identificação e resolução de bugs no sistema de ERP.", 
              "Participação no desenvolvimento de novas funcionalidades e melhorias em sistemas existentes.", 
              "Implementação de aprimoramentos técnicos e de usabilidade em aplicações corporativas.", 
              "Levantamento de requisitos e alinhamento de demandas junto à equipe de desenvolvimento.", 
              "Participação em reuniões de equipe para acompanhamento de projetos e definição de prioridades.", 
              "Colaboração com desenvolvedores e analistas na manutenção, evolução e suporte aos sistemas internos."
            ],
          },
        ],
      },
      secundaria: {
        empresa: "Ooka Tecnologia",
        cargo: "Jovem Aprendiz em Gestão de projetos",
        periodo: "Janeiro. 2023 – Março. 2025",
        descricao: [
          "Apoio no planejamento, organização e acompanhamento de projetos de TI.",
          "Participação na definição de escopo, metas, prazos e recursos dos projetos.",
          "Monitoramento do andamento das atividades, contribuindo para a resolução de problemas e o cumprimento das entregas.",
          "Colaboração na gestão da infraestrutura de TI e no suporte à operação dos sistemas.",
          "Alinhamento entre equipes, fornecedores e stakeholders para garantir a execução dos projetos.",
          "Desenvolvimento de habilidades em comunicação, organização, gestão de projetos e trabalho colaborativo."

        ],
      },
    },
  },
  en: {
    titulo: "Experience",
    experiencias: {
      principal: {
        empresa: "Target Sistemas",
        etapas: [
          {
            cargo: "Software Development and Analysis Intern",
            periodo: "July. 2025 – Present",
            descricao: [
              "Identified and resolved bugs in ERP systems.",
              "Participated in the development of new features and enhancements for existing systems.",
              "Implemented technical and usability improvements in corporate applications.",
              "Gathered requirements and collaborated with the development team to align project needs.",
              "Participated in team meetings to track project progress and define priorities.",
              "Collaborated with developers and analysts in the maintenance, enhancement, and support of internal systems."
            ],
          },
        ],
      },
      secundaria: {
        empresa: "Ooka Tecnologia",
        cargo: "Project Management Apprentice",
        periodo: "January. 2023 – March. 2025",
        descricao: [
         "Supported the planning, organization, and monitoring of IT projects.",
         "Participated in defining project scope, goals, timelines, and resources.",
         "Monitored project activities, contributing to problem-solving and the successful delivery of project milestones.",
         "Collaborated in the management of IT infrastructure and supported system operations.",
         "Coordinated with teams, vendors, and stakeholders to ensure successful project execution.",
         "Developed strong communication, organizational, project management, and teamwork skills.",
        ],
      },
    },
  },
};

function Experience() {
  const { lang } = useLanguage();
  const { principal, secundaria } = content[lang].experiencias;

  return (
    <Section id="experiencia" title={content[lang].titulo}>
      <div className="flex flex-col">
        <GlassCard
          hover
          as="article"
          className="p-6 sm:p-8"
        >
          <h3 className={companyTitleClass}>
            {principal.empresa}
          </h3>

          <div className="relative space-y-6 pl-7 sm:pl-10">
            {principal.etapas.map((etapa, index) => (
              <div
                key={`${etapa.cargo}-${etapa.periodo}`}
                className={`relative rounded-2xl border p-5 sm:p-6 ${
                  index === 0
                    ? "border-cyan-300/20 bg-cyan-300/[0.055] shadow-[0_14px_35px_rgba(6,182,212,0.06)]"
                    : "border-white/10 bg-slate-950/35"
                }`}
              >
                {index < principal.etapas.length - 1 ? (
                <span className="absolute -bottom-[60px] -left-[21px] top-9 w-px bg-cyan-300/50 sm:-left-8" />
                ) : null}
                <span
                  className={`absolute -left-[29px] top-7 z-10 h-4 w-4 rounded-full border-2 border-cyan-300 shadow-[0_0_0_5px_rgba(34,211,238,0.08)] sm:-left-10 ${
                    index === 0
                      ? "bg-cyan-300"
                      : "bg-[var(--timeline-dot-bg)]"
                  }`}
                />

                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h4 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {etapa.cargo}
                  </h4>
                  <p className="shrink-0 text-sm font-semibold text-cyan-200">
                    {etapa.periodo}
                  </p>
                </div>

                <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-300 marker:text-cyan-300 sm:text-[15px] sm:leading-7">
                  {etapa.descricao.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard
          hover
          as="article"
          className="p-6 sm:p-8"
          style={{ marginTop: "2.5rem" }}
        >
          <h3 className={companyTitleClass}>
            {secundaria.empresa}
          </h3>

          <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-5 sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h4 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                {secundaria.cargo}
              </h4>
              <p className="shrink-0 text-sm font-semibold text-cyan-200">
                {secundaria.periodo}
              </p>
            </div>

            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-300 marker:text-cyan-300 sm:text-[15px] sm:leading-7">
              {secundaria.descricao.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}

export default Experience;
