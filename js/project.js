
let technology_id;

function displayProjectSlideShow(selectedTechnology) {
    console.log("display function called");
    hideProjectSlideShow();
    document.getElementById(selectedTechnology).style.display = 'block';


}

function hideProjectSlideShow() {
    console.log("hide function called");
    const select_classes = document.getElementsByClassName('slideshow-container');
    for (const select_class of select_classes){
        select_class.style.display = 'none';
    }
}
