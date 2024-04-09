/* Not sure yet */

//function to toggle dark mode

const stores = { toggle: "toggle" };
const fontColors = {
    dark: "gradient-text-dark-coffee",
    light: "gradient-text-coffee",
    lighter: "gradient-text-light-coffee"
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
        input: "Please make sure all fields have been entered."
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

    let toggle = $('#darkModeToggle');//$("#darkModeToggle");
  
    console.log(`${msg.darkStatus}${!on}`);
    toggle.attr('checked', on);
    // toggle.setAttribute("checked",!on);
    setItem("toggle", on);
}

//sets the slider to the correct position relative to the saved dark-mode state
// sets dark mode to saved state
function initLogic() {

    let toggle = $("#darkModeToggle");

    let on = checkToggle();

    setElementsDarkMode(on);
    if (on) {
        toggle.attr("checked", '');
    }
}

//sets styles to dark or light mode
function setElementsDarkMode(on) {
    let main = $("#main");
    main.attr('class', on ? bgColors.dark : bgColors.light);
    const title = $("title").text();
   
    main.children("article").attr('class', on ? title == 'Blog' ? fontColors.lighter : fontColors.dark : fontColors.light);
    $("#topNav").attr('class', on ? title == 'Blog' ? fontColors.lighter : fontColors.dark : fontColors.light);
    $("#navHeader").attr('class', on ? bgColors.dark : bgColors.light);
    $("footer").css('color', on? fontColors.lighter : fontColors.dark);
    return on;
}

$(function () {
    initLogic();

});
