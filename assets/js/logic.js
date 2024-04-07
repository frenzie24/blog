/* Not sure yet */

//function to toggle dark mode

const stores = { toggle: "toggle" };

//  I just dont want to write the same line a million times 
//  so a wrapper function to set and get is here
export function setItem(store, val) {
    localStorage.setItem(store, val);
}

export function getItem(store) {
    /*
     we need to declare a variable here to transform it into 
    a boolean and return it
     */
    let val = localStorage.getItem(store);
   
}

/* items are stored as strings
this parses the stored string back into a bool
*/
function checkToggle() {
    let val = Boolean(getItem("toggle"));
    return val == null ? true : val;
}


// toggles the style of the first article element in a document between light and dark
function toggleMode() {

    let article = document.getElementsByTagName("article")[0];
    var on = checkToggle();
    console.log(`Current dark-mode status: ${on}`);
    on = !on;
    /*
    if (on === null || on == undefined) { on = true; }
    else on = !on;
    */
   article.className = !on ? "dark-mode" : "gradient-text-coffee";
    setItem(on);
}

