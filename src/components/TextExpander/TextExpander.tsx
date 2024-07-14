import { useRef, useState } from "react";

type TextExpanderProps = {
  className?: string;
  showText?: boolean;
  showButtnColor?: string;
  showPercent?: number;
  children: string;
};

function TextExpander({
  className = "",
  showText = false,
  showButtnColor = "black",
  showPercent = 10,
  children = "",
}: TextExpanderProps) {
  const [isOpenText, setIsOpenText] = useState(showText);
  const isFirstRender = useRef(true);

  const containerStyles = {
    backgroundColor: "white",
    display: !isOpenText ? "flex" : "",
    alignItems: !isOpenText ? "center" : "",
    width: "100%",
  };

  const showButtnStyles = {
    color: showButtnColor,
    paddingLeft: "1em",
    cursor: "pointer",
  };

  const textStyles = {
    display: isOpenText ? "inline" : "inline-block",
    whiteSpace: !isOpenText ? "nowrap" : "",
    textOverflow: "ellipsis",
    overflow: !isOpenText ? "hidden" : "",
    width: !isOpenText ? `${showPercent}%` : "fit-content",
  };

  return (
    <div className={className} style={containerStyles}>
      <span style={textStyles}>{children}</span>
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
