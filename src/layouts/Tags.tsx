import iconArrowLeft from "../assets/icons/tag-icons/icon-arrow-left.svg";
import iconClose from "../assets/icons/input-icons/icon-close-tag.svg";
import { Tag } from "../components/Tag/Tag";
function Tags() {
  return (
    <>
      <Tag size={"medium"} text={"Tag item"} />
      <br />
      <Tag
        size={"big"}
        text={"Tag item"}
        icon={{ position: "left", iconSrc: iconArrowLeft }}
      />
      <br />
      <Tag
        size={"small"}
        text={"Tag item"}
        icon={{ position: "right", iconSrc: iconClose }}
      />
    </>
  );
}
export { Tags };
