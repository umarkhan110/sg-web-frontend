import React, {useContext} from 'react';
import CloudinaryContext from "../../utils/CloudinaryContext";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";
import { lazyload, responsive, placeholder,AdvancedImage } from "@cloudinary/react";
import {fill/*,limitFill,limitFit,fit,pad,crop,thumbnail, scale*/} from "@cloudinary/url-gen/actions/resize";

import Zoom from 'react-medium-image-zoom';

const SGImage = (props) => {
  const {magnify, thumbnail, setWidth=null, setHeight=null,overFlow, objectFit, gravity} = props;
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
        <AdvancedImage 
          alt={props.alternativeText} 
          style={{
            width: setWidth ? setWidth : null,
            height: setHeight ? setHeight : null,
            objectFit: objectFit? objectFit : null,
            overFlow: overFlow ? overFlow : null,
            maxHeight: props.maxHeight ? props.maxHeight: null
          }}
          cldImg={cldImage} plugins={getPlugins(props)}/>
      );
    }
  }

  return (
    <div style={{width:'100%',height:'100%'}} >
      {renderImage(props)}
    </div>
  );

 }
export default SGImage;
