import {useState,useEffect} from 'react'

const useFetchData = (url) => {

    const [data , setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(()=> {
        const abortConnection = new AbortController();

        fetch(url,{signal : abortConnection.signal})
        .then(response => {
            if(!response.ok)
                throw new Error('Une erreur est survenu ...')
            return response.json();
        })
        .then(data => {
            setData(data);
            setError(null);
        }).catch(error => {
            console.error(error.message);
            setError(error.message)
        }).finally(() => {
            setIsLoading(false);
        })

        return () => abortConnection.abort()

    },[url])

    return {data, isLoading, error};
    
}
 
export default useFetchData;