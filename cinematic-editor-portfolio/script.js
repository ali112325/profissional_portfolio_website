/**
 * PORTFOLIO WEBSITE — VIDEO EDITOR & AI VISUAL CREATOR (ARABIC EDITION)
 * محرك التفاعل السينمائي والتحكم بالصوت ومعرض الأعمال
 */

// بيانات المشاريع مع الروابط الحقيقية المستهدفة لإنستغرام
const PROJECTS_DATA = [
  {
    id: "01",
    title: "فيلم آكشن سينمائي",
    titleEn: "Cinematic Action Film",
    category: "مونتاج سينمائي / خدع بصرية (VFX) / توليد بالذكاء الاصطناعي",
    url: "https://www.instagram.com/reel/DX8vQO1o3Mn/",
    poster: "assets/projects/project1.svg",
    timecode: "00:01:24:18",
    description: "عمل سينمائي قصير يجمع بين المونتاج المتقدم، محاكاة إطلاق النار الواقعي، دمج الحشود بالذكاء الاصطناعي، والتركيب البصري والمعالجة الصوتية.",
    specs: {
      "صيغة الفيديو": "9:16 رأسي + 2.39:1 CinemaScope",
      "البرامج المستخدمة": "Premiere Pro (5Y) • Omni • Seedance",
      "الخدع والتركيب البصري": "محاكاة إطلاق النار، الشرر، حشود الـ AI",
      "الهندسة الصوتية": "مؤثرات SFX مخصصة، عزل الصوت، Sub-bass",
      "المنصة المستهدفة": "إنستغرام ريلز (Reel الأصلي متاح)"
    }
  },
  {
    id: "02",
    title: "الانتقالات السلسة",
    titleEn: "Seamless Transitions",
    category: "ريلز سينمائي / انتقالات متدفقة / نصوص متحركة",
    url: "https://www.instagram.com/reel/DP9mbQ7jApq/",
    poster: "assets/projects/project2.svg",
    timecode: "00:00:45:12",
    description: "فيديو قصير يستعرض انتقالات متناسقة بدون انقطاع، وانسيابية بصرية مريحة للعين، مع تحريك نصوص مخصصة وإيقاع مدروس لشد الانتباه وتحقيق أعلى نسبة احتفاظ.",
    specs: {
      "صيغة الفيديو": "9:16 محسّن لخوارزميات إنستغرام",
      "البرامج المستخدمة": "Adobe Premiere Pro الاحترافي",
      "تقنيات المونتاج": "Match Cuts، Masking Whips، منحنيات السرعة",
      "التايبوغرافي": "نصوص حركية مدمجة بدقة الميلي ثانية",
      "معدل الاحتفاظ": "مصمم لتحقيق أعلى نسبة إكمال للمشاهدة"
    }
  },
  {
    id: "03",
    title: "التايبوغرافي والهندسة الصوتية",
    titleEn: "Typography & Sound Design",
    category: "تايبوغرافي حركي / مؤثرات صوتية / SFX",
    url: "https://www.instagram.com/reel/DYOak1IsOOJ/",
    poster: "assets/projects/project3.svg",
    timecode: "00:00:32:08",
    description: "فيديو إبداعي يركز على مزامنة النصوص المتحركة بدقة أجزاء الثانية مع مؤثرات صوتية احترافية وطبقات صوت سينمائية عميقة ومؤثرة في المتلقي.",
    specs: {
      "صيغة الفيديو": "9:16 فيديو عالي التفاعل",
      "البرامج المستخدمة": "Premiere Pro • Audio Mastering Suite",
      "المعالجة الصوتية": "مكساج وماسترينغ 48kHz / 24-bit",
      "حركة النصوص": "Kinetic Typography مع إيقاع الموسيقى",
      "وضوح الصوت": "مضبوط لنقاء الهواتف والسماعات الاحترافية"
    }
  },
  {
    id: "04",
    title: "موشن غرافيك تجاري",
    titleEn: "Motion Graphics",
    category: "موشن غرافيك / إعلانات تجارية",
    url: "https://www.instagram.com/reel/DYIOkeVAJHG/",
    poster: "assets/projects/project4.svg",
    timecode: "00:01:10:04",
    description: "مشروع موشن غرافيك مخصص تم تنفيذه لعميل تجاري، يوضح دقة التحريك، وسلاسة توصيل الرسالة البصرية، والمرونة الإبداعية في تلبية الهوية.",
    specs: {
      "صيغة الفيديو": "تسليم تجاري مخصص متعدد المنصات",
      "البرامج المستخدمة": "حزمة الموشن غرافيك والتحريك المتجهي",
      "الهدف التسويقي": "هوية تجارية احترافية وعالية المصداقية",
      "معدل الإطارات": "60fps سلاسة فائقة في الحركة",
      "الملائمة": "إعلانات تجارية، عيادات، شركات وفعاليات"
    }
  }
];

