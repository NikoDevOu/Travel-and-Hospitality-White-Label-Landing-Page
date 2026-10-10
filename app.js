// =========================================================
// 1. KIỂM TRA THAM SỐ URL & ĐỔI CONFIG DỄ DÀNG (ĐA THEME)
// =========================================================
const urlParams = new URLSearchParams(window.location.search);
const currentTheme = urlParams.get('theme');

// BẢN ĐỒ CÁC THEME: Bạn chỉ cần thêm theme mới vào đây
const themeMap = {
  'arestravel': { file: 'config1.js', varName: 'ARESTRAVEL_CONFIG', credits: 'credits1.html' },
  'theme2':     { file: 'config2.js', varName: 'THEME2_CONFIG',     credits: 'credits2.html' }
};

const activeTheme = themeMap[currentTheme];

if (activeTheme) {
  // Tự động nạp file config tương ứng nếu chưa có
  if (!window[activeTheme.varName]) {
    const script = document.createElement('script');
    script.src = activeTheme.file;
    script.onload = () => {
      window.RESORT_CONFIG = window[activeTheme.varName];
      applyTheme();
    };
    document.head.appendChild(script);
  } else {
    window.RESORT_CONFIG = window[activeTheme.varName];
  }
}

document.addEventListener('DOMContentLoaded', applyTheme);

function applyTheme() {
  if (activeTheme && window[activeTheme.varName]) {
    window.RESORT_CONFIG = window[activeTheme.varName];
  }

  const cfg = window.RESORT_CONFIG;
  if (!cfg) return;

  const setHtml = (selector, html) => {
    const el = document.querySelector(selector);
    if (el && html) el.innerHTML = html;
  };

  const setAttr = (selector, attr, val) => {
    const el = document.querySelector(selector);
    if (el && val) el.setAttribute(attr, val);
  };

  // 1. Cập nhật Logo & Slogan nhỏ (Header & Footer)
  document.querySelectorAll('.wordmark').forEach(el => {
    if (cfg.brandName) el.childNodes[0].nodeValue = cfg.brandName + ' ';
    const span = el.querySelector('span');
    if (span && cfg.tagline) span.textContent = cfg.tagline;
  });

  // 2. Cập nhật Khối Chữ Thương Hiệu Khổ Lớn ở cuối trang (.closing)
  const closingBrand = document.querySelector('.closing > div');
  if (closingBrand && cfg.brandName) {
    closingBrand.textContent = cfg.brandName;
  }
  const closingSlogan = document.querySelector('.closing p');
  if (closingSlogan && (cfg.slogan || cfg.tagline)) {
    closingSlogan.textContent = cfg.slogan || cfg.tagline.toLowerCase();
  }

  // 3. Cập nhật Logo & Slogan trong Modal Xem Video
  const cinemaBrand = document.querySelector('.cinema-brand > div');
  if (cinemaBrand && cfg.brandName) cinemaBrand.textContent = cfg.brandName;
  const cinemaSlogan = document.querySelector('.cinema-brand p');
  if (cinemaSlogan && (cfg.slogan || cfg.tagline)) {
    cinemaSlogan.textContent = cfg.slogan || cfg.tagline.toLowerCase();
  }

  // 4. Hero Section
  if (cfg.locationTag) setHtml('.hero .eyebrow', cfg.locationTag);
  if (cfg.heroTitle) setHtml('.hero h1', cfg.heroTitle);
  if (cfg.heroSubtitle) setHtml('.hero-copy > p:not(.eyebrow)', cfg.heroSubtitle);
  if (cfg.heroImage) setAttr('.hero-image', 'src', cfg.heroImage);

  // 5. Section Câu chuyện
  if (cfg.storyTitle) setHtml('.story h2', cfg.storyTitle);
  const storyPs = document.querySelectorAll('.story-body p');
  if (storyPs[0] && cfg.storyP1) storyPs[0].textContent = cfg.storyP1;
  if (storyPs[1] && cfg.storyP2) storyPs[1].textContent = cfg.storyP2;

  // 6. Section Không gian / Kiến trúc
  if (cfg.archPhoto) setAttr('.arch-photo img', 'src', cfg.archPhoto);
  if (cfg.archTitle) setHtml('.arch-copy h2', cfg.archTitle);
  const archPs = document.querySelector('.arch-copy p');
  if (archPs && cfg.archP1) archPs.textContent = cfg.archP1;

  // 7. Địa chỉ & Google Maps
  if (cfg.address) {
    const addrEl = document.querySelector('#address');
    if (addrEl) addrEl.textContent = 'Địa chỉ: ' + cfg.address;
  }
  if (cfg.googleMaps && /^https:\/\//.test(cfg.googleMaps)) {
    const mapsEl = document.querySelector('#maps');
    if (mapsEl) {
      mapsEl.hidden = false;
      mapsEl.href = cfg.googleMaps;
    }
  }

  // 8. Cập nhật Số điện thoại & Email
  if (cfg.phone) {
    document.querySelectorAll('a[href^="tel:"]').forEach(a => {
      a.href = `tel:${cfg.phone.replace(/\s+/g, '')}`;
      a.textContent = cfg.phone + ' ↗';
    });
  }
  if (cfg.email) {
    document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
      a.href = `mailto:${cfg.email}`;
      a.textContent = cfg.email;
    });
  }

  // 9. ĐỔI LINK CREDITS TƯƠNG ỨNG THEO THEME HIỆN TẠI
  if (activeTheme && activeTheme.credits) {
    const creditsLink = document.querySelector('footer a[href="credits.html"]');
    if (creditsLink) creditsLink.href = activeTheme.credits;
  }
}


