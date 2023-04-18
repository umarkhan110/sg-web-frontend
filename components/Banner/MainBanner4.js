import React from 'react';
import Link from 'next/link';
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const MainBanner4 = () => {

    const [banner, setBanner] = React.useState()
    React.useEffect(() => {
        const getBanner = async () => {
            const response = await axios.get(`${baseApiUrl}/home-banner-4`)
            setBanner(response.data)
        }
        getBanner()
    }, [])

    return (
        <>
            {banner && (
                <div className="main-banner">
                    <div className="container">
                        <div className="content">
                            <span className="sub-title">
                                {banner.subTitle}
                            </span>
                            
                            <h1>
                                {banner.title}
                            </h1>

                            <Link href={banner.btnUrl}>
                                <a className="default-btn">
                                    {banner.btnText}
                                </a>
                            </Link>

                            <img 
                                src={banner.images.url} 
                                alt={banner.images.alternativeText} 
                            />
                        </div>
                    </div>
                
                    <div className="divider"></div>

                    {/* Shape Images */}
                    <div className="banner-shape3">
                        <img src="/images/shape/shape2.webp" alt="image" />
                    </div>
                    <div className="banner-shape8">
                        <img src="/images/shape/shape11.webp" alt="image" />
                    </div>
                    <div className="banner-shape7">
                        <img src="/images/shape/shape11.webp" alt="image" />
                    </div>
                </div>
            )}
        </>
    )
}

export default MainBanner4;