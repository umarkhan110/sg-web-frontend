import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "../../pages/_app";

import siteUrl from '@/utils/siteUrl';
//const site = `${baseUrl}/api/contact`;

const Seo = (props) => {
  const  {seo /*,videoSeo*/} =  props;
  const slug = (seo && seo.slug) || props.slug ;
  const { defaultSeo } = useContext(GlobalContext);
  const seoWithDefaults = {
    ...defaultSeo,
    ...seo,
    //...videoSeo,
  };

  const getShort = (metaText, howShort) => {
    let results = "";
    if(!metaText){
      return results;
    }

    if(metaText.length > howShort ){
      results = metaText.substring(0,howShort);
      results = results.replace(/(\r\n|\n|\r)/gm, "");  //remove newlines, breaks xmlsitematp
    }
    else{
      results = metaText;
    }
    return results;
  }

  const getCanoncialUrl = (siteUrl,slug) => {
    let result = siteUrl;
    if(slug){
      result += slug; 
    }

    if(!result.endsWith('/')){
      result += "/";
    }

    if(!result.startsWith('https:')){
     result = result.replace('http:', 'https:');
    }

    return result;
  }

  const fullSeo = {
    ...seoWithDefaults,
    metaTitle: `${seoWithDefaults.metaTitle}`, // | ${siteName}`, //too long
    shareImage: seoWithDefaults.shareImage, // Get full image URL
  };

  const canonicalURL = getCanoncialUrl( siteUrl,slug);
  const shortMetaDesc = getShort(fullSeo.metaDescription, 125); 
  const shortMetaTitle = getShort(fullSeo.metaTitle,55);

  return (
    <Head>
      <link rel="canonical" href={canonicalURL} ></link>
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={shortMetaTitle} ></meta> {/*max 65 char  */}
          <meta name="twitter:title" content={shortMetaTitle} ></meta>
          <meta property="og:site_name" content="SmartGuess" ></meta> 
          <meta property="og:url" content={canonicalURL} ></meta>     
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={shortMetaDesc} ></meta>{/*70–125 characters */}
          <meta property="og:description" content={shortMetaDesc} ></meta>{/* Open Graph descriptions should be 65 characters or less*/}
          <meta name="twitter:description" content={shortMetaDesc} ></meta>
        </>
      )}
      {fullSeo.shareImage && fullSeo.shareImage[0] && (
        <>
          <meta property="og:image" content={fullSeo.shareImage[0].url} ></meta>
          <meta property="og:image:secure_url" content={fullSeo.shareImage[0].url} ></meta>          
          <meta name="twitter:image" content={fullSeo.shareImage[0].url} ></meta>
          <meta name="image" content={fullSeo.shareImage[0].url} ></meta>

        </>
      )}
      {fullSeo.article && <meta property="og:type" content="article" ></meta>  }

      {fullSeo.video && (
        <>
          <meta property="og:type" content="video"></meta>
          <meta property="og:video" content={fullSeo.video.url} ></meta>
          <meta property="og:video:url" content={fullSeo.video.url} ></meta>
          <meta property="og:video:secure" content={fullSeo.video.url} ></meta>
          <meta property="og:video:type"  content={fullSeo.video.type} ></meta>

          <meta property="og:video:width"  content={fullSeo.video.width} ></meta>
          <meta property="og:video:height"  content={fullSeo.video.height}  ></meta>
        </>)}

        <meta name="twitter:card" content="summary_large_image" ></meta>
        <meta name="twitter:site" content="@smartguess2" ></meta>
        <meta name="twitter:creator" content="@smartguess2" ></meta> 
        </Head>
  );
};

export default Seo;