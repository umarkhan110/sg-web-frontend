import React from 'react';
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const Features = () => {

    const [feature, setFeature] = React.useState()

    React.useEffect(() => {
        const getFeature = async () => {
            const response = await axios.get(`${baseApiUrl}/features`)
            setFeature(response.data)
            
            // console.log(response.data)
        }

        getFeature()
    }, [])

    return (
        <>
            {feature && (
                <div className="features-area pb-75">
                    <div className="container">
                        <div className="row justify-content-center">
                            {feature.lists.slice(0,4).map(list => (
                                <div className="col-xl-3 col-lg-3 col-6 xsw-100 col-md-6" key={list.id}>
                                    <div className="features-box">
                                        <div className={list.iconBgClass}>
                                            <i className={list.icon}></i>
                                        </div>
                                        <h3>{list.title}</h3>
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

export default Features;