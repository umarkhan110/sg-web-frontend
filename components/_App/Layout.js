/////// NOT USED AT THE MOMENT


/*import React from 'react'
import GoTop from './GoTop'
import Preloader from './Preloader'
import Head from 'next/head';

*/
const Layout = ({ children }) => {

    /*
    // Preloader
    const [loader, setLoader] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => setLoader(false), 2000);
    }, [])

    return(

        <>
            <Head>
                {/* Required meta tags * /}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
 
                <title>Texap - Next.js Strapi App & SaaS Startup Template</title>
            </Head>

            {children}

            {loader ? <Preloader /> : null}
 
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
    */
}

export default Layout;