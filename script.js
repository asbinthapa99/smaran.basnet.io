/* ================================================
   SMARAN BASNET - PORTFOLIO SCRIPTS
   Three.js Background + UI Interactions
   ================================================ */

// ===== THREE.JS PARTICLE BACKGROUND =====
(function initThreeJS() {
    const canvas = document.getElementById('bg-canvas');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canvas || typeof THREE === 'undefined' || prefersReducedMotion) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

    // Particles
    const count = 800;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 20;
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

    const mat = new THREE.PointsMaterial({ size: 0.025, color: 0x6366f1, transparent: true, opacity: 0.4 });
    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    // Floating wireframe shapes
    const shapes = [];
    const shapeGeo = [
        new THREE.IcosahedronGeometry(0.6, 0),
        new THREE.OctahedronGeometry(0.5, 0),
        new THREE.TetrahedronGeometry(0.4, 0),
    ];
    shapeGeo.forEach((g, i) => {
        const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0x6366f1, wireframe: true, transparent: true, opacity: 0.06 }));
        m.position.set((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 4);
        scene.add(m);
        shapes.push(m);
    });

    camera.position.z = 6;

    // Mouse interaction
    let mx = 0, my = 0;
    document.addEventListener('mousemove', e => {
        mx = (e.clientX / innerWidth - 0.5) * 0.5;
        my = (e.clientY / innerHeight - 0.5) * 0.5;
    });

    // Loop
    function tick() {
        requestAnimationFrame(tick);
        particles.rotation.y += 0.0004;
        particles.rotation.x += 0.0002;
        particles.rotation.y += mx * 0.003;
        particles.rotation.x += my * 0.003;
        shapes.forEach((s, i) => {
            s.rotation.x += 0.003 + i * 0.001;
            s.rotation.y += 0.003 + i * 0.001;
            s.position.y += Math.sin(Date.now() * 0.0008 + i * 2) * 0.002;
        });
        renderer.render(scene, camera);
    }
    tick();

    addEventListener('resize', () => {
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(innerWidth, innerHeight);
    });
})();


// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- Scroll Reveal ---
    const revealEls = document.querySelectorAll('.glass-card, .service-card, .stat-item, .about-img, .about-text, .contact-info, .contact-form, .section-header, footer');
    revealEls.forEach(el => el.classList.add('reveal'));

    if (prefersReducedMotion) {
        revealEls.forEach(el => el.classList.add('visible'));
    }

    if (!prefersReducedMotion) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add('visible'), i * 80);
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealEls.forEach(el => revealObserver.observe(el));
    }

    // --- Sticky Header ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', scrollY > 60);
    });

    // --- Active Nav Link ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(s => {
            if (scrollY >= s.offsetTop - 200) current = s.id;
        });
        navLinks.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + current);
        });
    });

    // --- Theme Toggle ---
    const themeBtn = document.getElementById('themeToggle');
    themeBtn.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });
    // Restore saved theme
    const saved = localStorage.getItem('theme');
    if (saved) document.body.setAttribute('data-theme', saved);

    // --- Mobile Menu ---
    const menuBtn = document.getElementById('menuToggle');
    const navbar = document.querySelector('.navbar');
    if (menuBtn && navbar) {
        menuBtn.addEventListener('click', () => {
            const isOpen = navbar.classList.toggle('active');
            menuBtn.setAttribute('aria-expanded', String(isOpen));
        });
        navbar.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
        }));
    }

    // --- Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // --- Contact Form ---
    const form = document.getElementById('contactForm');
    if (form) {
        const status = document.getElementById('formStatus');

        form.addEventListener('submit', async e => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const formData = new FormData(form);
            const name = (formData.get('name') || '').toString().trim();
            const business = (formData.get('business') || '').toString().trim();
            const goal = (formData.get('goal') || '').toString().trim();
            const message = (formData.get('message') || '').toString().trim();
            const brief = [
                `Name: ${name}`,
                business ? `Company or Brand: ${business}` : 'Company or Brand: Not specified',
                `Primary Goal: ${goal}`,
                'Project Brief:',
                message,
            ].join('\n');

            btn.textContent = 'Copying...';
            btn.disabled = true;

            try {
                await navigator.clipboard.writeText(brief);
                status.textContent = 'Project brief copied. Paste it into a LinkedIn message to start the conversation.';
                btn.textContent = 'Copied';
                btn.style.background = '#10b981';
                form.reset();
            } catch (error) {
                status.textContent = 'Copy failed. Please copy the details manually and send them on LinkedIn.';
                btn.textContent = 'Copy Brief';
            } finally {
                setTimeout(() => {
                    btn.textContent = 'Copy Brief';
                    btn.style.background = '';
                    btn.disabled = false;
                }, 2200);
            }
        });
    }

    // --- Progress Bar Animation ---
    const progressBars = document.querySelectorAll('.progress');
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => { bar.style.width = width; }, 200);
                progressObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    if (prefersReducedMotion) {
        progressBars.forEach(bar => { bar.style.width = bar.style.width; });
    } else {
        progressBars.forEach(bar => progressObserver.observe(bar));
    }
});
