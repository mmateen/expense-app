import React from 'react'
import SliderCarousel from '../components/SliderCarousel';
import LargeBtn from '../components/LargeBtn';
import { Link } from 'react-router-dom';

const OnBoarding = () =>{
    const slidesData = [
        {
            imageUrl: "svg/handCash.svg",
            title: "Gain total control of your money",
            description: "Become your own money manager and make every cent count"
        },
        {
            imageUrl: "svg/paperCash.svg",
            title: "Gain total control of your money",
            description: "Become your own money manager and make every cent count"
        },
        {
            imageUrl: "svg/plan.svg",
            title: "Gain total control of your money",
            description: "Become your own money manager and make every cent count"
        }
    ];
    return(
        <div className='flex justify-around flex-col h-full'>
            <SliderCarousel slides={slidesData} />
            <div>
                <Link to="/signup">
                    <LargeBtn text="Sign Up" variant="filled" fullWidth
                        size="lg" className="rounded-[12px] bg-[#7F3DFF] my-4 py-4" />
                </Link>
                <LargeBtn text="Login" variant="filled" fullWidth
                    size="lg" className="rounded-[12px] bg-[#EEE5FF] mt-4 mb-6 py-4 text-[#7F3DFF]" />
            </div>
        </div>
    )
}

export default OnBoarding;