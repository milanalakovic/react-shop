import React from 'react'
import ImageSlider from './ImageSlider'
import { SliderImages } from './SliderImages'
import CakeList from "./CakeList";



function Home({ cakes }) {
    return (
        <div>
            <div>
                <ImageSlider slides={SliderImages} />
            </div>
        </div>
    )
}

export default Home
