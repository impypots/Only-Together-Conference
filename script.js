const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const burger = document.getElementById('burger');
const navBar = document.getElementById('navbar');
const imageIndexes = [];
for(let i = 1; i <= 125; i++){
    imageIndexes.push(i)
}
const selectedIndex = null;

burger.addEventListener('click', () => {
    if(navBar.style.transform == 'translateY(-82%)'){
        navBar.style.transform = 'translateY(0)'
    } else {
        navBar.style.transform = 'translateY(-82%)' 
    }
});

imageIndexes.forEach(i => {
    const image = document.createElement('img');
    image.src = `Images/Gallery/Compressed/gallery-image-${i}-min.jpg`;
    image.alt = `Image number ${i} of Only Together Conference Gallery`;
    image.classList.add('galleryImg');


    image.addEventListener('click', () => {
        //popup stuff
        popup.style.transform = `translateY(0)`
        selectedImage.src = `Images/Gallery/gallery-image-${i}.jpg`;
        selectedImage.alt = `Image number ${i} of Only Together Conference Gallery`;
        
    })

    gallery.appendChild(image)
});

popup.addEventListener('click', () => {
    popup.style.transform = `translateY(-100%)`;
 
    setTimeout(function(){
        selectedImage.src = ``;
        selectedImage.alt = ``;
    },500)
});

