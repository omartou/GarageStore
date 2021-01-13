import React, {useEffect, useState} from 'react';
import Axios from 'axios';

function Form(props) {
    // const [details, setDetails] = useState(false);
    // const [loaded, setLoaded] = useState(false);
    // const [isNew, setIsNew] = useState(false);
    const id = props.match.params.id;

    const addNewStuff = () => {
        const

    }



    // useEffect(() => {
    //     Axios.get(`http://localhost:8762/stuff/${id}`).then((response) => {
    //         const data = response.data;
    //         setDetails(data);
    //         setLoaded(true);
    //         console.log("data arrived", data);
    //     });
    // }, []);
    //
    // if (!loaded) {
    //     return (<div>Please wait...</div>);
    // }
    //
    // const { name, price, image } = details.stuff; // destruct
    // const { stuffDetailsResult } = details;
    // console.log("stuffdetailsresult", stuffDetailsResult);
    // const {purchaseYear, description, youtubeVideoUrl } = stuffDetailsResult;

    // const nameValue = isNew ? "" : name;
    // console.log("nameValue", nameValue);


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
                <label htmlFor="image" >Upload an image about your product: </label>
                <br/>
                <textarea type="text" id="image" name="image" placeholder="http://image_example.com"/>
                <br/><br/>
                <label htmlFor="year" >When did you gain this stuff: </label>
                <br/>
                <input type="text" id="year" name="year" placeholder="e.g.: 2020..." />
                <br/><br/>
                <label htmlFor="description" >Description: </label>
                <br/>
                <textarea type="text" id="description" name="description" placeholder="..." />
                <br/><br/>
                <label htmlFor="youtubeVideoUrl" >Upload video: </label>
                <br/>
                <textarea type="text" id="youtubeVideoUrl" name="youtubeVideoUrl" placeholder="Give a YouTube link to obtain more buyers..."/>
                <br/><br/>
                <input
                    type="button"
                    value="Submit"/>
                    onClick={addNewStuff}
            </form>

        </div>
    );
}

const formStyle = {
    marginTop: '90px',
    padding: '30px'
};

export default Form;