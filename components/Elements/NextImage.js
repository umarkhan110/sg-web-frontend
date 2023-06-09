import React, {useContext} from 'react';
import CloudinaryContext from "../../utils/CloudinaryContext";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";
import { lazyload, responsive, placeholder,AdvancedImage } from "@cloudinary/react";
import {fill/*,limitFill,limitFit,fit,pad,crop,thumbnail, scale*/} from "@cloudinary/url-gen/actions/resize";

import Zoom from 'react-medium-image-zoom';
import Image from 'next/image';

const NextSGImage = (props) => {
  // console.log(props)
  const {magnify, thumbnail, setWidth, setHeight,overFlow, objectFit, gravity} = props;
  const cloudinary = useContext(CloudinaryContext);

  const getPlugins = (props) => {
      let result = [];
      props.lazyload && result.push( lazyload());
      props.responsive && result.push(responsive());
      props.placeholder && result.push(placeholder());
      return [...result];
  }

  /**
   * Thumbnail not used - worked better to use default small photo
   */
  const renderImage = (/*resize,*/props) => {
    
    const cldImage = cloudinary.image(props.hash,cloudinary.getConfig().cloudName);
    if(setWidth && setHeight && gravity ){
      cldImage.resize( fill().width(setWidth).height(setHeight).gravity(compass(gravity)));
    }
    else if(setWidth && setHeight){
      cldImage.resize( fill().width(setWidth).height(setHeight)); 
    }
    else if(setWidth && !setHeight){
      cldImage.resize( fill().width(setWidth)); 
    }
    else if(!setWidth && setHeight){
      cldImage.resize( fill().width(setHeight)); 
    }


   if(magnify){
      return ( 
        <Zoom>
          <img
            style={{ margin: 'auto'}}        
            alt={props.alternativeText} 
            src={cldImage.toURL()}
            />
          </Zoom>
      );
    }
    else
    { 
      return (  
        <>
        {/* <AdvancedImage 
          alt={props.alternativeText} 
          style={{
            width: setWidth ? setWidth : null,
            height: setHeight ? setHeight : null,
            objectFit: objectFit? objectFit : null,
            overFlow: overFlow ? overFlow : null,
            maxHeight: props.maxHeight ? props.maxHeight: null
          }}
          cldImg={cldImage} plugins={getPlugins(props)}/> */}
          <Image
          src={props.url}
          alt={props.alternativeText} 
          height=  {setHeight}
          width={setWidth}
          objectFit="fit"
          />
          </>
      );
    }
  }

  return (
    <div style={{width:'100%',height:'100%'}} >
      {renderImage(props)}
    </div>
  );

 }
export default NextSGImage;
