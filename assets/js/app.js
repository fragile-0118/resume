/* ============================================
   冯宇杰 / Yujie Feng — Resume Scripts
   - Bilingual toggle (zh ⇄ en) with localStorage
   - Active section highlight in sidebar nav
   ============================================ */

(function () {
  'use strict';

  const STORAGE_KEY = 'resume-lang';
  const VALID_LANGS = ['zh', 'en'];

  /* ---------- Bilingual toggle ---------- */
  function setLang(lang) {
    if (!VALID_LANGS.includes(lang)) lang = 'zh';
    document.body.classList.toggle('lang-active-zh', lang === 'zh');
    document.body.classList.toggle('lang-active-en', lang === 'en');
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

    // Sync button states
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function initLangToggle() {
    // Restore preference
    let saved = 'zh';
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && VALID_LANGS.includes(stored)) saved = stored;
    } catch (e) {}
    setLang(saved);

    // Wire up buttons
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.dataset.lang);
      });
    });
  }

  /* ---------- Active section in sidebar nav ---------- */
  function initScrollSpy() {
    const navLinks = document.querySelectorAll('.sidebar-nav a[href^="#"]');
    if (!navLinks.length) return;

    const linkByHash = {};
    navLinks.forEach(function (a) {
      linkByHash[a.getAttribute('href')] = a;
    });

    const sections = [];
    navLinks.forEach(function (a) {
      const sec = document.querySelector(a.getAttribute('href'));
      if (sec) sections.push({ id: a.getAttribute('href'), el: sec });
    });
    if (!sections.length) return;

    function setActive(id) {
      navLinks.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === id);
      });
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (entries) {
        // Pick the topmost intersecting section
        const visible = entries
          .filter(function (e) { return e.isIntersecting; })
          .sort(function (a, b) {
            return a.boundingClientRect.top - b.boundingClientRect.top;
          });
        if (visible.length) {
          setActive('#' + visible[0].target.id);
        }
      }, { rootMargin: '-30% 0px -55% 0px', threshold: 0 });
      sections.forEach(function (s) { observer.observe(s.el); });
    }
  }

  /* ---------- Boot ---------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initLangToggle();
      initScrollSpy();
    });
  } else {
    initLangToggle();
    initScrollSpy();
  }
})();