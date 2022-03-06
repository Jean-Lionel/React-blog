import {useState,useEffect} from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs , setBlog] = useState([
        {

            author: "Stessie",
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        
        },
        {
        
            author: "Jean",
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        
        },
        {
        
            author: "Jean",
            id: 3,
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        
        },
        
    ]);
    const [name, setName] = useState("Jean Lionel")

    const handleDelete = (id) => {
        const newBlogues = blogs.filter(e=> e.id !== id);
        setBlog(newBlogues)
    }

    useEffect(()=> {
        console.log(blogs)

    },[name])

    
    return (
        <div className="home">
                <p>{name}</p>
                <button onClick={()=> setName("Inininahazwe Nadine")}>Change Name</button>
                <BlogList blogs={blogs} title={'Liste des blogs'} handleDelete={handleDelete} />  
                {/* <BlogList blogs={blogs.filter((e) => e.author === "Jean")} title={'Liste des articles publié par Jean '} /> */}  
          
        </div>
    );
}

export default Home;