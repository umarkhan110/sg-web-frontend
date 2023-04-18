import React from 'react'
import Link from 'next/link'
//import ScrollAnimation from 'react-animate-on-scroll'
import TrustedPartners from '@/components/HomeDemo1/TrustedPartners'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const MainBanner1 = () => {

    const [banner, setBanner] = React.useState()
    React.useEffect(() => {
        const getBanner = async () => {
            const response = await axios.get(`${baseApiUrl}/banner`)
            setBanner(response.data)
            // console.log(response.data)
        }
        getBanner()
    }, [])

    return (
        <>
            {banner && (
                <div className="main-banner-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="main-banner-content">
                                    <div className="content">
                                        <span className="sub-title">{banner.infoText}</span>
                                        <h1>{banner.heading}</h1>
                                        <Link href={banner.btnUrl}>
                                            <a className="default-btn">{banner.btnText}</a>
                                        </Link>
                                    </div>
                                    {/* Trusted Partners Component */}
                                    <TrustedPartners />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                             {/*    <ScrollAnimation animateIn='fadeInUp' duration={3} animateOnce={true}>*/}
                                    <div className="main-banner-image">
                                        <img src={banner.image.url} alt={banner.image.alternativeText} />
                                    </div>
                              {/*   </ScrollAnimation> */}
                            </div>
                        </div>
                    </div>

                    {/* Banner Images */}
                    <div className="shape-overlay"></div>
                    <div className="banner-shape1">
                        <img src="/images/shape/shape9.webp" alt="image" />
                    </div>
                    <div className="banner-shape2">
                        <img src="/images/shape/shape7.webp" alt="image" />
                    </div>
                    <div className="banner-shape3">
                        <img width="149px" height="185px" src="/images/shape/shape2.webp" alt="image" />
                    </div>
                    <div className="banner-shape4">
                        <img src="/images/shape/shape10.webp" alt="image" />
                    </div>
                    <div className="banner-shape5">
                        <img src="/images/shape/shape11.webp" alt="image" />
                    </div>
                </div>
            )}
        </>
    )
}

export default MainBanner1;