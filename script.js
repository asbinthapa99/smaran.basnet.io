// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initNavigation();
    initBlogPosts();
    initContactForm();
    initScrollAnimations();
    loadBlogPosts();
});

// ===== THEME TOGGLE =====
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Toggle theme
    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add animation
        themeToggle.style.transform = 'scale(0.8)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 200);
    });
}

// ===== NAVIGATION =====
function initNavigation() {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Sticky header on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Active nav link on scroll
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.querySelector('.navbar');
    
    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll('.service-card, .stat-card, .blog-card, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// ===== BLOG POSTS MANAGEMENT =====
function initBlogPosts() {
    // Always set default posts to ensure all 6 projects show (overwrites any old data)
    const defaultPosts = [
        {
            id: 1,
            title: 'SEO Campaign for AutoHub Nepal',
            team: 'AutoHub Nepal',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
            date: '2024-01-15',
            description: 'Led a comprehensive SEO campaign that increased organic traffic by 250% in 6 months. Implemented technical SEO improvements, content strategy, and link building tactics that resulted in first-page rankings for 15 high-value keywords.'
        },
        {
            id: 2,
            title: 'eCommerce Growth Strategy for ShopNepal',
            team: 'ShopNepal',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
            date: '2024-02-20',
            description: 'Developed and executed a multi-channel marketing strategy combining Google Ads, Facebook Ads, and email marketing. Achieved 180% increase in revenue and reduced customer acquisition cost by 35% within 4 months.'
        },
        {
            id: 3,
            title: 'Social Media Transformation for TechVenture',
            team: 'TechVenture Pvt. Ltd.',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
            date: '2024-03-10',
            description: 'Built social media presence from scratch, growing followers to 50K+ across platforms. Created engaging content strategy that resulted in 500% increase in engagement and generated 200+ qualified leads monthly.'
        },
        {
            id: 4,
            title: 'Performance Marketing for GearUp Sports',
            team: 'GearUp Sports',
            image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop',
            date: '2024-04-05',
            description: 'Managed performance marketing campaigns with $50K monthly budget. Optimized conversion funnels and ad creatives, achieving 8x ROAS and reducing cost per acquisition by 60% through data-driven optimization.'
        },
        {
            id: 5,
            title: 'Content Marketing Success for FoodieHub',
            team: 'FoodieHub',
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
            date: '2024-05-12',
            description: 'Created comprehensive content marketing strategy including blog posts, videos, and infographics. Grew organic traffic from 500 to 15K monthly visitors and established brand as thought leader in the food industry.'
        },
        {
            id: 6,
            title: 'Digital Transformation for Heritage Motors',
            team: 'Heritage Motors',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
            date: '2024-06-18',
            description: 'Complete digital marketing overhaul for automobile dealership. Implemented CRM system, automated email campaigns, and local SEO strategy that resulted in 300% increase in showroom visits and 150% boost in test drives.'
        }
    ];
    localStorage.setItem('blogPosts', JSON.stringify(defaultPosts));
}

// Load and display blog posts (WITHOUT edit/delete buttons)
function loadBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    
    blogGrid.innerHTML = '';
    
    if (posts.length === 0) {
        blogGrid.innerHTML = '<p style="text-align: center; color: var(--text-secondary); grid-column: 1/-1;">No projects available.</p>';
        return;
    }
    
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    posts.forEach(post => {
        const postCard = createBlogCard(post);
        blogGrid.appendChild(postCard);
    });
}

// Create blog card element (WITHOUT action buttons)
function createBlogCard(post) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.setAttribute('data-id', post.id);
    
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    
    card.innerHTML = `
        <div class="blog-image">
            <img src="${post.image}" alt="${post.title}" onerror="this.src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'">
            <span class="blog-badge">Featured</span>
        </div>
        <div class="blog-content">
            <div class="blog-meta">
                <span><i class='bx bx-calendar'></i> ${formattedDate}</span>
                <span><i class='bx bx-buildings'></i> ${post.team}</span>
            </div>
            <h3>${post.title}</h3>
            <p>${post.description}</p>
        </div>
    `;
    
    return card;
}

// ===== CONTACT FORM =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Here you would typically send this to a backend
            console.log('Form submitted:', formData);
            
            // Show success message
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class='bx ${type === 'success' ? 'bx-check-circle' : 'bx-error-circle'}'></i>
        <span>${message}</span>
    `;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        background: type === 'success' ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' : '#ef4444',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        fontSize: '1rem',
        fontWeight: '500',
        zIndex: '10000',
        animation: 'slideInRight 0.3s ease',
        maxWidth: '400px'
    });
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations to document
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
    
    .notification i {
        font-size: 1.5rem;
    }
`;
document.head.appendChild(style);

// ===== COUNTER ANIMATION FOR SOCIAL STATS =====
function animateCounters() {
    const counters = document.querySelectorAll('.follower-count');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const numericValue = parseFloat(target.replace('K', '')) * 1000;
        const duration = 2000;
        const increment = numericValue / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < numericValue) {
                const displayValue = (current / 1000).toFixed(1);
                counter.textContent = displayValue + 'K';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Start animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.disconnect();
            }
        });
        
        observer.observe(counter);
    });
}

// Initialize counter animation
setTimeout(animateCounters, 500);

// ===== SMOOTH REVEAL ON SCROLL =====
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('.about, .services, .social-stats, .blog, .contact');
    
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };
    
    const sectionObserver = new IntersectionObserver(revealSection, {
        threshold: 0.15
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        sectionObserver.observe(section);
    });
});