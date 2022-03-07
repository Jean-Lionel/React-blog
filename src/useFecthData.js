import {useState,useEffect} from 'react'

const useFetchData = (url) => {

    const [data , setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(()=> {
        fetch(url)
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

    },[url])

    return {data, isLoading, error};
    
}
 
export default useFetchData;