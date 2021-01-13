import React, {useState, useEffect} from 'react';
import axios from 'axios';

const youtubeEmbedPath = "https://www.youtube.com/embed";


function Details(props) {
    const id = props.match.params.id;
    console.log("id: ", id);

    const [details, setDetails] = useState({});
    const [loaded, setLoaded] = useState(false);

    console.log("props: " , props);

    useEffect(() => {
        axios.get(`http://localhost:8081/stuff/${id}`).then((response) => {
            const data = response.data;
            setDetails(data);
            setLoaded(true);
            console.log("data arrived", data);
        });
    }, []);

    if (!loaded) {
        return (<div>Please wait...</div>);
    }

    const {name, price, image } = details.stuff; // destruct
    const { stuffDetailsResult } = details;
    console.log("stuffdetailsresult", stuffDetailsResult);
    const {purchaseYear, description } = stuffDetailsResult;

    return (
        <div style={detailsStyle}>
            <h1>See more about chosen stuff: {name}</h1>
            <div>LAST chance, this is only for {price}$, grab it right now!</div>
            <img alt="alternative text"/>
            <h2>Details: </h2>
            <div>Purchase year: {purchaseYear}</div>
            <div>Description: {description}</div>
        </div>
    );
}

const detailsStyle = {
    marginTop: '90px',
    padding: '30px'
}

export default Details;