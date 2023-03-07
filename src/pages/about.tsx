import { Text } from "@/components/text";
import Image from "next/image";

import profilePic from "../../public/profile.jpg";
import styles from "@/styles/about.module.css";

export default function About(): JSX.Element {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <header>
          <Text as="h1" className="hidden">
            Sobre
          </Text>
        </header>
        <Image
          src={profilePic}
          alt="Foto do autor"
          width={300}
          height={300}
          className={styles.img}
        />
        <Text as="h2" className={styles.h2}>
          Desenvolvedor Front-end
        </Text>

        <div className={styles.div}>
          <Text as="h2" className={styles.subtitle}>
            Quem sou eu?
          </Text>
          <Text as="p" className={styles.p}>
            Meu nome é Rafael de Souza Nunes, trabalho com desenvolvimento de
            software há mais de 3 anos, principalmente com aplicações web. Sou
            graduado em Técnico em Informática pelo IFSUL - Campus Sapucaia do
            Sul e atualmente estou cursando Bacharel em Engenharia de Software
            pela Uniasselvi.
          </Text>

          <Text as="p" className={styles.p}>
            Ao longo desses anos já trabalhei em diversos times e projetos
            diferentes, mas todos com o mesmo objetivo, realizar entregas com
            qualidade e agilidade.
          </Text>

          <Text as="p" className={styles.p}>
            O que me motiva em um projeto é a exploração de novas técnolgias,
            perspectiva de crescimento e impacto real na vida das pessoas.
          </Text>
        </div>

        <div className={styles.div}>
          <Text as="h2" className={styles.subtitle}>
            Competências
          </Text>
          <Text as="p" className={styles.p}>
            Sólido conhecimento em JavaScript, TypeScript, React, NodeJS, HTML5,
            CSS3, Styled-Components, TailwindCSS, SASS, LESS, PostCSS, Framer
            Motion e Storybook.
          </Text>

          <Text as="p" className={styles.p}>
            Também possuo conhecimentos em Redux, React Native, ExpressJS,
            MySQL, OracleSQL, PostgresSQL e MongoDB .
          </Text>
        </div>

        <div className={styles.div}>
          <Text as="h2" className={styles.subtitle}>
            Experiências
          </Text>
          <div className={styles.div__xp}>
            <Text as="h3" className={styles.h3}>
              Desenvolvedor Front-end Sênior
            </Text>

            <Text as="p" className={styles.p__xp}>
              Softdesign Jan de 2022 - o momento
            </Text>

            <Text as="p" className={styles["p__xp--light"]}>
              • Desenvolvimento de soluções em projeto internacional utilizando
              stack da equipe (React, TypeScript, Redux entre outros); <br />•
              Usando CodeCommit para versionamento de código;
            </Text>
          </div>

          <div className={styles.div__xp}>
            <Text as="h3" className={styles.h3}>
              Engenheiro de Software Frontend
            </Text>

            <Text as="p" className={styles.p__xp}>
              Hpeflame Mar de 2021 - Dez de 2021
            </Text>

            <Text as="p" className={styles["p__xp--light"]}>
              • Desenvolvimento de soluções na stack da equipe (React, Next.js,
              TypeScript, Graphql, entre outros); <br />
              • Construindo um Design System com a equipe de UX do zero; <br />
              • Biblioteca de componentes documentados (Storybook); <br />
              • Implementação de CMS headless (Contentful); <br />
              • Boas práticas de escrita de código (Clean Code, code review,
              conventional commits); <br />
              • Testes unitários para garantir a qualidade do nosso código (Jest
              and React Testing Library); <br />
              • Desenvolvimento com foco em acessibilidade (a11y) e
              especificações WAI-ARIA; <br />• Utilização da metodologia ágil
              Kanban.
            </Text>
          </div>

          <div className={styles.div__xp}>
            <Text as="h3" className={styles.h3}>
              Desenvolvedor Junior
            </Text>

            <Text as="p" className={styles.p__xp}>
              Meta Out de 2020 - Fev de 2021
            </Text>

            <Text as="p" className={styles["p__xp--light"]}>
              • Desenvolvimento de aplicações utilizando a stack: (React, React
              Native, Styled Components, TypeScript, TypeORM e OracleDB).
            </Text>
          </div>

          <div className={styles.div__xp}>
            <Text as="h3" className={styles.h3}>
              Estagiário de Desenvolvimento
            </Text>

            <Text as="p" className={styles.p__xp}>
              Meta Mar de 2020 - Out de 2020
            </Text>

            <Text as="p" className={styles["p__xp--light"]}>
              • Desenvolvimento de aplicações utilizando a stack: (React, React
              Native, Styled Components, TypeScript, TypeORM e OracleDB). <br />
              • Desenvolvimento ABAP.
            </Text>
          </div>

          <div className={styles.div__xp}>
            <Text as="h3" className={styles.h3}>
              Estagiário de Desenvolvimento
            </Text>

            <Text as="p" className={styles.p__xp}>
              CWI Software Set de 2019 - Nov de 2019
            </Text>

            <Text as="p" className={styles["p__xp--light"]}>
              • Treinamento para desenvolvimento de software utilizando Java,
              SpringBoot, HTML5, CSS3, JavaScript, React e OracleDB.
            </Text>
          </div>
        </div>
      </section>
    </main>
  );
}
