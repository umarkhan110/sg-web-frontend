import React from 'react'
//import ScrollAnimation from 'react-animate-on-scroll'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const MainBanner5 = () => {

    const [banner, setBanner] = React.useState()
    React.useEffect(() => {
        const getBanner = async () => {
            const response = await axios.get(`${baseApiUrl}/home-banner-5`)
            setBanner(response.data)
        }
        getBanner()
    }, [])

    return (
        <>
            {banner && (
                <div className="gradient-banner-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="gradient-banner-content">
                                    <h1>{banner.title}</h1>
                                    <p>{banner.shortText}</p>
                                    
                                    <form onSubmit={e => e.preventDefault()}>
                                        <input 
                                            type="text" 
                                            className="input-newsletter" 
                                            placeholder="Enter Your Email Address" 
                                            name="email" 
                                        />
                                        <button type="submit" className="default-btn">
                                            {banner.btnText}
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                        
                               {/* <ScrollAnimation animateIn='fadeInUp' duration={2} animateOnce={true} initiallyVisible={true}>*/}
                                    <div className="gradient-banner-image">
                                        <img 
                                            src={banner.images.url} 
                                            alt={banner.images.alternativeText} 
                                        />
                                    </div>
                               {/* </ScrollAnimation>*/}
                            </div>
                        </div>
                    </div>

                    {/* Shape Images */}
                    <div className="banner-shape1">
                        <img src="/images/shape/shape9.webp" alt="image" />
                    </div>
                    <div className="banner-shape2">
                        <img src="/images/shape/shape7.webp" alt="image" />
                    </div>
                </div>
            )}
        </>
    )
}

export default MainBanner5;