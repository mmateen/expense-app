import {React, useState, useEffect} from "react";
import InputField from "../components/InputField";
import { Checkbox, Typography } from "@material-tailwind/react";
import LargeBtn from "../components/LargeBtn";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../actions/expanseAction";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.authData.userDetails);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = () => {
        dispatch(signup(formData));
    }

    useEffect(() => {
        if (Object.keys(userDetails).length !== 0) {
            fetch('http://localhost:4000/register', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userDetails)
            }).then((res) => res.json()).then((data)=>{
                if(data.message === 'ok') {
                    navigate('/login');
                }
            }).catch((error) => {
                console.error('Error:', error);
            });
        }
    }, [userDetails]);

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
            <h2 className="text-center text-2xl mb-11">Sign Up</h2>
            <div className="flex w-full flex-col gap-6">
                <InputField type="email" label="Email" size="lg" name="email" value={formData.email} onChange={handleChange}/>
                <InputField behaviour="password" type="text" label="Password" size="lg" name="password" attr-data="signin-mail" value={formData.password} onChange={handleChange}/>
            </div>
            <LargeBtn text="Sign Up" variant="filled" fullWidth
                        size="lg" className="rounded-[12px] bg-[#7F3DFF] mb-4 mt-6 py-4" disabled={!isFormValid()} onClick={handleSubmit}/>
            <Typography variant="paragraph" className="text-center">Don't have an account yet? <Link to='/signup' className="text-[#8B50FF] underline font-medium">Signup</Link></Typography>
        </div>
    )
}

export default Signup;