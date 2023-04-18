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
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 6
        }
    }
};

const PartnerStyle1 = () => {
    const [partners, setPartners] = React.useState()
    React.useEffect(() => {
        const getPartners = async () => {
            const response = await axios.get(`${baseApiUrl}/partners`)
            setPartners(response.data)
        }
        getPartners()
    }, [])

    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            {partners && (
                <div className="partner-area ptb-100">
                    <div className="container">
                        {/* 
                        {display ?
                         <OwlCarousel 
                            className="partner-slides owl-carousel owl-theme"
                            {...options}
                        >
                            {partners.partner.map(logo => (
                                <div className="partner-item" key={logo.id}>
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
            )}
        </>
    )
}

export default PartnerStyle1;