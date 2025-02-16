const search = document.querySelectorAll(".js-search")
const banner = document.querySelector(".section-2-img img")
const add = document.querySelectorAll(".ADD")
const cart =document.querySelector(".my-cart")
var counter = 0;

function changeinput(item , time){
    setInterval(()=>{
        search.forEach((el)=>{
            el.placeholder = item
        })
       
    },time)

}

changeinput("search",2500)
changeinput("ice cream",5500)
changeinput("milk",9000)


const bannerVar = [
    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=720/layout-engine/2022-06/morning-banner.jpg" ,
    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=720/layout-engine/2023-03/Pet-Care_WEB.jpg",
    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=720/layout-engine/2023-03/summer_WEB.jpg",
    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=720/layout-engine/2023-03/electronic-WEB-1.jpg",
    ]

    // setInterval(() => {
    //     console.log("Changing to:", bannerVar[index]); // Debugging
    //     banner.src = bannerVar[index];
    //     index = (index + 1) % bannerVar.length;
    // }, 8000);
    



    let index = 0;
    setInterval(() => {
        banner.style.opacity = 0;
        setTimeout(() => {
            banner.src = bannerVar[index];
            banner.style.opacity = 1;
            index = (index + 1) % bannerVar.length;
        },80); // Change after fade-out
    }, 4000);

add.forEach((el)=>{
    el.addEventListener('click',()=>{
       
       if(el.innerText=='ADD'){
        cart.innerText = `cart ${++counter}`
        el.innerText = "Remove"
       }
       else{
        el.innerText="ADD"
        cart.innerText=`cart ${--counter}`
       }

    })
})




