import { useState } from "react";
import "./Textarea.css";

interface ITextareaProps {
  placeholder: string;
  cols?: number;
  rows?: number;
  maxLength?: number;
  isRequired?: boolean;
}

const Textarea: React.FC<ITextareaProps> = ({
  placeholder,
  cols,
  rows,
  maxLength,
  isRequired = true,
}) => {
  const [textareaValue, setTextareaValue] = useState("");
  const handleInput = (e: React.BaseSyntheticEvent) => {
    setTextareaValue(e.target.value);
  };
  return (
    <div className="textarea-container">
      <textarea
        cols={cols}
        rows={rows}
        maxLength={maxLength}
        placeholder={placeholder}
        onInput={handleInput}
        value={textareaValue}
        className="textarea text-base font-normal"
        required={isRequired}
      />
      {maxLength && (
        <p className="textarea-length text-xs font-normal">
          {textareaValue.length}/{maxLength}
        </p>
      )}
    </div>
  );
};

export { Textarea };
