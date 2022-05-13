const Admin = () => {
    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        window.location = "/login";
    }
    return ( <div>
        <h1>
            Administraion
        </h1>

        <button onClick={() => logout()} class>Decconnexion</button>
    </div> );
}
 
export default Admin;