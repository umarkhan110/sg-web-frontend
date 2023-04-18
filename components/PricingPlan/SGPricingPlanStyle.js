import React from 'react';
import ReactMarkdown from 'react-markdown';
import { preserveUrlParam } from '../Banner/CTAButton';

const SGPricingPlanStyle = (props) => {
  const { content } = props;
  return (
    <>
      {content && (
        <div className="pricing-area grey-color ptb-50">
          <div className="container" style={{ padding: '0 24px' }}>
            <div className="pricing-tabs">
              <div className="row align-items-center">
                {/*Text to left */}
                <div className="col-lg-5 col-md-12">
                  <div className="pricing-section-title">
                    <span className="sub-title">
                      {content.subTitle}
                    </span>

                    <h2>{content.title}</h2>
                    <ReactMarkdown key={content.id}>
                      {content.description}
                    </ReactMarkdown>

                    <div style={{ textAlign: 'left', marginLeft: 'none', maxWidth: 'none' }} className="banner-content">
                      <div className="btn-box">
                        <a href={preserveUrlParam(content.btnUrl)} className="link-white-btn"><p>{content.btnText}</p></a>
                      </div>
                    </div>
                  </div>
                </div>

                {/*Pricing Card */}
                <div className="col-lg-7 col-md-12">
                  <div className="row" style={{ justifyContent: 'center' }} >
                    {content.pricing.slice(0, 1).map(infoText => (
                      <div key={content.id + "-" + infoText.id} style={{ justifySelf: 'center', maxWidth: '435px' }} className="col-lg-11 col-md-11 col-sm-9 col-10" key={infoText.id}>
                        <div className="single-pricing-table">
                          <div style={{ marginBottom: 'none' }} className="title">
                            <h3>{infoText.title}</h3>
                            <ReactMarkdown key={infoText.id}>
                              {infoText.description}
                            </ReactMarkdown>
                          </div>
                          <div style={{ textAlign: 'left', marginLeft: 'none' }} className="banner-content">
                            <div className="btn-box" >
                              <a href={preserveUrlParam(infoText.btnUrl)} className="link-btn">
                                {infoText.btnText}
                              </a>
                            </div>
                          </div>

                          <span className="popular">
                            {infoText.tag}
                          </span>
                          {/* PRICE per month 
                            <div className="price">
                                {infoText.price} <span>{infoText.duration}</span>
                            </div>
                            */}


                          <table style={{ width: '-webkit-fill-available' }}>
                            <tbody>

                              <tr key="header" style={{ marginTop: '25px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} className="features-list">
                                <th >
                                  Team Size
                                </th>
                                <th>
                                  Monthly / user
                                  <p style={{ fontWeight: 'none !important', color: '#303030', fontSize: '10px' }}>(avarage cost)</p>
                                </th>
                                <th>
                                  App cost
                                </th>
                              </tr>
                              {infoText.list.slice(0, 4).map(listInfo => (
                                <tr key={infoText.id + "-" + listInfo.id} style={{ marginTop: '5px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} className="features-list">
                                  <td key={"colum1" + listInfo.id}>
                                    {listInfo.text}
                                  </td>
                                  <td key={"colum2" + listInfo.id}>
                                    {listInfo.text2}
                                  </td>
                                  <td key={"colum3" + listInfo.id}>
                                    {listInfo.text3}<p style={{ color: '#303030', fontSize: '10px' }}>{listInfo.quantity}</p>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>

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

        </div>
      )}
    </>
  )
}

export default SGPricingPlanStyle;