# blog
This is a project demonstrating how javascript can be used to manipulate the dom and storing data between sessions

## How do we demonstrate storing data?
We accomplish this by having users enter their username, title of the post, and the text content of their comment on a form.  
When the user submits we validate their data and store it in localStorage.  If data is not valid the user is prompted to re-enter data.

## Acceptance Criteria
GIVEN a personal blog<br>
WHEN I load the app,<br>
THEN I am presented with the landing page containing a form with labels and inputs for username blog title, and blog content.<br>
WHEN I submit the form,<br>
THEN blog post data is stored to localStorage.<br>
WHEN the form submits,<br>
THEN I am redirected to the posts page.<br>
WHEN I enter try to submit a form without a username, title, or content,<br>
THEN I am presented with a message that prompts me to complete the form.<br>
WHEN I view the posts page,<br>
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.<br>
WHEN I click the light mode/dark mode toggle,<br>
THEN the page content's styles update to reflect the selection.<br>
WHEN I click the "Back" button,<br>
THEN I am redirected back to the landing page where I can input more blog entries.<br>
WHEN I view the main content,<br>
THEN I am presented with a list of blog posts that are pulled from localStorage.<br>
WHEN I view localStorage,<br>
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.<br>
WHEN I take a closer look at a single blog entry in the list,<br>
THEN I can see the title, the content, and the author of the post.<br>
WHEN I view the footer,<br>
THEN I am presented with a link to the developer's portfolio.<br>

## Credit to code sources
color-hexes for coffee colors from https://www.color-hex.com<br>
code to set text gradients is inspired by this post by Sarah L. Fossheim:<br>
    <span style="margin-left: 1em">https://fossheim.io/writing/posts/css-text-gradient/</span><br>
