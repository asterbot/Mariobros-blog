import { useState, useEffect  } from "react";

const useFetch = (url)=>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{ 
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal }) //general URL
            .then(res => {
                if (!res.ok){
                    throw Error('Could not fetch data for that resource');
                }
                return res.json();
            })
            .then(data=>{
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err =>{
                if (err.name === 'AbortError'){ // if it is abort error
                    console.log('Fetch aborted');
                }
                else{
                    setError(err.message);
                    setIsPending(false);
                }
            })
    
        return () => abortCont.abort;
        }, [url]); //put URL as dependency for useEffect

    return {data, isPending, error};
}

export default useFetch;
