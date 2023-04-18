import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import SGImage from './SGImage';

import { useContentData } from '@/utils/useContentData';

const FeatureList = (props) => {
    const { content, isLoading, isError } = useContentData(props.url);
 
    return (
        <>
            {!isError && content && (
                <div className="overview-area pb-50">
                    <div className="container">
                        <div className="row m-0">
                            <div className="col-xl-7 col-lg-7 col-md-7 m-0">
                                <div className="overview-content ptb-0">
                                    <span className="sub-title">{content.subTitle}</span>
                                    <h2>{content.title}</h2>

                                    <p>{content.description}</p>

                                    {content.contentList && (
                                    <ul className="features-list">
                                        {content.contentList.map(featureList => (                                             
                                                <li key={featureList.id}>

                                                {
                                                featureList.icon ? (
                                                    <div className={featureList.iconBackgroundClass}>
                                                        <i  style={{width:35,height:'auto'}} className={featureList.icon}></i>
                                                    </div>
                                                )
                                                :
                                                (
                                                    <div  className="icon svg path">
                                                        <img width="35px" height="35px" className="svg path"
                                                             style={{color:'#f67a43'}} 
                                                             src={featureList.image.url}
                                                             alt="Pointing hand"
                                                             />
                                                    </div>
                                                )
                                                }
                                                
                                                <h3>{featureList.title}</h3>
                                                <ReactMarkdown>
                                                    {featureList.description}
                                                </ReactMarkdown>
                                            </li>
                                        ))}
                                    </ul>
                                    )}

                                {
                                    content.btnUrl && (
                                    <div className="btn-box">
                                        <Link href={content.btnUrl}>
                                            <a target="_blank" className="default-btn">{content.btnText}</a>
                                        </Link>
                                        {/* 
                                        <Link href={content.btnTwoUrl}>
                                            <a className="link-btn">{content.btnTwoText}</a>
                                        </Link>
                                     */}  
                                    </div>
                                    )}
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 pt-30">
                                <SGImage 
                                    {...content.image}
                                    fitHeight={true}
                                    //lazyload={true}
                                    //placeholder={true}        
                                    //responsive={true} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default FeatureList;