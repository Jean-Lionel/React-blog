const BlogList = ({blogs,title, handleDelete}) => {
    
    return ( 
        <div className="blog-list">
            <h2 className="blog-title">{title}</h2>
        {
            blogs.map((blog) => (
            <div className="blog" key={blog.id}>
                <a href="#" className="blog-titre">{blog.title}</a>
                <small className="blog-publication-date">Publier le : {blog.userId}</small>
                <p className="blog-author">Publier par : {blog.author}</p>

                <p className="blog-body">
                    {blog.body}
                </p>
                <button onClick={()=> handleDelete(blog.id)}>Delete article </button>
             </div>

            ))
        }
        </div>
     );
}
 
export default BlogList;