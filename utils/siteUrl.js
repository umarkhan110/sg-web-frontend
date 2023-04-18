const siteUrl = process.env.NODE_ENV === "production" 
? 'https://smartguess.is' 
: 'http://localhost:3000';  //IN DEV MODE

export default siteUrl;
//export {siteUrl};
//exports.siteUrl =siteUrl;