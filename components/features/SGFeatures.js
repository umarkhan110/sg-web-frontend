import React from 'react';
import Link from 'next/link';

import { useContentData } from '@/utils/useContentData';

const SGFeatures = (props) => {
    const { content, isLoading, isError } = useContentData(props.url);

    return (
        <>
            {!isError && content && (
                <div className="features-area ptb-50">
                    <div className="container">
                        <div className="m-0 row justify-content-center">
                            {content.contentList.map(list => (
                                <div className="col-xl-3 col-lg-3 col-6 col-md-6 xsw-100" key={list.id}>
                                    <div className="features-box left">
                                        <div className={list.iconBackgroundClass}>
                                            <i className={list.icon}></i>
                                        </div>
                                        <h3>{list.title}</h3>
                                        <p>{list.description}
                                        { list.linkText && list.linkUrl &&  (
                                            <Link href={list.linkUrl}>
                                            <a target="_blank" >
                                            {list.linkText}
                                            </a>
                                            </Link>
                                        )}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SGFeatures;