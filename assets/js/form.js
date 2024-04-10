/* js related to controlling our forms */
// chars we want to remove from strings for key generation
const badChars = ['-', ':', '.'];
// generates a key based on js Date obj passed
function keyGenerator(date) {
    let id = date.toISOString();
    for (let i = 0; i < badChars.length; i++) {
        id = id.replaceAll(badChars[i], '');
    }
    return id;
}

// gathers the form data, checks for validity, and stores or prompts
function dataGather(e) {
    e.preventDefault();
    let posts = getItem('posts');
    if (!posts) {
        posts = [];
    }
    // create a JSON to hold our user's input values 
    // a date obj to timestamp and generate a key
    // random int seeded with key
    const date = new Date();
    let data = {
        userName: $("#userName").val(),
        postTitle: $("#postTitle").val(),
        comment: $("#comment").val(),
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
            alert(`Error sumbitting.\n${key} field is blank.\n${msg.error.input}`);
            $(`#${key}`).trigger('focus');
            valid = false;
            return;
        }
    });
    if (valid) {

        posts.push(data);
        setItem('posts', posts);
        window.location.href = "blog.html";
    } else return;


}
// runs when document is ready
window.onload = () => {
    const submitBtn = $("#post");

    submitBtn.on("click", dataGather);
}

