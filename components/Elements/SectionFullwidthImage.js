import React from 'react';
import Link from 'next/link';
import SGImage from '../Elements/SGImage';
import ReactMarkdown from 'react-markdown';
import NextSGImage from './NextImage';


const SectionFullwidthImage = (props) => {
  const {content, padding = false,paddingTop, paddingBottom, useAsCTA=false ,shouldMagnify = false} = props;
  
  const getPadding = () => {
    return paddingTop + " " + paddingBottom;
    }

  const paddingDef = getPadding();

  const getBackgroundStyle = () => {
    return useAsCTA? {background: '#f9f9f9',width:"100%"}: {width:"100%"}
  }

  const getImageStyle = () => {
    return useAsCTA? {maxHeight: '150px'}: null;
  }

  return (
    <>
      {content && ( 
        <div style={getBackgroundStyle()}
          className={  padding? "screenshots-area ptb-50" : `screenshots-area ${paddingDef}`}>
          <div className="container">
            <div style={{paddingBottom:'30px'}}>
             { content.title &&
              <h2 style={{marginBottom:0}}>{content.title}</h2>
             }
             {
              content.subTitle &&
              <span style={{
                letterSpacing: '0.1em',
                fontWeight: 600,
                color: '#c54403',
                }} className="sub-title">{content.subTitle}
              </span>
              }
              <div style={{display:'flex',flexWrap:'wrap',justifyContent:'left',textAlign:'left'}} >
                <div style={{width:'50%',padding:'0px 25px 0 0' }} > 
                  <Link href={content.btnUrl}>
                    <a>  
                      <h3 style={{marginBottom:10}}>{content.btnText}</h3>
                      <div style={{paddingBottom:20}}>
                        <ReactMarkdown>
                          {useAsCTA? content.subTitle2 : content.description}
                        </ReactMarkdown>
                      </div>
                      {/* <SGImage 
                        style={getImageStyle()}
                        {...content.image}
                        lazyload={true} 
                        responsive={true} 
                        placeholder={true}
                        maxHeight={useAsCTA? 250 : 350}
                      /> */}
                      <NextSGImage
                        style={getImageStyle()}
                        {...content.image}
                        lazyload={true} 
                        responsive={true} 
                        placeholder={true}
                        maxHeight={useAsCTA? 250 : 350}
                        setWidth="560px"
                setHeight="350px"
                      />
                    </a>
                  </Link>
                </div>
                <div style={{width:'50%',padding:'0px 25px 0 0' }}  > 
                  <Link href={content.btn2Url}>
                    <a>    
                      <h3 style={{marginBottom:10}}>{content.btn2Text}</h3>
                      <div style={{paddingBottom:20}}>
                        <ReactMarkdown >
                          {content.descriptionTwo}
                        </ReactMarkdown>
                      </div>
                      {/* <SGImage 
                        style={getImageStyle()}
                        {...content.imageTwo}
                        lazyload={true} 
                        responsive={true} 
                        placeholder={true}
                        maxHeight={useAsCTA? 250 : 350}
                                   
                        /> */}
                        <NextSGImage 
                        style={getImageStyle()}
                        {...content.imageTwo}
                        lazyload={true} 
                        responsive={true} 
                        placeholder={true}
                        maxHeight={useAsCTA? 250 : 350}
                        setWidth="528px"
                        setHeight="350px"      
                        />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
  </>
  );


}

export default SectionFullwidthImage