/* js related to blog.html */
const postString = {
    userName : "Posted by: ",
    timeStamp: "at ",
}
function generateElement(tag, data) {
    let element = $(`<${tag}>`, data);
/*
    element.name = name;
    element.className = className;
    element.id = id;
    element.key = key
    */
    return element;
}

function generateSimpleElement(tag, val) {
    let element = document.createElement(tag);
    element.value = val;
    return element;
}

function generateSimpleTag(tag, val) {
    let element = document.createElement(tag);
    element.innerText = val;
    return element;
}

function generateLi(data) {
    let li = generateElement("li", {name:"post", class:"post", id:"post", key: data.key});
    
    let h3 = generateSimpleTag("h2", data.postTitle);
    
    let h2 = generateSimpleTag("h3", `${postString.userName}${data.userName}`);
    h2.setAttribute('id', 'username');
    let p = generateElement("p", {id:'comment'});
    p.append(data.comment);
    //   let p = generateElement("p", {id:'comment', innerText: data.comment});
    // let p = generateSimpleTag("p", `${data.comment}`);
    let timeStamp = data.timeStamp.split(',');
    let timeString = "On "
    let time = generateSimpleTag("h4", `On ${timeStamp[0]}\nAt ${timeStamp[1]}`);

   // p.attr('id', 'comment')
    li.append(h3);
    li.append(h2);
    li.append(time);
    li.append(p);
    return li;
   
}

function generatePost(data) {
    let postList = $("#postList");
    let post = generateLi(data);
    postList.append(post);

}

function setup() {
    console.log('setup called')
    $("#postList").empty();
    let posts = getItem("posts");
    if (posts.length > 0) {
       for(let i = 0; i < posts.length; i++) {
            generatePost(posts[i]);
       }
    }
}
window.onload = () => {

}