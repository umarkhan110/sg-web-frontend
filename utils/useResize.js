import {useState,useEffect, useLayoutEffect} from "react";

//NOT USED

const useResize = (myRef) => {
  //https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
  const [showChild, setShowChild] = useState(false);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (myRef.current) {
      //setDimensions({
        setWidth( myRef.current.offsetWidth);
        setHeight( myRef.current.offsetHeight);
    }
    
  }, [myRef]);
  
  useEffect(() => {
    const handleResize = () => {
      //setWidth(myRef.current.offsetWidth)
      setWidth(Math.round(myRef.current.getBoundingClientRect().width));
      
      //setHeight(myRef.current.offsetHeight)
      setHeight(Math.round( myRef.current.getBoundingClientRect().height));
    }
    window.addEventListener('resize', handleResize,{passive: true});

    setShowChild(true);

    return () => {
      window.removeEventListener('resize', handleResize,)
    }
  }, [])

  if(!showChild)
    return {"width":0,"height":0}
  else
    return { width, height }
}

export default useResize;