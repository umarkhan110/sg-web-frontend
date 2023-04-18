// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss

import React, {useContext} from 'react';
import Link from 'next/link';
import ShareOnSocial from '@/components/Common/ShareOnSocial';
import { GlobalContext } from "../../pages/_app";

import SGImage from '../Elements/SGImage';

import siteUrl from '@/utils/siteUrl';
import { useContentData } from '@/utils/useContentData';
import { preserveUrlParam } from '../Banner/CTAButton';


const SGFooterStyle = (props) => {
    const { content:footer } = useContentData("footer");
    const { content:logo  } = useContentData("site-logo");   
    const { defaultSeo } = useContext(GlobalContext);

    const fullSeo = {
        ...defaultSeo,
        ...props.seo
    };

    let shareOptions = {
        "title": fullSeo && fullSeo.metaTitle, 
        "text":   fullSeo && fullSeo.metaDescription, //"Check out the link from Smart Guess for Planning Poker blog: ",
        "url": siteUrl+'/',
        //"related":"[smartguess2,]", // "smartguess2",
        "via": fullSeo && fullSeo.twitterUsername,
        "hashtag":"#SmartGuess"
    }
    
    return (
        <>
            {footer && logo && (
                <div className="footer-area pt-75 pb-50"  >
                    <div className="container" style={{padding: '0 24px'}}>
                        <div className="footer-content">
                            <div style={{display:'flex',flexDirection:'row'}}>
                                <div style={{display:'flex',flex:5,flexDirection:'column'}}></div>
                                <div style={{display:'flex',flexDirection:'column',width:'250px'}}>
                                    <Link  href={preserveUrlParam("/")}>
                                        <a tabIndex="-1" aria-label="Go back to the Smart guess home page" className="logo" style={{marginBottom:'0px'}}>
                                            <SGImage 
                                                //width="250px" Not supported
                                                //height="auto" Not supported
                                                {...logo.whiteLogo}
                                                lazyload={true} 
                                                //responsive={true} 
                                                //placeholder={true}           
                                                />
                                        {/*  
                                            <img style={{width: 250}}
                                                 src={logo.whiteLogo.url} alt={logo.whiteLogo.alternativeText} />
                                        */}
                                        </a>
                                    </Link>
                                    <div 
                                        className="light-footer-link"
                                        style={{display: 'flex',
                                                alignSelf: 'flex-end'}}
                                                 >
                                        
                                        {/*  
                                            <a href="https://envision.is" target="_blank" tabIndex="-1" aria-label="Visit Envision ehf. home page"  className="light-footer-link">
                                        by Envision</a>
                                            */}
                                        
                                    </div>
                                    <div 
                                        className="light-footer-link"
                                        style={{display: 'flex',
                                                alignSelf: 'center'}} >
                                        Made in Hafnarfjordur, Iceland
                                        {/*  
                                        <a href="https://guidetoiceland.is/travel-iceland/drive/hafnarfjordur" target="_blank" tabIndex="-1" aria-label="Visit guidetoIceland Hafnarfjordur page" className="light-footer-link">
                                            Made in Hafnarfjordur, Iceland</a>
                                        */}
                                    </div>
                                </div>
                                <div style={{display:'flex',flex:5,flexDirection:'column'}}></div>
                            </div>
                            <div className="social-links">
                                <div style={{display: 'flex',justifyContent:'center'}}>
                                    <ShareOnSocial  options={shareOptions} />
                                </div>
                            </div>
                            <div style={{display:'flex',flexDirection:'row'}}>
                                <div className="navbar-nav" 
                                    style={{display:'flex',flexDirection:'column',justifyContent:'center'
                                
                                }} >
                                    {footer.secondMenuItems.map(item => (
                                    <div style={{display:'flex'}} key={item.id} className="copyright">
                                        { item && item.url !== 'NA' ? (
                                            <Link href={item.url}>
                                                <a tabIndex="-1" className="nav-link" style={{padding:0}}>{item.text}</a>
                                            </Link>)
                                            :
                                            item.text
                                        }
                                    </div>
                                    ))}
                                </div>
                                <div className="navbar-nav" style={{display:'flex',flex:5}}></div>
                                <div className="navbar-nav" style={{display:'flex',flexDirection:'column',alignItems:'end'}} >
                                    {footer.manuItem.map(item => (
                                        <div style={{listStyleType: 'none', padding: 0, paddingBottom: '10px'}} className="nav-item" key={item.id} style={{margin:0}}>
                                            <Link href={item.url}>
                                                <a tabIndex="-1" className="nav-link" style={{padding:0}}>{item.text}</a>
                                            </Link>
                                        </div> 
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SGFooterStyle;