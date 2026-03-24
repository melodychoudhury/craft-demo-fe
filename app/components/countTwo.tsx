import { Counter } from "./counter";
import { useState } from "react";

export function CountTwo() {
    const [count, setCount] = useState(0)
    const handleCount = () => {
        setCount(count + 1)
    }
    return (
        <>
            {count}
            <Counter onClick={handleCount} label='increment' backgroundColor="pink" buttonStyleVersion="counter-button1" size="small" />
        </>
    )
}