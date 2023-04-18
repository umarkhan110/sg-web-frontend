import React from 'react';
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
    EffectCube, Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCube, Pagination, Navigation]);

const ClientFeedbackStyle2 = () => {

    const [feedbacks, setFeedbacks] = React.useState()
    React.useEffect(() => {
        const getFeedbacks = async () => {
            const response = await axios.get(`${baseApiUrl}/feedbacks`)
            setFeedbacks(response.data)
            
            // console.log(response.data)
        }

        getFeedbacks()
    }, [])

    return (
        <>
            {feedbacks &&(
                <div className="feedback-area pt-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {feedbacks.subTitle}
                            </span>
                            <h2>{feedbacks.title}</h2>
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
                            className="feedback-swiper-slides mySwiper"
                        >
                            {feedbacks.items.map(itemInfo => (
                                <SwiperSlide key={itemInfo.id}>
                                    <div className="single-feedback-item">
                                        <div className="client-info">
                                            <img 
                                                src={itemInfo.image.url} 
                                                alt={itemInfo.image.alternativeText} 
                                            />
                                            <div className="title">
                                                <h3>{itemInfo.name}</h3>
                                                <span>{itemInfo.designation}</span>
                                            </div>
                                        </div>

                                        <p>{itemInfo.shortDec}</p>
                                        
                                        <div className="rating">
                                            <h5>{itemInfo.task}</h5>
                                            <div>
                                                {itemInfo.rating.slice(0,5).map(star => (
                                                    <i 
                                                        className={star.starIcon} 
                                                        key={star.id}
                                                    ></i>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
        </>
    )
}

export default ClientFeedbackStyle2;