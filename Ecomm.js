let trendCard = document.querySelectorAll(".trend-card");
let count = 0;
let shopCard = document.querySelectorAll(".shapcard")

trendCard.forEach(function(card, index) {
    card.style.left = `${index * 100}%`;
});

function myFun() {
    trendCard.forEach(function(curCard) {
        curCard.style.transform = `translateX(-${count * 100}%)`;
    });
}

let intervalId = setInterval(function() {
    count++;
    if (trendCard.length == count) {
        count = 0;
    }
    myFun();
}, 3000);

// Clear interval on user interaction
trendCard.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        clearInterval(intervalId);
    });
    card.addEventListener('mouseleave', function() {
        intervalId = setInterval(function() {
            count++;
            if (trendCard.length == count) {
                count = 0;
            }
            myFun();
        }, 2000);
    });
});
// ////////////////////card 
shopCard.forEach(function(shop){
    shop.addEventListener("click",function(){
        console.log(shop);
        let div =document.createElement("div");
        div.classList.add("cardDetial");
        div.innerHTML=`
        <i class="fa-solid fa-xmark  close" id="icon"></i>
        <img src=${shop.firstElementChild.src} alt="">
<div>

  <p class="he">best at shopping</p>
  <br><p>Size</p>
  <input type="number" placeholder="Selecte"><br>
  <p>Quality</p>
  <input type="number" ><br>
  <button>Add to Card</button>

</div>`
document.querySelector("body").appendChild(div);
document.getElementById("icon").addEventListener("click",function(){
    div.remove();
})


    })
})
