import React from 'react';
import Link from 'next/link';
//import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios';
import baseApiUrl from '@/utils/baseApiUrl';
//import dynamic from 'next/dynamic';
//const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    nav: true,
    loop: true,
    margin: 25,
    dots: true,
    autoplay: false,
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
            items: 1
        },
        992: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
};


/**
 * This is the First H1 Header Section on the Webpage
 * @param { } props 
 * @returns 
 */
const MainBanner3 = (props) => {
    const [content, setContent] = React.useState()

    React.useEffect(() => {
    const getContent = async () => {
        const response = await axios.get(`${baseApiUrl}/${props.url}`)
        setContent(response.data[0])
     }
     getContent()
  }, [])


    //className="pb-75"
    return (
        <>
            {content && ( 
                <div className="banner-wrapper-area">
                    <div className="container ">
                        <div className="row align-items-center pb-50">
                            <div  style={{display:'flex',flexDirection:'row',flex:1}}>  {/*className="col-lg-12 col-md-12" */} 
                                <div style={{display:'flex',flexDirection:'column',textAlign:'left'}} className="banner-wrapper-content">
                                    <div style={{display:'flex',flexDirection:'column', flex:1}}>
                                        <span  className="sub-sg-title">
                                                {content.subTitle}
                                        </span>
                                        <span className="sub-sg-title">
                                                For Jira Cloud
                                        </span>
                                    </div>
                                    <div style={{display:'flex', 
                                                flexDirection:'column',
                                                flexWrap:'wrap',
                                                
                                                }} >
                                        <div style={{minWidth:'400px',/*maxWidth:700*/}}>
                                            <h1>
                                                {content.title}
                                            </h1>
                                        </div>
                                        <div style={{display:'flex',flexDirection:"column",
                                                    minWidth:'400px',/*maxWidth:700*/
                                    }}>
                                        <p>
                                            {content.description}
                                        </p>
                                        <p style={{alignSelf:'left',marginLeft:0}}  >
                                            <Link  href={content.btnUrl}>
                                            <a  target="_blank" className="default-btn">
                                            {content.btnText}
                                            </a>
                                        </Link>
                                        </p>
                                        </div>
                                       
                                    </div>
                
                                </div>
                            </div>
                           
                           
                            <div style={{display:'flex',flex:1}}>
                            {/*
                            <div className="col-lg-12 col-md-12">

                              */}

                            <CaroselTiny screenshots={content.contentList} />
                           

{/*   

                                <div className="banner-wrapper-image">
                                    <div className="banner-img">
                                        <img style={{width:250}}
                                            src={content.image.url} 
                                            alt={content.image.alternativeText} 
                                        />
                                    </div>
                                    <div className="banner-img">
                                        <ScrollAnimation animateIn='fadeInLeft' animateOnce={true} initiallyVisible={true}>
                                            <img style={{width:250}}
                                                src={content.imageTwo.url} 
                                                alt={content.imageTwo.alternativeText} 
                                            />
                                        </ScrollAnimation>
                                    </div>
                                </div>
*/}

                            </div>
                        </div>
                    </div>
                    

                    {/* Shape Images */}
                    <div className="shape13">
                        <img src="/images/shape/shape15.webp" alt="shape" />
                    </div>
                    <div className="shape14">
                        <img src="/images/shape/shape17.webp" alt="shape" />
                    </div>
                    <div className="shape15">
                        <img src="/images/shape/shape18.webp" alt="shape" />
                    </div>
                </div>
            )}
        </>
    )
}

export default MainBanner3;