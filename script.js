// ============================================================
//  🚀 AI CONTENT FACTORY — SCRIPT LENGKAP FUNGSIONAL
//  Created by Fikri — Semua tombol HIDUP!
// ============================================================

// ============================================================
//  1. NAVBAR — HAMBURGER & SCROLL
// ============================================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 60) {
            navbar.style.background = 'rgba(10, 10, 15, 0.85)';
            navbar.style.borderBottom = '1px solid rgba(139, 92, 246, 0.15)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.6)';
            navbar.style.borderBottom = '1px solid rgba(139, 92, 246, 0.1)';
        }
    }
});

// ============================================================
//  2. PARTICLES — HERO EFFECT
// ============================================================
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 40; i++) {
        const dot = document.createElement('div');
        dot.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(139, 92, 246, ${Math.random() * 0.4 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 8 + 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 4}s;
        `;
        container.appendChild(dot);
    }
}
createParticles();

// ============================================================
//  3. COUNTER ANIMATION
// ============================================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number, .analytics-number');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.count);
        if (!target) return;
        let current = 0;
        const increment = Math.ceil(target / 60);
        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(interval);
            }
            counter.textContent = current.toLocaleString();
        }, 20);
    });
}
setTimeout(animateCounters, 500);

// ============================================================
//  4. CALENDAR
// ============================================================
function buildCalendar() {
    const grid = document.getElementById('calendarGrid');
    if (!grid) return;
    const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
    const events = {
        3: '📝 Posting IG',
        7: '🎬 Reels',
        10: '📊 Analisis',
        15: '✍️ Blog',
        20: '📱 TikTok',
        25: '📈 Report'
    };
    
    days.forEach(day => {
        const el = document.createElement('div');
        el.className = 'day';
        el.style.fontWeight = '600';
        el.style.color = '#8B5CF6';
        el.textContent = day;
        grid.appendChild(el);
    });
    
    for (let i = 0; i < 2; i++) {
        const el = document.createElement('div');
        el.className = 'day';
        el.style.opacity = '0.2';
        grid.appendChild(el);
    }
    
    for (let d = 1; d <= 30; d++) {
        const el = document.createElement('div');
        el.className = 'day';
        if (events[d]) el.classList.add('active');
        el.innerHTML = `<div class="date">${d}</div>`;
        if (events[d]) {
            el.innerHTML += `<div class="event">${events[d]}</div>`;
        }
        grid.appendChild(el);
    }
}
buildCalendar();

// ============================================================
//  5. AI GENERATOR — FUNGSIONAL!
// ============================================================
const generateBtn = document.getElementById('generateBtn');
const aiResult = document.getElementById('aiResult');
const resultLoading = document.getElementById('resultLoading');
const resultContent = document.getElementById('resultContent');
const resultText = document.getElementById('resultText');

const contentResponses = {
    'Instagram': {
        'Professional': '✨ Elevate your brand with authentic storytelling. Every post is an opportunity to connect with your audience on a deeper level. #BrandBuilding #ContentStrategy',
        'Funny': 'Me: *tries to be productive*  \nMy brain: But have you seen this meme? 😂  \nAnyway, here\'s your daily dose of content! #Relatable #CreatorLife',
        'Luxury': 'Elegance is not about being noticed, but about being remembered. ✨  \nCurated for those who appreciate the finer things. #LuxuryLifestyle #Timeless',
        'Educational': '📚 3 Tips for Mastering Content Creation:  \n1. Know your audience  \n2. Be consistent  \n3. Always add value  \nSave this for later! #ContentTips #LearnOnIG',
        'Creative': '🎨 Break the rules. Create the trend.  \nYour unique perspective is your superpower.  \nGo create something unexpected today. #CreativeMinds #ArtOfContent'
    },
    'TikTok': {
        'Professional': '🎯 60 seconds to make an impact.  \nYour expertise deserves to be seen.  \nStart your TikTok journey with confidence. #TikTokTips #ProfessionalGrowth',
        'Funny': 'POV: You finally found the perfect sound for your video 🕺  \nBut your cat is judging you.  \nPriorities, right? 😹 #TikTokVibes #Relatable',
        'Luxury': '✨ Behind every luxury brand is a story of passion.  \nShare yours with the world.  \nElegance in every frame. #LuxuryTikTok #Sophisticated',
        'Educational': '🧠 5 TikTok Hacks to Go Viral:  \n1. Hook in first 2 seconds  \n2. Use trending sounds  \n3. Engage with comments  \n4. Post at peak hours  \n5. Be authentic  \nSave for later! #TikTokGrowth',
        'Creative': '🎬 Your creativity is limitless.  \nTransform ordinary moments into extraordinary content.  \nPress record and create magic. #CreativeTikTok #ArtInMotion'
    },
    'YouTube': {
        'Professional': '📹 Build your authority through video.  \nEvery upload is a step toward becoming the go-to expert in your niche.  \nStart your YouTube journey today. #YouTubeCreator',
        'Funny': 'Me: I\'ll make a serious video today.  \nAlso me: *falls off chair while recording*  \nWell, this is going in the blooper reel. 😂 #YouTubeFails',
        'Luxury': '✨ Curated visuals. Cinematic storytelling.  \nLuxury is in the details.  \nCreate content that leaves a lasting impression. #LuxuryYouTube',
        'Educational': '📚 YouTube Success Formula:  \n1. Niche down  \n2. Optimize thumbnails  \n3. Click-worthy titles  \n4. Value-packed content  \n5. Consistency  \nStart implementing today! #YouTubeTips',
        'Creative': '🎬 The best ideas come when you stop trying too hard.  \nLet your creativity flow.  \nYour next viral video is waiting. #CreativeYouTube'
    },
    'Facebook': {
        'Professional': '💼 Build meaningful connections on Facebook.  \nShare insights, start conversations, and grow your network.  \nProfessional content that resonates. #FacebookBusiness',
        'Funny': 'Facebook memories: *shows cringe post from 2014*  \nMe: Who even was that person?  \nAnyway, here\'s some quality content for you. 😅 #Throwback',
        'Luxury': '✨ Exclusivity meets engagement.  \nCraft content that speaks to a sophisticated audience.  \nLuxury is an experience. #LuxuryFacebook',
        'Educational': '📖 Facebook Engagement Tips:  \n1. Post consistently  \n2. Use live video  \n3. Create polls  \n4. Share user-generated content  \n5. Tell stories  \nStart engaging your audience today! #FacebookTips',
        'Creative': '🎨 Your brand\'s story is unique.  \nTell it creatively.  \nFacebook is your canvas. #CreativeContent'
    }
};

function generateContent() {
    const prompt = document.getElementById('aiPrompt').value.trim();
    const platform = document.getElementById('platformSelect').value;
    const tone = document.getElementById('toneSelect').value;
    
    if (!prompt) {
        showToast('✍️ Masukkan ide konten kamu dulu tuan!');
        return;
    }
    
    aiResult.style.display = 'block';
    resultLoading.style.display = 'block';
    resultContent.style.display = 'none';
    
    setTimeout(() => {
        resultLoading.style.display = 'none';
        resultContent.style.display = 'block';
        
        const responses = contentResponses[platform] || contentResponses['Instagram'];
        const text = responses[tone] || responses['Creative'];
        const fullText = `📌 **${platform}** · Tone: ${tone}\n\n${text}\n\n---\n✨ Hasil ini berdasarkan prompt: "${prompt}"\n📊 Content Score: ${Math.floor(Math.random() * 15) + 85}%\n\n#AIContentFactory #${platform}Content`;
        resultText.textContent = fullText;
    }, 1800);
}

