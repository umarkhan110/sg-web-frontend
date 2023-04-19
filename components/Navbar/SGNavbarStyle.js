// Navbar Component Style File Path: public/css/pages-and-components-css/navbar.scss

//import { CldImage } from 'next-cloudinary';
//import Image from 'next/image';

import React from "react";
import Link from '@/utils/ActiveLink';

import SGImage from '../Elements/SGImage';
import { preserveUrlParam } from '../Banner/CTAButton';
import NextSGImage from "../Elements/NextImage";

export const DARK_MODE = "DARK";
export const LIGHT_MODE = "LIGHT";
export const COLOR_MODE = "COLOR";

export const LIGHT_BTN_MODE = "light-btn";
export const DARK_BTN_MODE = "default-btn";

export const LIGHT_LINK_MODE = 'light-link';
export const DARK_LINK_MODE = 'dark-link';
export const COLOR_LINK_MODE = 'color-link';

const SGNavbarStyle = (props) => {
  const { 
          stickyMode = LIGHT_MODE,
          nonStickyMode = DARK_MODE,
          buttonMode,
          menuCategory, logo, ctaInfo,
          } = props;

    
    // Menu Open or Closed
    const [menuClosed, setMenu] = React.useState(true)
    const toggleNavbar = () => {
        setMenu(!menuClosed)
    }

    //Implement Stickyness
    const [sticky,setSticky] = React.useState(false);
    React.useEffect(() => {
        const eventListener =  () => {
            if (window.scrollY > 170) {
                if(!sticky){
                  setSticky(true);
                }
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
                if( sticky ){
                    setSticky(false);        
                }
            }
        };

        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", eventListener, {passive: true});  
        
        return function cleanup() {
            document.removeEventListener("scroll",eventListener);
        }
        //window.scrollTo(0, 0); 
    }) 
 
    const classOne = menuClosed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menuClosed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    
    const renderMenuContent = (menuContent)  => {
        //console.log(JSON.stringify(menuContent));
         
        if(menuContent.menuItems && menuContent.menuItems.length > 0 ){
            //console.log("MenuItems");
           return (
                //Render Drop down menues - with multile menu rows
                <li key={menuContent.slug+"-"+menuContent.id} className="nav-item">
                    <Link href="#" activeClassName="active">
                        {menuContent.openNewTab? (
                            <a target="_blank" onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                            {menuContent.menuTitle}
                            </a>
                            )
                            :
                            (
                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                            {menuContent.menuTitle}
                            </a>
                        )}

                    </Link>
                    {/* Render each row in the menu  +*/}
                    <ul className="dropdown-menu">
                        { menuContent.menuItems.map(menuItem => (
                        <li key={menuContent.id+"-"+menuItem.id}
                         className="nav-item">
                            <Link href={menuItem.menuUrl} activeClassName="active">
                            {menuItem.openNewTab? 
                                <a  target="_blank"  className="nav-link">{menuItem.menuTitle}</a>
                            :
                                <a onClick={toggleNavbar}   className="nav-link">{menuItem.menuTitle}</a>
                            }
                            </Link>
                        </li>
                        ))}
                    </ul>
                </li>
            );
        }
        //Render links that don't have categories
        else if(menuContent.menuTitle && menuContent.menuUrl){
            //console.log("MenuItem: "+menuContent.menuTitle + " "+menuContent.menuUrl);
            return ( 
                <li key={menuContent.slug+"-"+menuContent.id} className="nav-item">
                    
                    <Link href= {menuContent.menuUrl} activeClassName="active">
                        <a className="nav-link">
                            {menuContent.menuTitle}
                        </a>
                    </Link>
                </li>
                );
        }
        return (null);
    }

    const getImage = ()  => {
        //Excepttion to fix open menu not working in light mode
        if(!menuClosed){
            return {
                large: logo.blackLogo,
                small: logo.smallBlackLogo
            };
        }

        switch (sticky?stickyMode:nonStickyMode){
            case(DARK_MODE):{
                return {
                    large: logo.blackLogo,
                    small: logo.smallBlackLogo
                };
            }
            case(LIGHT_MODE):{
                return {
                    large: logo.whiteLogo,
                    small: logo.smallWhiteLogo
                };
            }
            case(COLOR_MODE):{
                return {
                    large : logo.colorLogo,
                    small : logo.smallColorLogo
                }
            } 
        }
    }


    const getLinkButtonClass = () => {
        switch (sticky?stickyMode:nonStickyMode){
            case(DARK_MODE):
                return DARK_LINK_MODE; ///*White background dark text */

            case(LIGHT_MODE):
                if(!menuClosed){  //Excepttion to fix open menu not working in light mode
                    return DARK_LINK_MODE;
                }
                else{
                    return LIGHT_LINK_MODE;
                }
            case(COLOR_MODE):
                return COLOR_LINK_MODE;
             
        }
        /*
        if(buttonMode ){
            if( buttonMode === LIGHT_BTN_MODE){
                return LIGHT_LINK_MODE;
            }
            else{
                return DARK_LINK_MODE;
            }
        }   

        switch (sticky?stickyMode:nonStickyMode){
            case(LIGHT_BTN_MODE):
                return LIGHT_LINK_MODE;
            default:
                return DARK_LINK_MODE;
        }
        */
    }

    const getNavClass = () => {
      
        switch (sticky?stickyMode:nonStickyMode){
            case(DARK_MODE  ):
                return "navbar-area navbar-style-two"; ///*White background dark text */

            case(LIGHT_MODE):
                if(!menuClosed){  //Excepttion to fix open menu not working in light mode
                    return "navbar-area navbar-style-two";
                }
                else{
                   return "navbar-area navbar-style-three"; 
                }

            case(COLOR_MODE):
                return "navbar-area navbar-style-two"; ///*White background dark text */
        }
    }

    const getButtonClass = () => {
        if(buttonMode)
            return buttonMode;

        switch (sticky?stickyMode:nonStickyMode){
            case(LIGHT_BTN_MODE):
                return LIGHT_BTN_MODE;
            default:
                return DARK_BTN_MODE;
        }
    }

    return (
        <>
            <div id="navbar" className={getNavClass()}   >
                {logo && menuCategory && (
                    <div className="texap-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md " >
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <div style={{display:'flex',flexDirection:'row'}}>
                                        <Link  href="/">
                                            <a aria-label="Smart guess home" className="navbar-brand">
                                                <div id="large-logo"  > 
                                                <NextSGImage 
                                                  setWidth="298px" 
                                                  setHeight="52px"
                                                   {...getImage().large}
                                                />
                                                </div>
                                                <div id="small-logo-container"> 
                                                  <div id="small-logo">
                                                    <NextSGImage
                                                      setWidth="48px" 
                                                      setHeight="48px"
                                                      {...getImage().small} />
                                                    </div>
                                                    <div className={getLinkButtonClass()} style={{
                                                        paddingTop: '10px',
                                                        paddingLeft: '5px',
                                                        alignSelf: 'center'    
                                                     }}>
                                                         for Jira Cloud
                                                        {/*
                                                        <a href="https://marketplace.atlassian.com/apps/1225496/" className={getLinkButtonClass()}>for Planning Poker - Jira Cloud</a>
                                                    */}
                                                    </div>
                                            
                                                </div>
                                                
                                            </a>
                                        </Link>
                                    </div>

                                    <div id="large-logo"  style={{display: 'flex',
                                        flexDirection: 'column',alignItems:'flex-end'}} >
                                        <a style={{fontSize:'15px'}} href={'https://marketplace.atlassian.com/apps/1225496'} className={getLinkButtonClass()}>Relative Estimates for Jira Cloud</a>
                                    </div>
                                    </div>

                                {/*Hamburger Menu  */}   
                                <button 
                                style={{marginRight:'9px'}}
                                    onClick={toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                {/* Render MenuItems  */}  
                                { menuCategory && (
                                <div className={classOne} id="navbarSupportedContent">
                                     <ul className="navbar-nav"  style={{background: menuClosed?'transparent' :'white'}}>
                                        {menuCategory && menuCategory.map(menuContent => (
                                            renderMenuContent(menuContent)
                                        ))} 
                                    </ul>
                                </div>
                                )}

                                {/*CTA button  */}    
                                {ctaInfo && menuClosed && (              
                                <div  className="others-options">
                                    <Link id="try-it-now-nav" href={ctaInfo.btnUrl}>
                                        <a style={{padding:'10px'}} className={getButtonClass()}>
                                            {ctaInfo.btnText}
                                        </a>
                                    </Link>
                                </div>
                                )}
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default SGNavbarStyle;