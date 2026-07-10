import { useLanguage } from "../hooks/useLanguage";
import GlassCard from "./ui/GlassCard";
import Section from "./ui/Section";

const content = {
  pt: {
    titulo: "Sobre mim",
    eventos: [
      {
        data: "Março, 2023.",
        texto:
          "Atuei como voluntária em um projeto de pesquisa voltado à experiência do usuário (UX) e usabilidade de sistemas, contribuindo tanto na área de UX/UI Design quanto no desenvolvimento front-end. Durante o projeto, participei da análise e reestruturação de interfaces, buscando criar soluções mais intuitivas, acessíveis e centradas nas necessidades dos usuários.",
      },
      {
        data: "Janeiro, 2025.",
        texto:
          "Iniciei a graduação em Engenharia de Software na UNINTER buscando consolidar minha formação na área de tecnologia e ampliar meus conhecimentos em desenvolvimento de sistemas. A graduação complementa minha experiência profissional, permitindo aprofundar conceitos de engenharia de software, programação, arquitetura de sistemas e boas práticas de desenvolvimento.",
      },
      {
        data: "Setembro, 2025.",
        texto:
          "Em 2025, atuei como monitora das disciplinas de Lógica de Programação em C e Programação Orientada a Objetos em Java, prestando suporte aos estudantes, esclarecendo dúvidas e auxiliando no desenvolvimento de atividades práticas, fortalecendo minhas habilidades técnicas e de comunicação.",
      },
    ],
  },
  en: {
    titulo: "About me",
    eventos: [
      {
        data: "March, 2023.",
        texto:
           "Worked as a volunteer on a research project focused on user experience (UX) and system usability, contributing to both UX/UI design and front-end development. Participated in analyzing and redesigning interfaces to create more intuitive, accessible, and user-centered solutions.",
      },
      {
        data: "January, 2025.",
        texto:
        "I started my Software Engineering degree at UNINTER to strengthen my background in technology and expand my knowledge in software development. The program complements my professional experience by allowing me to deepen my understanding of software engineering concepts, programming, system architecture, and development best practices.",
      },
      {
        data: "September, 2025.",
        texto:
          "In 2025, I worked as a teaching assistant for the courses of C Programming Logic and Object-Oriented Programming in Java, providing support to students, answering questions, and assisting with practical activities, strengthening my technical and communication skills.",
      },
    ],
  },
};



function AboutMe() {
  const { lang } = useLanguage();

  return (
    <Section id="sobre-mim" title={content[lang].titulo}>
      <div className="space-y-5">
        {content[lang].eventos.map((event) => (
          <div
            key={`${event.data}-${event.texto}`}
            className="grid gap-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-start sm:gap-6"
          >
            <div className="pr-2 sm:pt-5 sm:text-right">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                {event.data}
              </h3>
            </div>
            <GlassCard className="p-5 sm:p-6">
              <p className="section-copy">{event.texto}</p>
            </GlassCard>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default AboutMe;
