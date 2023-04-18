/**
 *  https://articles.wesionary.team/how-to-implement-sitemap-in-next-js-using-next-sitemap-77ca7bb56544
 * 
 */
const baseApiUrl = 'https://smartguess-web-backend.herokuapp.com'; 
//import baseApiUrl from '@/utils/baseApiUrl';
//const baseApiUrl  = require('./utils/baseApiUrl');

const siteUrl = 'https://smartguess.is';
//const siteUrl = require('./utils/siteUrl'); 
//import siteUrl from '@/utils/siteUrl';

const axios = require('axios');   //import axios from 'axios';

const url="intro-videos?slug=xmlsitemap" ;
const videoUrl = `${baseApiUrl}/${url}`;

  const getVideoInfo = async () => {
      let result;      
      console.info("Retrieve video info from:" + videoUrl);
      await axios.get(videoUrl)
        .then( response => {
          console.debug("Found video: "+ response.data[0].title);
          result = response.data[0];
        })
        .catch( (error) => {
          console.error(error);
          return null;
      });
      return result;
  }

const getVideoTag = (videoInfo) => {
  let result;
  if (videoInfo && Object.keys(videoInfo).length !== 0) {
    //console.debug("Mapping videoInfo");
    result = 
      `<video:title>${videoInfo.title}</video:title>
      <video:description>${videoInfo.metaDescription}</video:description>
      <video:thumbnail_loc>${videoInfo.image.url}</video:thumbnail_loc>
      <video:player_loc allow_embed="yes">https://www.youtube.com/watch?v=${videoInfo.youtubeVideoId}</video:player_loc>  
      <video:content_loc>https://www.youtube.com/watch?v=${videoInfo.youtubeVideoId}</video:content_loc>
      <video:publication_date>${videoInfo.created_at}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>`;

    //console.log(result);
    return result;
  }
};

module.exports = {
  siteUrl: siteUrl,   //siteUrl: 'https://smartguess.is',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/privacy/*'],  //Not sure about htese changes?
  //exclude: ['/privacy/*','/server-sitemap.xml'],
  /*
  //For other languages
  alternateRefs: [
    {
      href: 'https://es.example.com',
      hreflang: 'es',
    },
    {
      href: 'https://fr.example.com',
      hreflang: 'fr',
    },
  ],
  */
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/solutions/planning-poker'),
    await config.transform(config, '/solutions/silent-estimation'),
    await config.transform(config, '/jira-planning-poker/'),
    await config.transform(config, '/about/bjornbrynjar/'),
    await config.transform(config, '/blog/'),
    await config.transform(config, '/pricing/'),
  ],
  
  // Default transformation function
  transform: async (config, path) => {
    let videoTag;
    console.log("Processing:" + path);
    if(path==='/' ){
      let video = await getVideoInfo();
      console.debug("Video title: " + video.title);
      videoTag = getVideoTag(video);
    }
    
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      'video:video': videoTag? videoTag : null 
      //alternateRefs: config.alternateRefs ?? [],
    }
    
  },
  //*/
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      /*
      {
        userAgent: 'test-bot',
        allow: ['/path', '/path-2'],
      },
      {
        userAgent: 'black-listed-bot',
        disallow: ['/sub-path-1', '/path-2'],
      },
      */
    ],
    additionalSitemaps: [
      siteUrl+ '/server-sitemap.xml', //'https://smartguess.is/server-sitemap.xml', // File triavign dynamicaly pages
    ],
  },
}
