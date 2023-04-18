import React from 'react';
import Link from 'next/link';
import SGImage from '../Elements/SGImage';
import { preserveUrlParam } from '../Banner/CTAButton';

const BlogPostCard = (props) => {
  const { id, slug, image, tag, date, title } = props.post;

  //console.log(JSON.stringify(post));

  return (
  <div key={id}  className="col-lg-4 col-md-6" >
    <div className="single-blog-post">
      {  image && ( 
        <div key={id} className="image">
            <Link href={preserveUrlParam(`/blog/${slug}`)}>
                <a aria-label={"Read about "+title}  className="d-block">                   
                <SGImage 
                    setWidth={450}
                    setHeight={260}
                    overFlow={"hidden"}
                    objectFit={"cover"}
                    gravity={props.post.gravity}
                    {...image}
                    lazyload={true} 
                    responsive={true}
                    placeholder={true}           
                                            />
                </a>
            </Link>
            { tag &&(
            <div className="tag">
                {tag}
            </div>
            )}
        </div>
        ) }

        <div className="content">
            <ul className="meta">
                <li>
                    <i className="ri-time-line"></i> {date}
                </li>
            </ul>
            <h3 >
                <Link href={preserveUrlParam(`/blog/${slug}`)}>
                    <a>{title}</a>
                </Link>
            </h3>
        </div>
    </div>
  </div>
  );
}
export default BlogPostCard;