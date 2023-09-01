function setVisibilityToDiv(divId, visibility) {
    let currentDiv = this.document.getElementById(divId);
    if (visibility === "hide") {
        if (currentDiv.style.display === "show") {
            currentDiv.style.display = "block";
        } else {
            currentDiv.style.display = "none";
        }
    } else if (visibility === "show") {
        currentDiv.style.display = "block";
    }
}

function doTheMagic() {
    if (window.innerWidth <= 991) {
        setVisibilityToDiv('social-media-horizontal-list', "hide");
    }
}

doTheMagic();