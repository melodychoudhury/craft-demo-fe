import { Counter } from "./counter";
import { useState } from "react";

export type CountTwoProps = {
  label?: string;
  incrementBy?: number;
  onClick?: () => void;
  backgroundColor?: string;
};

export function CountTwo({ label = "increment", incrementBy = 1, onClick, backgroundColor }: CountTwoProps) {
    const [count, setCount] = useState(0)
    const handleCount = () => {
        setCount(prevCount => prevCount + incrementBy);
        onClick?.();
    };

    return (
        <div className="flex flex-col">
            {count}
            <Counter onClick={handleCount} label={label} backgroundColor={backgroundColor} buttonStyleVersion="counter-button1" size="small" />
        </div>
    )
}