import React from 'react';
//import dynamic from 'next/dynamic';
//const OwlCarousel = dynamic(import('react-owl-carousel3'));
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const options = {
    nav: false,
    loop: true,
    margin: 25,
    dots: true,
    center: true,
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
            items: 3
        },
        1200: {
            items: 3
        }
    }
};

const ClientFeedbackStyle3 = () => {

    const [feedbacks, setFeedbacks] = React.useState()

    React.useEffect(() => {
        const getFeedbacks = async () => {
            const response = await axios.get(`${baseApiUrl}/feedbacks`)
            setFeedbacks(response.data)
            
            // console.log(response.data)
        }

        getFeedbacks()
    }, [])
     
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            {feedbacks &&(
                <div className="feedback-area bg-F4F8FC ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {feedbacks.subTitle}
                            </span>
                            <h2>{feedbacks.title}</h2>
                        </div>

                        {/*display ? <OwlCarousel 
                            className="feedback-slides owl-carousel owl-theme"
                            {...options}
                        > 
                            {feedbacks.items.map(itemInfo => (
                                <div className="single-feedback-box" key={itemInfo.id}>
                                    <div className="client-info">
                                        <div className="d-flex align-items-center">
                                            <img 
                                                src={itemInfo.image.url} 
                                                alt={itemInfo.image.alternativeText} 
                                            />
                                            <div className="title">
                                                <h3>{itemInfo.name}</h3>
                                                <span>{itemInfo.designation}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p>{itemInfo.shortDec}</p>

                                    <div className="rating d-flex align-items-center justify-content-between">
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
                            ))}
                        </OwlCarousel> : ''}
                                            */}
                    </div>
                </div>
            )}
        </>
    )
}

export default ClientFeedbackStyle3;