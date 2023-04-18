import React from 'react';

import BlogPostCard from './BlogPostCard';
import { useContentData } from '@/utils/useContentData';
import { useContentDataset } from '@/utils/useContentDataset';
import ContentSection from './ContentSection';

const BlogPostSection = (props) => {
    const { url =  "content-data?slug=blog-section"  } = props;
    const { content, isLoading, isError } = useContentData(url);
    
    const { contentList } = useContentDataset(`blog-posts?_hidePost=false&featureUpFront=true&_sort=featureUpFrontOrder:ASC,id:DESC`);
    const posts = contentList;
    
    return (
        <>
        {!isLoading && content && posts && (
            <div className="blog-area pt-50 pb-25">
                <div className="container" style={{padding: '0 24px'}}>
                    {content && (
                        <ContentSection descriptionBold={true} content={content} />
                    )}
                    <div className="row justify-content-center">
                        {
                        posts && posts.slice(0,3).map(eachPost => (
                            <BlogPostCard key={eachPost.id} post={eachPost}/>
                        ))}
                    </div>
                </div>
                <div id="pricing"/>
            </div>
             )}
        </>
    )
}

export default BlogPostSection;