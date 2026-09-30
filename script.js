/* ==========================================================================
   BITEBUDDY - MAIN JAVASCRIPT APP
   Modular, Robust Vanilla JS Application with LocalStorage Persistence
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       1. FOOD DATASET (24 Student-Friendly Items across 10 Categories)
       -------------------------------------------------------------------------- */
    const FOOD_ITEMS = [
        {
            id: 'fb-01',
            name: 'Paneer Tikka Roll',
            category: 'Rolls & Wraps',
            price: 79,
            origPrice: 120,
            discount: 34,
            rating: 4.6,
            reviews: 128,
            veg: true,
            image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
            description: 'Juicy grilled paneer with spicy mint chutney & onions wrapped in a crispy paratha.',
            studentPick: true,
            subTag: 'lunch'
        },
        {
            id: 'fb-02',
            name: 'Cheesy Student Burger',
            category: 'Burgers',
            price: 89,
            origPrice: 139,
            discount: 36,
            rating: 4.5,
            reviews: 210,
            veg: true,
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
            description: 'Crispy golden veg patty topped with molten liquid cheese, onion rings, and secret sauce.',
            studentPick: true,
            subTag: 'latenight'
        },
        {
            id: 'fb-03',
            name: 'Peri Peri Chicken Roll',
            category: 'Rolls & Wraps',
            price: 99,
            origPrice: 149,
            discount: 33,
            rating: 4.7,
            reviews: 185,
            veg: false,
            image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
            description: 'Spicy peri peri chicken strips wrapped with crunchy lettuce, onions, and Chipotle mayo.',
            studentPick: true,
            subTag: 'latenight'
        },
        {
            id: 'fb-04',
            name: 'Classic Margherita Pizza',
            category: 'Pizza',
            price: 129,
            origPrice: 199,
            discount: 35,
            rating: 4.8,
            reviews: 340,
            veg: true,
            image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80',
            description: '10-inch hand-tossed pizza loaded with 100% real mozzarella cheese & fresh basil leaves.',
            studentPick: false,
            subTag: 'lunch'
        },
        {
            id: 'fb-05',
            name: 'Loaded Cheese Burst Pizza',
            category: 'Pizza',
            price: 179,
            origPrice: 259,
            discount: 30,
            rating: 4.9,
            reviews: 420,
            veg: true,
            image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80',
            description: 'Crust bursting with hot liquid cheddar cheese, topped with sweet corn & green bell peppers.',
            studentPick: false,
            subTag: 'lunch'
        },
        {
            id: 'fb-06',
            name: 'Chicken Pepperoni Overload Pizza',
            category: 'Pizza',
            price: 219,
            origPrice: 329,
            discount: 33,
            rating: 4.7,
            reviews: 275,
            veg: false,
            image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80',
            description: 'Crispy thin crust topped with spicy chicken pepperoni slices and smoked mozzarella.',
            studentPick: false,
            subTag: 'lunch'
        },
        {
            id: 'fb-07',
            name: 'Desi Butter Chicken Biryani',
            category: 'Indian',
            price: 149,
            origPrice: 220,
            discount: 32,
            rating: 4.8,
            reviews: 510,
            veg: false,
            image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
            description: 'Aromatic long-grain basmati rice cooked with succulent chicken chunks in creamy makhani gravy.',
            studentPick: false,
            subTag: 'lunch'
        },
        {
            id: 'fb-08',
            name: 'Paneer Butter Masala + Naan Combo',
            category: 'Indian',
            price: 139,
            origPrice: 199,
            discount: 30,
            rating: 4.6,
            reviews: 310,
            veg: true,
            image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80',
            description: 'Rich creamy cottage cheese gravy served with 2 hot butter garlic naans.',
            studentPick: false,
            subTag: 'lunch'
        },
        {
            id: 'fb-09',
            name: 'Chilli Garlic Hack Noodles',
            category: 'Noodles',
            price: 89,
            origPrice: 135,
            discount: 34,
            rating: 4.4,
            reviews: 165,
            veg: true,
            image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80',
            description: 'Wok-tossed spicy noodles loaded with crunchy veggies and chilli garlic soy drizzle.',
            studentPick: true,
            subTag: 'evening'
        },
        {
            id: 'fb-10',
            name: 'Schezwan Chicken Noodles',
            category: 'Noodles',
            price: 109,
            origPrice: 160,
            discount: 32,
            rating: 4.6,
            reviews: 195,
            veg: false,
            image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80',
            description: 'Fiery street-style noodles tossed with shredded chicken, peppers, and schezwan paste.',
            studentPick: false,
            subTag: 'lunch'
        },
        {
            id: 'fb-11',
            name: 'Campus Crunch Fries',
            category: 'Snacks',
            price: 49,
            origPrice: 79,
            discount: 38,
            rating: 4.5,
            reviews: 450,
            veg: true,
            image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80',
            description: 'Golden, extra-crispy salted potato fries served with tangy tomato ketchup.',
            studentPick: true,
            subTag: 'snacks'
        },
        {
            id: 'fb-12',
            name: 'Peri Peri Cheese Fries',
            category: 'Snacks',
            price: 69,
            origPrice: 99,
            discount: 30,
            rating: 4.7,
            reviews: 380,
            veg: true,
            image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80',
            description: 'Hot crispy potato fries dusted with fiery peri peri seasoning and loaded with warm cheese sauce.',
            studentPick: true,
            subTag: 'evening'
        },
        {
            id: 'fb-13',
            name: 'Crispy Chicken Wings (6 pcs)',
            category: 'Fast Food',
            price: 149,
            origPrice: 219,
            discount: 32,
            rating: 4.8,
            reviews: 290,
            veg: false,
            image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80',
            description: 'Deep-fried golden chicken wings tossed in smoky barbecue and hot buffalo glaze.',
            studentPick: false,
            subTag: 'evening'
        },
        {
            id: 'fb-14',
            name: 'Veg Fried Momos (8 pcs)',
            category: 'Snacks',
            price: 79,
            origPrice: 119,
            discount: 33,
            rating: 4.6,
            reviews: 360,
            veg: true,
            image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=600&q=80',
            description: 'Crispy fried dumplings stuffed with seasoned cabbage and carrots, served with spicy red chutney.',
            studentPick: true,
            subTag: 'evening'
        },
        {
            id: 'fb-15',
            name: 'Choco Lava Cake',
            category: 'Desserts',
            price: 59,
            origPrice: 89,
            discount: 33,
            rating: 4.9,
            reviews: 520,
            veg: true,
            image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
            description: 'Warm, fluffy chocolate sponge cake with a rich molten chocolate fudge center.',
            studentPick: true,
            subTag: 'snacks'
        },
        {
            id: 'fb-16',
            name: 'Oreo Thick Milkshake',
            category: 'Beverages',
            price: 79,
            origPrice: 120,
            discount: 34,
            rating: 4.7,
            reviews: 340,
            veg: true,
            image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
            description: 'Thick vanilla ice cream milkshake blended with crushed Oreo biscuits & chocolate drizzle.',
            studentPick: true,
            subTag: 'evening'
        },
        {
            id: 'fb-17',
            name: 'Chilled Iced Cold Coffee',
            category: 'Beverages',
            price: 59,
            origPrice: 89,
            discount: 33,
            rating: 4.6,
            reviews: 410,
            veg: true,
            image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
            description: 'Refreshing espresso coffee blended with cold milk, chocolate syrup, and ice.',
            studentPick: true,
            subTag: 'snacks'
        },
        {
            id: 'fb-18',
            name: 'Healthy Avocado Protein Salad',
            category: 'Healthy',
            price: 119,
            origPrice: 169,
            discount: 29,
            rating: 4.5,
            reviews: 115,
            veg: true,
            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
            description: 'Fresh romaine lettuce, avocado slices, chickpeas, cherry tomatoes & lemon zesty dressing.',
            studentPick: false,
            subTag: 'lunch'
        },
        {
            id: 'fb-19',
            name: 'Grilled Chicken Caesar Salad',
            category: 'Healthy',
            price: 139,
            origPrice: 199,
            discount: 30,
            rating: 4.6,
            reviews: 140,
            veg: false,
            image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=600&q=80',
            description: 'Juicy herb-grilled chicken breast, crisp lettuce, parmesan cheese shavings & garlic croutons.',
            studentPick: false,
            subTag: 'lunch'
        },
        {
            id: 'fb-20',
            name: 'Brownie Sundae with Vanilla',
            category: 'Desserts',
            price: 89,
            origPrice: 129,
            discount: 31,
            rating: 4.8,
            reviews: 230,
            veg: true,
            image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80',
            description: 'Hot fudgy walnut brownie topped with a scoop of creamy vanilla bean ice cream & chocolate sauce.',
            studentPick: true,
            subTag: 'latenight'
        },
        {
            id: 'fb-21',
            name: 'Smoky BBQ Chicken Burger',
            category: 'Burgers',
            price: 119,
            origPrice: 169,
            discount: 29,
            rating: 4.7,
            reviews: 210,
            veg: false,
            image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
            description: 'Flame-grilled chicken patty glazed in smoky BBQ sauce with cheddar cheese & caramelised onions.',
            studentPick: false,
            subTag: 'latenight'
        },
        {
            id: 'fb-22',
            name: 'Monster Double Veg Patty Burger',
            category: 'Burgers',
            price: 99,
            origPrice: 149,
            discount: 33,
            rating: 4.5,
            reviews: 180,
            veg: true,
            image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
            description: 'Stacked double potato herb patties with double cheese slices, crispy lettuce, and garlic mayo.',
            studentPick: true,
            subTag: 'latenight'
        },
        {
            id: 'fb-23',
            name: 'Masala Chai & Samosa Twin Pack',
            category: 'Snacks',
            price: 39,
            origPrice: 60,
            discount: 35,
            rating: 4.9,
            reviews: 610,
            veg: true,
            image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
            description: 'Steaming hot ginger cardamom cutting chai served with 2 crisp golden potato samosas.',
            studentPick: true,
            subTag: 'snacks'
        },
        {
            id: 'fb-24',
            name: 'Fresh Lemon Mint Mojito',
            category: 'Beverages',
            price: 49,
            origPrice: 75,
            discount: 34,
            rating: 4.6,
            reviews: 280,
            veg: true,
            image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
            description: 'Crushed garden mint, fresh lime juice, sugar cane & sparkling soda served over ice.',
            studentPick: true,
            subTag: 'snacks'
        }
    ];

    /* --------------------------------------------------------------------------
       2. SPECIAL COMBOS DATASET (FIRE DEALS)
       -------------------------------------------------------------------------- */
    const STUDENT_DEALS = [
        {
            id: 'deal-01',
            title: 'Student Combo Pack',
            itemsDesc: '1 Cheesy Veg Burger + 1 Campus Crunch Fries + 1 Chilled Cold Coffee',
            price: 129,
            origPrice: 249,
            saveAmount: 120,
            icon: '🍔',
            image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'deal-02',
            title: 'Late Night Hunger Deal 🌙',
            itemsDesc: '2 Paneer / Chicken Rolls + 1 Oreo Milkshake + Free Ketchup',
            price: 119,
            origPrice: 220,
            saveAmount: 101,
            icon: '🌯',
            image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'deal-03',
            title: 'Budget Biryani Feast 🍛',
            itemsDesc: '1 Butter Chicken/Paneer Biryani + Mint Raita + 1 Choco Lava Cake',
            price: 99,
            origPrice: 180,
            saveAmount: 81,
            icon: '🍛',
            image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'deal-04',
            title: 'Hostel Pizza Party Pack 🍕',
            itemsDesc: '2 Personal Margherita Pizzas + Garlic Breadstick + 2 Cold Drinks',
            price: 229,
            origPrice: 399,
            saveAmount: 170,
            icon: '🍕',
            image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80'
        }
    ];

    /* --------------------------------------------------------------------------
       3. CATEGORIES LIST
       -------------------------------------------------------------------------- */
    const CATEGORIES = [
        { name: 'All Categories', icon: '✨', key: 'all' },
        { name: 'Pizza', icon: '🍕', key: 'Pizza' },
        { name: 'Burgers', icon: '🍔', key: 'Burgers' },
        { name: 'Noodles', icon: '🍜', key: 'Noodles' },
        { name: 'Indian', icon: '🍛', key: 'Indian' },
        { name: 'Rolls & Wraps', icon: '🌯', key: 'Rolls & Wraps' },
        { name: 'Snacks', icon: '🍟', key: 'Snacks' },
        { name: 'Beverages', icon: '🥤', key: 'Beverages' },
        { name: 'Desserts', icon: '🍰', key: 'Desserts' },
        { name: 'Healthy', icon: '🥗', key: 'Healthy' },
        { name: 'Fast Food', icon: '🍗', key: 'Fast Food' }
    ];

    /* --------------------------------------------------------------------------
       4. APPLICATION STATE MANAGEMENT
       -------------------------------------------------------------------------- */
    let cart = JSON.parse(localStorage.getItem('bitebuddy_cart')) || [];
    let favorites = JSON.parse(localStorage.getItem('bitebuddy_favorites')) || [];
    let orders = JSON.parse(localStorage.getItem('bitebuddy_orders')) || [];
    let appliedCoupon = JSON.parse(localStorage.getItem('bitebuddy_coupon')) || null;
    let userProfile = JSON.parse(localStorage.getItem('bitebuddy_user_profile')) || {
        preferredCategory: 'Pizza',
        searchCount: {},
        categoryClicks: {}
    };

    // Active Filter State
    let activeCategory = 'all';
    let activeSearchQuery = '';
    let activeVegFilter = 'all';
    let activeSort = 'default';
    let activePriceRange = 'all';
    let activeRatingFilter = 'all';
    let activeStudentTab = 'all';

    /* --------------------------------------------------------------------------
       5. DOM ELEMENTS REFERENCE
       -------------------------------------------------------------------------- */
    const foodGrid = document.getElementById('food-grid');
    const categoriesContainer = document.getElementById('categories-container');
    const emptyState = document.getElementById('empty-food-state');
    const dealsGrid = document.getElementById('deals-grid');
    const studentPicksGrid = document.getElementById('student-picks-grid');
    const recommendationGrid = document.getElementById('recommendation-grid');
    const recReasonText = document.getElementById('rec-reason-text');
    const ordersListContainer = document.getElementById('orders-list-container');
    const favoritesGrid = document.getElementById('favorites-grid');
    const emptyFavState = document.getElementById('empty-fav-state');

    // Filter Controls
    const mainSearchInput = document.getElementById('main-search-input');
    const headerSearchInput = document.getElementById('header-search-input');
    const clearSearchBtn = document.getElementById('clear-search-btn');
    const sortSelect = document.getElementById('sort-select');
    const resetFiltersBtn = document.getElementById('reset-filters-btn');
    const emptyResetBtn = document.getElementById('empty-reset-btn');
    const activeFilterSummary = document.getElementById('active-filter-summary');

    // Cart Elements
    const cartDrawer = document.getElementById('cart-drawer');
    const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
    const cartDrawerBtn = document.getElementById('cart-drawer-btn');
    const mobileBottomCartBtn = document.getElementById('mobile-bottom-cart-btn');
    const closeCartDrawer = document.getElementById('close-cart-drawer');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartEmptyState = document.getElementById('cart-empty-state');
    const cartBadge = document.getElementById('cart-badge');
    const mobileCartBadge = document.getElementById('mobile-cart-badge');
    const cartDrawerCount = document.getElementById('cart-drawer-count');
    const cartExploreBtn = document.getElementById('cart-explore-btn');

    // Bill Details
    const billSubtotal = document.getElementById('bill-subtotal');
    const billDiscount = document.getElementById('bill-discount');
    const billDelivery = document.getElementById('bill-delivery');
    const billTotal = document.getElementById('bill-total');
    const deliveryProgressBar = document.getElementById('delivery-progress-bar');
    const deliveryProgressText = document.getElementById('delivery-progress-text');

    // Coupon Elements
    const couponInput = document.getElementById('coupon-input');
    const applyCouponBtn = document.getElementById('apply-coupon-btn');
    const appliedCouponMsg = document.getElementById('applied-coupon-msg');
    const couponSuccessText = document.getElementById('coupon-success-text');
    const removeCouponBtn = document.getElementById('remove-coupon-btn');

    // Modals
    const favModalOverlay = document.getElementById('fav-modal-overlay');
    const favoritesModalBtn = document.getElementById('favorites-modal-btn');
    const closeFavModal = document.getElementById('close-fav-modal');
    const favBadge = document.getElementById('fav-badge');
    const mobileFavCount = document.getElementById('mobile-fav-count');

    const checkoutModalOverlay = document.getElementById('checkout-modal-overlay');
    const proceedCheckoutBtn = document.getElementById('proceed-checkout-btn');
    const closeCheckoutModal = document.getElementById('close-checkout-modal');
    const checkoutForm = document.getElementById('checkout-form');
    const checkoutTotalAmount = document.getElementById('checkout-total-amount');

    const successModalOverlay = document.getElementById('success-modal-overlay');
    const successOrderId = document.getElementById('success-order-id');
    const successItemsList = document.getElementById('success-items-list');
    const successTotalPaid = document.getElementById('success-total-paid');
    const trackOrderBtn = document.getElementById('track-order-btn');
    const continueShoppingBtn = document.getElementById('continue-shopping-btn');

    // Theme Toggle Elements
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const mobileThemeSwitch = document.getElementById('mobile-theme-switch');

    // Mobile Nav Drawer Elements
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const closeMobileNav = document.getElementById('close-mobile-nav');

    /* --------------------------------------------------------------------------
       6. THEME / DARK MODE CONTROLLER
       -------------------------------------------------------------------------- */
    function initTheme() {
        const savedTheme = localStorage.getItem('bitebuddy_theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('bitebuddy_theme', newTheme);
        showToast(`Switched to ${newTheme} mode 🌙`, '✨');
    }

    themeToggleBtn?.addEventListener('click', toggleTheme);
    mobileThemeSwitch?.addEventListener('click', toggleTheme);
    initTheme();

    /* --------------------------------------------------------------------------
       7. RENDER CATEGORIES CAROUSEL
       -------------------------------------------------------------------------- */
    function renderCategories() {
        if (!categoriesContainer) return;
        categoriesContainer.innerHTML = CATEGORIES.map(cat => `
            <button class="category-pill ${activeCategory === cat.key ? 'active' : ''}" data-category="${cat.key}">
                <span class="category-icon">${cat.icon}</span>
                <span>${cat.name}</span>
            </button>
        `).join('');

        categoriesContainer.querySelectorAll('.category-pill').forEach(btn => {
            btn.addEventListener('click', () => {
                activeCategory = btn.dataset.category;
                
                // Track user interest for AI recommendations
                if (activeCategory !== 'all') {
                    userProfile.categoryClicks[activeCategory] = (userProfile.categoryClicks[activeCategory] || 0) + 1;
                    userProfile.preferredCategory = activeCategory;
                    localStorage.setItem('bitebuddy_user_profile', JSON.stringify(userProfile));
                }

                renderCategories();
                applyFiltersAndRenderMenu();
                renderRecommendations();
            });
        });
    }

    /* --------------------------------------------------------------------------
       8. FILTERING & SORTING LOGIC
       -------------------------------------------------------------------------- */
    function getFilteredFoodItems() {
        return FOOD_ITEMS.filter(item => {
            // Category Filter
            if (activeCategory !== 'all' && item.category !== activeCategory) {
                return false;
            }

            // Search Query Filter
            if (activeSearchQuery.trim() !== '') {
                const query = activeSearchQuery.toLowerCase();
                const matchName = item.name.toLowerCase().includes(query);
                const matchCat = item.category.toLowerCase().includes(query);
                const matchDesc = item.description.toLowerCase().includes(query);
                if (!matchName && !matchCat && !matchDesc) return false;
            }

            // Veg / Non-Veg Filter
            if (activeVegFilter === 'veg' && !item.veg) return false;
            if (activeVegFilter === 'non-veg' && item.veg) return false;

            // Price Range Filter
            if (activePriceRange === 'under-50' && item.price >= 50) return false;
            if (activePriceRange === '50-100' && (item.price < 50 || item.price > 100)) return false;
            if (activePriceRange === '100-150' && (item.price < 100 || item.price > 150)) return false;
            if (activePriceRange === '150-250' && (item.price < 150 || item.price > 250)) return false;
            if (activePriceRange === '250-plus' && item.price <= 250) return false;

            // Rating Filter
            if (activeRatingFilter !== 'all') {
                const minRating = parseFloat(activeRatingFilter);
                if (item.rating < minRating) return false;
            }

            return true;
        }).sort((a, b) => {
            if (activeSort === 'price-low') return a.price - b.price;
            if (activeSort === 'price-high') return b.price - a.price;
            if (activeSort === 'rating-high') return b.rating - a.rating;
            if (activeSort === 'discount-high') return b.discount - a.discount;
            return 0; // default
        });
    }

    function applyFiltersAndRenderMenu() {
        const filteredItems = getFilteredFoodItems();
        
        // Update summary subtitle
        if (activeFilterSummary) {
            let desc = `Showing ${filteredItems.length} available items`;
            if (activeCategory !== 'all') desc += ` in ${activeCategory}`;
            if (activeSearchQuery) desc += ` for "${activeSearchQuery}"`;
            activeFilterSummary.textContent = desc;
        }

        if (filteredItems.length === 0) {
            foodGrid.classList.add('hidden');
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
            foodGrid.classList.remove('hidden');
            renderFoodGrid(filteredItems, foodGrid);
        }
    }

    /* --------------------------------------------------------------------------
       9. FOOD CARD HTML BUILDER & RENDERER
       -------------------------------------------------------------------------- */
    function buildFoodCardHTML(item) {
        const isFav = favorites.includes(item.id);
        const cartItem = cart.find(c => c.id === item.id);
        const qtyInCart = cartItem ? cartItem.quantity : 0;

        return `
            <div class="food-card" data-id="${item.id}">
                <div class="food-card-img-wrapper">
                    <img src="${item.image}" alt="${item.name}" class="food-card-img" loading="lazy">
                    ${item.discount ? `<span class="badge-discount">🔥 ${item.discount}% OFF</span>` : ''}
                    ${item.price < 99 ? `<span class="badge-student-tag">Student Friendly 💰</span>` : ''}
                    <button class="fav-btn ${isFav ? 'active' : ''}" data-fav-id="${item.id}" aria-label="Add to Favorites">
                        <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
                    </button>
                </div>
                <div class="food-card-body">
                    <div class="food-card-header">
                        <h3 class="food-title">${item.name}</h3>
                        <div class="veg-icon ${item.veg ? '' : 'non-veg'}" title="${item.veg ? 'Pure Veg' : 'Non-Veg'}">
                            <span class="inner-dot"></span>
                        </div>
                    </div>
                    <p class="food-desc">${item.description}</p>
                    <div class="food-rating-row">
                        <span class="rating-badge">⭐ ${item.rating.toFixed(1)}</span>
                        <span class="reviews-count">(${item.reviews} reviews)</span>
                    </div>
                    <div class="food-card-footer">
                        <div class="price-box">
                            <span class="current-price">₹${item.price}</span>
                            ${item.origPrice ? `<span class="original-price">/₹${item.origPrice}/</span>` : ''}
                        </div>
                        ${qtyInCart > 0 ? `
                            <div class="card-qty-control">
                                <button class="card-qty-btn decrease-qty-btn" data-id="${item.id}">-</button>
                                <span class="card-qty-num">${qtyInCart}</span>
                                <button class="card-qty-btn increase-qty-btn" data-id="${item.id}">+</button>
                            </div>
                        ` : `
                            <button class="add-cart-btn add-to-cart-trigger" data-id="${item.id}">
                                <i class="fa-solid fa-plus"></i> Add
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;
    }

    function renderFoodGrid(items, targetContainer) {
        if (!targetContainer) return;
        targetContainer.innerHTML = items.map(buildFoodCardHTML).join('');
        attachFoodCardListeners(targetContainer);
    }

    function attachFoodCardListeners(container) {
        // Add to Cart
        container.querySelectorAll('.add-to-cart-trigger').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const itemId = btn.dataset.id;
                addToCart(itemId);
            });
        });

        // Quantity Increase / Decrease inside card
        container.querySelectorAll('.increase-qty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                updateCartQuantity(btn.dataset.id, 1);
            });
        });

        container.querySelectorAll('.decrease-qty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                updateCartQuantity(btn.dataset.id, -1);
            });
        });

        // Favorite Toggle
        container.querySelectorAll('.fav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const favId = btn.dataset.favId;
                toggleFavorite(favId);
            });
        });
    }

    /* --------------------------------------------------------------------------
       10. RENDER STUDENT DEALS & COMBO PACKS
       -------------------------------------------------------------------------- */
    function renderDeals() {
        if (!dealsGrid) return;
        dealsGrid.innerHTML = STUDENT_DEALS.map(deal => `
            <div class="deal-card">
                <span class="deal-save-tag">SAVE ₹${deal.saveAmount}</span>
                <div class="deal-card-icon">${deal.icon}</div>
                <h3 class="deal-title">${deal.title}</h3>
                <p class="deal-items-desc">${deal.itemsDesc}</p>
                <div class="deal-price-row">
                    <div class="deal-price-box">
                        <span class="deal-price">₹${deal.price}</span>
                        <span class="deal-orig-price">/₹${deal.origPrice}/</span>
                    </div>
                    <button class="btn btn-primary btn-sm grab-deal-btn" data-deal-id="${deal.id}">
                        Grab Deal 🛒
                    </button>
                </div>
            </div>
        `).join('');

        dealsGrid.querySelectorAll('.grab-deal-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const dealId = btn.dataset.dealId;
                const dealObj = STUDENT_DEALS.find(d => d.id === dealId);
                if (dealObj) {
                    addCustomDealToCart(dealObj);
                }
            });
        });
    }

    /* --------------------------------------------------------------------------
       11. RENDER STUDENT PICKS (UNDER ₹99)
       -------------------------------------------------------------------------- */
    function renderStudentPicks() {
        if (!studentPicksGrid) return;
        let items = FOOD_ITEMS.filter(item => item.price <= 99);

        if (activeStudentTab !== 'all') {
            items = items.filter(item => item.subTag === activeStudentTab);
        }

        renderFoodGrid(items, studentPicksGrid);
    }

    document.querySelectorAll('.student-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.student-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeStudentTab = tab.dataset.tab;
            renderStudentPicks();
        });
    });

    /* --------------------------------------------------------------------------
       12. AI SMART RECOMMENDATION ENGINE
       -------------------------------------------------------------------------- */
    function renderRecommendations() {
        if (!recommendationGrid) return;

        // Calculate dynamic user preference
        const categoryClicks = userProfile.categoryClicks || {};
        let topCategory = 'Pizza';
        let maxClicks = -1;

        Object.keys(categoryClicks).forEach(cat => {
            if (categoryClicks[cat] > maxClicks) {
                maxClicks = categoryClicks[cat];
                topCategory = cat;
            }
        });

        // Set reason banner text
        if (recReasonText) {
            if (favorites.length > 0) {
                recReasonText.textContent = `Because you like ${topCategory} & Budget Snacks!`;
            } else if (orders.length > 0) {
                recReasonText.textContent = `Based on your recent campus orders & high-rated picks`;
            } else {
                recReasonText.textContent = `Top student favorites near your campus right now!`;
            }
        }

        // Recommend high rating items in top category or budget items
        let recommendedItems = FOOD_ITEMS.filter(item => item.category === topCategory || item.rating >= 4.7)
                                          .slice(0, 4);

        if (recommendedItems.length < 4) {
            recommendedItems = FOOD_ITEMS.slice(0, 4);
        }

        renderFoodGrid(recommendedItems, recommendationGrid);
    }

    document.getElementById('refresh-rec-btn')?.addEventListener('click', () => {
        renderRecommendations();
        showToast('Updated your recommendations! 🤖', '✨');
    });

    /* --------------------------------------------------------------------------
       13. FAVORITES MANAGEMENT
       -------------------------------------------------------------------------- */
    function toggleFavorite(id) {
        const index = favorites.indexOf(id);
        if (index > -1) {
            favorites.splice(index, 1);
            showToast('Removed from your favorites', '❤️');
        } else {
            favorites.push(id);
            showToast('Added to your favorites! ❤️', '🔥');
        }

        localStorage.setItem('bitebuddy_favorites', JSON.stringify(favorites));
        updateFavoritesBadges();
        applyFiltersAndRenderMenu();
        renderStudentPicks();
        renderRecommendations();
        renderFavoritesModal();
    }

    function updateFavoritesBadges() {
        const count = favorites.length;
        if (favBadge) favBadge.textContent = count;
        if (mobileFavCount) mobileFavCount.textContent = count;
    }

    function renderFavoritesModal() {
        if (!favoritesGrid) return;
        const favItems = FOOD_ITEMS.filter(item => favorites.includes(item.id));
        if (favItems.length === 0) {
            emptyFavState.classList.remove('hidden');
            favoritesGrid.classList.add('hidden');
        } else {
            emptyFavState.classList.add('hidden');
            favoritesGrid.classList.remove('hidden');
            renderFoodGrid(favItems, favoritesGrid);
        }
    }

    favoritesModalBtn?.addEventListener('click', () => {
        renderFavoritesModal();
        favModalOverlay.classList.add('active');
    });

    closeFavModal?.addEventListener('click', () => {
        favModalOverlay.classList.remove('active');
    });

    favModalOverlay?.addEventListener('click', (e) => {
        if (e.target === favModalOverlay) favModalOverlay.classList.remove('active');
    });

    /* --------------------------------------------------------------------------
       14. SHOPPING CART ENGINE
       -------------------------------------------------------------------------- */
    function saveCart() {
        localStorage.setItem('bitebuddy_cart', JSON.stringify(cart));
        updateCartUI();
    }

    function addToCart(itemId) {
        const itemObj = FOOD_ITEMS.find(i => i.id === itemId);
        if (!itemObj) return;

        const existing = cart.find(c => c.id === itemId);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({
                id: itemObj.id,
                name: itemObj.name,
                price: itemObj.price,
                origPrice: itemObj.origPrice,
                image: itemObj.image,
                veg: itemObj.veg,
                quantity: 1
            });
        }

        saveCart();
        showToast(`Added ${itemObj.name} to cart! 🍔`, '🛒');
        applyFiltersAndRenderMenu();
        renderStudentPicks();
        renderRecommendations();
    }

    function addCustomDealToCart(dealObj) {
        const existing = cart.find(c => c.id === dealObj.id);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({
                id: dealObj.id,
                name: dealObj.title,
                price: dealObj.price,
                origPrice: dealObj.origPrice,
                image: dealObj.image,
                veg: true,
                quantity: 1
            });
        }
        saveCart();
        showToast(`Grabbed ${dealObj.title}! 💥`, '🔥');
        openCart();
    }

    function updateCartQuantity(id, delta) {
        const item = cart.find(c => c.id === id);
        if (!item) return;

        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(c => c.id !== id);
        }

        saveCart();
        applyFiltersAndRenderMenu();
        renderStudentPicks();
        renderRecommendations();
    }

    function removeFromCart(id) {
        cart = cart.filter(c => c.id !== id);
        saveCart();
        applyFiltersAndRenderMenu();
        renderStudentPicks();
        renderRecommendations();
    }

    function updateCartUI() {
        const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

        if (cartBadge) cartBadge.textContent = totalItemsCount;
        if (mobileCartBadge) mobileCartBadge.textContent = totalItemsCount;
        if (cartDrawerCount) cartDrawerCount.textContent = totalItemsCount;

        // Render Cart Drawer List
        if (cart.length === 0) {
            cartEmptyState.classList.remove('hidden');
            cartItemsList.classList.add('hidden');
            document.getElementById('cart-drawer-footer').classList.add('hidden');
            document.getElementById('delivery-progress-container').classList.add('hidden');
        } else {
            cartEmptyState.classList.add('hidden');
            cartItemsList.classList.remove('hidden');
            document.getElementById('cart-drawer-footer').classList.remove('hidden');
            document.getElementById('delivery-progress-container').classList.remove('hidden');

            cartItemsList.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">₹${item.price}</div>
                    </div>
                    <div class="cart-item-actions">
                        <button class="cart-qty-btn-sm decrease-cart-item" data-id="${item.id}">-</button>
                        <span style="font-weight: 800; font-size: 0.9rem;">${item.quantity}</span>
                        <button class="cart-qty-btn-sm increase-cart-item" data-id="${item.id}">+</button>
                        <button class="remove-cart-item-btn" data-id="${item.id}" title="Remove Item"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
            `).join('');

            cartItemsList.querySelectorAll('.increase-cart-item').forEach(btn => {
                btn.addEventListener('click', () => updateCartQuantity(btn.dataset.id, 1));
            });
            cartItemsList.querySelectorAll('.decrease-cart-item').forEach(btn => {
                btn.addEventListener('click', () => updateCartQuantity(btn.dataset.id, -1));
            });
            cartItemsList.querySelectorAll('.remove-cart-item-btn').forEach(btn => {
                btn.addEventListener('click', () => removeFromCart(btn.dataset.id));
            });
        }

        // Calculate Totals & Bill
        calculateBill();
    }

    function calculateBill() {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        let deliveryFee = subtotal >= 199 || subtotal === 0 ? 0 : 20;
        let couponDiscount = 0;

        // Apply active coupon logic
        if (appliedCoupon && subtotal > 0) {
            if (appliedCoupon.code === 'STUDENT50') {
                if (subtotal >= 199) couponDiscount = 50;
            } else if (appliedCoupon.code === 'BITE20') {
                couponDiscount = Math.round(subtotal * 0.20);
            } else if (appliedCoupon.code === 'FREEHOP') {
                deliveryFee = 0;
            } else if (appliedCoupon.code === 'NIGHTOWL') {
                couponDiscount = Math.round(subtotal * 0.15);
            }
        }

        const grandTotal = Math.max(0, subtotal - couponDiscount + deliveryFee);

        if (billSubtotal) billSubtotal.textContent = `₹${subtotal}`;
        if (billDiscount) billDiscount.textContent = `-₹${couponDiscount}`;
        if (billDelivery) billDelivery.textContent = deliveryFee === 0 ? 'FREE 🎉' : `₹${deliveryFee}`;
        if (billTotal) billTotal.textContent = `₹${grandTotal}`;
        if (checkoutTotalAmount) checkoutTotalAmount.textContent = `₹${grandTotal}`;

        // Free Delivery Progress
        if (deliveryProgressBar && deliveryProgressText) {
            if (subtotal >= 199) {
                deliveryProgressBar.style.width = '100%';
                deliveryProgressText.innerHTML = '🎉 You unlocked <strong>FREE Campus Delivery</strong>!';
            } else {
                const remaining = 199 - subtotal;
                const percentage = Math.min(100, Math.round((subtotal / 199) * 100));
                deliveryProgressBar.style.width = `${percentage}%`;
                deliveryProgressText.innerHTML = `Add <strong>₹${remaining}</strong> more for FREE Campus Delivery! 🚚`;
            }
        }
    }

    // Coupon Code Handlers
    applyCouponBtn?.addEventListener('click', () => {
        const code = couponInput.value.trim().toUpperCase();
        if (!code) return;

        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        if (code === 'STUDENT50') {
            if (subtotal < 199) {
                showToast('STUDENT50 requires a minimum order of ₹199', '⚠️');
                return;
            }
            appliedCoupon = { code, desc: '₹50 OFF on ₹199+' };
        } else if (code === 'BITE20') {
            appliedCoupon = { code, desc: '20% OFF Total Bill' };
        } else if (code === 'FREEHOP') {
            appliedCoupon = { code, desc: 'FREE Delivery Unlocked' };
        } else if (code === 'NIGHTOWL') {
            appliedCoupon = { code, desc: '15% OFF Late Night' };
        } else {
            showToast('Invalid Coupon Code! Try STUDENT50 or BITE20', '❌');
            return;
        }

        localStorage.setItem('bitebuddy_coupon', JSON.stringify(appliedCoupon));
        renderAppliedCouponUI();
        calculateBill();
        showToast(`Applied Coupon ${code}! 🎉`, '🎟️');
    });

    function renderAppliedCouponUI() {
        if (appliedCoupon) {
            appliedCouponMsg.classList.remove('hidden');
            couponSuccessText.textContent = `Applied ${appliedCoupon.code} (${appliedCoupon.desc})`;
        } else {
            appliedCouponMsg.classList.add('hidden');
        }
    }

    removeCouponBtn?.addEventListener('click', () => {
        appliedCoupon = null;
        localStorage.removeItem('bitebuddy_coupon');
        renderAppliedCouponUI();
        calculateBill();
        showToast('Coupon removed', 'ℹ️');
    });

    document.querySelectorAll('.quick-coupon-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            couponInput.value = tag.dataset.code;
            applyCouponBtn.click();
        });
    });

    // Cart Drawer Controls
    function openCart() {
        cartDrawer.classList.add('active');
        cartDrawerOverlay.classList.add('active');
    }

    function closeCart() {
        cartDrawer.classList.remove('active');
        cartDrawerOverlay.classList.remove('active');
    }

    cartDrawerBtn?.addEventListener('click', openCart);
    mobileBottomCartBtn?.addEventListener('click', openCart);
    closeCartDrawer?.addEventListener('click', closeCart);
    cartDrawerOverlay?.addEventListener('click', closeCart);
    cartExploreBtn?.addEventListener('click', () => {
        closeCart();
        window.location.hash = '#menu-section';
    });

    /* --------------------------------------------------------------------------
       15. CHECKOUT & ORDER PLACEMENT
       -------------------------------------------------------------------------- */
    proceedCheckoutBtn?.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Your cart is empty!', '⚠️');
            return;
        }
        closeCart();
        checkoutModalOverlay.classList.add('active');
    });

    closeCheckoutModal?.addEventListener('click', () => {
        checkoutModalOverlay.classList.remove('active');
    });

    checkoutForm?.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('cust-name').value.trim();
        const phone = document.getElementById('cust-phone').value.trim();
        const hostel = document.getElementById('cust-hostel').value.trim();
        const room = document.getElementById('cust-room').value.trim();
        const notes = document.getElementById('cust-notes').value.trim();
        const paymentMethod = checkoutForm.querySelector('input[name="payment-method"]:checked').value;

        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        let deliveryFee = subtotal >= 199 ? 0 : 20;
        let couponDiscount = 0;

        if (appliedCoupon) {
            if (appliedCoupon.code === 'STUDENT50' && subtotal >= 199) couponDiscount = 50;
            if (appliedCoupon.code === 'BITE20') couponDiscount = Math.round(subtotal * 0.20);
            if (appliedCoupon.code === 'FREEHOP') deliveryFee = 0;
        }

        const totalPaid = Math.max(0, subtotal - couponDiscount + deliveryFee);
        const orderId = '#BB' + Math.floor(1000 + Math.random() * 9000);

        const newOrder = {
            orderId,
            date: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
            customer: { name, phone, hostel, room, notes },
            paymentMethod,
            items: [...cart],
            totalPaid,
            status: '🟢 Delivered'
        };

        // Save order to history
        orders.unshift(newOrder);
        localStorage.setItem('bitebuddy_orders', JSON.stringify(orders));

        // Clear cart
        cart = [];
        saveCart();

        checkoutModalOverlay.classList.remove('active');
        showOrderSuccessModal(newOrder);
        renderOrderHistory();
    });

    function showOrderSuccessModal(order) {
        successOrderId.textContent = order.orderId;
        successTotalPaid.textContent = `₹${order.totalPaid}`;
        successItemsList.innerHTML = order.items.map(i => `
            <div style="display: flex; justify-content: space-between;">
                <span>${i.name} × ${i.quantity}</span>
                <strong>₹${i.price * i.quantity}</strong>
            </div>
        `).join('');

        successModalOverlay.classList.add('active');
    }

    trackOrderBtn?.addEventListener('click', () => {
        successModalOverlay.classList.remove('active');
        window.location.hash = '#orders-section';
    });

    continueShoppingBtn?.addEventListener('click', () => {
        successModalOverlay.classList.remove('active');
        window.location.hash = '#menu-section';
    });

    /* --------------------------------------------------------------------------
       16. RENDER ORDER HISTORY
       -------------------------------------------------------------------------- */
    function renderOrderHistory() {
        if (!ordersListContainer) return;

        if (orders.length === 0) {
            ordersListContainer.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">📦</div>
                    <h3>No past orders found</h3>
                    <p>You haven't placed any food orders yet! Go ahead and grab a student deal.</p>
                </div>
            `;
            return;
        }

        ordersListContainer.innerHTML = orders.map(order => `
            <div class="order-card">
                <div class="order-card-header">
                    <div class="order-id-group">
                        <strong style="font-size: 1.1rem; color: var(--text-main);">${order.orderId}</strong>
                        <span class="order-status-badge">${order.status}</span>
                    </div>
                    <span class="order-date">${order.date}</span>
                </div>
                <div class="order-card-body">
                    ${order.items.map(i => `
                        <div class="order-item-row">
                            <span>${i.name} × ${i.quantity}</span>
                            <strong>₹${i.price * i.quantity}</strong>
                        </div>
                    `).join('')}
                </div>
                <div class="order-card-footer">
                    <div>
                        <span style="font-size: 0.8rem; color: var(--text-muted);">Total Paid (${order.paymentMethod}):</span>
                        <div class="order-total-price">₹${order.totalPaid}</div>
                    </div>
                    <button class="btn btn-outline btn-sm reorder-btn" data-order-id="${order.orderId}">
                        <i class="fa-solid fa-rotate-right"></i> Reorder
                    </button>
                </div>
            </div>
        `).join('');

        ordersListContainer.querySelectorAll('.reorder-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetOrder = orders.find(o => o.orderId === btn.dataset.orderId);
                if (targetOrder) {
                    targetOrder.items.forEach(item => {
                        const existing = cart.find(c => c.id === item.id);
                        if (existing) {
                            existing.quantity += item.quantity;
                        } else {
                            cart.push({ ...item });
                        }
                    });
                    saveCart();
                    showToast('Reordered items added to your cart!', '🎉');
                    openCart();
                }
            });
        });
    }

    /* --------------------------------------------------------------------------
       17. SEARCH & FILTER CONTROLLER
       -------------------------------------------------------------------------- */
    function syncSearch(query) {
        activeSearchQuery = query;
        if (mainSearchInput && mainSearchInput.value !== query) mainSearchInput.value = query;
        if (headerSearchInput && headerSearchInput.value !== query) headerSearchInput.value = query;
        if (clearSearchBtn) {
            clearSearchBtn.classList.toggle('show', query.length > 0);
        }
        applyFiltersAndRenderMenu();
    }

    mainSearchInput?.addEventListener('input', (e) => syncSearch(e.target.value));
    headerSearchInput?.addEventListener('input', (e) => syncSearch(e.target.value));
    clearSearchBtn?.addEventListener('click', () => syncSearch(''));

    // Veg Filter Buttons
    document.querySelectorAll('.veg-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.veg-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeVegFilter = btn.dataset.veg;
            applyFiltersAndRenderMenu();
        });
    });

    // Sorting Dropdown
    sortSelect?.addEventListener('change', (e) => {
        activeSort = e.target.value;
        applyFiltersAndRenderMenu();
    });

    // Price Chips
    document.querySelectorAll('#price-chips-container .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('#price-chips-container .chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            activePriceRange = chip.dataset.price;
            applyFiltersAndRenderMenu();
        });
    });

    // Rating Chips
    document.querySelectorAll('#rating-chips-container .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('#rating-chips-container .chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            activeRatingFilter = chip.dataset.rating;
            applyFiltersAndRenderMenu();
        });
    });

    // Reset Filters
    function resetAllFilters() {
        activeCategory = 'all';
        activeSearchQuery = '';
        activeVegFilter = 'all';
        activeSort = 'default';
        activePriceRange = 'all';
        activeRatingFilter = 'all';

        if (mainSearchInput) mainSearchInput.value = '';
        if (headerSearchInput) headerSearchInput.value = '';
        if (sortSelect) sortSelect.value = 'default';

        document.querySelectorAll('.veg-filter-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('.veg-filter-btn[data-veg="all"]')?.classList.add('active');

        document.querySelectorAll('#price-chips-container .chip').forEach(c => c.classList.remove('active'));
        document.querySelector('#price-chips-container .chip[data-price="all"]')?.classList.add('active');

        document.querySelectorAll('#rating-chips-container .chip').forEach(c => c.classList.remove('active'));
        document.querySelector('#rating-chips-container .chip[data-rating="all"]')?.classList.add('active');

        renderCategories();
        applyFiltersAndRenderMenu();
        showToast('All filters reset!', '🔄');
    }

    resetFiltersBtn?.addEventListener('click', resetAllFilters);
    emptyResetBtn?.addEventListener('click', resetAllFilters);

    /* --------------------------------------------------------------------------
       18. MOBILE NAVIGATION CONTROLLER
       -------------------------------------------------------------------------- */
    hamburgerBtn?.addEventListener('click', () => {
        mobileNavDrawer.classList.add('active');
        mobileNavOverlay.classList.add('active');
    });

    function closeMobileNavDrawer() {
        mobileNavDrawer.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
    }

    closeMobileNav?.addEventListener('click', closeMobileNavDrawer);
    mobileNavOverlay?.addEventListener('click', closeMobileNavDrawer);
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMobileNavDrawer);
    });

    /* --------------------------------------------------------------------------
       19. TOAST NOTIFICATION SYSTEM
       -------------------------------------------------------------------------- */
    function showToast(message, icon = '✨') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(() => toast.remove(), 300);
        }, 2600);
    }

    /* --------------------------------------------------------------------------
       20. INITIALIZATION
       -------------------------------------------------------------------------- */
    function initApp() {
        renderCategories();
        applyFiltersAndRenderMenu();
        renderDeals();
        renderStudentPicks();
        renderRecommendations();
        renderOrderHistory();
        updateFavoritesBadges();
        updateCartUI();
        renderAppliedCouponUI();
    }

    initApp();
});
