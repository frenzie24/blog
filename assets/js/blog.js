/* js related to blog.html */

function generateElement(tag, className, id, name, key, val) {
    var element = document.createElement(tag);

    element.name = name;
    element.className = className;
    element.id = id;
    element.key = key
    return element;
}

function generateElement(tag, val) {
    var element = document.createElement(tag);
    element.value = val;
}

function generateLi(data) {
    let li = generateElement("li", "post", "", "post", data.key);
    
    var h3 = generateElement("h3", data.postTitle);
    var h2 = generateElement("h2", "");
    
    var h2 = generateElement("h2", data.userName);
    var p = generateElement("p", data.comment);
    li.appendChild(h3);
    li.appendChild(h2);
    li.appendChild(h2);
    li.appendChild(p);
    return li;
   
}

function generatePost(data) {
    var postList = document.getElementById("postList");
    var post = generateLi(data);

}

function setup() {
    let posts = getItem("posts");
    if (posts.length >0) {
        posts.foreach((Object) => {} );
    }

}