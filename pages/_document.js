import Document, { Html, Head, Main, NextScript } from 'next/document';
//import Cookies from 'universal-cookie';

class MyDocument extends Document {
    /*
    constructor(){
        super();
        this.cookies = new Cookies();
        let YouTubeCookie = this.cookies.get('LAST_RESULT_ENTRY_KEY');
        this.cookies.set("LAST_RESULT_ENTRY_KEY",'LAST_RESULT_ENTRY_KEY' , {secure: true, sameSite: 'none', domain:".youtube.com", path:'/'});
        this.cookies.set("remote_sid",'remote_sid' , {secure: true, sameSite: 'none', domain:".youtube.com", path:'/'});
        this.cookies.set("remote_sid",'remote_sid' , {secure: true, sameSite: 'none', domain:".youtube.com", path:'/'});
        
        this.cookies.set("key2", "value2", {secure: false, sameSite: 'none', domain:".youtube.com", path:'/'});
    }
    //*/

    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Remix icons  styles */}
                <link 
                    href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" 
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;