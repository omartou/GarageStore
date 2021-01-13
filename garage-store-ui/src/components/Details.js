import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const youtubeEmbedPath = "https://www.youtube.com/embed";

function Details(props) {
    const id = props.match.params.id;
    console.log("id: ", id);

    const [details, setDetails] = useState({});
    const [loaded, setLoaded] = useState(false);


    console.log("props: " , props);

    useEffect(() => {
        axios.get(`http://localhost:8762/stuff/${id}`).then((response) => {
            const data = response.data;
            setDetails(data);
            setLoaded(true);
            console.log("data arrived", data);
        });
    }, []);

    if (!loaded) {
        return (<div>Please wait...</div>);
    }

    const { name, price, image } = details.stuff; // destruct
    const { stuffDetailsResult } = details;
    console.log("stuffdetailsresult", stuffDetailsResult);
    const {purchaseYear, description, youtubeVideoUrl } = stuffDetailsResult;
    const embedUrl = `${youtubeEmbedPath}/${youtubeVideoUrl}`;

    return (
        <div style={detailsStyle}>
            <h1>See more about chosen stuff: {name}</h1>
            <div>LAST chance, this is only for {price}$, grab it right now!</div>
            <img src={image} alt="alternative text" width="200" height="150"/>
            <h2>Details: </h2>
            <div>Purchase year: {purchaseYear}</div>
            <div>Description: {description}</div>
            <iframe width="853" height="505" src={embedUrl} frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            <Link to={{pathname: `/update/${id}`}}>
                UPDATE
            </Link>
        </div>
    );
}

const detailsStyle = {
    marginTop: '90px',
    padding: '30px'
}

export default Details;