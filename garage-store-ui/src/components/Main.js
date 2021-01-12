import React, {useState, useEffect} from 'react';
import { Link} from 'react-router-dom';
import Axios from 'axios';


function Main(props) {
    const [stuffs, setStuffs] = useState([{name: "loading..."}]);

    useEffect(() => {
        Axios.get('http://localhost:8081/stuff/all').then(({data}) => {
            setStuffs(data);
            console.log(data);
            }
        );
    },[]);

    return(
        <div style={main}>
            <h1>GARAGE STORE</h1>
            <div>
                {stuffs.map(stuff => {
                    const {id, name, image, price } = stuff;
                    return (
                        <div>
                            <Link to={{pathname: `/stuff/${id}`}}>
                                 {name}
                            </Link>
                            <div>{price}$</div>
                            <div>{ image }</div>
                        </div>
                    );
                })
                }
            </div>
        </div>
    );
}

const main = {
    marginTop: '90px',
    padding: '30px'
}

export default Main;