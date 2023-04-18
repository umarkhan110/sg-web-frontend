// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss

import React from 'react';
import Link from 'next/link';
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const FooterStyleTwo = () => {
    const [logo, setLogo] = React.useState()
    React.useEffect(() => {
        const getLogo = async () => {
            const response = await axios.get(`${baseApiUrl}/site-logo`)
            setLogo(response.data)
        }
        getLogo()
    }, [])


    const [footer, setFooter] = React.useState()
    React.useEffect(() => {
        const getFooter = async () => {
            const response = await axios.get(`${baseApiUrl}/footer-style-two`)
            setFooter(response.data)
        }
        getFooter()
    }, [])

    return (
        <>
            {footer  && logo && (
                <div className="footer-area footer-style-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <Link href="/">
                                        <a className="logo">
                                          <img style={{width: 200}}
                                                src={logo.blackLogo.url} 
                                                alt={logo.blackLogo.alternativeText} 
                                            />
                                        </a>
                                    </Link>

                                    <p>{footer.shortText}</p>

                                    <ul className="social-links">
                                        {footer.socialLinks.map(link => (
                                            <li key={link.id}>
                                                <a href={link.url} target="_blank">
                                                    <i className={link.icon}></i>
                                                </a>
                                            </li> 
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="single-footer-widget pl-2">
                                    <h3>{footer.titleOne}</h3>

                                    <ul className="links-list">
                                        {footer.pageItem.map(link => (
                                            <li key={link.id}>
                                                <a href={link.url}>
                                                    {link.text}
                                                </a>
                                            </li> 
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>{footer.titleTwo}</h3>

                                    <ul className="links-list">
                                        {footer.supportPageItem.map(link => (
                                            <li key={link.id}>
                                                <a href={link.url}>
                                                    {link.text}
                                                </a>
                                            </li> 
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="single-footer-widget">
                                   <h3>{footer.titleThree}</h3>

                                    <ul className="links-list">
                                        {footer.usefulPageItem.map(link => (
                                            <li key={link.id}>
                                                <a href={link.url}>
                                                    {link.text}
                                                </a>
                                            </li> 
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>{footer.titleFour}</h3>

                                    <p>{footer.newsletterShortText}</p>

                                    <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                                        <input 
                                            type="text" 
                                            className="input-newsletter" 
                                            placeholder="Your Email" 
                                            name="EMAIL" 
                                            required 
                                        />
                                        <button type="submit">
                                            <i className="ri-send-plane-2-line"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        <div className="copyright-area">
                            <p>{footer.copyrightFooterText}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default FooterStyleTwo;