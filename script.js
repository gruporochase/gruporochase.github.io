/**
 * ==========================================================================
 * GRUPO ROCHA – SOLUÇÕES EMPRESARIAIS
 * Script Principal Interativo & Integração WhatsApp
 * ==========================================================================
 */

(function () {
  'use strict';

  /* ========================================================================
     1. CONFIGURAÇÃO CENTRALIZADA DE CONTATOS & MENSAGENS (WHATSAPP)
     Facilita alterações futuras em um único local do código.
     ======================================================================== */
  const WHATSAPP_CONFIG = {
    // Telefones com DDI (55) + DDD (16) + Número (sem formatação para link)
    phones: {
      jessica: '5516996150980',
      robison: '5516997962030',
      default: '5516996150980' // Jéssica é o contato corporativo padrão
    },

    // Mensagens predefinidas para cada ponto de contato
    messages: {
      headerCta: 'Olá! Conheci o Grupo Rocha pelo site e gostaria de solicitar uma consultoria.',
      heroCta: 'Olá! Conheci o Grupo Rocha pelo site e gostaria de solicitar uma consultoria.',
      commercialCta: 'Olá! Conheci o Grupo Rocha pelo site e gostaria de conversar sobre soluções para minha empresa.',
      floatingBtn: 'Olá! Acessei o site do Grupo Rocha e gostaria de mais informações.',
      contactJessica: 'Olá, Jéssica! Conheci o Grupo Rocha pelo site e gostaria de conversar sobre desenvolvimento de pessoas e liderança.',
      contactRobison: 'Olá, Robison! Conheci o Grupo Rocha pelo site e gostaria de conversar sobre gestão, processos e performance.',
      footerJessica: 'Olá, Jéssica! Conheci o Grupo Rocha pelo site e gostaria de conversar.',
      footerRobison: 'Olá, Robison! Conheci o Grupo Rocha pelo site e gostaria de conversar.',

      // Mensagens específicas por serviço
      services: {
        gestao: 'Olá! Conheci o Grupo Rocha pelo site e gostaria de saber mais sobre o serviço de Consultoria em Gestão Empresarial.',
        lideranca: 'Olá! Conheci o Grupo Rocha pelo site e gostaria de saber mais sobre o serviço de Desenvolvimento de Lideranças.',
        treinamentos: 'Olá! Conheci o Grupo Rocha pelo site e gostaria de saber mais sobre os Treinamentos e Capacitações Profissionais.',
        rh: 'Olá! Conheci o Grupo Rocha pelo site e gostaria de saber mais sobre os serviços de Recursos Humanos e Desenvolvimento Organizacional.',
        nr1: 'Olá! Conheci o Grupo Rocha pelo site e gostaria de saber mais sobre o apoio organizacional relacionado à NR-1.',
        processos: 'Olá! Conheci o Grupo Rocha pelo site e gostaria de saber mais sobre o serviço de Organização e Melhoria de Processos.',
        acompanhamento: 'Olá! Conheci o Grupo Rocha pelo site e gostaria de saber mais sobre o serviço de Acompanhamento e Desenvolvimento Contínuo.'
      }
    }
  };

  /**
   * Constrói link seguro e padronizado da API do WhatsApp.
   * @param {string} phone - Número no formato internacional.
   * @param {string} message - Texto não codificado.
   * @returns {string} URL pública do WhatsApp com texto codificado.
   */
  function buildWhatsAppUrl(phone, message) {
    const safePhone = phone.replace(/\D/g, '');
    const encodedText = encodeURIComponent(message.trim());
    return `https://wa.me/${safePhone}?text=${encodedText}`;
  }

  /* ========================================================================
     2. INICIALIZAÇÃO DE LINKS DO WHATSAPP
     ======================================================================== */
  function initWhatsAppLinks() {
    // 1. Cabeçalho
    const headerCta = document.getElementById('headerCtaBtn');
    if (headerCta) {
      headerCta.href = buildWhatsAppUrl(WHATSAPP_CONFIG.phones.jessica, WHATSAPP_CONFIG.messages.headerCta);
    }

    // 2. Hero CTA
    const heroCta = document.getElementById('heroCtaPrimary');
    if (heroCta) {
      heroCta.href = buildWhatsAppUrl(WHATSAPP_CONFIG.phones.jessica, WHATSAPP_CONFIG.messages.heroCta);
    }

    // 3. CTA Comercial
    const commercialCta = document.getElementById('commercialCtaBtn');
    if (commercialCta) {
      commercialCta.href = buildWhatsAppUrl(WHATSAPP_CONFIG.phones.jessica, WHATSAPP_CONFIG.messages.commercialCta);
    }

    // 4. Seção de Contato
    const contactJessica = document.getElementById('contactJessicaBtn');
    if (contactJessica) {
      contactJessica.href = buildWhatsAppUrl(WHATSAPP_CONFIG.phones.jessica, WHATSAPP_CONFIG.messages.contactJessica);
    }

    const contactRobison = document.getElementById('contactRobisonBtn');
    if (contactRobison) {
      contactRobison.href = buildWhatsAppUrl(WHATSAPP_CONFIG.phones.robison, WHATSAPP_CONFIG.messages.contactRobison);
    }

    // 5. Rodapé
    const footerJessica = document.getElementById('footerJessicaBtn');
    if (footerJessica) {
      footerJessica.href = buildWhatsAppUrl(WHATSAPP_CONFIG.phones.jessica, WHATSAPP_CONFIG.messages.footerJessica);
    }

    const footerRobison = document.getElementById('footerRobisonBtn');
    if (footerRobison) {
      footerRobison.href = buildWhatsAppUrl(WHATSAPP_CONFIG.phones.robison, WHATSAPP_CONFIG.messages.footerRobison);
    }

    // 6. Botão Flutuante
    const floatingBtn = document.getElementById('floatingWhatsappBtn');
    if (floatingBtn) {
      floatingBtn.href = buildWhatsAppUrl(WHATSAPP_CONFIG.phones.default, WHATSAPP_CONFIG.messages.floatingBtn);
    }

    // 7. Cartões de Serviços
    const serviceButtons = document.querySelectorAll('.js-whatsapp-service');
    serviceButtons.forEach(btn => {
      const serviceId = btn.getAttribute('data-service-id');
      const message = WHATSAPP_CONFIG.messages.services[serviceId] || WHATSAPP_CONFIG.messages.headerCta;
      btn.href = buildWhatsAppUrl(WHATSAPP_CONFIG.phones.default, message);
    });
  }

  /* ========================================================================
     3. NAVEGAÇÃO & MENU MOBILE RESPONSIVO
     ======================================================================== */
  function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const primaryNav = document.getElementById('primaryNav');
    const navBackdrop = document.getElementById('navBackdrop');
    const navLinks = document.querySelectorAll('.primary-nav .nav-link, .primary-nav .btn-header');

    if (!navToggle || !primaryNav) return;

    function openMenu() {
      navToggle.classList.add('is-active');
      navToggle.setAttribute('aria-expanded', 'true');
      navToggle.setAttribute('aria-label', 'Fechar menu de navegação');
      primaryNav.classList.add('is-open');
      if (navBackdrop) navBackdrop.classList.add('is-visible');
      document.body.classList.add('menu-open');
    }

    function closeMenu() {
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Abrir menu de navegação');
      primaryNav.classList.remove('is-open');
      if (navBackdrop) navBackdrop.classList.remove('is-visible');
      document.body.classList.remove('menu-open');
    }

    // Alternar ao clicar no botão hambúrguer
    navToggle.addEventListener('click', function () {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Fechar ao clicar no backdrop escuro
    if (navBackdrop) {
      navBackdrop.addEventListener('click', closeMenu);
    }

    // Fechar ao clicar em qualquer item do menu
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });

    // Fechar com a tecla Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        navToggle.focus();
      }
    });
  }

  /* ========================================================================
     4. CABEÇALHO ELEVADO AO ROLAR & SCROLLSPY (DESTAQUE DE SEÇÃO)
     ======================================================================== */
  function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    let ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          if (window.scrollY > 40) {
            header.classList.add('is-scrolled');
          } else {
            header.classList.remove('is-scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.primary-nav .nav-link');

    if (!sections.length || !navLinks.length) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => observer.observe(sec));
  }

  /* ========================================================================
     5. ATUALIZAÇÃO AUTOMÁTICA DO ANO DO COPYRIGHT
     ======================================================================== */
  function initCopyrightYear() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }

  /* ========================================================================
     6. INICIALIZAÇÃO GERAL AO CARREGAR O DOM
     ======================================================================== */
  document.addEventListener('DOMContentLoaded', function () {
    initWhatsAppLinks();
    initMobileMenu();
    initHeaderScroll();
    initScrollSpy();
    initCopyrightYear();
  });

})();
