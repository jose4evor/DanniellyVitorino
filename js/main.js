/**
 * VITORINO SAÚDE & VITORINO ODONTOLOGIA — SCRIPT PRINCIPAL (ES6+)
 * Implementa todos os requisitos interativos e de acessibilidade do Briefing v2.2
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. CABEÇALHO E MENU MOBILE ACESSÍVEL (Seções 4, 5 e 11)
     ========================================================================== */
  const siteHeader = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('#main-nav');

  if (siteHeader) {
    window.addEventListener(
      'scroll',
      function () {
        if (window.scrollY > 16) {
          siteHeader.classList.add('is-scrolled');
        } else {
          siteHeader.classList.remove('is-scrolled');
        }
      },
      { passive: true }
    );
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
      mainNav.classList.toggle('is-open', !isExpanded);
      const labelSpan = menuToggle.querySelector('.menu-toggle__label');
      if (labelSpan) {
        labelSpan.textContent = !isExpanded ? 'Fechar' : 'Menu';
      }
    });

    // Fechar ao clicar em um link âncora no mobile
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 820) {
          menuToggle.setAttribute('aria-expanded', 'false');
          mainNav.classList.remove('is-open');
          const labelSpan = menuToggle.querySelector('.menu-toggle__label');
          if (labelSpan) labelSpan.textContent = 'Menu';
        }
      });
    });

    // Fechar com tecla Escape
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && mainNav.classList.contains('is-open')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('is-open');
        const labelSpan = menuToggle.querySelector('.menu-toggle__label');
        if (labelSpan) labelSpan.textContent = 'Menu';
        menuToggle.focus();
      }
    });
  }

  /* ==========================================================================
     2. ABERTURA INTERATIVA — ROLETA DE PALAVRAS LIGADA À ROLAGEM (Seção 6.1)
     Sequência obrigatória: Saúde → Odontologia → Fisioterapia → Fonoaudiologia → Psicologia → Estética
     ========================================================================== */
  const heroTrack = document.querySelector('#abertura-vitorino');
  const rouletteList = document.querySelector('#roulette-list');
  const rouletteItems = document.querySelectorAll('.roulette-item');
  const roulettePills = document.querySelectorAll('.roulette-pill');
  const prevBtn = document.querySelector('#roulette-prev');
  const nextBtn = document.querySelector('#roulette-next');
  const statusText = document.querySelector('#roulette-status-text');
  const motionToggleBtn = document.querySelector('#motion-toggle-btn');

  const areaDescriptions = [
    {
      name: 'Saúde',
      status: 'Marca principal institucional — Visão de cuidado integral centrado no paciente.'
    },
    {
      name: 'Odontologia',
      status: 'Frente assistencial atual — Atendimento domiciliar, hospitalar, Home Care e ILPIs.'
    },
    {
      name: 'Fisioterapia',
      status: 'Visão de futuro em construção — Conceito que orienta a evolução da Vitorino Saúde.'
    },
    {
      name: 'Fonoaudiologia',
      status: 'Visão de futuro em construção — Conceito que orienta a evolução da Vitorino Saúde.'
    },
    {
      name: 'Psicologia',
      status: 'Visão de futuro em construção — Conceito que orienta a evolução da Vitorino Saúde.'
    },
    {
      name: 'Estética',
      status: 'Visão de futuro em construção — Conceito que orienta a evolução da Vitorino Saúde.'
    }
  ];

  let currentIndex = 0;
  const totalItems = rouletteItems.length;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let isStaticMode = prefersReducedMotion.matches;

  function updateRouletteView(index) {
    if (!rouletteList || totalItems === 0) return;
    const clampedIndex = Math.max(0, Math.min(totalItems - 1, index));
    currentIndex = clampedIndex;

    // Altura de cada item = 56px; centralizar na janela de 220px (centro ~82px)
    const itemHeight = 56;
    const centerOffset = isStaticMode ? 0 : 82 - clampedIndex * itemHeight;

    if (!isStaticMode) {
      rouletteList.style.transform = 'translateY(' + centerOffset + 'px)';
    } else {
      rouletteList.style.transform = 'translateY(82px)';
    }

    rouletteItems.forEach(function (item, idx) {
      item.classList.remove('is-active', 'is-adjacent');
      if (idx === clampedIndex) {
        item.classList.add('is-active');
      } else if (Math.abs(idx - clampedIndex) === 1) {
        item.classList.add('is-adjacent');
      }
    });

    roulettePills.forEach(function (pill, idx) {
      pill.setAttribute('aria-pressed', String(idx === clampedIndex));
    });

    if (statusText && areaDescriptions[clampedIndex]) {
      statusText.textContent = areaDescriptions[clampedIndex].status;
    }
  }

  function applyStaticModeState() {
    if (!heroTrack) return;
    heroTrack.classList.toggle('is-static-mode', isStaticMode);
    if (motionToggleBtn) {
      motionToggleBtn.textContent = isStaticMode
        ? 'Ativar animação de rolagem'
        : 'Alternar para versão estática';
      motionToggleBtn.setAttribute('aria-pressed', String(isStaticMode));
    }
    if (isStaticMode) {
      updateRouletteView(0);
    }
  }

  if (heroTrack && rouletteList && totalItems > 0) {
    // Inicializa sempre com Saúde (índice 0) em destaque (Seção 6.1)
    applyStaticModeState();
    updateRouletteView(0);

    // Sincronização com o avanço da rolagem da página (funciona em mouse, trackpad e toque)
    window.addEventListener(
      'scroll',
      function () {
        if (isStaticMode) return;
        const rect = heroTrack.getBoundingClientRect();
        const scrollableDistance = heroTrack.offsetHeight - window.innerHeight;
        if (scrollableDistance <= 0) return;

        const scrolled = -rect.top;
        if (scrolled <= 0) {
          updateRouletteView(0);
        } else if (scrolled >= scrollableDistance) {
          updateRouletteView(totalItems - 1);
        } else {
          const progress = scrolled / scrollableDistance;
          const targetIndex = Math.min(
            totalItems - 1,
            Math.floor(progress * totalItems)
          );
          if (targetIndex !== currentIndex) {
            updateRouletteView(targetIndex);
          }
        }
      },
      { passive: true }
    );

    // Interação direta pelos botões de palavra (acessível por teclado e toque)
    roulettePills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        const idx = parseInt(pill.getAttribute('data-index') || '0', 10);
        updateRouletteView(idx);
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        updateRouletteView(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        updateRouletteView(currentIndex + 1);
      });
    }

    // Navegação por setas do teclado dentro da composição da abertura
    const rouletteStage = document.querySelector('.roulette-composition');
    if (rouletteStage) {
      rouletteStage.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
          event.preventDefault();
          updateRouletteView(currentIndex + 1);
        } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
          event.preventDefault();
          updateRouletteView(currentIndex - 1);
        }
      });
    }

    // Alternância manual de movimento reduzido / versão estática
    if (motionToggleBtn) {
      motionToggleBtn.addEventListener('click', function () {
        isStaticMode = !isStaticMode;
        applyStaticModeState();
      });
    }

    prefersReducedMotion.addEventListener('change', function (e) {
      isStaticMode = e.matches;
      applyStaticModeState();
    });
  }

  /* ==========================================================================
     3. ENTRADAS POR INTENÇÃO E PREENCHIMENTO CONTEXTUAL (Seção 6.7)
     ========================================================================== */
  const intentLinks = document.querySelectorAll('[data-select-intent]');
  const relationSelect = document.querySelector('#contato-relacao');
  const interestSelect = document.querySelector('#contato-interesse');

  intentLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      const intentType = link.getAttribute('data-select-intent');
      if (!relationSelect || !interestSelect) return;

      // Apenas auxilia o preenchimento; NUNCA dispara envio automático (Seção 10)
      if (intentType === 'paciente-familiar') {
        relationSelect.value = 'Familiar ou cuidador';
        interestSelect.value = 'Atendimento odontológico';
      } else if (intentType === 'profissional') {
        relationSelect.value = 'Profissional de saúde';
        interestSelect.value = 'Encaminhamento profissional';
      } else if (intentType === 'instituicao') {
        relationSelect.value = 'Instituição ou empresa';
        interestSelect.value = 'Parceria institucional ou empresarial';
      }
    });
  });

  /* ==========================================================================
     4. FORMULÁRIO DE PRIMEIRO CONTATO -> WHATSAPP (Seção 10 e 10A)
     Número atual publicado: https://wa.me/556182559552
     ========================================================================== */
  const WHATSAPP_CLINICO_NUMBER = '556182559552';
  const contactForm = document.querySelector('#form-novo-paciente');
  const formFeedback = document.querySelector('#form-feedback');

  // Mensagens iniciais oficiais por intenção (Seção 10A)
  const INITIAL_MESSAGES = {
    atendimento: 'Olá! Gostaria de informações sobre atendimento odontológico.',
    encaminhamento: 'Olá! Sou profissional de saúde e gostaria de conversar sobre um encaminhamento.',
    parceria: 'Olá! Represento uma instituição ou empresa e gostaria de conversar sobre parceria.'
  };

  // Medição anônima de intenção sem dados pessoais ou de saúde (Seção 11)
  window.vitorinoAnalytics = {
    events: [],
    trackIntentClick: function (intentCategory) {
      const safeCategory = ['atendimento', 'encaminhamento', 'parceria'].includes(intentCategory)
        ? intentCategory
        : 'atendimento';
      this.events.push({
        event: 'whatsapp_intent_click',
        category: safeCategory,
        timestamp: new Date().toISOString()
      });
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'whatsapp_intent_click', {
          intent_category: safeCategory
        });
      }
    }
  };

  // Rastrear botões diretos de WhatsApp com atributo data-track-intent
  document.querySelectorAll('[data-track-intent]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const category = btn.getAttribute('data-track-intent') || 'atendimento';
      window.vitorinoAnalytics.trackIntentClick(category);
    });
  });

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const nomeInput = document.querySelector('#contato-nome');
      const telefoneInput = document.querySelector('#contato-telefone');
      const relacaoInput = document.querySelector('#contato-relacao');
      const regiaoInput = document.querySelector('#contato-regiao');
      const interesseInput = document.querySelector('#contato-interesse');
      const mensagemInput = document.querySelector('#contato-mensagem');

      const nome = nomeInput ? nomeInput.value.trim() : '';
      const telefone = telefoneInput ? telefoneInput.value.trim() : '';
      const relacao = relacaoInput ? relacaoInput.value : '';
      const regiao = regiaoInput ? regiaoInput.value.trim() : '';
      const interesse = interesseInput ? interesseInput.value : '';
      const mensagem = mensagemInput ? mensagemInput.value.trim() : '';

      if (!nome || !telefone) {
        if (!nome && nomeInput) nomeInput.focus();
        else if (!telefone && telefoneInput) telefoneInput.focus();
        return;
      }

      // Define a saudação base conforme a intenção selecionada (Seção 10A)
      let greeting = INITIAL_MESSAGES.atendimento;
      let analyticsCategory = 'atendimento';

      if (
        interesse === 'Encaminhamento profissional' ||
        relacao === 'Profissional de saúde'
      ) {
        greeting = INITIAL_MESSAGES.encaminhamento;
        analyticsCategory = 'encaminhamento';
      } else if (
        interesse === 'Parceria institucional ou empresarial' ||
        relacao === 'Instituição ou empresa'
      ) {
        greeting = INITIAL_MESSAGES.parceria;
        analyticsCategory = 'parceria';
      }

      // Registra apenas a categoria anônima (Seção 11: proibido enviar nome, telefone ou mensagem a eventos de análise)
      window.vitorinoAnalytics.trackIntentClick(analyticsCategory);

      // Monta o texto para o WhatsApp
      const lines = [greeting, '', '*Dados do primeiro contato:*'];
      lines.push('• Nome: ' + nome);
      lines.push('• Telefone/WhatsApp: ' + telefone);
      if (relacao) lines.push('• Perfil: ' + relacao);
      if (regiao) lines.push('• Cidade/Região: ' + regiao);
      if (interesse) lines.push('• Interesse: ' + interesse);
      if (mensagem) lines.push('• Resumo inicial: ' + mensagem);

      const whatsappUrl =
        'https://wa.me/' +
        WHATSAPP_CLINICO_NUMBER +
        '?text=' +
        encodeURIComponent(lines.join('\n'));

      if (formFeedback) {
        formFeedback.classList.add('is-visible');
      }

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

  /* ==========================================================================
     5. BOTÃO FLUTUANTE DE WHATSAPP SEM COBRIR FORMULÁRIO OU RODAPÉ (Seção 4 e 13)
     ========================================================================== */
  const whatsappDock = document.querySelector('.whatsapp-dock');
  const nonOverlapTargets = document.querySelectorAll(
    '#novo-paciente, #form-novo-paciente, .site-footer'
  );

  if (whatsappDock && 'IntersectionObserver' in window && nonOverlapTargets.length > 0) {
    const visibleTargets = new Set();
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            visibleTargets.add(entry.target);
          } else {
            visibleTargets.delete(entry.target);
          }
        });
        whatsappDock.classList.toggle('is-hidden-near-target', visibleTargets.size > 0);
      },
      { threshold: 0.1 }
    );

    nonOverlapTargets.forEach(function (target) {
      observer.observe(target);
    });
  }
})();
