import React from 'react';
import Link from 'next/link';
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'
import ReactMarkdown from 'react-markdown'

const KeyFeatures = () => {

    const [feature, setFeature] = React.useState()
    React.useEffect(() => {
        const getFeature = async () => {
            const response = await axios.get(`${baseApiUrl}/home-two-key-features`)
            setFeature(response.data)
        }
        getFeature()
    }, [])

    return (
        <>
            {feature && (
                <div className="features-area pb-75">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="features-content">
                                    <span className="sub-title">
                                        {feature.subTitle}
                                    </span>

                                    <h2>
                                        {feature.title}
                                    </h2>

                                    <ReactMarkdown>
                                        {feature.longDec}
                                    </ReactMarkdown>

                                    <div className="btn-box">
                                        <Link href={feature.btnOneUrl}>
                                            <a className="default-btn">{feature.btnOneText}</a>
                                        </Link>
                                        <Link href={feature.btnTwoUrl}>
                                            <a className="link-btn">{feature.btnTwoText}</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-6 col-md-12">
                                <div className="list-of-features">
                                    <div className="row justify-content-center">
                                        {feature.features.slice(0,4).map(list => (
                                            <div className="col-lg-6 col-6 col-md-6 xsw-100" key={list.id}>
                                                <div className="features-item with-border">
                                                    <div className={list.iconBgClass}>
                                                        <i className={list.icon}></i>
                                                    </div>
                                                    <h3>{list.title}</h3>
                                                    <p>{list.shortDec}</p>
                                                </div>
                                            </div> 
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default KeyFeatures;