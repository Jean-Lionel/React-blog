import {useState} from "react";
import { useHistory } from "react-router-dom";

const AddAuthor = ({changeState}) => {

    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentDate = new Date().toLocaleDateString();
        const author = {
            name,telephone,currentDate

        }
        fetch("http://localhost:8000/authors",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(author)
        }).then(response => {
            history.push("/author")
            console.log(response)
            changeState()
        }).catch(error => {
            console.error(error);

        })
    }
    
    return ( <div>

        <form action="" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="telephone">Téléphone</label>
                <input type="phone" name="phone" className="form-control" value={telephone} onChange={(e) => setTelephone(e.target.value)}/>
            </div>
            <div className="form-group">
                <button>Enregistrer</button>
            </div>
        </form>

    </div> );
}
 
export default AddAuthor;