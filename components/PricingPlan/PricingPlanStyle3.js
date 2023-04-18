import React from 'react';
import Link from 'next/link'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const PricingPlanStyle3 = () => {

    const [pricingTable, setPricingTable] = React.useState()
    React.useEffect(() => {
        const getPricingTable = async () => {
            const response = await axios.get(`${baseApiUrl}/pricingtable-2`)
            setPricingTable(response.data)
        }
        getPricingTable()
    }, [])

    return (
        <>
            {pricingTable && (
                <div className="pricing-area bg-black-color pt-100 pb-75">
                    <div className="container">
                        <div className="section-title color-white">
                            <span className="sub-title">
                                {pricingTable.subTitle}
                            </span>
                            <h2>
                            {pricingTable.title}
                            </h2>
                        </div>

                        <div className="row justify-content-center">
                            {pricingTable.pricingCard.map(infoText => (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={infoText.id}>
                                    <div className="single-pricing-box">
                                        <div className="title">
                                            <h3>{infoText.title}</h3>
                                            <p>{infoText.subTitle}</p>
                                        </div>

                                        <span className="popular">
                                            {infoText.tag}
                                        </span>

                                        <div className="price">
                                            {infoText.price} <span>{infoText.duration}</span>
                                        </div>

                                        <Link href={infoText.btnUrl}>
                                            <a className="default-btn">{infoText.btnText}</a>
                                        </Link>

                                        <ul className="features-list">
                                            {infoText.list.map(listInfo => (
                                                <li key={listInfo.id}>
                                                    <i className={listInfo.icon}></i> 
                                                    {listInfo.text}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Shape Images */}
                    <div className="shape7">
                        <img width="221px" height="125px" src="/images/shape/shape6.webp" alt="shape" />
                    </div>
                    <div className="shape8">
                        <img width="78px" height="47px" src="/images/shape/shape7.webp" alt="shape" />
                    </div>
                </div>
            )}
        </>
    )
}

export default PricingPlanStyle3;