const $ = (s) => document.querySelector(s);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduced) {
  document.body.classList.add('motion');
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.08 }
  );

  document
    .querySelectorAll('.reveal')
    .forEach((element) => observer.observe(element));
}

$('#year').textContent = new Date().getFullYear();

const cfg = window.RESORT_CONFIG;
if (cfg.address) $('#address').textContent = cfg.address;
if (cfg.googleMaps && /^https:\/\//.test(cfg.googleMaps)) {
  $('#maps').hidden = false;
  $('#maps').href = cfg.googleMaps;
}

const cinema = $('#cinema');
const video = $('#introVideo');
let closeTimer;

function closeFilm() {
  clearTimeout(closeTimer);
  video.pause();
  cinema.close();
  cinema.classList.remove('ending');
  document.body.style.overflow = '';
}

function openFilm() {
  clearTimeout(closeTimer);
  cinema.classList.remove('ending');
  cinema.showModal();
  document.body.style.overflow = 'hidden';
  video.currentTime = 0;
  $('#playFallback').hidden = true;
  video.play().catch(() => {
    $('#playFallback').hidden = false;
  });
}

$('#watch').onclick = openFilm;
$('#skip').onclick = closeFilm;
cinema.addEventListener('cancel', (event) => {
  event.preventDefault();
  closeFilm();
});
$('#playFallback').onclick = () => {
  video
    .play()
    .then(() => {
      $('#playFallback').hidden = true;
    })
    .catch(() => {
      $('#playFallback').textContent = 'Vidéo chưa tải được · thử lại';
    });
};

video.addEventListener('timeupdate', () => {
  if (video.currentTime >= 11) cinema.classList.add('ending');
});
video.addEventListener('ended', () => {
  cinema.classList.add('ending');
  closeTimer = setTimeout(closeFilm, 2200);
});
video.addEventListener('error', () => {
  if (cinema.open) {
    $('#playFallback').hidden = false;
    $('#playFallback').textContent = 'Không tải được video · Thử lại';
  }
});

if (!reduced) {
  try {
    if (!sessionStorage.getItem('sevsences-intro')) {
      video.addEventListener(
        'loadeddata',
        () => {
          sessionStorage.setItem('sevsences-intro', '1');
          openFilm();
        },
        { once: true }
      );
      video.preload = 'auto';
    }
  } catch {}
}

const arrival = $('#arrival');
const departure = $('#departure');
const localDate = (d) =>
  new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);

arrival.min = localDate(new Date());
arrival.addEventListener('change', () => {
  const next = new Date(arrival.value + 'T12:00:00');
  next.setDate(next.getDate() + 1);
  departure.min = localDate(next);
  if (departure.value <= arrival.value) departure.value = '';
  departure.setCustomValidity('');
});
departure.addEventListener('change', () => departure.setCustomValidity(''));

$('#booking').addEventListener('submit', (event) => {
  event.preventDefault();

  if (arrival.value < localDate(new Date())) {
    arrival.setCustomValidity('Vui lòng chọn ngày đến từ hôm nay.');
    arrival.reportValidity();
    return;
  }

  arrival.setCustomValidity('');

  if (departure.value <= arrival.value) {
    departure.setCustomValidity('Ngày đi phải sau ngày đến.');
    departure.reportValidity();
    return;
  }

  const date = (s) => s.split('-').reverse().join('/');
  const body = `Xin chào SEVSENCÈS,\n\nTôi muốn được tư vấn đặt trước:\nHọ tên: ${$('#guestName').value.trim()}\nĐiện thoại: ${$('#phone').value}\nEmail: ${$('#email').value}\nNgày đến: ${date(arrival.value)}\nNgày đi: ${date(departure.value)}\nSố khách: ${$('#guests').value}\nNhu cầu: ${$('#interest').value}\nLời nhắn: ${$('#note').value.trim() || 'Không có'}\n\nVui lòng xác nhận tình trạng phòng và chi phí trước khi hoàn tất đặt chỗ. Cảm ơn!`;

  $('#summary').textContent = body;
  $('#sendEmail').href = `mailto:${cfg.email}?subject=${encodeURIComponent('Yêu cầu đặt trước SEVSENCÈS')}&body=${encodeURIComponent(body)}`;
  $('#booking-result').hidden = false;
  $('#booking-result').scrollIntoView({
    behavior: reduced ? 'instant' : 'smooth',
    block: 'center',
  });

  $('#copy').onclick = async () => {
    try {
      await navigator.clipboard.writeText(body);
      $('#copy').textContent = 'Đã sao chép';
    } catch {
      $('#copy').textContent = 'Vui lòng chọn và sao chép nội dung phía trên';
    }
  };
});

arrival.addEventListener('input', () => arrival.setCustomValidity(''));
$('#booking').addEventListener('input', () => {
  $('#booking-result').hidden = true;
  $('#copy').textContent = 'Sao chép nội dung';
});

