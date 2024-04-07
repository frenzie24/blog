/* Not sure yet */

//function to toggle dark mode

const stores = { toggle: "toggle" };
const msg = {
    darkStatus: "Current dark-mode status: ",
    darkChange: "Dark-mode toggle selected.",
    error: {
        input: "Error submitting, input invalid.\nPlease make sure all fields have been entered."
    }
};

function errHandler()
{}
//  I just dont want to write the same line a million times 
//  so a wrapper function to set and get is here
function setItem(store, val) {
    val = typeof(val) === 'object' ? JSON.stringify(val) : val;
    localStorage.setItem(store, val);
}

function getItem(store) {
    /*
     we need to declare a variable here to transform it into 
    a boolean and return it
     */
    let val = localStorage.getItem(store);
    return val;
}

/* items are stored as strings
this parses the stored string back into a bool
*/
function checkToggle() {
    let val = getItem("toggle");
    /* 
    This inline conditional forces the return of a boolean.
    First we check to see if val is null. IF true, return false.
    ELSE IF val is !null we check if val is string "false". IF true, return false 
    ELSE IF val is !"false", return true
    */
    return val == null ? false : val == "false" ? false : true;
}


// toggles the style of the first article element in a document between light and dark
function toggleMode() {

    let article = document.getElementsByTagName("article")[0];
    var on = checkToggle();
    console.log(`${msg.darkStatus}${on}\n${msg.darkChange}`);
    on = !on;
    console.log(`${msg.darkStatus}${on}`);
    article.className = on ? "dark-mode" : "gradient-text-coffee";
    setItem("toggle", on);
}

