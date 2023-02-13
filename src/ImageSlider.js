import React, { useState } from 'react'
import { SliderImages } from './SliderImages'
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

function ImageSlider({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const handleNextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const handlePrevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className='slider'>

            <FaArrowCircleLeft className='left-arrow' onClick={handlePrevSlide} />
            <FaArrowCircleRight className='right-arrow' onClick={handleNextSlide} />
            {SliderImages.map((slide, index) => {
                return (
                    <div className={index === current ? "slide active" : "slide"}
                        key={index}>
                        {index === current && (< img src={slide.image} alt="cake images" className='sliderImg' />)}
                    </div>
                )
            })}
        </div>
    )
}

export default ImageSlider
