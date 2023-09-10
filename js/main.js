function myfunction() {
    // Get the window width
    var windowWidth = window.innerWidth;

    console.log(windowWidth);

    if(windowWidth <= 980 && windowWidth > 783){
        // Create a link element
        var linkElement = document.createElement("link");

        // Set the attributes of the link element
        linkElement.rel = "stylesheet";
        linkElement.href = "./css/style.css";

        // Append the link element to the head section of the document
        document.head.appendChild(linkElement);
    } else {
        var linkElement = document.createElement("link");
    
        // Set the attributes of the link element
        linkElement.rel = "stylesheet";
        linkElement.href = "./css/style1.css";

        // Append the link element to the head section of the document
        document.head.appendChild(linkElement);
    }
}