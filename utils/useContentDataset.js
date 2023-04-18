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
    (data) => data)


export const useContentDataset = (url, getArray) => {
  //console.log("Url: "+ `${baseApiUrl}/${url}`);
  const { data, error } = useSWRImmutable(`${baseApiUrl}/${url}`, fetcher);

  return {
    contentList: data,
    isLoading: !error && !data,
    isError: error
  }
}