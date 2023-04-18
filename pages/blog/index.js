import React,{useState, useContext} from 'react';
import SGNavbarStyle,{DARK_MODE,LIGHT_MODE} from '@/components/Navbar/SGNavbarStyle';
import SGPageBannerStyle1 from '@/components/Common/SGPageBannerStyle1';
import SGFooterStyle from '@/components/Footer/SGFooterStyle';
import axios from 'axios';
import baseApiUrl from '@/utils/baseApiUrl';
import BlogPostCard from '@/components/Blog/BlogPostCard';

import Seo from '@/components/_App/Seo';
import { GlobalContext } from '../../pages/_app';

const initialStart = 0;
const limit = 15;

 
const BlogGrid = ({pageTitle,initialPosts,
  logo,ctaInfo,navbarUrl
}) => {
    const [start, setStart] = useState(initialStart);
    const [posts,setPosts] = useState(initialPosts);
    
    let { defaultSeo } = useContext(GlobalContext);
    let seo = {...defaultSeo}
    seo.video = null;
    seo.metaTitle = defaultSeo.metaTitle + " | Blog"; 
        
    const [postCount, setPostCount] = React.useState();
    
    // Retrieve Initial Blog Posts Count
    React.useEffect(() => {
        const getPostCount = async () => {
            const response = await axios.get(`${baseApiUrl}/blog-posts/count?_hidePost=false`);
            //console.log("Post count: " + JSON.stringify( response.data ) );
            setPostCount(response.data);
        }
        getPostCount();
    }, []);

    //Handle reloading posts when user moves between pages
    React.useEffect(() => {
        const getPosts = async () => {
            const postsRes = await fetch(`${baseApiUrl}/blog-posts?_hidePost=false&_sort=featureUpFrontOrder:ASC,id:desc&_limit=${limit}&_start=${start}`);
            const posts = await postsRes.json();
            setPosts(posts);
        }
        getPosts();
    }, [start]);

    const nextPage = () => {
        if(start+limit < postCount)  
            setStart(start + limit);
    }

    const prevPage = () => {
        if(start-limit >= 0)
            setStart(start - limit);
    }

    const renderPages = () => {
        const nrPages = postCount / limit;

        let result = [];
        for(let i = 0; i < nrPages ; i++){
            if( i === start)
                result[i] =  <a key={"link"+i} onClick={() => setStart( (i)*limit) } className="page-numbers current">{i+1}</a>
            else
                result[i] =  <a key={"link"+i} onClick={() => setStart( (i)*limit) } className="page-numbers ">{i+1}</a>
        }
        return result;    
    }

    return (
        <>
            <Seo seo={seo} slug="/blog" /> 
            <SGNavbarStyle ctaInfo={ctaInfo} logo={logo} menuCategory={navbarUrl} stickyMode={DARK_MODE} nonStickyMode={LIGHT_MODE} />
            {pageTitle && (
                <SGPageBannerStyle1 
                    pageTitle={pageTitle.title}
                    homePageUrl={pageTitle.homeUrl}
                    homePageText={pageTitle.homeText}
                    activePageText={pageTitle.activeText}
                />
            )}
             
            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        {posts && posts.map(post => (
                            <BlogPostCard key={"card"+post.id} post={post}></BlogPostCard>
                        ))}
                        
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <div className="nav-links">
                                    { renderPages()}
                                    <div style={{width: '100%'}}></div>
                                    <a onClick={() => prevPage()} className="next page-numbers" title="Previous Page">
                                        <i className="ri-arrow-left-line" />
                                    </a>
                                    <a onClick={() => nextPage()} className="next page-numbers" title="Next Page">
                                        <i  className="ri-arrow-right-line" />
                                    </a>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <SGFooterStyle />
        </>
    )
}

export async function getServerSideProps(context) {
    const titleRes = await fetch(`${baseApiUrl}/page-titles?slug=blog`);
    const pageTitle = await titleRes.json();

    const postsRes = await fetch(`${baseApiUrl}/blog-posts?_hidePost=false&_sort=featureUpFrontOrder:ASC,id:desc&_limit=${limit}&_start=${initialStart}`);
    const posts = await postsRes.json();

    //Navbar
    const navbarUrlRes = await fetch(`${baseApiUrl}/menu-dropdowns?slug=sg-landing-page&_sort=order:desc`);
    const navbarUrlData = await navbarUrlRes.json();

    const logoRes = await fetch(`${baseApiUrl}/site-logo`);
    const logoData = await logoRes.json();

    const ctaRes = await fetch(`${baseApiUrl}/content-data?slug=nav-try-button`);
    const ctaData = await ctaRes.json();

    return {
        props: { 
          initialPosts:posts, 
          pageTitle: pageTitle[0],
          navbarUrl: navbarUrlData,
          logo: logoData,
          ctaInfo:  Array.isArray( ctaData) ? ctaData[0] : ctaData, }, // will be passed to the page component as props
    }
}

export default BlogGrid;