// ==================== Nepal Text Scroll Zoom & Navbar Hiding ==================== //
const nepaliText = document.querySelector('.nepali-text');
const navbar = document.querySelector('.navbar');
const maxScroll = 800;

window.addEventListener('scroll', function() {
    if (!nepaliText) return;
    
    const scrollY = window.scrollY;
    // Subtle zoom effect on scroll
    const progress = Math.min(scrollY, maxScroll) / maxScroll;
    const scale = 1 + progress * 0.6; // up to ~1.3x
    nepaliText.style.transform = `scale(${scale})`;
    nepaliText.style.opacity = `${1 - progress * 0.05}`;

    if (scrollY > 100) {
        navbar.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// ==================== Mobile Menu Toggle ==================== //
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// ==================== Smooth Scrolling ==================== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== Places Category Filter ==================== //
document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const placeCards = document.querySelectorAll('.place-card');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const selectedCategory = this.getAttribute('data-category');
            
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter place cards
            placeCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                const showCard = selectedCategory === 'all' || cardCategory === selectedCategory;

                card.style.display = showCard ? 'block' : 'none';
                if (showCard) {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                }
            });
        });
    });
});

// ==================== Scroll Animation for Cards ==================== //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.story-card, .place-card, .activity-card, .festival-card, .planning-step').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ==================== Scroll to Top Button ==================== //
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn?.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== Travel Services Portal ==================== //
document.addEventListener('DOMContentLoaded', function() {
    const serviceRoot = document.querySelector('.services-page');
    if (!serviceRoot) return;

    const services = {
        hotels: [
            { name: 'Hotel Yak & Yeti', location: 'Kathmandu', price: 'Rs. 6,500 / night', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&h=420&fit=crop', link: 'https://www.yakandyeti.com', rating: '4.6', detail: 'Heritage luxury hotel near Durbar Marg', amenities: 'Wi-Fi, pool, airport pickup', phone: '+977-1-4248999' },
            { name: 'Soaltee Kathmandu', location: 'Kathmandu', price: 'Rs. 9,500 / night', img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=700&h=420&fit=crop', link: 'https://www.soaltee.com', rating: '4.7', detail: 'Premium resort-style stay with gardens', amenities: 'Spa, casino, fine dining', phone: '+977-1-4273999' },
            { name: "Dwarika's Hotel", location: 'Kathmandu', price: 'Rs. 14,000 / night', img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=700&h=420&fit=crop', link: 'https://www.dwarikas.com', rating: '4.8', detail: 'Newari architecture and boutique rooms', amenities: 'Courtyard, spa, cultural dining', phone: '+977-1-4479488' },
            { name: 'Hyatt Regency', location: 'Kathmandu', price: 'Rs. 18,000 / night', img: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=700&h=420&fit=crop', link: 'https://www.hyatt.com', rating: '4.5', detail: 'Five-star stay close to Boudhanath', amenities: 'Pool, fitness, meeting halls', phone: '+977-1-4491234' },
            { name: 'Hotel Barahi', location: 'Pokhara', price: 'Rs. 7,800 / night', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=700&h=420&fit=crop', rating: '4.4', detail: 'Lakeside stay near Phewa Lake', amenities: 'Lake access, breakfast, parking', phone: '+977-61-460617' },
            { name: 'Temple Tree Resort', location: 'Pokhara', price: 'Rs. 11,000 / night', img: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=700&h=420&fit=crop', rating: '4.6', detail: 'Boutique resort with garden villas', amenities: 'Spa, pool, lakeside shuttle', phone: '+977-61-465819' },
            { name: 'Fish Tail Lodge', location: 'Pokhara', price: 'Rs. 12,500 / night', img: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb21013?w=700&h=420&fit=crop', rating: '4.5', detail: 'Peaceful lodge with mountain views', amenities: 'Boat access, restaurant, garden', phone: '+977-61-455071' },
            { name: 'Green Park Chitwan', location: 'Chitwan', price: 'Rs. 6,200 / night', img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&h=420&fit=crop', rating: '4.4', detail: 'Wildlife-friendly resort near Sauraha', amenities: 'Safari desk, pool, local cuisine', phone: '+977-56-580098' },
            { name: 'Buddha Maya Garden', location: 'Lumbini', price: 'Rs. 5,900 / night', img: 'https://images.unsplash.com/photo-1571896349840-e26b311e851c?w=700&h=420&fit=crop', rating: '4.2', detail: 'Quiet hotel near sacred garden area', amenities: 'Garden, restaurant, tour desk', phone: '+977-71-580220' },
            { name: 'Hotel Everest View', location: 'Namche', price: 'Rs. 22,000 / night', img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=700&h=420&fit=crop', rating: '4.7', detail: 'High-altitude stay with Himalayan views', amenities: 'Mountain views, dining, trekking support', phone: '+977-1-4434825' },
            { name: 'Siddhartha Cottage', location: 'Butwal', price: 'Rs. 4,200 / night', img: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=700&h=420&fit=crop', rating: '4.1', detail: 'Comfortable city hotel for Lumbini route', amenities: 'Parking, restaurant, family rooms', phone: '+977-71-540777' },
            { name: 'Hotel Ichchha', location: 'Simara', price: 'Rs. 5,500 / night', img: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=700&h=420&fit=crop', rating: '4.0', detail: 'Business and transit stay near airport', amenities: 'Airport access, pool, conference hall', phone: '+977-53-520153' }
        ],
        buses: [
            { name: 'Kathmandu-Pokhara Deluxe', location: 'Kathmandu to Pokhara', price: 'Rs. 1,600', img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=700&h=420&fit=crop', busId: 'KTMT-101', rating: '4.4', detail: '7 hrs journey', amenities: 'AC, reclining seats, charging', phone: '+977-9800000101' },
            { name: 'Kathmandu-Chitwan Night Bus', location: 'Kathmandu to Chitwan', price: 'Rs. 1,300', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=700&h=420&fit=crop', busId: 'KTMT-202', rating: '4.2', detail: '5.5 hrs journey', amenities: 'Sleeper seats, luggage storage', phone: '+977-9800000202' },
            { name: 'Pokhara-Lumbini Express', location: 'Pokhara to Lumbini', price: 'Rs. 2,000', img: 'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=700&h=420&fit=crop', busId: 'PKRL-303', rating: '4.3', detail: '9 hrs journey', amenities: 'AC, lunch stop, Wi-Fi', phone: '+977-9800000303' },
            { name: 'Kathmandu-Biratnagar AC', location: 'Kathmandu to Biratnagar', price: 'Rs. 2,500', img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=700&h=420&fit=crop', busId: 'KTM-BRT-404', rating: '4.1', detail: '12 hrs journey', amenities: 'AC, night service, blankets', phone: '+977-9800000404' },
            { name: 'Butwal-Dhangadhi Super', location: 'Butwal to Dhangadhi', price: 'Rs. 1,800', img: 'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=700&h=420&fit=crop', busId: 'BTW-DHG-505', rating: '4.0', detail: '10 hrs journey', amenities: 'Pushback seats, music system', phone: '+977-9800000505' },
            { name: 'Kathmandu-Lumbini Tourist', location: 'Kathmandu to Lumbini', price: 'Rs. 2,100', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=700&h=420&fit=crop', busId: 'KTM-LMB-606', rating: '4.3', detail: '8.5 hrs journey', amenities: 'Tourist seats, guide support', phone: '+977-9800000606' },
            { name: 'Pokhara-Jomsom Jeep Bus', location: 'Pokhara to Jomsom', price: 'Rs. 2,800', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=700&h=420&fit=crop', busId: 'PKR-JSM-707', rating: '4.2', detail: 'Mountain route service', amenities: 'Experienced driver, route support', phone: '+977-9800000707' },
            { name: 'Dharan-Kathmandu Deluxe', location: 'Dharan to Kathmandu', price: 'Rs. 2,400', img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=700&h=420&fit=crop', busId: 'DRN-KTM-808', rating: '4.1', detail: '11 hrs journey', amenities: 'AC, charging, luggage support', phone: '+977-9800000808' }
        ],
        rentals: [
            { name: 'Yamaha R15 V4', location: 'Kathmandu', price: 'Rs. 2,500 / day', img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=700&h=420&fit=crop', rating: '4.5', detail: 'Sports bike', amenities: 'Helmet, phone holder, insurance', phone: '+977-9811110101' },
            { name: 'Royal Enfield Classic 350', location: 'Pokhara', price: 'Rs. 3,500 / day', img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=700&h=420&fit=crop', rating: '4.6', detail: 'Cruiser bike', amenities: 'Helmet, jacket, route map', phone: '+977-9811110202' },
            { name: 'Bajaj Pulsar NS200', location: 'Biratnagar', price: 'Rs. 2,200 / day', img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=700&h=420&fit=crop', rating: '4.3', detail: 'Street bike', amenities: 'Helmet, basic toolkit, permit support', phone: '+977-9811110303' },
            { name: 'Honda Activa', location: 'Chitwan', price: 'Rs. 1,500 / day', img: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=700&h=420&fit=crop', rating: '4.2', detail: 'Scooter', amenities: 'Helmet, city pickup, fuel option', phone: '+977-9811110404' },
            { name: 'Toyota Corolla 2023', location: 'Kathmandu', price: 'Rs. 9,000 / day', img: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=700&h=420&fit=crop', rating: '4.5', detail: 'Sedan', amenities: 'Driver optional, AC, insurance', phone: '+977-9811110505' },
            { name: 'Suzuki Swift', location: 'Pokhara', price: 'Rs. 7,000 / day', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=700&h=420&fit=crop', rating: '4.2', detail: 'Hatchback', amenities: 'Self-drive, AC, music system', phone: '+977-9811110606' },
            { name: 'Toyota Fortuner', location: 'Kathmandu', price: 'Rs. 15,000 / day', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=700&h=420&fit=crop', rating: '4.7', detail: 'SUV', amenities: '4WD, driver, hill route support', phone: '+977-9811110707' },
            { name: 'Mahindra Scorpio', location: 'Butwal', price: 'Rs. 12,000 / day', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&h=420&fit=crop', rating: '4.4', detail: 'SUV for family trips', amenities: 'Driver, AC, luggage space', phone: '+977-9811110808' },
            { name: 'Hiace Tourist Van', location: 'Kathmandu', price: 'Rs. 18,000 / day', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=700&h=420&fit=crop', rating: '4.5', detail: 'Group transport van', amenities: '12 seats, driver, AC', phone: '+977-9811110909' },
            { name: 'Mountain Bicycle', location: 'Pokhara', price: 'Rs. 900 / day', img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=700&h=420&fit=crop', rating: '4.1', detail: 'Trail bicycle', amenities: 'Helmet, lock, repair kit', phone: '+977-9811111010' }
        ],
        malls: [
            { name: 'Civil Mall', location: 'Sundhara, Kathmandu', img: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=700&h=420&fit=crop', rating: '4.1', detail: 'Large shopping center with stores and cinema', amenities: 'Cinema, food court, parking', phone: '+977-1-4250000' },
            { name: 'Labim Mall', location: 'Pulchowk, Lalitpur', img: 'https://images.unsplash.com/photo-1567449303078-57ad995bd17c?w=700&h=420&fit=crop', rating: '4.4', detail: 'Premium brands, dining, and entertainment', amenities: 'Cinema, restaurants, fashion stores', phone: '+977-1-5529600' },
            { name: 'MaaYaa Mall', location: 'New Baneshwor, Kathmandu', img: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=700&h=420&fit=crop', rating: '4.0', detail: 'Multi-level shopping and food options', amenities: 'Food court, retail, kids zone', phone: '+977-1-4780000' },
            { name: 'City Center Mall', location: 'Kamalpokhari, Kathmandu', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=700&h=420&fit=crop', rating: '4.0', detail: 'Central shopping and leisure point', amenities: 'Retail, cafe, parking', phone: '+977-1-4410000' },
            { name: 'Bhat-Bhateni Supermarket', location: 'Maharajgunj, Kathmandu', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=700&h=420&fit=crop', rating: '4.3', detail: 'Department store for daily travel needs', amenities: 'Groceries, clothing, electronics', phone: '+977-1-4720200' },
            { name: 'Butwal City Center', location: 'Butwal', img: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=700&h=420&fit=crop', rating: '4.0', detail: 'Shopping destination for western Nepal', amenities: 'Shopping, food, family space', phone: '+977-71-540000' },
            { name: 'Narayani Mall', location: 'Birgunj', img: 'https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=700&h=420&fit=crop', rating: '3.9', detail: 'Shopping and family leisure complex', amenities: 'Retail, snacks, local brands', phone: '+977-51-520000' },
            { name: 'Pokhara Trade Mall', location: 'Pokhara', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=700&h=420&fit=crop', rating: '4.1', detail: 'Convenient shopping near tourist areas', amenities: 'Clothing, electronics, cafe', phone: '+977-61-530000' }
        ]
    };

    const gridMap = {
        hotels: document.getElementById('hotelGrid'),
        buses: document.getElementById('busGrid'),
        rentals: document.getElementById('rentalGrid'),
        malls: document.getElementById('mallGrid')
    };

    const feedback = document.getElementById('serviceFeedback');
    const searchInput = document.getElementById('serviceSearch');

    function cardButtonLabel(type) {
        if (type === 'malls') return 'Explore';
        if (type === 'rentals') return 'Reserve';
        return 'Book Now';
    }

    function createServiceCard(item, type) {
        const card = document.createElement('article');
        card.className = 'service-card';
        card.dataset.search = `${item.name} ${item.location} ${item.detail || ''} ${item.price || ''}`.toLowerCase();
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/700x420/1e3a8a/ffffff?text=Nepal+Travel'">
            <div class="service-card-body">
                <h3>${item.name}</h3>
                <span class="service-meta"><i class="fa-solid fa-location-dot"></i>${item.location}</span>
                ${item.detail ? `<p>${item.detail}</p>` : ''}
                ${item.price ? `<div class="service-price">${item.price}</div>` : ''}
                <button type="button" class="service-book-btn" data-service-action="${type}" data-service-name="${item.name}" data-service-link="${item.link || ''}" data-bus-id="${item.busId || ''}">${cardButtonLabel(type)}</button>
            </div>
        `;
        return card;
    }

    function renderServices() {
        Object.keys(services).forEach(type => {
            const grid = gridMap[type];
            if (!grid) return;
            grid.innerHTML = '';
            services[type].forEach(item => grid.appendChild(createServiceCard(item, type)));
        });
    }

    function setActiveTab(tabName) {
        document.querySelectorAll('[data-service-panel]').forEach(panel => {
            panel.classList.toggle('active', panel.dataset.servicePanel === tabName);
        });
        document.querySelectorAll('[data-service-tab]').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.serviceTab === tabName);
        });
    }

    function searchServices() {
        const query = searchInput.value.trim().toLowerCase();
        let matches = 0;

        document.querySelectorAll('.service-card').forEach(card => {
            const isMatch = query === '' || card.dataset.search.includes(query);
            card.style.display = isMatch ? '' : 'none';
            if (isMatch) matches += 1;
        });

        feedback.textContent = query ? `${matches} matching services found for "${searchInput.value.trim()}".` : '';
    }

    function showServiceMessage(message) {
        feedback.textContent = message;
        feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    renderServices();

    document.querySelectorAll('[data-service-tab]').forEach(tab => {
        tab.addEventListener('click', () => {
            setActiveTab(tab.dataset.serviceTab);
            searchServices();
        });
    });

    document.getElementById('serviceSearchBtn')?.addEventListener('click', searchServices);
    searchInput?.addEventListener('input', searchServices);

    document.getElementById('liveTrackBtn')?.addEventListener('click', () => {
        setActiveTab('buses');
        showServiceMessage('Live GPS tracking demo: Bus KTMT-101 is on the Kathmandu-Pokhara route with an estimated arrival of 20 minutes.');
    });

    document.addEventListener('click', function(event) {
        const button = event.target.closest('[data-service-action]');
        if (!button) return;

        const type = button.dataset.serviceAction;
        const name = button.dataset.serviceName;
        const link = button.dataset.serviceLink;
        const busId = button.dataset.busId;

        if (type === 'hotels' && link) {
            window.open(link, '_blank', 'noopener');
            return;
        }

        const messages = {
            hotels: `Booking request started for ${name}. Select dates, rooms, and guests to continue.`,
            buses: `Booking request started for bus ${busId}. Add passengers and choose seats to continue.`,
            rentals: `Reservation request started for ${name}. Choose pick-up location and rental dates to continue.`,
            malls: `Opening mall guide for ${name}. Floor plans, stores, food, and cinema options can connect here.`
        };
        showServiceMessage(messages[type]);
    });

    setInterval(() => {
        const tracking = document.getElementById('liveTracking');
        if (!tracking) return;

        const busId = `KTMT-${Math.floor(Math.random() * 900 + 100)}`;
        const distance = Math.floor(Math.random() * 25 + 3);
        const eta = Math.floor(Math.random() * 45 + 10);
        tracking.textContent = `Live Tracking: Bus ${busId} - ${distance} km from destination, ETA: ${eta} mins`;
    }, 8000);
});
