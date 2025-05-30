// Sample product data
const products = [
    {
        id: 1,
        name: "Sony WH-1000XM5 hoofdtelefoon",
        price: 379.00,
        image: "https://image.coolblue.nl/422x390/products/1708286"
    },
    {
        id: 2,
        name: "Philips Hue White and Color Ambiance",
        price: 59.99,
        image: "https://image.coolblue.nl/422x390/products/986877"
    },
    {
        id: 3,
        name: "LEGO Star Wars Millennium Falcon",
        price: 169.00,
        image: "https://image.coolblue.nl/422x390/products/1222704"
    },
    {
        id: 4,
        name: "Nespresso Vertuo Next koffiemachine",
        price: 129.00,
        image: "https://image.coolblue.nl/422x390/products/1394714"
    },
    {
        id: 5,
        name: "Apple AirPods Pro (2e generatie)",
        price: 269.00,
        image: "https://image.coolblue.nl/422x390/products/1708286"
    },
    {
        id: 6,
        name: "Samsung Galaxy S23",
        price: 849.00,
        image: "https://image.coolblue.nl/422x390/products/1708286"
    },
    {
        id: 7,
        name: "Fitbit Charge 5",
        price: 149.95,
        image: "https://image.coolblue.nl/422x390/products/1708286"
    },
    {
        id: 8,
        name: "Oral-B iO Series 6 elektrische tandenborstel",
        price: 199.00,
        image: "https://image.coolblue.nl/422x390/products/1708286"
    }
];

// DOM elements
const popularProductsGrid = document.getElementById('popular-products');
const recommendedProductsGrid = document.getElementById('recommended-products');

// Render products
function renderProducts(products, container) {
    container.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-title">${product.name}</div>
                <div class="product-price">€ ${product.price.toFixed(2)}</div>
                <button class="add-to-cart">In winkelwagen</button>
            </div>
        </div>
    `).join('');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Load popular products (first 4)
    renderProducts(products.slice(0, 4), popularProductsGrid);
    
    // Load recommended products (last 4)
    renderProducts(products.slice(4), recommendedProductsGrid);
    
    // Add live reload notification
    if (typeof LiveReload !== 'undefined') {
        console.log('LiveReload is active');
    }
});

// Cart functionality
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
    }
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Event delegation for add to cart buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const productCard = e.target.closest('.product-card');
        if (productCard) {
            const productId = parseInt(productCard.dataset.id);
            addToCart(productId);
        }
    }
});