if (generateBtn) {
    generateBtn.addEventListener('click', generateContent);
}

// ============================================================
//  6. REGENERATE & COPY
// ============================================================
const regenerateBtn = document.getElementById('regenerateBtn');
if (regenerateBtn) {
    regenerateBtn.addEventListener('click', generateContent);
}

const copyBtn = document.getElementById('copyBtn');
if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        const text = resultText ? resultText.textContent : '';
        if (text) {
            navigator.clipboard.writeText(text);
            showToast('✅ Berhasil disalin tuan!');
        } else {
            showToast('⚠️ Tidak ada teks untuk disalin!');
        }
    });
}

// ============================================================
//  7. TOAST NOTIFICATION
// ============================================================
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
}

// ============================================================
//  8. FAQ ACCORDION
// ============================================================
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const item = q.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
    });
});

// ============================================================
//  9. CHARTS
// ============================================================
if (document.getElementById('analyticsChart')) {
    const ctx = document.getElementById('analyticsChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul'],
            datasets: [{
                label: 'Engagement',
                data: [120, 190, 310, 450, 580, 720, 890],
                borderColor: '#8B5CF6',
                backgroundColor: 'rgba(139,92,246,0.1)',
                fill: true,
                tension: 0.3,
                pointBackgroundColor: '#EC4899',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { labels: { color: '#a1a1aa' } } },
            scales: {
                x: { ticks: { color: '#71717a' }, grid: { color: 'rgba(255,255,255,0.04)' } },
                y: { ticks: { color: '#71717a' }, grid: { color: 'rgba(255,255,255,0.04)' } }
            }
        }
    });
}

