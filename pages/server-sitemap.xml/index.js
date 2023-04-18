/**
 * 
 *  https://articles.wesionary.team/how-to-implement-sitemap-in-next-js-using-next-sitemap-77ca7bb56544
 * 
 * This is run dynamically when visiting http://localhost/server-sitemap.xml
 * To Test 
 * 1. runProdVersion.sh
 * 2. open http://localhost/server-sitemap.xml
 * 
 */
import axios from 'axios';
import { getServerSideSitemap } from 'next-sitemap';
import baseApiUrl from '@/utils/baseApiUrl';

 const siteUrl = 'https://smartguess.is';
//const siteUrl =  require('@/utils/siteUrl');

export const getPosts = async () => {
  console.log("getPosts starting: "+ baseApiUrl);
  let result = null;
    try {
        result = axios.get(`${baseApiUrl}/blog-posts?_hidePost=false`);
        return result;
  }
  catch (error) {
      console.error(error);
      result.sendStatus(500);
      return;
  }
};

const filterString = (string) => {
  if(string)
    return string.replace('&','and')
  else  
    return "";

}

const getVideoTag = (eachUrl) => {
  let result;
  let moreContent = eachUrl.moreContent;
  
  if (moreContent && Object.keys(moreContent).length !== 0) {
    moreContent.forEach(content => {
      if(content.__component === "blog-post-content.you-tube-video"){
        
        //console.log("Video tag:"+eachUrl.title);
        let description = filterString(eachUrl && eachUrl.metaDescription);

        result = 
        `<video:title>${eachUrl && eachUrl.title}</video:title>
        <video:description>${description}</video:description>
        <video:thumbnail_loc>${content && content.image && content.image.url}</video:thumbnail_loc>
        <video:player_loc allow_embed="yes">https://www.youtube.com/watch?v=${content && content.youtubeVideoId}</video:player_loc>  
        <video:content_loc>https://www.youtube.com/watch?v=${content && content.youtubeVideoId}</video:content_loc>
        <video:publication_date>${eachUrl && eachUrl.created_at}</video:publication_date>
        <video:family_friendly>yes</video:family_friendly>`;
      }
    });
    //console.log(result);
    return result;
  }
};

export const getServerSideProps = async (ctx) => {
        //moreContent
    /**
     * 
     *  "id": 10,
        "title": "Why users of first generation planning poker tools struggle?",
        "slug": "why-users-of-first-generation-planning-poker-tools-struggle",
        "date": "2021-09-21",
        "tag": "Planning Poker",
        "published_at": "2021-09-21T23:24:42.074Z",
        "created_at": "2021-09-21T23:17:36.087Z",
        "updated_at": "2021-10-26T23:04:20.123Z",
       
        "writer": {},
        metaDescription,
        moreContent [
          {"__component": "blog-post-content.you-tube-video",
          image.thumbnail
          youtubeVideoId,
          created_at
        }

        ]
     */


    let results = [];
    await getPosts()
      .then((response) => {
      
        let urls = response.data;
        //console.log(JSON.stringify(urls));
        //console.debug("URLS returned");
        let i = 0;
        if (urls && Object.keys(urls).length !== 0) {
            urls.map(eachUrl => {
                //console.log(i++ + JSON.stringify(eachUrl.title));
                let videoTag = getVideoTag(eachUrl);
                results.push({
                    loc: `${siteUrl}/blog/${eachUrl.slug}/`,
                    lastmod: eachUrl.updated_at,
                    changefreq: 'daily',
                    priority: 0.7,
                   'video:video': videoTag? videoTag : null 
                });
            });
        }
      })
      .catch( (error) => {
          console.error(error);
        
          return null;
      });
      //console.log(results.length);
      //console.log(JSON.stringify(results));
      return getServerSideSitemap(ctx, results);  
};
// Default export to prevent next.js errors
//export default () => {}
export default getServerSideProps;