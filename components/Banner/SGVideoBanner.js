import React from 'react';

import axios from 'axios';
import baseApiUrl from '@/utils/baseApiUrl';


import ReactMarkdown from 'react-markdown';
import VideoContent from '../Common/VideoContent';
import ErrorBoundary from '@/utils/ErrorBoundary';
import { preserveUrlParam } from '../Banner/CTAButton';

/**
 * IDEA TO CREATE TOP VIDEO BANNEr
 */
const SGVideoBanner = (props) => {
    const { 
            useH2Header = false,
            textThenVideo = true,
            videoUrl="intro-videos?slug=smartguess-45sec-intro",
            skipSubtitles } = props;
    
    const [content, setContent] = React.useState();
    React.useEffect(() => {
        const getContent = async () => {
            const response = await axios.get(`${baseApiUrl}/${props.url}`);
            setContent(response.data[0]);
        }
        getContent()
    }, [])


    const renderSubtitles = () => {
        if(skipSubtitles)  
            return (null);
        else{
            return (
                <div>
                    <span className="sub-sg-title">
                        {content.subTitle}
                    </span> 
                    {content.subTitle2 && (
                    <span className="sub-sg-title">
                        { content.subTitle2}
                    </span>
                    )}
                    {content.subTitle3 && (
                        <span className="sub-sg-title">
                            {content.subTitle3}
                        </span>
                    )}
                </div>
            );    
        }
    }

    const renderTitle =  () => {
        return (
            <>          
                {useH2Header ? 
                    <h2>{content.title}</h2>
                :
                    <h1>{content.title}</h1>
                }
            </>
        );
    }

    const renderText = ( ) => {
        return (
            <>
            {renderSubtitles()} 
            <div>
                {renderTitle()}
                 <ReactMarkdown style={{marginLeft:'0px' }}>
                    {content.description}
                </ReactMarkdown>                
                <div className="btn-box">
                    <a href={preserveUrlParam(content.btnUrl)}  className="link-btn">{content.btnText}</a>
                </div>
            </div>
        </>
    );
}


    return (
        <>
            {content && (
            
                
                <div className="app-progress-area pb-50" > 
                    <div className="container">
                        <div className="row align-items-center m-0" 
                            style={{flexWrap: textThenVideo?'wrap':'wrap-reverse'}}>
                            <div className="col-lg-6 col-md-12">
                                <div className="app-progress">
                                <ErrorBoundary>
                                { textThenVideo && renderText() }
                                { !textThenVideo && <VideoContent url={videoUrl} useContainer={false} /> }
                                </ErrorBoundary>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 ">
                                <ErrorBoundary>
                                <div className="app-progress">
                                { !textThenVideo && renderText() }
                                { textThenVideo && <VideoContent url={videoUrl} useContainer={false} /> 
                                }
                                </div>
                                </ErrorBoundary>
                            </div>
                        </div>
                    </div>

                
                </div>
            
            )}
        </>
    )
}

export default SGVideoBanner;