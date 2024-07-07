import { useState } from "react";
import "./Textarea.css";

interface ITextareaProps {
  placeholder: string;
  cols?: number;
  rows?: number;
  maxLength?: number;
}

const Textarea: React.FC<ITextareaProps> = (props) => {
  const [textareaValue, setTextareaValue] = useState("");
  const handleInput = (e: React.BaseSyntheticEvent) => {
    setTextareaValue(e.target.value);
  };
  return (
    <div className="textarea-container">
      <textarea
        cols={props.cols}
        rows={props.rows}
        maxLength={props.maxLength}
        placeholder={props.placeholder}
        onInput={handleInput}
        value={textareaValue}
        className="textarea text-base font-normal"
      />
      {props.maxLength && (
        <p className="textarea-length text-xs font-normal">
          {textareaValue.length}/{props.maxLength}
        </p>
      )}
    </div>
  );
};

export { Textarea };
