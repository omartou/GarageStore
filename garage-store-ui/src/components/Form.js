import React, {useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import '../App.css'

function Form(props) {
    // console.log(props);
    console.log(props.location.pathname);
    console.log(props.location.pathname.includes("update"));

    const isUpdate = props.location.pathname.includes("update");
    const id = props.match.params.id;

    const [loaded, setLoaded] = useState(false);
    const [buttonText, setButtonText] = useState("Submit");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [year, setYear] = useState("");
    const [description, setDescription] = useState("");
    const [youtubeVideoUrl, setYoutubeVideoUrl] = useState("");
    const [updated, setUpdated] = useState(false);
    const [added, setAdded] = useState(false);

    function formHandler() {
        isUpdate ? updateStuff() : addNewStuff();
    }

    const updateStuff = () => {
        console.log("Should write your updateStuff() method here...")
        const payload = updatePayload();

        axios.put(`http://localhost:8762/stuff/${id}/update`, payload)
            .then((response) => {
                    console.log("response:", response)
                if (response.status===200) {
                    setUpdated(true);
                }
            });
    };

    function updatePayload() {
        console.log("addNewStuff() method has been called...");
        const nameValue = document.querySelector("#name").value;
        // alert("this was submitted: " + nameValue)
        const priceValue = document.querySelector("#price").value;
        // alert("this was submitted: " + priceValue);
        const imageUrlValue = document.querySelector("#image").value;
        console.log(imageUrlValue);
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
        return payload;
    }

    const addNewStuff = () => {
        const payload = updatePayload();

        axios.post(`http://localhost:8762/stuff/add`, payload).then(result => {
            console.log(result);
            console.log(result.data);
            if (result.status===200) {
                setAdded(true);
            }
        }).catch(error => {
            console.log(error);
        })
    };

    function setAllState(data) {
        setName(data.stuff.name);
        setPrice(data.stuff.price);
        setImage(data.stuff.image);
        setYear(data.stuffDetailsResult.purchaseYear);
        setDescription(data.stuffDetailsResult.description);
        setYoutubeVideoUrl(data.stuffDetailsResult.youtubeVideoUrl);
        setButtonText("Update")
        setLoaded(true);
        console.log("data arrived", data);
    }

    function cleanAllState() {
        setName("");
        setPrice("");
        setImage("");
        setYear("");
        setDescription("");
        setYoutubeVideoUrl("");
        setButtonText("Submit");
        setLoaded(true);
    }

    useEffect(() => {
        if (isUpdate) {
            console.log("id before axios fetch: " + id)
            axios.get(`http://localhost:8762/stuff/${id}`)
                .then((response) => {
                    setAllState(response.data);
                });
        }
        return cleanAllState();
    }, [props, isUpdate]);


    if (!loaded) {
        return (<div>Please wait...</div>);
    }

    if (updated) {
        return <Redirect to={`/stuff/${id}`}/>
    }

    if (added) {
        return <Redirect to={`/`}/>
    }

    return(
        <div style={formStyle}>
            {isUpdate ?
                <h1>Update your STUFF data</h1> :
                <h1>Upload a new STUFF to sell</h1>
            }
            <form method="POST" action="/stuff/add">
                <label htmlFor="name" >Name your stuff : </label>
                <br/>
                <input type="text" id="name" name="name" placeholder="..." defaultValue={name}/>
                <br/><br/>
                <label htmlFor="price" >Give the price: </label>
                <br/>
                <input type="text" id="price" name="price" placeholder="...what makes you happy." defaultValue={price}/>
                <br/><br/>
                <label htmlFor="image" >Upload an image about your product: </label>
                <br/>
                <textarea type="text" id="image" name="image" placeholder="http://image_example.com" defaultValue={image}/>
                <br/><br/>
                <label htmlFor="year" >When did you gain this stuff: </label>
                <br/>
                <input type="text" id="year" name="year" placeholder="e.g.: 2020..." defaultValue={year}/>
                <br/><br/>
                <label htmlFor="description" >Description: </label>
                <br/>
                <textarea type="text" id="description" name="description" placeholder="..." defaultValue={description} />
                <br/><br/>
                <label htmlFor="youtubeVideoUrl" >Upload video: </label>
                <br/>
                <textarea type="text" id="youtubeVideoUrl" name="youtubeVideoUrl" placeholder="Give a YouTube link to obtain more buyers..." defaultValue={youtubeVideoUrl}/>
                <br/><br/>
                <input
                    type="button"
                    value= {buttonText}
                    onClick={formHandler}/>

            </form>
        </div>
    );
}

const formStyle = {
    marginTop: '90px',
    padding: '30px'
};

export default Form;