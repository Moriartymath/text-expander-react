import { useState } from "react";
import styles from "./TextExpander.module.css";

type TextExpanderProps = {
  className?: string;
  showText?: boolean;
  showButtnColor?: string;
};

function TextExpander({
  className = "",
  showText = false,
  showButtnColor = "white",
}: TextExpanderProps) {
  const [isOpenText, setIsOpenText] = useState(showText);

  const containerStyles = {
    backgroundColor: "white",
    width: "100%",
  };

  const showButtnStyles = {
    backgroundColor: showButtnColor,
    cursor: "pointer",
  };

  const textStyles = {
    display: "inline-block",
    whiteSpace: !isOpenText ? "nowrap" : "",
    textOverflow: "ellipsis",
    overflow: !isOpenText ? "hidden" : "",
    width: "100%",
  };

  return (
    <div className={className} style={containerStyles}>
      <div style={{ width: !isOpenText ? "50%" : "100%" }}>
        <p className={styles.text} style={textStyles}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          tenetur eos corrupti ipsa dolores ad quia perferendis repellendus
          suscipit recusandae qui, quo asperiores commodi veniam nostrum sequi
          possimus repudiandae delectus.
        </p>
      </div>
      <span
        role="button"
        style={showButtnStyles}
        onClick={() => setIsOpenText((currIsOpen) => !currIsOpen)}
      >
        {isOpenText ? "Show less" : "Show more"}
      </span>
    </div>
  );
}

export default TextExpander;
