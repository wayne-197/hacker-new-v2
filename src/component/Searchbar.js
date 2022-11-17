import '../styles/searchbar.css';
const Searchbar = ({onChange, onClick, search, value}) =>{
    return(

        <header>
            <div className="wrap">
                <div className="search">
                <h1>Hacker News</h1>
                    <input type="text" className="searchTerm" placeholder="Search here" onChange={onChange}  value={value}/>
                </div>
            </div>
        </header>
    );
}

export default Searchbar;