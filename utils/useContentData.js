import useSWRImmutable from 'swr/immutable';
import baseApiUrl from '@/utils/baseApiUrl';

/**
 *  On swr and swrImmudatble read https://swr.vercel.app/docs/revalidation
 * 
 * @param  {...any} args 
 * @returns 
 */
const fetcher = (...args) => fetch(...args).then(
  (res) =>  res.json())
  .then( 
    (data) => {
      if(data.error){
        return {  data:data,
                  isError:true }
      }
      else{
        return data
      }

    })

  
export const useContentData = (url, getArray) => {
  //console.log("Url: "+ `${baseApiUrl}/${url}`);
  const { data, error } = useSWRImmutable(`${baseApiUrl}/${url}`, fetcher);

  const getResponse= (response) => {
    if(!response){
      return response;
    }
    else if(Array.isArray(response)){
      return response[0];
    }
    else{
      return response;
    }
  }


  const response = getResponse(data); //data &&  data[0],
  return {
    content: response, //&& response.data, //data &&  data[0],
    isLoading: !error && !data,
    isError: (error || response && response.isError),
  }
}