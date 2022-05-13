import AuteurList from "../Authors/AuteurList";
import { useState } from "react";
import AddAuthor from "../Authors/AddAuthor";


const Author = () => {
     const [addButton, setaddButton] = useState(false);
     const changeState = ()=> {
         setaddButton(!addButton)
     }
    return ( <div>
        <button onClick={()=>{
            setaddButton(true);
        }}>Add Author</button>
        {addButton && (<div>
            <AddAuthor changeState={changeState}/>
        </div>)}
        {!addButton && <AuteurList/>}
    </div> );
}
 
export default Author;