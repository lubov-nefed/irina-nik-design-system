import { useState } from "react";
import "./Homepage.css";
import iconHome from "../../assets/icons/button-icons/icon-home.svg";
import { ProjectDescription } from "./ProjectDescription";
import { Button } from "../../components/Button/Button";
import { Buttons } from "../Buttons";
import { Inputs } from "../Inputs";
import { Stepper } from "../../components/Stepper/Stepper";
import { Tags } from "../Tags";
import { Textarea } from "../../components/Textarea/Textarea";
import { Dropdowns } from "../Dropdowns";

const layouts = [
  "Home",
  "Buttons",
  "Inputs",
  "Stepper",
  "Tags",
  "Textarea",
  "Dropdowns",
];

const Homepage: React.FC = () => {
  const [activeLayout, setActiveLayout] = useState("Home");
  return (
    <div className="homepage">
      <ul className="navigation-menu-list">
        {layouts.map((item) => (
          <li
            key={item}
            className={`navigation-menu-li navigation-menu-li-${item.toLowerCase()}${
              item === activeLayout ? " navigation-menu-li--active" : ""
            }`}
            onClick={() => {
              setActiveLayout(item);
            }}
          >
            <Button
              size={"big"}
              style={"tertiary"}
              type={{ noIcon: { text: item } }}
              loading={false}
              disabled={false}
              onClick={() => {}}
            />
            {item === "Home" && (
              <img
                className="navigation-menu-li-icon"
                src={iconHome}
                alt="Heart icon"
              />
            )}
          </li>
        ))}
      </ul>
      <div className="homepage-content">
        {activeLayout === "Home" && <ProjectDescription />}
        {activeLayout === "Buttons" && <Buttons />}
        {activeLayout === "Inputs" && <Inputs />}
        {activeLayout === "Stepper" && <Stepper size="medium" />}
        {activeLayout === "Tags" && <Tags />}
        {activeLayout === "Textarea" && (
          <Textarea placeholder={"Placeholder"} />
        )}
        {activeLayout === "Dropdowns" && <Dropdowns />}
      </div>
      <footer className="homepage-footer">
        <p>
          <span className="project-name-span">UI-Lib</span> is a pet project of{" "}
          <a
            title="Link to my CV"
            href="https://lubov-nefed.github.io/my-cv/index.html"
          >
            Lubov Nefed
          </a>
        </p>
      </footer>
    </div>
  );
};

export { Homepage };
