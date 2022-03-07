import {useState,useEffect} from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs , setBlog] = useState(null);
    const [name, setName] = useState("Jean Lionel")

   

    useEffect(()=> {
        fetch("http://localhost:8000/blogs")
        .then(response => {
            return response.json();
        }).then(data => {
            setBlog(data);
        })

    },[name])

    
    return (
        <div className="home">
                <p>{name}</p>
                <button onClick={()=> setName("Inininahazwe Nadine")}>Change Name</button>
                {blogs && <BlogList blogs={blogs} title={'Liste des blogs'}  />  }
                {/* <BlogList blogs={blogs.filter((e) => e.author === "Jean")} title={'Liste des articles publié par Jean '} /> */}  
          
        </div>
    );
}

export default Home;