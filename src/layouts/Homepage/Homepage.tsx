import { useState } from "react";
import "./Homepage.css";
import { Button } from "../../components/Button/Button";
import { Buttons } from "../Buttons";
import { Inputs } from "../Inputs";
import { Stepper } from "../../components/Stepper/Stepper";
import { Tags } from "../Tags";
import { Textarea } from "../../components/Textarea/Textarea";
import { Dropdowns } from "../Dropdowns";

const layouts = [
  "Buttons",
  "Inputs",
  "Stepper",
  "Tags",
  "Textarea",
  "Dropdowns",
];

const Homepage: React.FC = () => {
  const [activeLayout, setActiveLayout] = useState(layouts[0]);
  return (
    <>
      Welcome to UI-Lib - UI-Library based on Free Accessible Design System
      designed by Irina Nik (YT channel) and developed by junior-frontend
      developer Lubov Nefed (CV & GitHub).
      <br />
      Добро пожаловать в проект UI-Lib -- UI-библиотеку React-компонентов
      основанную на Бесплатной Доступной Дизайн-системе дизайнера Irina Nik (YT
      channel & Design System on Figma Community) и разработанную
      джуниор-фронтенд разработчиком Lubov Nefed (CV & GitHub).
      <br />
      UI-Lib это учебный проект, основная цель которого применить навыки работы
      с React, TypeScript и Figma. Задачи проекта: научиться создавать
      переиспользуемые компоненты, отдавать приоритет дизайну в спорных
      ситуациях реализации, развивать навыки написания самодокументируемого и
      понятного кода.
      <br />
      <ul className="navigation-menu-list">
        {layouts.map((item) => (
          <li
            key={item}
            className={`navigation-menu-li navigation-menu-li-${item.toLowerCase()}${
              item === activeLayout ? " navigation-menu-li--active" : ""
            }`}
          >
            <Button
              size={"big"}
              style={"tertiary"}
              type={{ noIcon: { text: item } }}
              loading={false}
              disabled={false}
              onClick={() => {
                setActiveLayout(item);
              }}
            />
          </li>
        ))}
      </ul>
      {activeLayout === "Buttons" && <Buttons />}
      {activeLayout === "Inputs" && <Inputs />}
      {activeLayout === "Stepper" && <Stepper size="medium" />}
      {activeLayout === "Tags" && <Tags />}
      {activeLayout === "Textarea" && <Textarea placeholder={"Placeholder"} />}
      {activeLayout === "Dropdowns" && <Dropdowns />}
    </>
  );
};

export { Homepage };
