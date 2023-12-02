var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

let contentHead = $$('.content-item-head')
let imageContent = $$('.image-item');
let textPreview = $$('.text-content-item-preview');
let imagePreview = $$('.image-preview-item');

contentHead.forEach((element, index) => {
    element.addEventListener("click", function() {
        // remove active

        $('.image-item.active').classList.remove('active');
        $('.text-content-item-preview.text-active').classList.remove('text-active');
        $('.image-preview-item.preview-active').classList.remove('preview-active');

        // show Item
        imageContent[index].classList.add('active')
        textPreview[index].classList.add('text-active')
        imagePreview[index].classList.add('preview-active')
        
    });
});