import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetchData from './useFecthData';

const BlogDetail = () => {
    const {id} = useParams()

    const {data: blog, isLoading, error} = useFetchData("http://localhost:8000/blogs/"+id)
    
    const history = useHistory();
    const handleDelete = ()=>{

        fetch("http://localhost:8000/blogs/"+id,{
            method: "DELETE",
        }).then((response)=>{
            console.log(response)
            history.push("/")
        })
    }
  
    return ( <div>
        {isLoading && <div className="">Is Loading</div>}
        {error && <div className="">{error}</div>}

        {blog && (
            <div className="blog">
                <h1 className="blog-titre">{blog.title}</h1>
                 <small className="blog-publication-date">{`Publié le ${blog.id}`}</small>
                 <p className="blog-body">
                     {blog.body}
                 </p>
                 <div>
                     <button onClick={handleDelete} className="">Delete</button>
                 </div>
            </div>
        )}
    </div>);
}
 
export default BlogDetail;