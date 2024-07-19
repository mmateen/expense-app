import {React, useState, useEffect} from "react";
import InputField from "../components/InputField";
import {Typography } from "@material-tailwind/react";
import LargeBtn from "../components/LargeBtn";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../actions/expanseAction";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../common/common';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginDetails = useSelector((state) => state.authData.loginDetails);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
        setIsButtonDisabled(false);
        setErrorMessage('');
    }
    const handleSubmit = () => {
        setIsButtonDisabled(true);
        dispatch(login(formData));
    }

    useEffect(() => {
        if (Object.keys(loginDetails).length !== 0) {
            fetch(`${baseUrl}/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginDetails)
            }).then(async (res) => {
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.message);
                }
                if (data.message === 'ok') {
                    navigate('/dashboard'); // Redirect to dashboard after successful login
                }
            }).catch((error) => {
                setErrorMessage(error.message);
                console.error('Error:', error);
            });
        }
    }, [loginDetails]);

    const isFormValid = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return (
            Object.values(formData).every((value) => value.trim() !== '') &&
            emailRegex.test(formData.email) && 
            passwordRegex.test(formData.password)
        );
    };
    
    return (
        <div>
            <h2 className="text-center text-2xl mb-11">Login</h2>
            <div className="flex w-full flex-col gap-6">
                <InputField type="email" label="Email" size="lg" name="email" value={formData.email} onChange={handleChange}/>
                <InputField behaviour="password" type="text" label="Password" size="lg" name="password" attr-data="signin-mail" value={formData.password} onChange={handleChange}/>
            </div>
            {errorMessage && <div className="text-red-500 text-center mt-4">{errorMessage}</div>}
            <LargeBtn text="Login" variant="filled" fullWidth
                        size="lg" className="rounded-[12px] bg-[#7F3DFF] mb-4 mt-6 py-4" disabled={!isFormValid() || isButtonDisabled} onClick={handleSubmit}/>
            <Typography variant="paragraph" className="text-center">Don't have an account yet? <Link to='/signup' className="text-[#8B50FF] underline font-medium">Signup</Link></Typography>
        </div>
    )
}

export default Login;