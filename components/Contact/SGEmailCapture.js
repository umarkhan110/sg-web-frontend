import React, { useState } from 'react';
import axios from 'axios';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

import baseUrl from '@/utils/baseUrl';
//import baseApiUrl from '@/utils/baseApiUrl';
import { useContentData } from '@/utils/useContentData';
import ReactMarkdown from 'react-markdown';

/*
Thank you for requesting the Marketing Made Simple Book PDF. Check your inbox — 
the PDF download will be headed your way shortly.
MARKETINGMADESIMPLEBOOK.COM
*/
const alertContent = () => {
    MySwal.fire({
        title: 'You are signed up!',
        text: 'Once the guide is ready, we will send you an email!',
        icon: 'success',
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    'fields[email]': '',
    'fields[first_name]': '',
    'fields[eu_consent]': 'denied',
    'fields[eu_consent_message]': 'I understand and agree to Smart Guess privacy policy'
};


/**
 * 
 * Access to XMLHttpRequest at 'https://www.getdrip.com/forms/321229217/submissions' from origin 'http://localhost:3000' 
 * has been blocked by CORS policy: Response to preflight request doesn't pass access control check:
 *  No 'Access-Control-Allow-Origin' header is present on the requested resource.
SGontactForm.js?884e:76 Error: Network Error
    at createError (createError.js?770c:16:1)
    at XMLHttpRequest.handleError (xhr.js?1a5c:99:1)
 * @returns 

    Solved with submissions.js middleware
 * 
 */

const SGEmailCapture = (props) => {
    const {url} = props;
    const { content, isLoading, isError } = useContentData(url);
    const [contact, setContact] = useState(INITIAL_STATE);
    
    const handleChange = ( e ) => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const url = `${baseUrl}/api/submissions/`
            const response = await axios.post(url,contact);

            console.log(response);
            setContact(INITIAL_STATE);
            alertContent(response.data);
        } catch (error) {
            console.log(error)
        }
    };

    const renderContent = () => {
        return (
            <div className="col-lg-6 col-md-12">
                <h2 data-drip-attribute="headline">{content.title}</h2>
                <div style={{textAlign:'left'}}>
                    <ReactMarkdown>
                        {content.description}
                    </ReactMarkdown>
                </div>
            </div>
        );
    }

    const renderForm = () => {
        return(
                 <div  className="col-lg-6 col-md-12  " >  
                    <form onSubmit={handleSubmit}
                        method="post"
                        data-drip-embedded-form="321229217">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group">
                                    <input 
                                        tabIndex="100"
                                        type="text" 
                                        name="fields[first_name]" 
                                        id="drip-first-name"
                                        placeholder="Your name" 
                                        className="form-control" 
                                        value={contact['fields[first_name]']}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group">
                                    <input 
                                        tabIndex="101"
                                        type="email" 
                                        name="fields[email]"
                                        id="drip-email" 
                                        placeholder="Your business email" 
                                        className="form-control" 
                                        value={contact['fields[email]']}
                                        onChange={handleChange} 
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <input 
                                    type="hidden" 
                                    name="fields[eu_consent]"
                                    id="drip-eu-consent-denied"
                                    value="denied" />
                                <input 
                                    onChange={handleChange} 
                                    type="checkbox" 
                                    name="fields[eu_consent]" 
                                    id="drip-eu-consent"
                                    value="granted"
                                  /*  required={true} */
                                    />
                                
                                <label style={{paddingLeft:'10px'}} htmlFor="drip-eu-consent">I understand and agree to <a href="https://smartguess.is/policy/privacy-policy/">Smart Guess privacy policy</a></label>
                                <input 
                                    type="hidden"
                                    name="fields[eu_consent_message]" 
                                    value="I understand and agree to Smart Guess privacy policy"
                                    />
                            </div>

             
                            <div style={{paddingTop:'20px'}} className="col-lg-12 col-md-12 col-sm-12">
                                <button 
                                    tabIndex="102"
                                    type="submit" className="default-btn">
                                    Get my free guide
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            
        );

    }

        /*
        Add the data-drip-embedded-form="321229217" attribute to your <form> tag.
        Set the form action attribute to https://www.getdrip.com/forms/321229217/submissions.
        Set the form method attribute to post.
        Set the name of the email input to fields[email].
        Add data-drip-attribute="headline" to your headline tag.
        Add data-drip-attribute="description" to your description tag.
        */

    return (
        <>
            {content && (
                <div className="contact-area ptb-50">
                    <div className="container">
                        <div className="row m-0 align-items-center"  style={{flexWrap:'wrap'}} >
                        {renderContent()}    
                        {renderForm()}
                        </div>
                    </div>


                </div>
            )}
        </>
    )
}
export default SGEmailCapture;