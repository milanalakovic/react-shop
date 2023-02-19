import React from 'react'
import ImageSlider from '../components/ImageSlider'
import { SliderImages } from '../assets/SliderImages'



function Home() {
    return (
        <div>
            <div>
                <ImageSlider slides={SliderImages} />
            </div>
        </div>
    )
}

export default Home
