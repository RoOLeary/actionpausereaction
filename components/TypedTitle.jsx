'use client';

import { useTypingText } from "../hooks/useTypingText";

const TypedTitle = () => {

    const { word } = useTypingText(['action | pause | reaction'], 200, 30);

    return <p className="font-mono font-bold text-center text-lg md:text-4xl">{word}</p>;
}

export default TypedTitle;