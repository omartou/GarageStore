import React from 'react';

function Form() {
    return(
        <div style={formStyle}>
            <h1>Upload a new STUFF to sell</h1>
            <form method="POST" action="/stuff/add">
                <label htmlFor="name" >Name your stuff : </label>
                <br/>
                <input type="text" id="name" name="name" placeholder="e.g: Adidas sunglasses..." required="true"/>
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
                <input type="text" id="year" name="year" placeholder="e.g.: 2020..." required="true"/>
                <br/><br/>
                <label htmlFor="description" >Description: </label>
                <br/>
                <textarea type="text" id="description" name="description" placeholder="..." required="true"/>
                <br/><br/>
                <label htmlFor="youtubeVideoUrl" >Upload video: </label>
                <br/>
                <textarea type="text" id="youtubeVideoUrl" name="youtubeVideoUrl" placeholder="Give a YouTube link to obtain more buyers..."/>
                <br/><br/>
                <input
                    type="button"
                    value="Submit"/>
            </form>

        </div>
    );
}

const formStyle = {
    marginTop: '90px',
    padding: '30px'
};

export default Form;