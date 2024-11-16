let container =document.querySelector('main')


let apiUrl = `https://api.unsplash.com/search/photos/?client_id=`
let KEY = "puXbNMC-XSqzxWvpIeFJrcK4tGd7ZGLc3cBCyoyI6qs"
let currPage = 1
let quarry="programing";

async function displayPicture(){
    let data = await fetch(`${apiUrl}${KEY}&query=${quarry}&page=${currPage}&per_page=12`)
    let res = await data.json();
    // console.log(res);
    
    res.results.forEach(ele => {
        
        let item = `
        <img src="${ele.urls.regular}" alt="">
    `
    container .innerHTML += item;
    });
    currPage++;
}

window.addEventListener('load',displayPicture)

// window.addEventListener('scroll',()=>{
//     console.log(document.body.offsetHeight);
    
//     if(Math.ceil(window.scrollY + window.innerHeight) >= document.body.offsetHeight){
//         displayPicture();
//     }
// })