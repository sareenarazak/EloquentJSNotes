// Global binding document gives access to Document object model (DOM)
export function ch14 () {
    const docElement = document.documentElement;
    console.log(docElement); // reference to HTML tag element
    console.log( docElement.nodeType === Node.ELEMENT_NODE); // true

    // get and print all comment nodes
    console.log(document.childNodes.length); //2
    document.childNodes.forEach(cn =>
        console.log(`Node type is ${cn.nodeType}`));
    const mainChildNodes = document.childNodes;
    Array.from(mainChildNodes).forEach(mn => (console.log(mn.childNodes)));

    // Moving through DOM
    console.log(document.body.childNodes.length); //12
    console.log(document.body.children.length); //5
    Array.from(document.body.children).forEach(console.log)
    console.log(document.body.firstChild); // new line
    console.log(document.body.firstChild.nextSibling.nodeType === Node.COMMENT_NODE); // true
    console.log(document.body.lastChild); // script close tag
    console.log(document.body.lastChild.previousSibling.previousSibling); // script open tag

    // nodeValue ==> property of a text node or comment node
    const comment = document.body.firstChild.nextSibling;
    console.log(comment.nodeValue);

    // accessing by tag name --> gets all the direct and indirect descendents matching the tag name
    const paragraphs = document.getElementsByTagName("p");
    console.log(paragraphs[0].innerText); // Hello, I am Marijn and this is my home page.

    // accessing by id and class name
    // id --> returns one element since id is unique
    console.log(document.getElementById("ejs-link").href); //http://eloquentjavascript.net
    // array since class can be applied to multiple elements
    console.log(document.getElementsByClassName("main-heading")[0].innerText);  // My home page

    // Changing the document
    const createdPara = document.createElement("p");
    document.body.appendChild(createdPara); // inserts at the end of the document
    createdPara.innerText = "hello Im new"
    // removes the para above from the end of the document and inserts the first paragraph element
    document.body.insertBefore(createdPara, paragraphs[0]);

    const anotherPara = document.createElement("p");
    anotherPara.innerText = "Another para"
    // Now the index of the Hello, I am is 1, since the createdPara is at index 0 --> getElementsByClassName live updates
    document.body.insertBefore(anotherPara, paragraphs[1]); // getElement
    document.body.replaceChild(anotherPara, paragraphs[0]); // removes hello Im new and replaces w another para

    // to get a immutable node list use Array.from
    let paraArray = Array.from(document.body.getElementsByTagName("p"));
    document.body.insertBefore(createdPara, paragraphs[0]);// hello im new is added back
    //but the array is still same as before adding hello im new
    /**
     * Another para
     * Hello, I am Marijn and this is my home page.
     * I also wrote a book! Read it here.
     */
    paraArray.forEach(p => console.log(p.innerText));

    // to create a textnode
    const textNode = document.createTextNode("Hi I am created using createTextNode");
    document.body.appendChild(textNode);
    document.body.appendChild(document.createElement("br"));

    // attributes
    // normal attributes accessed via the name of it
    const btnDiv = document.createElement("div");
    const doggoSaysBtn = document.createElement("button");
    doggoSaysBtn.innerText = "Doggo says woof";
    doggoSaysBtn.id = "woof-btn";
    document.body.appendChild(btnDiv);
    btnDiv.appendChild(doggoSaysBtn);

    // To add custom attributes --> `data-` recommended prefix so no clash occurs
    doggoSaysBtn.setAttribute("data-name", "inji");
    const doggoName = doggoSaysBtn.getAttribute("data-name");
    console.log(doggoName);

    // getAttribute can be used to access normal element attributes
    console.log(doggoSaysBtn.getAttribute("id")); // woof-btn
    doggoSaysBtn.setAttribute("id", `${doggoName}-btn`);
    console.log(doggoSaysBtn.getAttribute("id"));

    // to access size and width of the elements `offsetWidth` and `offsetHeight` --> element takes up this much
    console.log(`Button size width : ${doggoSaysBtn.offsetWidth} height : ${doggoSaysBtn.offsetHeight}`);

    // clientHeight and clientWidth for space inside the element ignoring border
    console.log(`Button size width : ${doggoSaysBtn.clientWidth} height : ${doggoSaysBtn.clientHeight}`);

    // Finding precise position of the element on the screen
    const rltPos = doggoSaysBtn.getBoundingClientRect(); // relative to the top left of the screen
    console.log(`precise position of the dog button is top  ${rltPos.top}, bottom ${rltPos.bottom}, left ${rltPos.left}, right ${rltPos.right}`);
    //relative to the document TODO: could not find pageXOffset documentation

    //Styling --> access css property using camelcase or ["property-name"];
    doggoSaysBtn.style.backgroundColor = "#add8e6";
    doggoSaysBtn.style.border = "solid 2px red";

    const invisibleBtn = document.createElement("button");
    invisibleBtn.innerText ="Hi click me to make me vanish";
    invisibleBtn.style["background-color"] = "green";
    document.body.appendChild(invisibleBtn);
    invisibleBtn.onclick = (event) =>  event.target.style.display = "none";

    // also use <style> tag or .css file to style elements
    /**
     * style precedence - recency unless specificity
     *  # for id .for class
     *  parent > child --> applies to all direct children
     * parent child {...} all direct and indirect children
     */
      // querySelect all --> NodeList --> not live unlike the getElementsBy*

    // select by tag
    console.log(document.querySelectorAll("button").length); //2
    // select by id
    console.log(document.querySelectorAll("#inji-btn").length); //1
    //select by class
    console.log(document.querySelectorAll(".main-heading").length); //1

    //querySelect --> first matching element
    console.log(document.querySelector(".main-heading").tagName); // H1


    // POSITION
    /**
     * static : normal
     * relative : top left etc can be set
     * absolute: outside of the normal flow and the position is relative to the first parent whose property is relative
     */
}
ch14();
