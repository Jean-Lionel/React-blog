import useFetchData from "../useFecthData";

const AuteurList = () => {
    const {data: authors, isLoading, error} = useFetchData("http://localhost:8000/authors");
    
    const deleteAuthor = (e) => {
        const res = window.confirm("Are you sure you want to delete");

        if(res){

            fetch("http://localhost:8000/authors/"+e,{
                method: "DELETE"
            }).then((error) => {
                console.error(error);
                
            })
        }
    }

    return ( <div>
        {isLoading && <div>Is loading .........</div>}
        {error && <div> {error}</div>}

        {authors && (
            <div>
                
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Téléphone</th>
                            <th>Date de Création</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                    {authors.map((author)=>(
                    <tr key={author.id}>
                        <td>{author.name}</td>
                        <td>{author.telephone}</td>
                        <td>{author.currentDate}</td>
                        <td>
                            <button onClick={()=>{deleteAuthor(author.id)}}>✂️</button>
                        </td>
                    </tr>
                    ))}

                    </tbody>
                </table>
                
            </div>
        )}

    </div> );
}
 
export default AuteurList;