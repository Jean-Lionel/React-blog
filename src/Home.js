import BlogList from './BlogList';
import useFetchData from './useFecthData';

const Home = () => {
   
    const {data: blogs, isLoading, error} = useFetchData("http://localhost:8000/blogs")
    
    return (
        <div className="home">
                {
                    error && 
                    <div style={{ "color" : "red", "textAlign": "center" }}>
                        {error}
                    </div>
                }
                {isLoading && <div>
                    En cour de chargement
                    </div>
                }
                {blogs && <BlogList blogs={blogs} title={'Liste des blogs'}  />  }
                {/* <BlogList blogs={blogs.filter((e) => e.author === "Jean")} title={'Liste des articles publié par Jean '} /> */}  
          
        </div>
    );
}

export default Home;