import React from 'react';
import Link from 'next/link';
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const MainBanner6 = () => {

    const [banner, setBanner] = React.useState()
    React.useEffect(() => {
        const getBanner = async () => {
            const response = await axios.get(`${baseApiUrl}/home-banner-6`)
            setBanner(response.data)
        }
        getBanner()
    }, [])

    return (
        <>
            {banner && (
                <div className="gradient-main-banner">
                    <div className="container-fluid">
                        <div className="gradient-main-banner-inner">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="content">
                                        <span className="sub-title">
                                            {banner.subTitle}
                                        </span>
                                        <h1>
                                            {banner.title}
                                        </h1>
                                        <p>
                                            {banner.shortText}
                                        </p>
                                        <Link href={banner.btnUrl}>
                                            <a className="default-btn">
                                                {banner.btnText}
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="image">
                                        <img 
                                            src={banner.image.url} 
                                            alt={banner.image.alternativeText} 
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Shape Images */}
                            <div className="banner-shape2">
                                <img src="/images/shape/shape7.webp" alt="image" />
                            </div>
                            <div className="banner-shape9">
                                <img src="/images/shape/shape21.webp" alt="image" />
                            </div>
                            <div className="banner-shape10">
                                <img src="/images/shape/shape21.webp" alt="image" />
                            </div>
                            <div className="banner-shape11">
                                <img src="/images/shape/shape22.webp" alt="image" />
                            </div>
                            <div className="banner-shape3">
                                <img src="/images/shape/shape2.webp" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MainBanner6;