import React from 'react';
import SGNavbarStyle, {DARK_MODE,LIGHT_MODE, DARK_BTN_MODE} from '@/components/Navbar/SGNavbarStyle';
import SGPageBannerStyle1 from '@/components/Common/SGPageBannerStyle1';
import SGFooterStyle from '@/components/Footer/SGFooterStyle';
import BlogDetailsContent from '@/components/Blog/BlogDetailsContent';
import baseApiUrl from '@/utils/baseApiUrl';
import Seo from "../../components/_App/Seo"; 
 
const BlogDetails = ({ data, 
  ctaInfo, logo, navbarUrl, solutions }) => {
    const { title,metaDescription,image,slug, moreContent } = data[0];

    const getVideoSeo = (moreContent) => {
        if(!moreContent || moreContent.length == 0)
            return null;

        //Array of matches
        const videoContent = moreContent.filter( eachContent => ( 
            eachContent.__component === 'blog-post-content.you-tube-video'
            ));
        
        if(!videoContent || videoContent.length === 0)
            return null;

        return  {
            url: "https://www.youtube.com/watch?v="+videoContent[0].youtubeVideoId,
            image: image.url,
            type:'video/mp4',
            width: 854,
            height: 480,
        }
    }

    let pageSeo = {
        metaTitle: title,
        metaDescription: metaDescription,
        shareImage: [image], //Url retrieved when writing the header see SEO.js
        article: true,
        slug: "/blog/"+slug,    
    };

    if(!data[0])
        return (null);

    const videoSeo = getVideoSeo(moreContent);
    if(videoSeo)
        pageSeo = {...pageSeo,video:{...videoSeo}};
    
    return (
        <>
            <Seo seo={pageSeo} />
            <SGNavbarStyle  ctaInfo={ctaInfo} logo={logo} menuCategory={navbarUrl} stickyMode={DARK_MODE} nonStickyMode={LIGHT_MODE} buttonMode={DARK_BTN_MODE} />
            { data[0] && ( 
            <SGPageBannerStyle1 
                pageTitle={data[0].title}
                homePageUrl="/blog"
                homePageText="Blog"
                activePageText={data[0].tag}
            />
            )}
            {data.map(d => (
                <BlogDetailsContent solutions={solutions} key={d.id} {...d} />
            ))}
            <SGFooterStyle seo={pageSeo} />
        </>
    )
}

export async function getServerSideProps(context) {
    let {id} = context.query;
    const res = await fetch(`${baseApiUrl}/blog-posts?slug=${id}`)
    const data = await res.json()

    //Navbar
    const navbarUrlRes = await fetch(`${baseApiUrl}/menu-dropdowns?slug=sg-landing-page&_sort=order:desc`);
    const navbarUrlData = await navbarUrlRes.json();

    const logoRes = await fetch(`${baseApiUrl}/site-logo`);
    const logoData = await logoRes.json();

    const ctaRes = await fetch(`${baseApiUrl}/content-data?slug=nav-try-button`);
    const ctaData = await ctaRes.json();

    //Two solutions
    const twoSolutionsRes = await fetch(`${baseApiUrl}/content-data?slug=two-solutions`);
    const twoSolutionsData = await twoSolutionsRes.json();


    return {
        props: { data,
          solutions: Array.isArray(twoSolutionsData) ? twoSolutionsData[0] : twoSolutionsData,
          navbarUrl: navbarUrlData,
          logo: logoData,
          ctaInfo:  Array.isArray( ctaData) ? ctaData[0] : ctaData }, // will be passed to the page component as props
    }
}

export default BlogDetails;