import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";


const Home =()=>{
    return(
        <div>
            <h1>hola mundo</h1>
            <Link to="/admin">
            <button>
                hola mundo
            </button>
            </Link>
            <Link to="/user">
            <button>
                hola mundo
            </button>
            </Link>
        </div>
    );
}
export default Home;