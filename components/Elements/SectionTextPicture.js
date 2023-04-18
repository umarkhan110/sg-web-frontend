import React from 'react';
//import Link from 'next/link';


import SGImage from './SGImage';
import { useContentData } from '@/utils/useContentData';
import ContentSection from '../Blog/ContentSection';
import ErrorBoundary from '@/utils/ErrorBoundary';


//Formerly AppProgressStyle1
const SectionTextPicture = (props) => {
    const {renderPictureFirst = false,magnify = false,url, padding = false,paddingTop, paddingBottom, showCTA = false} = props;
    const { content, isLoading, isError } = useContentData(url);
    //console.log(JSON.stringify(props));

    const renderCaption = () => {

        if(content && content.image && content.image.caption ){
            return (
                <div style={{
                    margin:'0 5px',
                    fontSize:'15px',
                    fontFamily: "Roboto",
                    fontWeight:400,
                    lineHeight: 1.0,
                    letterSpacing: '0.3px',
                    marginTop:10,
                }}>
                    {content.image.caption}
                </div> 
            );
        }
        else {
           return (null);
        }
    }
 
    const renderPicture = () => {
        return (
            <div  className="col-lg-6 col-md-12  " >                        
                <div style={{height:'100%',width:'100%'}} 
                     className="app-progress-image text-center " >
                     <SGImage 
                        magnify={magnify}
                        {...content.image}
                        lazyload={true} 
                        responsive={true} 
                        placeholder={true}/>     
                        
                        {
                        //renderCaption()
                        }
                </div>
            </div>
        );
    }

    const renderContent = () => {
        return (
            <div className="col-lg-6 col-md-12 ptb-30" >
                {content && (
                    <ContentSection content={content} {...props} />
              )}
            </div>
        );
    }

    const getWrapStyle = () => {
        return renderPictureFirst? {flexWrap: 'wrap-reverse'}: {flexWrap:'wrap'}
    }

    const getPadding = () => {
      if(paddingBottom && paddingTop)
        return paddingTop + " " + paddingBottom;
      else if(paddingBottom)
        return paddingBottom;
      else if(paddingTop)
        return paddingTop;
      else 
        return "";
    }

    const paddingDef = getPadding();

    return (
        <>
            {!isError && content && (
                <ErrorBoundary>
                <div className={padding?"app-progress-area ptb-50":`app-progress-area ${paddingDef}`}>
                    <div className="container">
                        <div className="row m-0 align-items-center"  style={getWrapStyle()} >
                            { renderPictureFirst ? 
                               renderPicture()
                            :
                                renderContent()
                            }
                            { !renderPictureFirst ? 
                               renderPicture()
                            :
                                renderContent()
                            }                            
                        </div>
                    </div>
                </div>
                </ErrorBoundary>
            )}
        </>
    )

        /* 
    const renderSubtitles = (first,second,third) => {
        return (
            <div >
                {first && content.subTitle2 && (
                <span className="sub-sg-title">
                    {content.subTitle}
                </span> 
                )}
                {second && content.subTitle2 && (
                <span className="sub-sg-title">
                    { content.subTitle2}
                </span>
                )}
                {third && content.subTitle3 && (
                    <span className="sub-sg-title pb-25">
                        {content.subTitle3}
                    </span>
                )}
            </div>
        );       
    }
    */
}

export default SectionTextPicture;