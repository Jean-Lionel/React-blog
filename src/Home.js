import {useState,useEffect} from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs , setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(()=> {
        fetch("http://localhost:8000/blogs")
        .then(response => {
            if(!response.ok)
                throw new Error('Une erreur est survenu ...')
            return response.json();
        })
        .then(data => {
            setBlog(data);
            setError(null);
        }).catch(error => {
            console.error(error.message);
            setError(error.message)
        }).finally(() => {
            setIsLoading(false);
        })

    },[])
    
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