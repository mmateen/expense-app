import React from "react";
import InputField from "../components/InputField";

const Signup = () => {
    return (
        <div>
            <h2 className="text-center text-2xl mb-11">Sign Up</h2>
            <div className="flex w-full flex-col gap-6">
                <InputField type="text" color="black" label="Name" size="lg"/>
                <InputField type="email" color="black" label="Email" size="lg"/>
                <InputField behaviour="password" type="text" color="black" label="Password" size="lg"/>
            </div>
        </div>
    )
}

export default Signup;