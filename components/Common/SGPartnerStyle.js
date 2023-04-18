import React from 'react';
import dynamic from 'next/dynamic';
const Slider = dynamic(import('react-slick'));
import { useContentData } from '@/utils/useContentData';
import SGImage from '../Elements/SGImage';


const tinyOptions = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
    ]
};

const SGPartnerStyle = () => {
    //const { content, isLoading, isError } = useContentData('partner-style-two');
    const { content, isLoading, isError } = useContentData('partners');
    //console.log(JSON.stringify(content && content.partner[0]));
    return (
        <>
            {!isLoading && !isError && content && (
                <div className="partner-area bg-f9f9f9 ptb-100">
                    <div className="container">
                        <div style={{fontSize:'18px',paddingBottom:"30px" }} className="partner-title">
                            {content.heading}
                        </div>
                        <Slider {...tinyOptions}>
                            {content.partner.map(logo => (
                                <div  className="partner-item" key={logo.id}>
                                  
                                    <SGImage 
                                        {...logo.image}
                                        lazyload={true} 
                                        //responsive={true} 
                                        placeholder={false}  
                                        maxHeight={34}  
                                        setWidth={300}
                                        objectFit={"fit"}                                 
                                    />
                                </div> 
                            ))}
                              {/* 
                        </OwlCarousel> 
                    */}
                        </Slider>
                    </div>
                </div>
            )}
        </>
    )
}

export default SGPartnerStyle;