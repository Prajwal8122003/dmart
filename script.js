document.getElementById('location').addEventListener('click',function(){
    document.getElementById('map').style.display='flex';
})
document.getElementById('map-close').addEventListener('click', function(){
    document.getElementById('map').style.display='none'
})



document.getElementById('sign-in').addEventListener('click',function(){
    document.getElementById('login').style.display='flex';
})
document.getElementById('close').addEventListener('click', function(){
    document.getElementById('login').style.display='none'
})

// auti-slide
let autoArray=[
        "image/autoslider-2.jpeg",
        "image/autoslider-1.jpeg",
        "image/autoslider-4.jpeg",
        "image/autoslider-5.jpeg"
]
let auto = document.getElementById('auto');
let index = 0;

function autoSlide(){
    index++;
    if(index>=autoArray.length){
        index=0;
    }
    auto.src=autoArray[index];
}
setInterval(autoSlide,2000)
// 
const searchInput = document.getElementById('search-1');
const searchTerms = [
    "Search for Agarbatti",
    "Search for Milk",
    "Search for Sweets",
    "Search for Rice",
    "Search for Biscuits"
];

let searchIndex = 0;

function rotatePlaceholder() {
    searchInput.placeholder = searchTerms[searchIndex];
    
    searchIndex = (searchIndex + 1) % searchTerms.length;
}

setInterval(rotatePlaceholder, 1500);


// button slider

const right = document.getElementById("right-button");
const left = document.getElementById("left-button");
const scroll = document.getElementById("special-cat"); 

// 1. Set how many pixels to move (115px card width + 45px gap = 160px)
const scrollAmount = 160;

// 2. When the right button is clicked, scroll forward smoothly
right.addEventListener("click", function() {
    scroll.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
    left.style.display='flex'
});



left.addEventListener("click", function() {
    scroll.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});



