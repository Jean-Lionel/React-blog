import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {
    
    return ( 
        <div className="blog-list">
            <h2 className="blog-title">{title}</h2>
        {
            blogs.map((blog) => (
            <div className="blog" key={blog.id}>
                <Link to={`/blog/${blog.id}`} className="blog-titre">{blog.title}</Link>
                <small className="blog-publication-date">Publier le : {blog.userId}</small>
                <p className="blog-author">Publier par : {blog.author}</p>

                <p className="blog-body">
                    {blog.body}
                </p>
                
             </div>

            ))
        }
        </div>
     );
}
 
export default BlogList;