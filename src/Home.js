const Home = () => {
    const handleClick = () => {
        console.log('Button Clicked')    
    }

    const handleClickAgain = (name) => {
        console.log(`Salut toi ${name}`)
    }
    return (
        <div className="home">
            <h1>Voici ma page d'accueil</h1>

            <button onClick={handleClick}>Click Moi </button>
            <button onClick={() => handleClickAgain('jean Lionel Nininahazwe') }>Click Moi LA deuxieme fois </button>
        </div>
    );
}

export default Home;