//The underscore ex: "_event" and "_response" signifies that it is a private variable
//meaning it should not be used outside of your object (you can, but not recommended)
//There is not true class privacy in JavaScript (Google that later)

//When the content is loaded, run getVisitCount
//Receiving 'ts6133' error 'event' is declared but never read...for the 'event' paramater; using '_event' to ignore the error
window.addEventListener('DOMContentLoaded', (_event) =>{
    getVisitCount();
})

//Set up a constant and enter the URL for the API
const functionApi = '';

const getVisitCount = () => {
    let count = 30;
    //Get the data from the functionApi constant above with an API call
    fetch(functionApi).then(response => {
        return response.json()
        //Grab the response
    }).then(response =>{
        //Log a message to the console for debugging purposes
        console.log("Website called function API");
        //set the variable to the actual data in the json.() response
        count = response.count;
        //Go in the doc, find the "counter" element id, grab the inner text and set it to the count variable
        document.getElementById("counter").innerText = count;
        //Catch any errors and log them to 
    }).catch(function(error){
        console.log(error);
    })
    return count;
}
