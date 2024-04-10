/* js related to blog.html */
const postString = {
    userName: "Posted by:",
}

// creates an element with tag and sets initial attributes to data
function generateElement(tag, data) {
    let element = $(`<${tag}>`, data);
    return element;
}
// creates an element with tag and sets its value to val, no attribute assignments
function generateSimpleElement(tag, val) {
    let element = $(`<${tag}>`);
    element.val(val);
    return element;
}


// creates an element with tag and sets its innerText to val, no attribute assignments
function generateSimpleTag(tag, val) {
    let element = $(`<${tag}>`);
    element.text(val);
    return element;
}


// Create a post object with passed data object
function generatePost(data) {
   
    // spread operator to combine objs and build our post's data
    const postData = {
        name: "post",
        name: "post",
        class: "post",
        id: "post",
        style: "",
        ...data
    };
    // Splitting the timeStamp string lets us format the time easily using string literals
    // children is an array with all of the child elements and their associated data needed to build the post
    let timeStamp = data.timeStamp.split(',');
    let children = [
        generateSimpleTag("h2", data.postTitle),

        generateElement("h3", { id: 'userName' }).append(`${postString.userName} ${data.userName}`),
        
        generateSimpleTag("h6", `On ${timeStamp[0]}\nAt ${timeStamp[1]}`),
        generateElement("p", { id: 'comment' }).append(data.comment),
    ];
    // create an li element with postData
    let post = generateElement("li", postData);
    
    // you can append multiple children in one line with jquery!
    // syntax for multiple children is (array), (element1, element2, element3...)
    post.append(children);
    // after appending children to post return our post li element
    return post;
   
}


// ensures the Ol element is cleared and populated with stored posts data
function initBlog() {
    console.log('setup called')
    let postsOl = $("#postsOl");

    let posts = getItem("posts");
    let postsOlLi = [];
    
    posts ? posts.forEach((post) => {
        postsOlLi.push(generatePost(post));
    }) : console.log('Storage empty');

    postsOl.empty().css('list-style', 'none').append(...postsOlLi);
   
}
// Runs when document is ready
$(function(){
    initBlog();
   
});

var lo = "lorem "