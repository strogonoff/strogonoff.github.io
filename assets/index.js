import { info, insertJsonLdIntoDom } from './a14f.js';
import { initOffers } from './offer.js';

insertJsonLdIntoDom(document, info.coFull);
initOffers(document.querySelector('ul.offers'));
