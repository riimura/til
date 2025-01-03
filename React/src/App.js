import React, { useState } from "react";
import { ColoredMessage } from "./conmponents/ColoredMessage";
import { CssModules } from "./conmponents/CssModules";
import { Emotion } from "./conmponents/Emotion";
import { StyledComponents } from "./conmponents/StyleComponents";
import { StyledJsx } from "./conmponents/StyledJsx";

export const App = () => {
    const [num, setNum] = useState(0);
    const onClickButton = () => {
        // setNum(num + 1);  // 2行続けたときの動きが下と違う
        setNum((prev) => prev + 1);
        setNum((prev) => prev + 1);
    }

    return (
        <>
            <h1 style={{ color: "red" }}>こんにちは！</h1>
            <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
            <ColoredMessage color="pink">元気です！</ColoredMessage>
            <button onClick={onClickButton}>ＯＫ</button>
            <p>{num}</p>
            <CssModules />
            <StyledJsx />
            <StyledComponents />
            <Emotion />
        </>
    );
};