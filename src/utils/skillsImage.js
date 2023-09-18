import html from "../assets/svg/skills/html.svg";
import css from "../assets/svg/skills/css.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import react from "../assets/svg/skills/react.svg";
import bootstrap from "../assets/svg/skills/bootstrap.svg";
import lightroom from "../assets/svg/skills/lightroom.svg";
import canva from "../assets/svg/skills/canva.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "bootstrap":
      return bootstrap;
    case "lightroom":
      return lightroom;
    case "canva":
      return canva;
    default:
      break;
  }
};
