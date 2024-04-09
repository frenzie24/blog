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



function generatePost(data) {
    //let posts = $("#posts");
    // spread operator to combine objs
    const postData = {
        name: "post",
        name: "post",
        class: "post",
        id: "post",
        style: "",
        ...data
    };

    let timeStamp = data.timeStamp.split(',');
    let children = [
        generateSimpleTag("h2", data.postTitle),

        generateElement("h3", { id: 'userName' }).append(`${postString.userName} ${data.userName}`),
        
        generateSimpleTag("h6", `On ${timeStamp[0]}\nAt ${timeStamp[1]}`),
        generateElement("p", { id: 'comment' }).append(data.comment),
    ];
    let post = generateElement("li", postData);//.attr("class", bgColors.light);
    
 
    // you can append multiple children in one line with jquery
    post.append(children);
    return post;
    // posts.append(post);
}

function initBlog() {
    console.log('setup called')
    let postsOl = $("#postsOl");

    let posts = getItem("posts");
    let postsOlLi = [];
    posts.forEach((post) => {
        postsOlLi.push(generatePost(post));
    })
    postsOl.empty().css('list-style', 'none').append(...postsOlLi);
   
}

$(function(){
    initBlog();
   
});