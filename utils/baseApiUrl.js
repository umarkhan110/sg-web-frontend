const baseApiUrl = process.env.NODE_ENV === "production" 
? 'https://smartguess-web-backend.herokuapp.com' 
:'https://smartguess-web-backend.herokuapp.com' ;  //Test frontend against prod backend
//:'http://localhost:1337';  //IN DEV MODE

export default baseApiUrl;