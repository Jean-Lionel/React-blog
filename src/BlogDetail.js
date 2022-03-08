import { useParams } from "react-router-dom";

const BlogDetail = () => {
    const params = useParams()
  
    return ( <div>
        <h1>Page pour les details : { JSON.stringify(params) }</h1>
    </div>);
}
 
export default BlogDetail;