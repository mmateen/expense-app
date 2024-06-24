import React from "react";
import { Input } from "@material-tailwind/react";

const InputField = () => {
    return (
        <div className="flex w-72 flex-col gap-6">
            <Input color="blue" label="Name" />
            <Input color="purple" label="Email" />
            <Input color="indigo" label="Password" />
        </div>
    )
}

export default InputField;