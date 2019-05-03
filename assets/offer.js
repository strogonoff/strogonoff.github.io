const baseZIndex = 10;

function initOffer(offerEl, containerEl, globalOverlayEl) {
  const formEl = offerEl.querySelector('form');
  const textareaEl = formEl.querySelector('textarea');
  const submitBtnEl = formEl.querySelector('a.talk');

  submitBtnEl.setAttribute('disabled', 'disabled');

  let updateSubmitBtnState = function() {
    const val = (textareaEl.value || '').trim();
    if (val != '') {
      submitBtnEl.removeAttribute('disabled');
      const subject = "Consulting inquiry";
      const body = window.escape(val);
      submitBtnEl.setAttribute('href', `mailto:anton@strogonoff.name?subject=${subject}&body=${body}`);
    } else {
      submitBtnEl.setAttribute('disabled', 'disabled');
    }
  };

  let enterAnsweringMode = function() {
    containerEl.classList.add('answering-mode');
    offerEl.classList.add('active');
    offerEl.style.zIndex = baseZIndex + 1;
    window.setTimeout(() => {
      globalOverlayEl.style.display = 'block';
      globalOverlayEl.style.background = 'rgba(0, 0, 0, 0.3)';
    }, 100);
  };

  let exitAnsweringMode = function() {
    containerEl.classList.remove('answering-mode');
    offerEl.classList.remove('active');
    globalOverlayEl.style.background = 'transparent';
    window.setTimeout(() => {
      offerEl.style.zIndex = 'unset';
      globalOverlayEl.style.display = 'none';
    }, 100);
  };

  textareaEl.addEventListener('click', enterAnsweringMode);
  textareaEl.addEventListener('keyup', updateSubmitBtnState);
  globalOverlayEl.addEventListener('click', exitAnsweringMode);

  return {};
}

export function initOffers(containerEl) {
  const globalOverlayEl = document.createElement('div');
  const body = document.querySelector('body');

  body.appendChild(globalOverlayEl);

  globalOverlayEl.style.position = 'fixed';
  globalOverlayEl.style.top = '0';
  globalOverlayEl.style.left = '0';
  globalOverlayEl.style.bottom = '0';
  globalOverlayEl.style.transition = 'background .1s ease-in-out';
  globalOverlayEl.style.right = '0';
  globalOverlayEl.style.zIndex = baseZIndex - 1;
  globalOverlayEl.style.background = 'transparent';
  globalOverlayEl.style.display = 'none';

  for (let el of containerEl.querySelectorAll('li.offer')) {
    initOffer(el, containerEl, globalOverlayEl);
  }
  return {};
}