// 
// 
// 
// 
// 
// 
 const product = [
    // Groceries
    {
        id: 1,
        image: 'image/dmart-Rava.jfif',
        productname: 'Rava / Suji 1kg',
        mrp: 85,
        offerPrice: 65,
        category: 'grocery'
    },
    {
        id: 2,
        image: 'image/dmart-Moong Daal.jfif',
        productname: 'Moong Daal 1kg',
        mrp: 150,
        offerPrice: 125,
        category: 'grocery'
    },
    {
        id: 3,
        image: 'image/dmart-masoor Dal.jfif',
        productname: 'Masoor Dal 1kg',
        mrp: 140,
        offerPrice: 115,
        category: 'grocery'
    },
    {
        id: 4,
        image: 'image/Dmart- Wheat Lokvan.jfif',
        productname: 'D-Mart Wheat Lokvan',
        mrp: 480,
        offerPrice: 420,
        category: 'grocery'
    },

    // Ready to Eat
    {
        id: 5,
        image: 'image/ready-veggie upma.jfif',
        productname: 'Veggie Upma Mix',
        mrp: 120,
        offerPrice: 95,
        category: 'ready'
    },
    {
        id: 6,
        image: 'image/ready-mix veg.jfif',
        productname: 'Mix Veg Frozen',
        mrp: 170,
        offerPrice: 140,
        category: 'ready'
    },
    {
        id: 7,
        image: 'image/ready-french fries.jfif',
        productname: 'French Fries Frozen',
        mrp: 200,
        offerPrice: 160,
        category: 'ready'
    },
    {
        id: 8,
        image: 'image/ready-dal rice.jpg',
        productname: 'Dal Rice Instant Pack',
        mrp: 160,
        offerPrice: 130,
        category: 'ready'
    },
    {
        id: 9,
        image: 'image/ready-bitroot chilla.jfif',
        productname: 'Beetroot Chilla Mix',
        mrp: 140,
        offerPrice: 110,
        category: 'ready'
    },

    // Beverages
    {
        id: 10,
        image: 'image/beverage-protein drinks.jfif',
        productname: 'Protein Energy Drink',
        mrp: 180,
        offerPrice: 150,
        category: 'beverage'
    },
    {
        id: 11,
        image: 'image/beverage-pepsi.jfif',
        productname: 'Pepsi 500ml',
        mrp: 45,
        offerPrice: 40,
        category: 'beverage'
    },
    {
        id: 12,
        image: 'image/beverage-mockup.jfif',
        productname: 'Beverage Mockup Special',
        mrp: 120,
        offerPrice: 90,
        category: 'beverage'
    },
    {
        id: 13,
        image: 'image/beverage-fanta.jfif',
        productname: 'Fanta 500ml',
        mrp: 45,
        offerPrice: 40,
        category: 'beverage'
    },
    {
        id: 14,
        image: 'image/beverage-Cocacola.jfif',
        productname: 'Coca Cola 500ml',
        mrp: 45,
        offerPrice: 40,
        category: 'beverage'
    },

    // Cookies
    {
        id: 15,
        image: 'image/cookie-protein.jfif',
        productname: 'Protein Cookies',
        mrp: 240,
        offerPrice: 200,
        category: 'cookie'
    },
    {
        id: 16,
        image: 'image/cookie-kaju.jfif',
        productname: 'Kaju Premium Cookies',
        mrp: 220,
        offerPrice: 180,
        category: 'cookie'
    },
    {
        id: 17,
        image: 'image/cookie-ji.jfif',
        productname: 'Ji Special Cookies',
        mrp: 135,
        offerPrice: 110,
        category: 'cookie'
    },
    {
        id: 18,
        image: 'image/cookie-cream.jfif',
        productname: 'Cream Sandwich Cookies',
        mrp: 110,
        offerPrice: 90,
        category: 'cookie'
    },
    {
        id: 19,
        image: 'image/cookie-circle.jfif',
        productname: 'Circle Butter Cookies',
        mrp: 150,
        offerPrice: 120,
        category: 'cookie'
    },

    // Bath
    {
        id: 20,
        image: 'image/bath-original.jfif',
        productname: 'Original Bath Bar',
        mrp: 55,
        offerPrice: 40,
        category: 'bath'
    },
    {
        id: 21,
        image: 'image/bath-neon.jfif',
        productname: 'Neon Glow Soap',
        mrp: 80,
        offerPrice: 60,
        category: 'bath'
    },
    {
        id: 22,
        image: 'image/bath-moist.jfif',
        productname: 'Moisturizing Body Wash',
        mrp: 300,
        offerPrice: 250,
        category: 'bath'
    },
    {
        id: 23,
        image: 'image/bath-dewberry.jfif',
        productname: 'Dewberry Bath Soap',
        mrp: 60,
        offerPrice: 45,
        category: 'bath'
    },
    {
        id: 24,
        image: 'image/bath-brand.jfif',
        productname: 'Bath Brand Soap',
        mrp: 70,
        offerPrice: 50,
        category: 'bath'
    },

    // Fabrics
    {
        id: 25,
        image: 'image/fabric-5.jfif',
        productname: 'Fabric Special Care 5',
        mrp: 450,
        offerPrice: 399,
        category: 'fabric'
    },
    {
        id: 26,
        image: 'image/fabric-4.jfif',
        productname: 'Fabric Liquid Wash 4',
        mrp: 370,
        offerPrice: 319,
        category: 'fabric'
    },
    {
        id: 27,
        image: 'image/fabric-3.jfif',
        productname: 'Fabric Conditioner 3',
        mrp: 320,
        offerPrice: 279,
        category: 'fabric'
    },
    {
        id: 28,
        image: 'image/fabric-2.jfif',
        productname: 'Fabric Detergent 2',
        mrp: 400,
        offerPrice: 349,
        category: 'fabric'
    },
    {
        id: 29,
        image: 'image/fabric-1.jfif',
        productname: 'Fabric Softener 1',
        mrp: 350,
        offerPrice: 299,
        category: 'fabric'
    },

    // Cleaners
    {
        id: 30,
        image: 'image/cleaner-beco natural cleaner.jpg',
        productname: 'Beco Natural Cleaner',
        mrp: 249,
        offerPrice: 199,
        category: 'cleaner'
    },
    {
        id: 31,
        image: 'image/cleaner-detol.jpg',
        productname: 'Dettol Cleaner',
        mrp: 180,
        offerPrice: 149,
        category: 'cleaner'
    },
    {
        id: 32,
        image: 'image/cleaner-mould and mildew.jfif',
        productname: 'Mould and Mildew Cleaner',
        mrp: 260,
        offerPrice: 220,
        category: 'cleaner'
    },
    {
        id: 33,
        image: 'image/cleaner-harpic.jpg',
        productname: 'Harpic Cleaner',
        mrp: 140,
        offerPrice: 110,
        category: 'cleaner'
    },
    {
        id: 34,
        image: 'image/cleaner-multi harpic.jpg',
        productname: 'Multi Harpic Cleaner',
        mrp: 160,
        offerPrice: 130,
        category: 'cleaner'
    },
    {
        id: 35,
        image: 'image/cleaner-beco.jpg',
        productname: 'Beco Cleaner',
        mrp: 219,
        offerPrice: 179,
        category: 'cleaner'
    },
    {
        id: 36,
        image: 'image/cleaner-toilet.jpg',
        productname: 'Force Cleaner',
        mrp: 130,
        offerPrice: 99,
        category: 'cleaner'
    }
];

