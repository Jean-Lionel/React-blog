import { useParams } from "react-router-dom";
import useFetchData from './useFecthData';

const BlogDetail = () => {
    const {id} = useParams()

    const {data: blog, isLoading, error} = useFetchData("http://localhost:8000/blogs/"+id)
    
  
    return ( <div>
        {isLoading && <div className="">Is Loading</div>}
        {error && <div className="">{error}</div>}

        {blog && (
            <div className="blog">
                <h1 className="blog-title">{blog.title}</h1>
                 <small className="blog-publication-date">{`Publié le ${blog.id}`}</small>
                 <p className="blog-body">
                     {blog.body}
                 </p>
            </div>
        )}
    </div>);
}
 
export default BlogDetail;