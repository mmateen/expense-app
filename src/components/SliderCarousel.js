import React from "react";
import { Carousel } from "@material-tailwind/react";

const SliderCarousel = ({slides}) => {
    return (
        <div className='slider'>
            <Carousel
                className="rounded-xl"
                transition={{ duration: 2 }}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2 items-center">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i ? "w-4 h-4 bg-[#7F3DFF]" : "w-2 h-2 bg-[#7F3DFF]/50"
                                }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                {slides.map((slide, index) => (
                    <div key={index} className='flex flex-col justify-center items-center pb-10'>
                        <img
                            src={slide.imageUrl}
                            alt={`Slide ${index + 1}`}
                            className="h-full w-full object-cover max-w-80"
                        />
                        <h2 className="text-2xl font-bold">{slide.title}</h2>
                        <p className='text-gray-600'>{slide.description}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default SliderCarousel;