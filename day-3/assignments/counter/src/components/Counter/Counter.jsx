import { useState } from "react"
import { Button } from "../Button/Button";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleCounter = (e) => {
        setCount(count + e);
    }

    return (
        <h2 data-mytestid="h2">
            Counter :{count}
            <Button handlebtn={handleCounter}/>
        </h2>
    )
}