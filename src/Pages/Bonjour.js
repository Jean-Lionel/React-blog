import axios from "axios";
const Bonjour = () => {

    const getData = ()=> {

        axios.get("/articles")
        .then(res => {
            console.log(res.data.data)
        })
        .catch(err => {
            console.error(err); 
        })

    }
    
    return ( 
        <div>
            <h1>Bonjour COmponent</h1>
            <button onClick={()=>getData() }>Hello</button>
        </div>
     );
}
 
export default Bonjour;