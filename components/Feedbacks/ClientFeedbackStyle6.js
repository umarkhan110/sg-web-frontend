import React from 'react'
//import dynamic from 'next/dynamic';
//const OwlCarousel = dynamic(import('react-owl-carousel3'));
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const options = {
    nav: true,
    loop: true,
    margin: 25,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='ri-arrow-left-s-line'></i>",
        "<i class='ri-arrow-right-s-line'></i>",
    ],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
};

const ClientFeedbackStyle6 = () => {

    const [feedbacks, setFeedbacks] = React.useState()
    React.useEffect(() => {
        const getFeedbacks = async () => {
            const response = await axios.get(`${baseApiUrl}/client-review-style-6`)
            setFeedbacks(response.data)
        }
        getFeedbacks()
    }, [])

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            {feedbacks && (
                <div className="testimonials-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12">
                                <div className="testimonials-image">
                                    <img 
                                        src={feedbacks.image.url} 
                                        alt={feedbacks.image.alternativeText}  
                                    />
                                </div>
                            </div>
                            
                            <div className="col-lg-8 col-md-12">
                                <div className="testimonials-content">
                                    <span className="sub-title">
                                        {feedbacks.subTitle}
                                    </span>
                                    <h2>{feedbacks.title}</h2>
                                </div>

                                {/*
                                display ? <OwlCarousel 
                                    className="testimonials-slides owl-carousel owl-theme"
                                    {...options}
                                > 
                                    {feedbacks.reviewItem.map(info => (
                                        <div className="content" key={info.id}>
                                            <h3>{info.name}</h3>
                                            <span>{info.designation}</span>
                                            <p>{info.longText}</p>
                                        </div>
                                    ))}
                                </OwlCarousel> : ''}
                            */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ClientFeedbackStyle6;