let cart=[]

function deliveryDate() {

            let date = new Date();

            date.setDate(date.getDate() + 5);

            return date.toLocaleDateString(
                "en-IN",
                {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                }
            );

        }

const productContainer= document.getElementById("products");

if (productContainer){
    displayProduct();
}

function displayProduct(){
    product.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
        <div class="img-box">
        <img src="${product.image}">
        </div>
        <h2 class="title-product">${product.productname}</h2>
        <p class="mrp"> MRP. &#8377;${product.mrp}</p>
        <p class="price"> &#8377;${product.offerPrice}</p>
        <p class="category-name"> Category:${product.category}</p>
        <p class="delivery"> Delivery:${deliveryDate()}</p>

        <div class="cart"><i class="fa-solid fa-cart-plus"></i>ADD TO CART</div> 
        <div class="button-for-count" id="button-for-count">

        <div class="cart-after-click">
        <button class="decrease" id="decrease"><i class="fa-regular fa-trash-can"></i></button>
        <span class="quantity" id="quantity"></span>
        <button class="add" id="add"><i class="fa-solid fa-plus"></i></button>
        </div>

        <button class="remove" id="remove"><i class="fa-solid fa-xmark"></i></button>        
        </div> 
         `;

        productContainer.appendChild(productCard);

        const cartBtn = productCard.querySelector(".cart");
        const cartVisible = productCard.querySelector(".button-for-count");
        const addBtn = productCard.querySelector(".add");
        const decreaseBtn = productCard.querySelector(".decrease");
        const removeBtn = productCard.querySelector(".remove");
        const quantitySpan = productCard.querySelector(".quantity");
        const rupeeBtn = document.getElementById("rupee")
        const countBtn = document.getElementById("count")

        let currentQuantity = 1;

        // fix value 1
        cartBtn.addEventListener("click", function() {
            cartBtn.style.display = 'none';
            cartVisible.style.display = "flex";
            currentQuantity = 1;
            quantitySpan.textContent = currentQuantity;
            cart.push({
            id: product.id,
            quantity: currentQuantity,
            offerPrice: product.offerPrice });
        });

        // add
        addBtn.addEventListener("click", function() {
            currentQuantity++;
            quantitySpan.textContent = currentQuantity;
            countBtn.textContent = currentQuantity;
        });

        // decrement
        decreaseBtn.addEventListener("click", function() {
            if (currentQuantity > 0) {
                currentQuantity--;
                quantitySpan.textContent = currentQuantity;
                countBtn.textContent = currentQuantity;
            } else {
                cartVisible.style.display = "none";
                cartBtn.style.display = "flex"; 
            }
        });

        // remove
        removeBtn.addEventListener("click", function() {
            cartVisible.style.display = "none";
            cartBtn.style.display = "flex";
            countBtn.innerHTML=`<span>0</span>`
        });

        // rupee

    })
}




