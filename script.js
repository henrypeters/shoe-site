const arr_of_pics = ["images/image-product-1-thumbnail.jpg", "images/image-product-2-thumbnail.jpg", "images/image-product-3-thumbnail.jpg", "images/image-product-4-thumbnail.jpg" ]

const largePicHolder =  document.getElementById("large-image") // stores img element in var
largePicHolder.src = arr_of_pics[0]

function setLargeImage (index) { // function to change image by setting a new src with the index of the array
    largePicHolder.src = arr_of_pics[index]
}

const menuBtn = document.getElementById("btn");

menuBtn.addEventListener("click", function() {
    const message = document.querySelector("#message");
    const card = document.createElement("div");
    card.classList.add("cart-card");

    message.appendChild(card)
})