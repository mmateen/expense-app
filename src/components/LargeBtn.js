import React from "react";
import { Button } from "@material-tailwind/react";

const LargeBtn = ({text, ...props}) => {
    return (
        <div>
            <Button {...props}>{text}</Button>
        </div>
    )
}

export default LargeBtn;