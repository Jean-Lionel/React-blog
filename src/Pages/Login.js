import axios from 'axios';
import {useState} from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        console.log(email, password);
        try {
            const response = await axios.post('login/', {
                email,
                password
            });
           // console.log(response.data.access_token, response.data.data);
            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('user', response.data.data);
            setIsLoading(false);
           window.location.href = '/admin';
        } catch (error) {
            setError(error.response.data.message);
            setIsLoading(false);
        }
    }
    return ( <div>
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <input type="text" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(() => e.target.value)}/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(() => e.target.value)}/>
            <button type="submit">Login</button>
        </form>

        {isLoading && (
            <div>
                Is Loading...
            </div>
        )}
        {error && (
            <div>
                {error}
            </div>
        )}
    </div> );
}
 
export default Login;