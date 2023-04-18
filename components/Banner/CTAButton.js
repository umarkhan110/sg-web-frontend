import React from 'react';
import Link from '@/utils/ActiveLink';

/**
 * Purpose of preserveUrlParam is to fix conversonTracking from Smartguess.is -> marketplace.atlassian.com
 * All links need to call preserveUrlParam
 * 
 * ToDo 1. Write <SGLink> that builds on <Link> 
 * ToDo 2. Fix links in React
 *  
 * @param {*} urlFromCMS 
 * @returns 
 */
export function preserveUrlParam(urlFromCMS){

  if (typeof window === "undefined"){
    //console.log("CTA-Button - Window-Undefined-CMSUrl: " + urlFromCMS);  
    return urlFromCMS;
  }
    
  let results = '';
  const queryString = window.location.search;
  //console.debug("CMSUrl: " + urlFromCMS);
  //console.debug("QString: " + queryString);
  if(urlFromCMS && urlFromCMS.includes('?') ){
      results = urlFromCMS + appendExistingSearchParam(queryString);
  }
  else if(urlFromCMS && urlFromCMS.endsWith('/')) {
      results = urlFromCMS + queryString;
      
  }
  else{
      results = urlFromCMS + '/' + queryString;
  }
  //console.debug("Returning: "+results);
  return results;
}

function appendExistingSearchParam(queryString){
  const indexOfFirst = queryString.indexOf('?');
  if(indexOfFirst > -1){
      return '&' + queryString.substr(indexOfFirst+1,queryString.length); 
  }
  else{
      return queryString;
  }
}

/**
 *  CTAButton
 */
const CTAButton = (props) => {
  const {showCTA,btnUrl = props.content.btnUrl, btnText = props.content.btnText} = props;

  const shouldRenderButton = (btnUrl, btnText) => {
    if(btnUrl && btnUrl.length > 6 && btnText && btnText.length > 4  )
        return true;
    else
        return false;
  }

  if(!shouldRenderButton(btnUrl,btnText))
      return (null);

  if(showCTA){
      return (
          <Link id="try-it-now-nav" href={preserveUrlParam(btnUrl)}>
              <a style={{padding:'10px'}} className="default-btn">
                  {btnText}
              </a>
          </Link>
      );
  }
  else{
      return (
          <div className="banner-content">
              <div className="btn-box">
                  <a href={preserveUrlParam(btnUrl)}  className="link-btn">{btnText}</a>
              </div>
          </div>
      );
  }
}
export default CTAButton;