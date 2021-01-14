import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Form from './Form';
import '../App.css';
import '../Details.css';


const youtubeEmbedPath = "https://www.youtube.com/embed";

function Details(props) {
    console.log("props", props);
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
            <h1>{name}</h1>
            <div className='detail-card'>
                <div className='detail-card-top'>
                    <img src={image} alt="alternative text" width="200" height="150" className='detail-card-image'/>
                    <div className='detail-card-price'>LAST chance: {price}$</div>
                    <div className='detail-card-year'>Purchase year: {purchaseYear}</div>
                    <div className='detail-card-description'>Description: {description}</div>
                </div>
                <div className='detail-card-bottom'>
                    <iframe className='detail-card-youtube-url' width="853" height="505" src={embedUrl} frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </div>
            <Link name={name} to={{pathname: `/update/${id}`}}>
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