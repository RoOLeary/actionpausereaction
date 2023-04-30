'use client';

import { useTypingText } from "../hooks/useTypingText";

const TypedTitle = () => {

    const { word } = useTypingText(['action | pause | reaction'], 200, 30);

    return <h1 className="font-mono font-bold text-center text-lg md:text-4xl">{word}</h1>;
}

export default TypedTitle;