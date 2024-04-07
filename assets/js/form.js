/* js related to controlling our forms */

//import { getItem, setItem } from "./logic";
//const getItem = require("logic.js").getItem();
//const setItem= require("logic.js").setItem();
const badChars = ['-', ':', '.'];
function keyGenerator(date) {
    let id = date.toISOString();
    for (let i = 0; i < badChars.length; i++) {
        id = id.replaceAll(badChars[i], '');
    }
    return id;

}

function dataGather(e) {
    e.preventDefault();
    // create a JSON to hold our user's input values 
    // a date obj to timestamp and generate a key
    // random int seeded with key
    const date = new Date();
    let data = {
        userName: document.getElementById("userName").value,
        postTitle: document.getElementById("postTitle").value,
        comment: document.getElementById("comment").value,
        timeStamp: date.toLocaleString(),
        key: keyGenerator(date),
    }

    // create a 2D [] out of the entries in data
    // Inner [] consists of ['key', 'val'] 
    const dataSet = Object.entries(data);
    // exmple: 
    console.log(dataSet[0]);
    // bool to track if our data check fails
    let valid = true;
    /*
     use a foreach loop to check no val entry is ''
     if an entry fails alert the user, set valid to false, and exit the loop
     if every entry is valid then we store the post
     */
    dataSet.forEach(([key, val]) => {
        if (val == '') {
            alert(`${msg.error.input}`);
            valid = false;
            return;
        }
    });
    if (valid) {
        let posts = getItem('posts');
        if (!posts) {
            posts = [];
        }
        posts.push(data);
        setItem('posts', posts);
    } else return;


}

window.onload = () => {
    const submitBtn = document.querySelector("#post");

    submitBtn.addEventListener("click", dataGather)
}

