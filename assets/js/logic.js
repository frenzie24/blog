/* Not sure yet */

//function to toggle dark mode

const stores = { toggle: "toggle" };
const fontColors = {
    dark: "dark-mode-gradient-text",
    light: "gradient-text-coffee",
}

// our background elements 'light' mode is just the relevant default tag styling
// so light mode is a empty class
const bgColors = {
    dark: "dark-mode",
    light: ""
}

// msg obj for
const msg = {
    darkStatus: "Current dark-mode status: ",
    darkChange: "Dark-mode toggle selected.",
    error: {
        input: "Error submitting, input invalid.\nPlease make sure all fields have been entered."
    }
};

function errHandler() { }
//  I just dont want to write the same line a million times 
//  so a wrapper function to set and get is here
function setItem(store, val) {
    val = typeof (val) === 'object' ? JSON.stringify(val) : val;
    localStorage.setItem(store, val);
}

function getItem(store) {
    /*
     we need to declare a variable here to transform it into 
    a boolean and return it
     */
    let val = localStorage.getItem(store);
    return JSON.parse(val);
}

/* 
 never return null bool
*/
function checkToggle() {
    let val = getItem("toggle");
    return val == null ? false : val;
}


// toggles the style of the first article element in a document between light and dark
function toggleMode() {
   
    // var on = checkToggle();
    
    let on = checkToggle();
    
    console.log(`${msg.darkStatus}${on}\n${msg.darkChange}`);
    on = !on;
    setElementsDarkMode(on);

    let toggle = document.getElementById("darkModeToggle");

    console.log(`${msg.darkStatus}${!on}`);
    
    toggle.setAttribute("checked",!on);
    setItem("toggle", on);
}

//sets the slider to the correct position relative to the saved dark-mode state
function setup() {

    let toggle = document.getElementById("darkModeToggle");

    let on = checkToggle();

    setElementsDarkMode(on);
    if (on){
    toggle.setAttribute("checked",'');
    }debugger;
    ///   toggle.value = on;
}

function setElementsDarkMode(on) {
    let header = document.getElementById("navHeader");
    let article = document.getElementById("postContainer");
    let main = document.getElementById("main");

    main.className = on ? bgColors.dark : bgColors.light;
    article.className = on ? fontColors.dark : fontColors.light;
    header.className = on ? bgColors.dark : bgColors.light;
    header.children[0].className = on ? fontColors.dark : fontColors.light;
    return on;
}

