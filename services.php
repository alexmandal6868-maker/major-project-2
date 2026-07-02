<?php
require_once __DIR__ . '/config/database.php';
$user = getCurrentUser();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Travel Services - Nepal Tour & Travel</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css?v=4">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.php" class="logo">
                <img src="img/logo.png?v=2" alt="Logo" class="logo-icon">
                <span class="logo-text">
                    Nepal
                    <span class="logo-subtitle">Tour & Travel</span>
                </span>
            </a>
            <ul class="nav-menu">
                <li><a href="index.php#places" class="nav-link">Places</a></li>
                <li><a href="index.php#things" class="nav-link">Activities</a></li>
                <li><a href="index.php#festivals" class="nav-link">Festivals</a></li>
                <li><a href="services.php" class="nav-link">Services</a></li>
                <li><a href="index.php#plan" class="nav-link">Plan</a></li>
                <li><a href="about.php" class="nav-link">About</a></li>
                <li><a href="admin.php" class="nav-link admin-nav-link">Admin</a></li>
                <?php if ($user): ?>
                    <li><a href="logout.php" class="nav-link">Logout</a></li>
                <?php else: ?>
                    <li><a href="login.php" class="nav-link">Login</a></li>
                    <li><a href="signup.php" class="nav-link">Signup</a></li>
                <?php endif; ?>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <main class="services-page">
        <section class="services-hero">
            <div class="container">
                <p class="services-kicker">Book and explore</p>
                <h1>Travel Services Across Nepal</h1>
                <p>Find hotels, bus routes, car and bike rentals, and shopping destinations in one connected portal.</p>
            </div>
        </section>

        <section class="service-finder">
            <div class="container">
                <div class="service-search">
                    <label for="serviceSearch" class="sr-only">Search services</label>
                    <input type="text" id="serviceSearch" class="service-search-input" placeholder="Search hotels, buses, rentals, malls...">
                    <button type="button" class="service-action-btn" id="serviceSearchBtn">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <span>Search</span>
                    </button>
                    <button type="button" class="service-action-btn service-action-secondary" id="liveTrackBtn">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>Live Track</span>
                    </button>
                </div>

                <div class="service-tabs" role="tablist" aria-label="Travel service categories">
                    <button type="button" class="service-tab active" data-service-tab="hotels">Hotels</button>
                    <button type="button" class="service-tab" data-service-tab="buses">Buses</button>
                    <button type="button" class="service-tab" data-service-tab="rentals">Rentals</button>
                    <button type="button" class="service-tab" data-service-tab="malls">Malls</button>
                </div>

                <div id="serviceFeedback" class="service-feedback" aria-live="polite"></div>

                <section id="hotels" class="service-section active" data-service-panel="hotels">
                    <div class="service-section-heading">
                        <h2>Premium Hotels</h2>
                        <p>Comfortable stays in Kathmandu, Pokhara, Chitwan, Lumbini, and the mountains.</p>
                    </div>
                    <div class="service-grid" id="hotelGrid"></div>
                </section>

                <section id="buses" class="service-section" data-service-panel="buses">
                    <div class="service-section-heading">
                        <h2>Deluxe Bus Services</h2>
                        <p>Popular routes with sample tracking updates for a connected travel experience.</p>
                    </div>
                    <div class="service-grid" id="busGrid"></div>
                    <div class="tracking-panel">
                        <div class="tracking-map">
                            <i class="fa-solid fa-map-location-dot"></i>
                            <span>Live bus tracking map placeholder</span>
                        </div>
                        <div class="tracking-info" id="liveTracking">Live Tracking: Bus KTMT-101 - 8 km from Pokhara, ETA: 20 mins</div>
                    </div>
                </section>

                <section id="rentals" class="service-section" data-service-panel="rentals">
                    <div class="service-section-heading">
                        <h2>Bike and Car Rentals</h2>
                        <p>Flexible rental options for city travel, hill routes, and longer adventures.</p>
                    </div>
                    <div class="service-grid" id="rentalGrid"></div>
                </section>

                <section id="malls" class="service-section" data-service-panel="malls">
                    <div class="service-section-heading">
                        <h2>Shopping Malls and Complexes</h2>
                        <p>Explore shopping, food, cinema, and leisure spots during your trip.</p>
                    </div>
                    <div class="service-grid" id="mallGrid"></div>
                </section>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.php">Home</a></li>
                        <li><a href="index.php#places">Destinations</a></li>
                        <li><a href="services.php">Services</a></li>
                        <li><a href="about.php">About</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                        <a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" title="YouTube"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>Contact Info</h4>
                    <p>Email: info@nepalitourtravel.com</p>
                    <p>Phone: +9779763658085</p>
                    <p>Location: Butwal</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Nepal Tour and Travel. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>
        </div>
    </footer>

    <button id="scrollToTop" class="scroll-to-top" style="display:none;"><i class="fa-solid fa-chevron-up"></i></button>
    <script src="script.js?v=4"></script>
</body>
</html>
