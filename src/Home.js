import {useState,useEffect} from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs , setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        fetch("http://localhost:8000/blogs")
        .then(response => {
            return response.json();
        }).then(data => {
            setBlog(data);
            setIsLoading(false);
        })

    },[])
    
    return (
        <div className="home">
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