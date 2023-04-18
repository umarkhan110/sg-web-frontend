import {FacebookShareButton, FacebookIcon,
  LinkedinShareButton, LinkedinIcon,
  TwitterShareButton,  TwitterIcon,
  FacebookMessengerShareButton, FacebookMessengerIcon,
  EmailShareButton, EmailIcon,
} from 'react-share';

//import { GlobalContext } from "../../pages/_app"; 
//import baseApiUrl from '@/utils/baseApiUrl';

const ShareOnSocial = (props) => {
  const { options } = props;
  if(!options)
    return (null);
  else
  {
    return (
      <>
        <div style={{paddingRight:'8px'}}>
            <FacebookShareButton
                url={options.url}
                quote={options.title}>    
                <FacebookIcon size={32} round />
            </FacebookShareButton>
        </div>
        <div style={{paddingRight:'8px'}}>
            <TwitterShareButton
                url={options.url}
                original_referer={options.url}
                title={options.title}
                via={options.via}
                //related={shareOptions.related}
            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>
        </div>
        <div style={{paddingRight:'8px'}}>
            <LinkedinShareButton 
                url={options.url}
                title={options.title}>
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
        </div>
        <div style={{paddingRight:'8px'}}>
            <FacebookMessengerShareButton
                url={options.url}
                type="web_url"
                title={options.title}
                >
                <FacebookMessengerIcon size={32} round />
            </FacebookMessengerShareButton>
        </div>
        <div style={{paddingRight:'8px'}}>
          <EmailShareButton
              url={options.url}
              subject={options.title}
              body= {options.text}
              >
              <EmailIcon size={32} round />
          </EmailShareButton>
        </div>      
        </>     
    );
  }

}

export default ShareOnSocial;