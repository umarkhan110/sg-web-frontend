const baseUrl = process.env.NODE_ENV === "production" 
? 'https://sg-web-frontend.herokuapp.com'
: 'http://localhost:3000';

export default baseUrl;