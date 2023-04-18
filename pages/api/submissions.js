//Example from: https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors
//And ehere https://github.com/expressjs/cors#configuration-options
import axios from 'axios';
import Cors from 'cors';
import initMiddleware from '../../utils/init-middleware';

const url = 'https://www.getdrip.com/forms/321229217/submissions';

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['POST', 'OPTIONS'],
    origin: ['https://smartguess.is','http://smartguess.is'] ,
  })
)


export default async function handler(req, res) {
  console.debug("Starting..");
  
  // Run cors
  await cors(req, res);

  const contact = req.body;
  console.debug(JSON.stringify(contact));
  if (!contact['fields[first_name]'] || !contact['fields[email]']) {
    return res.status(400).json({ data: 'Name or email missing!' })
  }
  else{
    let bodyFormData = new URLSearchParams();
    bodyFormData.append('fields[email]',contact['fields[email]'] );
    bodyFormData.append('fields[first_name]',contact['fields[first_name]']);
      
    const response = await axios.post(url,bodyFormData );
    res.status(200).json( {data: response.data});
    console.debug(response);
  }
}
