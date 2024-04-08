/* js related to blog.html */
const postString = {
    userName : "Posted by: ",
    timeStamp: "at ",
}
function generateElement(tag, className, id, name, key, val) {
    var element = document.createElement(tag);

    element.name = name;
    element.className = className;
    element.id = id;
    element.key = key
    return element;
}

function generateSimpleElement(tag, val) {
    var element = document.createElement(tag);
    element.value = val;
    return element;
}

function generateSimpleTag(tag, val) {
    var element = document.createElement(tag);
    element.innerText = val;
    return element;
}

function generateLi(data) {
    let li = generateElement("li", "post", "post", "post", data.key);
    
    var h3 = generateSimpleTag("h2", data.postTitle);
    
    var h2 = generateSimpleTag("h3", `${postString.userName}${data.userName}`);
    h2.setAttribute('id', 'username');
    var p = generateSimpleTag("p", `${data.comment}`);
    var time = generateSimpleTag("h3", `${postString.timeStamp}${data.timeStamp}`);

    p.setAttribute('id', 'comment')
    li.appendChild(h3);
    li.appendChild(h2);
    li.appendChild(time);
    li.appendChild(p);
    return li;
   
}

function generatePost(data) {
    var postList = document.getElementById("postList");
    var post = generateLi(data);
    postList.appendChild(post);

}

function setup() {
    console.log('setup called')
    let posts = getItem("posts");
    if (posts.length >0) {
       for(let i = 0; i < posts.length; i++) {
            generatePost(posts[i]);
       }
    }
}
window.onload = () => {

}