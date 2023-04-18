import React from 'react';
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const FeaturesThree = () => {

    const [feature, setFeature] = React.useState()
    React.useEffect(() => {
        const getFeature = async () => {
            const response = await axios.get(`${baseApiUrl}/home-three-top-features`)
            setFeature(response.data)
        }
        getFeature()
    }, [])

    return (
        <>
            {feature && (
                <div className="features-area pt-0 pb-75">
                    <div className="container">
                        <ul className="features-boxes-list">
                            {feature.list.map(list => (
                                <li key={list.id}>
                                    <div className="features-list-box">
                                        <div className={list.iconbgClass}>
                                            <i className={list.icon}></i>
                                        </div>
                                        <h3>{list.title}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}

export default Features;