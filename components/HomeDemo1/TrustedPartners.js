import React from 'react';
//import dynamic from 'next/dynamic';
//const OwlCarousel = dynamic(import('react-owl-carousel3'));
import axios from 'axios';
import baseApiUrl from '@/utils/baseApiUrl';

const options = {
    nav: false,
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
            items: 2
        },
        450: {
            items: 3
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 4
        },
        1200: {
            items: 4
        }
    }
};

const TrustedPartners = () => {

    const [display, setDisplay] = React.useState(false);
    const [partners, setPartners] = React.useState()

    React.useEffect(() => {
        const getPartners = async () => {
            const response = await axios.get(`${baseApiUrl}/partners`)
            setPartners(response.data)
            
            // console.log(response.data)
        }

        getPartners()
    }, [])
 
    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            {partners && (
                <div className="trusted-by">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-12">
                            <span className="title">
                                {partners.heading}
                            </span>
                        </div>
                        <div className="col-lg-10 col-md-12">
                            {/*
                            {display ? <OwlCarousel 
                                className="trusted-by-slides owl-carousel owl-theme"
                                {...options}
                            >
                                {partners.partner.map(logo => (
                                    <div className="item" key={logo.id}>
                                        <img 
                                            src={logo.image.url} 
                                            alt={logo.image.alternativeText} 
                                        />
                                    </div> 
                                ))}
                            </OwlCarousel> : ''}
                                */}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default TrustedPartners;