// بدء التشغيل عند اكتمال تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  initSMPTETimecode();
  initCinemaScopeToggle();
  initAudioEngine();
  initCustomCursor();
  initFilmGrain();
  initHeroParticles();
  initDirectProjectActions();
  initTheaterModal();
  initMobileNav();
});

/* ==========================================================================
   1. عداد التايم كود السينمائي الحي (24 إطاراً بالثانية)
   ========================================================================== */
function initSMPTETimecode() {
  const tcElements = document.querySelectorAll('.smpte-timecode, .live-timecode');
  if (!tcElements.length) return;

  let frames = 0;
  let seconds = 14;
  let minutes = 22;
  let hours = 0;

  setInterval(() => {
    frames++;
    if (frames >= 24) {
      frames = 0;
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours = (hours + 1) % 24;
        }
      }
    }

    const ff = String(frames).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');
    const mm = String(minutes).padStart(2, '0');
    const hh = String(hours).padStart(2, '0');
    const tcString = `${hh}:${mm}:${ss}:${ff}`;

    tcElements.forEach(el => {
      el.textContent = el.dataset.prefix ? `${el.dataset.prefix} ${tcString}` : tcString;
    });
  }, 1000 / 24);
}

/* ==========================================================================
   2. نمط السينما 2.39:1 CinemaScope
   ========================================================================== */
function initCinemaScopeToggle() {
  const toggleBtn = document.getElementById('cinemaScopeToggle');
  const scopeBadge = document.getElementById('cinemaScopeBadge');
  
  function toggleScope() {
    const isActive = document.body.classList.toggle('cinemascope-active');
    if (toggleBtn) {
      toggleBtn.classList.toggle('active', isActive);
    }
    if (scopeBadge) {
      scopeBadge.textContent = isActive ? '2.39:1 سينما [مفعّل]' : '16:9 قياسي';
    }
    playUiSound(isActive ? 'scope-on' : 'scope-off');
    showToast(isActive ? 'تم تفعيل نمط السينما 2.39:1' : 'النمط العريض القياسي');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleScope);
  }

  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'c' || e.key === 'C') toggleScope();
  });
}

/* ==========================================================================
   3. محرك الصوت المدمج التفاعلي (Web Audio API)
   ========================================================================== */
let audioCtx = null;
let ambientDroneNode = null;
let isAudioActive = false;

function initAudioEngine() {
  const soundBtn = document.getElementById('ambientSoundToggle');
  if (!soundBtn) return;

  function toggleAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isAudioActive = !isAudioActive;
    soundBtn.classList.toggle('active', isAudioActive);

    if (isAudioActive) {
      startAmbientDrone();
      showToast('تم تفعيل المؤثرات الصوتية');
    } else {
      stopAmbientDrone();
      showToast('تم كتم الصوت');
    }
  }

  soundBtn.addEventListener('click', toggleAudio);

  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'm' || e.key === 'M') toggleAudio();
  });

  document.querySelectorAll('button, .btn-primary, .btn-secondary, .nav-link, .contact-channel-card').forEach(btn => {
    btn.addEventListener('click', () => {
      if (isAudioActive) playUiSound('click');
    });
  });
}

function startAmbientDrone() {
  if (!audioCtx) return;
  try {
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const filter = audioCtx.createBiquadFilter();
    const gain = audioCtx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(55, audioCtx.currentTime);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(110.5, audioCtx.currentTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(180, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.035, audioCtx.currentTime + 3);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    osc1.start();
    osc2.start();

    ambientDroneNode = { osc1, osc2, gain };
  } catch (err) {
    console.warn("Audio deferred", err);
  }
}

function stopAmbientDrone() {
  if (ambientDroneNode && audioCtx) {
    try {
      ambientDroneNode.gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.4);
      setTimeout(() => {
        ambientDroneNode.osc1.stop();
        ambientDroneNode.osc2.stop();
        ambientDroneNode = null;
      }, 400);
    } catch (e) {}
  }
}

function playUiSound(type = 'click') {
  if (!isAudioActive || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } else if (type === 'scope-on' || type === 'scope-off') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(type === 'scope-on' ? 240 : 180, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(type === 'scope-on' ? 480 : 90, audioCtx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.12);
    }
  } catch (e) {}
}

/* ==========================================================================
   4. مؤشر الماوس السينمائي
   ========================================================================== */
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.cursor-follower');
  if (!cursor || !follower) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });

  function renderFollower() {
    followerX += (mouseX - followerX) * 0.18;
    followerY += (mouseY - followerY) * 0.18;
    follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
    requestAnimationFrame(renderFollower);
  }
  requestAnimationFrame(renderFollower);

  document.querySelectorAll('.project-media-wrapper').forEach(card => {
    card.addEventListener('mouseenter', () => {
      follower.classList.add('hover-play');
      follower.textContent = 'تشغيل';
    });
    card.addEventListener('mouseleave', () => {
      follower.classList.remove('hover-play');
      follower.textContent = '';
    });
  });
}

