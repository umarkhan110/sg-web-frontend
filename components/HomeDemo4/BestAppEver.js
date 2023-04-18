import React from 'react';
import Link from 'next/link';
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const BestAppEver = () => {

    const [bestApp, setBestApp] = React.useState()
    React.useEffect(() => {
        const getBestApp = async () => {
            const response = await axios.get(`${baseApiUrl}/best-app-ever-style-2`)
            setBestApp(response.data)
        }
        getBestApp()
    }, [])

    return (
        <>
            {bestApp && (
                <div className="overview-area">
                    <div className="container-fluid">
                        <div className="row m-0">
                            <div className="col-xl-6 col-lg-12 col-md-12 p-0">
                                <div className="overview-content">
                                    <h2>{bestApp.title}</h2>
                                    <p>{bestApp.longText}</p>

                                    <ul className="features-list">
                                        {bestApp.features.map(featureList => (
                                            <li key={featureList.id}>
                                                <div className={featureList.iconBgClass}>
                                                    <i className={featureList.icon}></i>
                                                </div>
                                                <h3>{featureList.title}</h3>
                                                <p>{featureList.shortDec}</p>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="btn-box">
                                        <Link href={bestApp.btnOneUrl}>
                                            <a className="default-btn">{bestApp.btnOneText}</a>
                                        </Link>
                                        <Link href={bestApp.btnTwoUrl}>
                                            <a className="link-btn">{bestApp.btnTwoText}</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-12 col-md-12 p-0">
                                <div className="overview-image bg2">
                                    <img 
                                        src={bestApp.images.url} 
                                        alt={bestApp.images.alternativeText} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default BestAppEver;