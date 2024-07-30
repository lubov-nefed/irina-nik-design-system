import { Heading } from "../../components/Heading/Heading";
import heartIcon from "/favicon.svg";

const ProjectDescription: React.FC = () => {
  return (
    <section className="project-description text-lg font-normal">
      <Heading level={1} className={"project-description-h1"}>
        UI-Lib
        <img
          className="project-description-icon"
          src={heartIcon}
          alt="Heart icon"
        />
      </Heading>
      <article className="project-description-article project-description-eng">
        <p className="project-description-paragraph">
          Welcome to <span className="project-name-span">UI-Lib</span>! This is
          a UI-Library based on Free Accessible Design System designed by Irina
          Nik (<a href="https://www.youtube.com/@irina_nik">YT channel</a> &{" "}
          <a href="https://www.figma.com/community/file/1131891137727824106/free-accessible-design-system">
            Design System on Figma Community
          </a>
          ) and developed by junior-frontend developer Lubov Nefed (
          <a href="https://lubov-nefed.github.io/my-cv/index.html">CV</a> &{" "}
          <a href="https://github.com/lubov-nefed">GitHub</a>
          ).
        </p>
        <p className="project-description-paragraph">
          To view a component, pick it on the menu.
        </p>
      </article>
      <article className="project-description-article project-description-ru">
        <p className="project-description-paragraph">
          Добро пожаловать в проект{" "}
          <span className="project-name-span">UI-Lib</span> -- UI-библиотеку
          React-компонентов основанную на Бесплатной Доступной Дизайн-системе
          дизайнера Irina Nik (
          <a href="https://www.youtube.com/@irina_nik">YT channel</a> &{" "}
          <a href="https://www.figma.com/community/file/1131891137727824106/free-accessible-design-system">
            Design System on Figma Community
          </a>
          ) и разработанную джуниор-фронтенд разработчиком Lubov Nefed (
          <a href="https://lubov-nefed.github.io/my-cv/index.html">CV</a> &{" "}
          <a href="https://github.com/lubov-nefed">GitHub</a>
          ).
        </p>
        <p className="project-description-paragraph">
          UI-Lib это учебный проект, основная цель которого применить навыки
          работы с <span className="project-description-tech">React</span>,{" "}
          <span className="project-description-tech">TypeScript</span> и{" "}
          <span className="project-description-tech">Figma</span>. Задачи
          проекта: научиться создавать переиспользуемые компоненты, отдавать
          приоритет дизайну в спорных ситуациях реализации, развивать навыки
          написания самодокументируемого и понятного кода.
        </p>
        <p className="project-description-paragraph">
          Для просмотра компонета выберите его в меню.
        </p>
      </article>
    </section>
  );
};

export { ProjectDescription };
