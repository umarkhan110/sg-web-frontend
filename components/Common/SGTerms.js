import React from 'react'
import ReactMarkdown from 'react-markdown'
 
const SGTerms = (props) => {
    const {content} = props;
  
    return (
        <>
            {content && (
                <>
                    <div className="terms-conditions-area ptb-100">
                        <div className="container">
                            <div className="terms-conditions-content">
                                <ReactMarkdown>
                                    {content.longDec}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default SGTerms;