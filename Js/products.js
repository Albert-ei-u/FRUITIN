// Fruits Page JavaScript

// Fruits Database
const fruitsData = [
    {
        id: 1,
        name: "Fresh Oranges",
        price: 700,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400&h=400&fit=crop",
        description: "Juicy organic oranges packed with vitamin C and natural sweetness",
        nutrition: "High in Vitamin C, Fiber, and Antioxidants"
    },
    {
        id: 2,
        name: "Ripe Bananas",
        price: 500,
        unit: "bunch",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
        description: "Sweet organic bananas perfect for smoothies and snacks",
        nutrition: "Rich in Potassium, Vitamin B6, and Energy"
    },
    {
        id: 3,
        name: "Fresh Apples",
        price: 900,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop",
        description: "Crisp organic apples with natural sweetness and crunch",
        nutrition: "High in Fiber, Vitamin C, and Antioxidants"
    },
    {
        id: 4,
        name: "Sweet Strawberries",
        price: 1800,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop",
        description: "Premium organic strawberries, hand-picked at peak ripeness",
        nutrition: "Rich in Vitamin C, Manganese, and Folate"
    },
    {
        id: 5,
        name: "Ripe Mangoes",
        price: 1200,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop",
        description: "Sweet tropical mangoes bursting with flavor",
        nutrition: "High in Vitamin A, Vitamin C, and Fiber"
    },
    {
        id: 6,
        name: "Fresh Pineapple",
        price: 1000,
        unit: "piece",
        image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&h=400&fit=crop",
        description: "Juicy organic pineapple with tropical sweetness",
        nutrition: "Rich in Vitamin C, Bromelain, and Manganese"
    },
    {
        id: 7,
        name: "Fresh Watermelon",
        price: 800,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=400&h=400&fit=crop",
        description: "Refreshing watermelon, perfect for hot days",
        nutrition: "High in Water, Vitamin C, and Lycopene"
    },
    {
        id: 8,
        name: "Organic Grapes",
        price: 1500,
        unit: "kg",
        image: "https://eu-images.contentstack.com/v3/assets/blt17bf506a5fa8d55b/blt4de9db41d25867d4/665f0e3c8db0bcb7061005d4/image.png?width=1280&auto=webp&quality=80&disable=upscale",
        description: "Sweet seedless grapes, perfect for snacking",
        nutrition: "Rich in Antioxidants, Vitamin K, and Resveratrol"
    },
    {
        id: 9,
        name: "Fresh Papaya",
        price: 600,
        unit: "piece",
        image: "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?w=400&h=400&fit=crop",
        description: "Tropical papaya with rich, sweet flavor",
        nutrition: "High in Vitamin C, Folate, and Digestive Enzymes"
    },
    {
        id: 10,
        name: "Organic Avocados",
        price: 1300,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop",
        description: "Creamy organic avocados, nutrient-dense superfood",
        nutrition: "Rich in Healthy Fats, Potassium, and Fiber"
    },
    {
        id: 11,
        name: "Fresh Kiwi",
        price: 2000,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=400&h=400&fit=crop",
        description: "Tangy organic kiwi packed with nutrients",
        nutrition: "High in Vitamin C, Vitamin K, and Fiber"
    },
    {
        id: 12,
        name: "Sweet Peaches",
        price: 1600,
        unit: "kg",
        image: "https://img.freepik.com/premium-photo/peaches-isolated-ripe-sweet-peach-slice_531456-684.jpg",
        description: "Juicy organic peaches with velvety sweetness",
        nutrition: "Rich in Vitamin C, Vitamin A, and Antioxidants"
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    displayFruits();
    animateOnScroll();
});

// Display all fruits
function displayFruits() {
    const catalog = document.getElementById('fruitsCatalog');
    
    catalog.innerHTML = fruitsData.map(fruit => `
        <div class="fruit-item" data-fruit-id="${fruit.id}">
            <img src="${fruit.image}" alt="${fruit.name}" class="fruit-image">
            <div class="fruit-info">
                <h3 class="fruit-name">${fruit.name}</h3>
                <div class="fruit-price">${fruit.price} FRW <span style="font-size: 14px; color: #999;">/ ${fruit.unit}</span></div>
                <p class="fruit-description">${fruit.description}</p>
                <button class="buy-fruit-btn" onclick="addFruitToCart(${fruit.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Add fruit to cart
function addFruitToCart(fruitId) {
    const fruit = fruitsData.find(f => f.id === fruitId);
    if (!fruit) return;
    
    // Get existing cart
    let cart = JSON.parse(localStorage.getItem('fruitinCart') || '[]');
    
    // Check if item exists
    const existingItem = cart.find(item => item.id === fruitId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...fruit,
            category: 'fruits',
            quantity: 1
        });
    }
    
    // Save cart
    localStorage.setItem('fruitinCart', JSON.stringify(cart));
    
    // Show notification
    showNotification(`${fruit.name} added to cart!`);
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #7cb342;
        color: white;
        padding: 15px 30px;
        border-radius: 50px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// Animate on scroll
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, { threshold: 0.1 });
    
    // Observe sections
    document.querySelectorAll('.fruit-item, .benefit-item, .nutrition-card, .review-card, .seasonal-card').forEach(el => {
        observer.observe(el);
    });
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add animations CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Newsletter subscription
document.querySelector('.subscribe-btn')?.addEventListener('click', function() {
    const emailInput = document.querySelector('.email-input');
    const email = emailInput.value;
    
    if (email && email.includes('@')) {
        showNotification('Thank you for subscribing!');
        emailInput.value = '';
    } else {
        showNotification('Please enter a valid email address');
    }
});