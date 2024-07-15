import { createContext } from "react";

const InputPlaceholderContext = createContext("");
const InputOnClickContext = createContext(() => {});

export { InputPlaceholderContext, InputOnClickContext };
