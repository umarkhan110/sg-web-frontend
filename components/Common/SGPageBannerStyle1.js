import React from 'react';
import Link from 'next/link';
import { preserveUrlParam } from '../Banner/CTAButton';
const PageBannerStyle1 = ({pageTitle, homePageUrl, homePageText, activePageText}) => {
    return (
        <>
            <div className="page-title-area">
                <div className="container">
                    <div className="page-title-content">
                        <h1 style={{color:'white'}}>{pageTitle}</h1>
                        <ul>
                            <li>
                                <Link href={preserveUrlParam(homePageUrl)}>
                                    <a>{homePageText}</a>
                                </Link>
                            </li>
                            <li>{activePageText}</li>
                        </ul>
                    </div>
                </div>

                <div className="divider"></div>
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                <div className="banner-shape1">
                    <img src="/images/shape/shape9.webp" alt="image" />
                </div>
            </div>
        </>
    );
}

export default PageBannerStyle1;