
let technology_id;

function displayProjectSlideShow(selectedTechnology) {
    hideProjectSlideShow();
    document.getElementById(selectedTechnology).style.display = 'block';
}

function hideProjectSlideShow() {
    const select_classes = document.getElementsByClassName('slideshow-container');
    for (const select_class of select_classes){
        select_class.style.display = 'none';
    }
}
