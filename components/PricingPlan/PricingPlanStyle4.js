import React from 'react'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const PricingPlanStyle4 = () => {

    const [pricingTable, setPricingTable] = React.useState()
    React.useEffect(() => {
        const getPricingTable = async () => {
            const response = await axios.get(`${baseApiUrl}/pricing-table`)
            setPricingTable(response.data)
        }
        getPricingTable()
    }, [])

    return (
        <>
            {pricingTable && (
                <div className="pricing-area pb-75">
                    <div className="container">
                        <div className="pricing-tabs">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-12">
                                    <div className="pricing-section-title black-color">
                                        <span className="sub-title">
                                            {pricingTable.subTitle}
                                        </span>

                                        <h2>{pricingTable.title}</h2>

                                        <p>{pricingTable.shortDec}</p>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-12">
                                    <div className="row">
                                        {pricingTable.pricing.slice(0,2).map(infoText => (
                                            <div className="col-lg-6 col-md-6 col-sm-6" key={infoText.id}>
                                                <div className="single-pricing-table with-border">
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

                                                    <a href={infoText.btnUrl} className="default-btn">
                                                        {infoText.btnText}
                                                    </a>

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
                            </div>
                        </div>
                    </div>

                    {/* Shape Images */}
                    <div className="shape7">
                        <img width="221px" height="125px" src="/images/shape/shape6.webp" alt="shape" />
                    </div>
                    <div className="shape8">
                        <img width="78px" height="47px"  src="/images/shape/shape7.webp" alt="shape" />
                    </div>
                </div>
            )}
        </>
    )
}

export default PricingPlanStyle4;