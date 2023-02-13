import React from 'react'
import ImageSlider from './ImageSlider'
import { SliderImages } from './SliderImages'

function Home() {
    return (
        <div>
            <ImageSlider slides={SliderImages} />
        </div>
    )
}

export default Home