/* ==========================================================================
   5. حبيبات الفيلم التناظرية 35mm
   ========================================================================== */
function initFilmGrain() {
  const canvas = document.getElementById('grainCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth / 2;
    canvas.height = window.innerHeight / 2;
  }
  resize();
  window.addEventListener('resize', resize);

  function generateGrain() {
    const w = canvas.width;
    const h = canvas.height;
    if (w <= 0 || h <= 0) return;
    const imgData = ctx.createImageData(w, h);
    const buffer = new Uint32Array(imgData.data.buffer);
    const len = buffer.length;

    for (let i = 0; i < len; i++) {
      if (Math.random() < 0.12) {
        const val = (Math.random() * 255) | 0;
        buffer[i] = (255 << 24) | (val << 16) | (val << 8) | val;
      }
    }
    ctx.putImageData(imgData, 0, 0);
  }

  setInterval(generateGrain, 100);

  const grainBtn = document.getElementById('grainToggle');
  if (grainBtn) {
    grainBtn.addEventListener('click', () => {
      const isOff = document.body.classList.toggle('grain-disabled');
      grainBtn.classList.toggle('active', !isOff);
      showToast(isOff ? 'تم إيقاف حبيبات الفيلم' : 'تم تفعيل حبيبات الفيلم 35mm');
    });
  }
}

/* ==========================================================================
   6. خلفية الجزئيات الضوئية في واجهة الموقع
   ========================================================================== */
function initHeroParticles() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  const particles = [];
  const particleCount = 40;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: -Math.random() * 0.45 - 0.15,
      opacity: Math.random() * 0.45 + 0.1
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.y < 0) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

/* ==========================================================================
   7. تفاعل مشاريع المعرض — الضغط على الفيديو أو الزر يحول للرابط مباشرة
   ========================================================================== */
function initDirectProjectActions() {
  // عند الضغط على واجهة الفيديو أو زر التشغيل، يتم فتح رابط الريلز المستهدف فوراً
  document.querySelectorAll('.project-media-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', (e) => {
      const targetUrl = wrapper.dataset.targetUrl;
      if (targetUrl) {
        playUiSound('click');
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
      }
    });
  });
}

/* ==========================================================================
   8. نافذة تفاصيل العمل التقنية (Theater Specs Modal)
   ========================================================================== */
function initTheaterModal() {
  const modal = document.getElementById('theaterModal');
  const closeBtn = document.getElementById('theaterCloseBtn');
  const screenImg = document.getElementById('theaterPosterImg');
  const titleEl = document.getElementById('theaterTitle');
  const catEl = document.getElementById('theaterCategory');
  const descEl = document.getElementById('theaterDescription');
  const specsListEl = document.getElementById('theaterSpecsList');
  const openReelBtn = document.getElementById('theaterOpenReelBtn');

  if (!modal) return;

  function openTheater(projectId) {
    const proj = PROJECTS_DATA.find(p => p.id === projectId) || PROJECTS_DATA[0];

    titleEl.textContent = proj.title;
    catEl.textContent = proj.category;
    descEl.textContent = proj.description;
    openReelBtn.href = proj.url;
    if (screenImg) {
      screenImg.src = proj.poster;
      screenImg.alt = proj.title;
    }

    specsListEl.innerHTML = '';
    for (const [key, val] of Object.entries(proj.specs)) {
      const row = document.createElement('div');
      row.className = 'theater-spec-row';
      row.innerHTML = `<span class="spec-key">${key}</span><span class="spec-val">${val}</span>`;
      specsListEl.appendChild(row);
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    playUiSound('scope-on');
  }

  function closeTheater() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    playUiSound('click');
  }

  document.querySelectorAll('[data-theater-trigger]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.theaterTrigger;
      openTheater(id);
    });
  });

  closeBtn.addEventListener('click', closeTheater);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeTheater();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeTheater();
    }
  });
}

/* ==========================================================================
   9. القائمة المتنقلة للهواتف
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileDrawer');
  const links = document.querySelectorAll('.mobile-drawer-link');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    playUiSound('click');
  });

  links.forEach(l => {
    l.addEventListener('click', () => {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ==========================================================================
   10. التنبيهات المنبثقة
   ========================================================================== */
let toastTimeout = null;
function showToast(message) {
  let toast = document.getElementById('systemToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'systemToast';
    toast.className = 'toast-box';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span style="color:var(--accent-cyan); font-weight:900;">●</span>
    <span>${message}</span>
  `;

  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
