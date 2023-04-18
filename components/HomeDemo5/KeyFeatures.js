import React from 'react';
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const KeyFeatures = () => {

    const [feature, setFeature] = React.useState()
    React.useEffect(() => {
        const getFeature = async () => {
            const response = await axios.get(`${baseApiUrl}/key-features`)
            setFeature(response.data)
        }
        getFeature()
    }, [])

    return (
        <>
            {feature && (
                <div className="features-area pb-75">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {feature.subTitle}
                            </span>
                            <h2>{feature.title}</h2>
                        </div>
                        <div className="row justify-content-center">
                            {feature.lists.slice(0,6).map(list => (
                                <div className="col-lg-4 col-6 col-md-6 xsw-100" key={list.id}>
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
            )}
        </>
    )
}

export default KeyFeatures;