let searchBtn = document.querySelector('#search-btn')
let barBtn = document.querySelector('#bar-btn')
let navList = document.querySelector('#nav-list')
let searchBox = document.querySelector('.search-box')
let image = ['book-1.png','book-2.png','book-3.png','book-4.png','book-5.png','book-6.png']
let imgIndex = 1
let imgSlider = document.querySelector('#imgSlider')
let rightClick = document.querySelector('#right-btn')
let leftClick = document.querySelector('#left-btn')
let formBtn = document.querySelector('#user-btn')
let validate = document.querySelector('#validation')

searchBtn.addEventListener('click', ()=>{
    searchBtn.classList.toggle('fa-times')
    searchBox.classList.toggle('active')
})

formBtn.addEventListener('click', ()=>{
    formBtn.classList.toggle('fa-times')
    validate.classList.toggle('active')
})

leftClick.addEventListener('click',()=>{
    imgIndex = imgIndex - 1
    if(imgIndex == 0){
        leftClick.style.display = "none"
    }
    else{
        leftClick.style.display = "inline-block"
    }
    imgSlider.setAttribute('src', 'images/'+ image[imgIndex])
    if(imgIndex <= image.length-1){
        rightClick.style.display = "block"
    }
})
rightClick.addEventListener('click',()=>{
    imgIndex = imgIndex + 1
    if(imgIndex == image.length-1){
        rightClick.style.display = "none"
    }
    else{
        rightClick.style.display = "inline-block"
    }
    imgSlider.setAttribute('src', 'images/'+image[imgIndex])
    if(imgIndex >= 1){
        leftClick.style.display = "block"
    }
})

barBtn.addEventListener('click', ()=>{
    barBtn.classList.toggle('fa-times')
    navList.classList.toggle('active')
})
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times')
    searchBox.classList.remove('active')
    validate.classList.remove('active')
    formBtn.classList.remove('fa-times')
    barBtn.classList.remove('fa-times')
    navList.classList.remove('active')
}