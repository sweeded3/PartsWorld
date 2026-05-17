(() => {
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');
  const menuIcon = menuToggle?.querySelector('i');

  const setMenu = (open) => {
    if (!menuToggle || !siteNav || !menuIcon) return;
    siteNav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    menuIcon.classList.toggle('fa-bars', !open);
    menuIcon.classList.toggle('fa-xmark', open);
  };

  menuToggle?.addEventListener('click', () => {
    setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  siteNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('click', (event) => {
    if (!siteNav || !menuToggle) return;
    const target = event.target;
    if (!siteNav.contains(target) && !menuToggle.contains(target)) setMenu(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('.accordion-header').forEach((button) => {
    button.addEventListener('click', () => {
      const contentId = button.getAttribute('aria-controls');
      const content = contentId ? document.getElementById(contentId) : null;
      const willOpen = button.getAttribute('aria-expanded') !== 'true';

      button.setAttribute('aria-expanded', String(willOpen));
      content?.classList.toggle('is-open', willOpen);
      content?.setAttribute('aria-hidden', String(!willOpen));
    });
  });

  const requestForm = document.getElementById('requestForm');
  const formStatus = document.getElementById('formStatus');
  const priceFile = document.getElementById('priceFile');
  const fileHint = document.getElementById('fileHint');
  const emailFallback = document.getElementById('emailFallback');
  const whatsappNumber = '996221070666';
  const email = 'partsworldkz@yandex.ru';

  const buildMessage = () => {
    if (!requestForm) return '';
    const formData = new FormData(requestForm);
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const vin = String(formData.get('vin') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const fileName = priceFile?.files?.[0]?.name || '';

    return [
      'Здравствуйте! Хочу отправить запрос с сайта Parts World.',
      '',
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      `VIN: ${vin || 'не указан'}`,
      `Запрос: ${message || 'не указан'}`,
      fileName ? `Файл/прайс: ${fileName} (прикреплю вручную)` : ''
    ].filter(Boolean).join('\n');
  };

  const updateEmailFallback = () => {
    if (!emailFallback) return;
    const text = buildMessage();
    const subject = 'Заявка с сайта Parts World';
    emailFallback.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  };

  requestForm?.addEventListener('input', updateEmailFallback);
  priceFile?.addEventListener('change', () => {
    if (fileHint) {
      const fileName = priceFile.files?.[0]?.name;
      fileHint.textContent = fileName
        ? `Выбран файл: ${fileName}. После открытия WhatsApp прикрепите его вручную.`
        : 'На GitHub Pages файлы не загружаются на сервер — вложение можно отправить в WhatsApp после открытия чата.';
    }
    updateEmailFallback();
  });

  requestForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!requestForm.checkValidity()) {
      requestForm.reportValidity();
      return;
    }

    const text = buildMessage();
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    if (formStatus) {
      formStatus.textContent = 'Открылся WhatsApp с готовым текстом заявки.';
    }
  });

  updateEmailFallback();

  const currentYear = document.getElementById('currentYear');
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());
})();
