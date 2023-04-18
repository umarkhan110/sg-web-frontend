import React from 'react';
import ReactMarkdown from 'react-markdown';
import CTAButton from '../Banner/CTAButton';


const Description = (props) => {
  const {content, descriptionBold = false } = props;

  if(descriptionBold){  
    return (
      <h3 style={{marginBottom:'25px'}} className="col-lg-12 col-md-12 m-25">
        {content.description}
      </h3>
    );
  }
  else{
    return (
      <ReactMarkdown>
        {content.description}
      </ReactMarkdown>);
  }  
} 

const ContentSection = (props) => {
  const { content } = props;

  return (
    content && (
      <div >
          <div style={{marginBottom:'25px',marginLeft:'0',textAlign:'left'}} 
              className="section-title">
              <span className="sub-sg-title">
                  {content.subTitle}
              </span>
              <h2>{content.title}</h2>
          </div>
          <Description {...props} ></Description>
          
          <CTAButton {...props} ></CTAButton>
          
      </div>      
    )
  );

}
export default ContentSection;