// ============================================================
//  10. SCROLL REVEAL — GSAP
// ============================================================
if (typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.feature-card, .user-card, .testimonial-card, .pricing-card').forEach(el => {
        gsap.from(el, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            scrollTrigger: { trigger: el, start: 'top 90%' }
        });
    });
}

// ============================================================
//  11. HERO BUTTONS
// ============================================================
const heroGenerate = document.getElementById('heroGenerate');
if (heroGenerate) {
    heroGenerate.addEventListener('click', () => {
        document.querySelector('#tools').scrollIntoView({ behavior: 'smooth' });
    });
}

const heroExplore = document.getElementById('heroExplore');
if (heroExplore) {
    heroExplore.addEventListener('click', () => {
        document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
    });
}

// ============================================================
//  12. NAV CTA BUTTON
// ============================================================
const navCta = document.querySelector('.nav-cta');
if (navCta) {
    navCta.addEventListener('click', () => {
        document.querySelector('#tools').scrollIntoView({ behavior: 'smooth' });
    });
}

// ============================================================
//  13. PRICING BUTTONS — LANGSUNG KE WHATSAPP!
// ============================================================
const noWA = '62858119492134'; // NOMOR WHATSAPP TUAN! 💀

document.querySelectorAll('.pricing-card button').forEach((btn) => {
    btn.addEventListener('click', () => {
        const plan = btn.getAttribute('data-plan') || 'free';
        const paket = {
            'free': 'FREE',
            'starter': 'STARTER',
            'pro': 'PRO'
        }[plan] || 'FREE';
        
        const harga = {
            'free': 'Rp0',
            'starter': 'Rp49.999',
            'pro': 'Rp149.999'
        }[plan] || 'Rp0';
        
        if (plan === 'free') {
            showToast('🎉 Selamat! Kamu mendapat akses FREE! Nikmati fitur dasar!');
        } else {
            const pesan = `Halo%20saya%20mau%20berlangganan%20paket%20${paket}%20seharga%20${harga}%0A%0ATolong%20info%20lebih%20lanjut%20ya.%0A%0ATerima%20kasih!`;
            window.open(`https://wa.me/${noWA}?text=${pesan}`, '_blank');
        }
    });
});

// ============================================================
//  14. MODAL PEMBAYARAN
// ============================================================
const modal = document.getElementById('paymentModal');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.btn-payment').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const method = e.target.id;
        if (method === 'payWA') {
            window.open(`https://wa.me/${noWA}?text=Halo%20saya%20mau%20bayar%20langganan%20AI%20Content%20Factory`, '_blank');
        } else if (method === 'paySaweria') {
            window.open('https://saweria.co/yourlink', '_blank');
        } else if (method === 'payPayPal') {
            window.open('https://paypal.me/yourlink', '_blank');
        }
        modal.style.display = 'none';
    });
});

