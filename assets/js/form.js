/* js related to controlling our forms */

//import { getItem, setItem } from "./logic";
//const getItem = require("logic.js").getItem();
//const setItem= require("logic.js").setItem();

function dataGather(e){
    e.preventDefault();
    let data = {};
    data.userName = document.getElementById("userName").value;
    data.postTitle = document.getElementById("postTitle").value;
    data.comment = document.getElementById("comment").value;
    data.id = Math.floor(Math.random()*1000000);
    const dataSet = Object.entries(data);
    let valid = true;
    dataSet.forEach(([key, val]) => {
        if (val == '') {
            alert(`${msg.error.input}`);
            valid = false;
            return;
        }
    });

    if (valid) {
        setItem('post', data);
    } else return;
    // use a foreach loop to check no data is empty

}

window.onload = () => {
    const submitBtn = document.querySelector("#post");
    
    submitBtn.addEventListener("click", dataGather)
}

