import React from 'react';

import Link from 'next/link';
import { useContentData } from '@/utils/useContentData';
import { preserveUrlParam } from '../Banner/CTAButton';

const SGFreeTrialStyle = (props) => {
    const { url = "content-data?slug=free-trial-cta",openInNew=false,hideSecondLink=false } = props;
    const { content, isLoading, isError } = useContentData(url);

    return (
        <>
            {!isError && content && (
                <div className="free-trial-content gradient-color ptb-100 ">
                {/* <div className="overview-area ptb-75"> */}
                    <div style={{paddingTop: '14px'}} className="container" style={{padding:0}}>
                        
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="content">
                                        <span className="sub-title">
                                            {content.subTitle} -  {content.subTitle2} 
                                        </span>
                                        <h2>{content.title}</h2>
                                        <div className="row">
                                            <div className="btn-box pt-25">
                                                <Link className="link-btn" href={preserveUrlParam(content.btnUrl)}>
                                                    <a style={{marginRight:'30px'}} target={openInNew?"_blank":""} className="default-btn">{content.btnText}</a>
                                                </Link>
                                                {!hideSecondLink && content.btn2Url && content.btn2Text && (
                                                    <Link className="link-btn" href={preserveUrlParam(content.btn2Url)}>
                                                        <a className="cta-btn">{content.btn2Text}</a>
                                                    </Link>
                                            )}
                                            </div>
                                          
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12" style={{display:'flex',flexDirection:'column'}}>                                 
                                    <ul className="content" style={{paddingTop:'25px', alignSelf:'center',color:'white'}} >
                                    {content.contentList && (
                                            content.contentList.map(featureList => (  
                                            <li key={featureList.id} style={{listStyleType: 'none', padding: 0, margin: 0}}>                                           
                                                <div style={{display:'flex',alignContent:'center'}} key={featureList.id}>
                                                    <div className={featureList.iconBackgroundClass}>
                                                        <i style={{fontSize:35}} className={featureList.icon}></i>
                                                    </div> 
                                                    <div style={{alignSelf: 'center', paddingLeft:'10px', paddingTop:'10px'}} >
                                                        <div className="sub-title" >{featureList.title}</div>
                                                    </div>
                                                </div>
                                            </li>
                                            ))
                                        )}
                                    </ul>   
                                


                                

                                    
                                    
                                </div>
                            </div>

                            {/* Shape Images                             <div className="shape8">
                                <img width="78px" height="47px"  src="/images/shape/shape7.webp" alt="shape" />
                            </div>
                            */}

                            <div className="shape9">
                                <img width="125px" height="101px" src="/images/shape/shape8.webp" alt="shape" />
                            </div>

                            <div className="lines">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                    
                </div>
            )}
        </>
    )
}

export default SGFreeTrialStyle;