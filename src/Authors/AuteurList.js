import useFetchData from "../useFecthData";

const AuteurList = () => {
    const {data: authors, isLoading, error} = useFetchData("http://localhost:8000/authors");

    return ( <div>
        {isLoading && <div>Is loading .........</div>}
        {error && <div> {error}</div>}

        {authors && (
            <div>
                {JSON.stringify(authors)}
            </div>
        )}

    </div> );
}
 
export default AuteurList;