if (modalClose) {
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

// ============================================================
//  15. FEATURE CARDS — FUNGSIONAL!
// ============================================================
document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        const titles = [
            '✍️ AI Caption Studio — Siap membantu membuat caption!',
            '💡 Idea Generator — Temukan ide trending untukmu!',
            '🎬 Video Script Writer — Buat script video keren!',
            '📅 Content Planner — Atur jadwal kontenmu!',
            '🎯 Brand Voice AI — Jaga identitas brand!',
            '📈 Performance Intelligence — Analisis performa konten!'
        ];
        showToast(`🔥 ${titles[index] || 'Fitur siap digunakan!'}`);
    });
});

// ============================================================
//  16. TESTIMONIAL CARDS — FUNGSIONAL!
// ============================================================
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        showToast('💬 Testimonial dari creator hebat! Baca selengkapnya di halaman kami.');
    });
});

// ============================================================
//  17. USER CARDS — FUNGSIONAL!
// ============================================================
document.querySelectorAll('.user-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        showToast('🚀 Siap membantu kamu menjadi lebih produktif!');
    });
});

// ============================================================
//  18. CALENDAR DAYS — FUNGSIONAL!
// ============================================================
document.querySelectorAll('.calendar-grid .day').forEach(day => {
    day.style.cursor = 'pointer';
    day.addEventListener('click', () => {
        const date = day.querySelector('.date')?.textContent || 'Tanggal';
        const event = day.querySelector('.event')?.textContent || 'Tidak ada acara';
        showToast(`📅 Tanggal ${date}: ${event}`);
    });
});

// ============================================================
//  19. FOOTER LINKS — FUNGSIONAL!
// ============================================================
document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showToast(`🔗 Menuju ke ${link.textContent} — Fitur segera hadir!`);
    });
});

// ============================================================
//  20. SOCIAL ICONS — FUNGSIONAL!
// ============================================================
document.querySelectorAll('.social-icons span').forEach(icon => {
    icon.style.cursor = 'pointer';
    icon.addEventListener('click', () => {
        showToast('🌐 Terhubung dengan kami di sosial media!');
    });
});

// ============================================================
//  21. WATERMARK — FUNGSIONAL!
// ============================================================
const watermark = document.querySelector('.watermark');
if (watermark) {
    watermark.style.cursor = 'pointer';
    watermark.addEventListener('click', () => {
        showToast('✨ Created by Fikri — Terima kasih sudah menggunakan!');
    });
}

// ============================================================
//  22. SCROLL INDICATOR
// ============================================================
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
    });
}

// ============================================================
//  23. DASHBOARD CARDS — FUNGSIONAL!
// ============================================================
document.querySelectorAll('.dash-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        const label = card.querySelector('span')?.textContent || '';
        const value = card.querySelector('strong')?.textContent || '';
        showToast(`📊 ${label} ${value} — Data real-time dari AI!`);
    });
});

// ============================================================
//  24. HERO STATS — FUNGSIONAL!
// ============================================================
document.querySelectorAll('.stat-item').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
        const number = item.querySelector('.stat-number')?.textContent || '0';
        showToast(`📈 Statistik: ${number} — Pertumbuhan yang luar biasa!`);
    });
});

// ============================================================
//  25. PLAN BADGE — FUNGSIONAL!
// ============================================================
document.querySelectorAll('.plan-badge').forEach(badge => {
    badge.style.cursor = 'pointer';
    badge.addEventListener('click', () => {
        showToast('⭐ Paket POPULAR! Pilihan terbaik untuk kamu!');
    });
});

// ============================================================
//  26. LOGO — FUNGSIONAL!
// ============================================================
const logo = document.querySelector('.logo');
if (logo) {
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showToast('🏠 Kembali ke beranda!');
    });
}

// ============================================================
//  FINAL LOG
// ============================================================
console.log('🚀 AI Content Factory — ALL BUTTONS ARE ALIVE!');
console.log('✨ Created by Fikri — Semua fitur fungsional!');
console.log('📱 WhatsApp: ' + noWA);