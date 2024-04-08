/* js related to blog.html */
const postString = {
    userName: "Posted by:",
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
    let element = $(`<${tag}>`);
    element.val(val);
    return element;
}

function generateSimpleTag(tag, val) {
    let element = $(`<${tag}>`);
    element.text(val);
    return element;
}

function generateLi(data) {
    let li = generateElement("li", { name: "post", class: "post", id: "post", style: "{}", key: data.key });
  
    let h3 = generateSimpleTag("h2", data.postTitle);

    let h2 = generateElement("h3",{ id: 'comment' });
    h2.append( `${postString.userName} ${data.userName}`)
    let p = generateElement("p", { id: 'comment' });
    p.append(data.comment);
    let timeStamp = data.timeStamp.split(',');
    let time = generateSimpleTag("h6", `On ${timeStamp[0]}\nAt ${timeStamp[1]}`);

    // you can append multiple children in one line with jquery
    li.append( h3,  h2, time, p);
  
    return li;

}

function generatePost(data) {
    //let posts = $("#posts");
    let post = generateLi(data);
    post.css("list-style", "none");
    return post;
   // posts.append(post);
}

function initBlog() {
    console.log('setup called')
    $("#posts").empty();
    let posts = getItem("posts");
    let postOlLi = [];
    posts.forEach((post) => {
        postOlLi.push(generatePost(post));
    })
    $("#posts").append(...postOlLi);

}