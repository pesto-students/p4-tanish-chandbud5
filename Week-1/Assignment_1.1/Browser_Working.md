# Assignment 1

## What is the main functionality of the browser?
The main functionality of the browser is to render the pages and bring the content from the server side to the client side. Browser's task is to display a particular page in response to the request made by the user.
## High Level Components of a browser.
- User Interface - To display the content requested by user and interact with it.
- Browser Engine - Based on user activity browser engine will act as a bridge between UI and rendering engine to make queries and manipulate data accordingly.
- Rendering Engine - It is responsible to display the content as it is supposed to look. It will traslate the page from HTML and add appropriate styling from CSS.
- Networking - It fetches data from URLs by using internet protocols. It's mainly responsible for internet communication and security.
- JavaScript InterPreter - It will traslate and execute the javaScript code and return the results to rendering engine to display results on device screen.
- UI Backend
- Data Storage - It is used by browser to store cookies, tokens and other session details. It has local storage, IndexedDB, FileSystem and etc.
## Rendering engine and its use
The rendering engine is responsible for interpreting the HTML and CSS and displaying the generated content. All major browsers are using different rendering engines which might lead to compatiblity issues some times. As these browsers render a website in different ways.
## Parsers (HTML, CSS, etc)
Parser will parse the HTML code and convert it to tokens. Now tokens will be converted to nodes which act as independent object. The nodes are linked in a tree like structure and the tree is called as DOM.
The CSS files are also parsed in a similar way where they convert tokens to nodes and further nodes are connected in a tree like structure. Now browser convert CSS file to CSS tree data structure and it is called as CSSOM which stands for CSS object model.
## Script Processors
The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network
## Tree construction
During the tree construction stage the DOM tree with the Document in its root will be modified and elements will be added to it. The element is added to the DOM tree, and also the stack of open elements. This stack is used to correct nesting mismatches and unclosed tags. The algorithm is also described as a state machine. The states are called "insertion modes".
## Order of script processing
If we are not dynamically loading script using async or defer then scripts are loaded in the order encountered in the page. Async specifies to load and run the script in random order and it will run them in any order.The script tag defer waits until the entire parser is done and then run all scripts marked with defer int the order they were encountered.
## Layout and Painting
Layout will be responsible for calculating positions and dimensions of each and every node on the screen. If we resize the screen size then it will be called again and position and dimension will be calculated again and components will be resized accordingly. Now we have computed size of each components in pixel all the nodes present in DOM tree will be will be rendered of actual size on screen

**How the request will be processed by browser**<br>
![Request Flow](./Browser%20flow.png)