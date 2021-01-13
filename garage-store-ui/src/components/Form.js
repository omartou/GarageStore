import React, {useEffect, useState} from 'react';
import Axios from 'axios';

function Form(props) {
    const id = props.match.params.id;

    const addNewStuff = () => {
        const nameValue = document.querySelector("#name").value;
        // alert("this was submitted: " + nameValue)
        const priceValue = document.querySelector("#price").value;
        // alert("this was submitted: " + priceValue);
        const imageUrlValue = document.querySelector("#image").value;
        const purchaseYearValue = document.querySelector("#year").value;
        const descriptionValue = document.querySelector("#description").value;
        const youTubeVideoUrlValue = document.querySelector("#youtubeVideoUrl").value;

        const payload = {
            "stuff": {
                "name": nameValue,
                "image": imageUrlValue,
                "price": priceValue
            },
            "stuffDetailsResult": {
                "purchaseYear": purchaseYearValue,
                "description": descriptionValue,
                "youtubeVideoUrl": youTubeVideoUrlValue
            }
        }

        console.log(payload);

        Axios.post(`http://localhost:8762/stuff/add`, payload).then(result => {
            console.log(result);
            console.log(result.data);
        }).catch(error => {
            console.log(error);
        })
    };

    return(
        <div style={formStyle}>
            <h1>Upload a new STUFF to sell</h1>
            <form method="POST" action="/stuff/add">
                <label htmlFor="name" >Name your stuff : </label>
                <br/>
                <input type="text" id="name" name="name" placeholder="..." required="true"/>
                <br/><br/>
                <label htmlFor="price" >Give the price: </label>
                <br/>
                <input type="text" id="price" name="price" placeholder="...what makes you happy." required="true"/>
                <br/><br/>
                <label htmlFor="image" >Copy an image url: </label>
                <br/>
                <textarea type="text" id="image" name="image" placeholder="http://image_example.com" required="true"/>
                <br/><br/>
                <label htmlFor="year" >When did you gain this stuff: </label>
                <br/>
                <input type="text" id="year" name="year" placeholder="e.g.: 2020..." required="true"/>
                <br/><br/>
                <label htmlFor="description" >Description: </label>
                <br/>
                <textarea type="text" id="description" name="description" placeholder="..." required="true" />
                <br/><br/>
                <label htmlFor="youtubeVideoUrl" >Copy video url: </label>
                <br/>
                <textarea type="text" id="youtubeVideoUrl" name="youtubeVideoUrl" placeholder="Give a YouTube link to obtain more buyers..."/>
                <br/><br/>
                <input
                    type="button"
                    value="Submit"
                    onClick={addNewStuff}/>
            </form>
        </div>
    );
}

const formStyle = {
    marginTop: '90px',
    padding: '30px'
};

export default Form;