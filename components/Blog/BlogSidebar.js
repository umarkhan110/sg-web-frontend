import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import baseApiUrl from '@/utils/baseApiUrl';
import SGImage from '../Elements/SGImage';
import { preserveUrlParam } from '../Banner/CTAButton';

const BlogSidebar = (props) => {

    // Blog Posts
    const [posts, setPosts] = React.useState(props.posts)
    React.useEffect(() => {
        const getPosts = async () => {
            const response = await axios.get(`${baseApiUrl}/blog-posts?_hidePost=false&_sort=featureUpFrontOrder:ASC,id:DESC`)
            setPosts(response.data)
        }
        //In some cases the sidebar is used where posts are not available in memeory
        if(!posts)
            getPosts()
    }, [])

  //  */
    return (
        <>    
            <div className="widget-area">
                {/*          
                <div className="widget widget_search">
                    <form className="search-form">
                        <label>
                            <input type="search" className="search-field" placeholder="Search..." />
                        </label>
                        <button type="submit">
                            <i className="ri-search-2-line"></i>
                        </button>
                    </form>
                </div>
                */}


                <div className="widget widget_pakap_posts_thumb">
                    <h3 className="widget-title">Recent Posts</h3>

                    {posts && posts.slice(0,7).map(post => (
                        <article className="item" key={post.id}>
                            <Link href={preserveUrlParam(`/blog/${post.slug}`)}>
                                <a className="thumb">  
                                <span className="fullimage cover" >
                                    <SGImage 
                                      {...post.image}
                                      objectFit="cover"
                                      overFlow="hidden"
                                      setHeight={70}
                                      setWidth={100}
                                      gravity={post.gravity}
                                    />
                                </span>
                                </a>
                            </Link>
                            <div className="info">
                                <h4 className="title usmall">
                                    <Link href={preserveUrlParam(`/blog/${post.slug}`)}>
                                        <a>{post.title}</a>
                                    </Link>
                                </h4>
                                <span className="date">
                                    <i className="ri-calendar-2-fill"></i> {post.date}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BlogSidebar;