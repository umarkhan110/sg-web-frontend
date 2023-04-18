import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import baseApiUrl from '@/utils/baseApiUrl';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
    EffectCube, Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCube, Pagination, Navigation]);

const AppScreenshotsStyle4 = () => {

    const [screenshots, setScreenshots] = React.useState()
    React.useEffect(() => {
        const getScreenshots = async () => {
            const response = await axios.get(`${baseApiUrl}/app-screenshots-3`)
            setScreenshots(response.data)
        }
        getScreenshots()
    }, [])

    return (
        <>
            {screenshots && ( 
                <div className="screenshots-area bg-black ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {screenshots.subTitle}
                            </span>
                            <h2>{screenshots.title}</h2>
                        </div>

                        <Swiper 
                            effect={'cube'} 
                            grabCursor={true} 
                            cubeEffect={{
                                "shadow": true,
                                "slideShadows": true,
                                "shadowOffset": 20,
                                "shadowScale": 0.94
                            }}
                            loop={true}
                            navigation={true} 
                            className="screen-swiper-slides mySwiper"
                        >
                            {screenshots.items.map(screenshot => (
                                <SwiperSlide key={screenshot.id}>
                                    <img 
                                        src={screenshot.image.url} 
                                        alt={screenshot.image.alternativeText} 
                                    />
                                </SwiperSlide> 
                            ))}
                        </Swiper>

                        <div className="free-trial-btn">
                            <Link href={screenshots.btnUrl}>
                                <a className="default-btn">
                                    {screenshots.btnText}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AppScreenshotsStyle4;