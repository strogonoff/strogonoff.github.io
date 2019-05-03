export const info = { mvp: { }, sre: { } };
const ctx = 'http://schema.org/';

info.mvp = {
  product: {
    '@type': 'Product',
    'name': 'MVP development (1 week)',
    'description': 
      'We’ll work with you to understand your idea and deliver ' +
      'a ‘minimum viable product’ ' +
      'ready for launch.',
  },
  offer: {
    '@type': 'Offer',
    'priceCurrency': 'USD',
    'price': '1000.00',
    'advanceBookingRequirement': {
      '@type': 'QuantitativeValue',
      'unitCode': 'DAY',
      'value': 8,
    },
  },
};

info.sre = {
  product: {
    '@type': 'Service',
    'name': 'Retained SRE team (9 months)',
    'description': 
      'For a few months we’ll work with you to audit ' +
      'and to improve your Web service architecture. ' +
      'We’ll also help you hire in-house staff to ' +
      'continue the improvement.',
  },
  offer: {
    '@type': 'Offer',
    'priceCurrency': 'USD',
    'price': '24000.00',
    'advanceBookingRequirement': {
      '@type': 'QuantitativeValue',
      'unitCode': 'DAY',
      'value': 8,
    },
  },
};

info.mvpFull = Object.assign(info.mvp.product, {
  '@context': ctx,
  'offers': info.mvp.offer,
});

info.sreFull = Object.assign(info.sre.product, {
  '@context': ctx,
  'offers': info.sre.offer,
});

info.coFull = {
  '@context': ctx,
  '@type': 'Corporation',
  'name': 'A14f Consulting',
  'url': 'https://a14f.com/',
  'contactPoint': {
    '@type': 'ContactPoint',
    'email': 'inquiry@a14f.com',
    'contactType': 'customer service',
    'url': 'https://a14f.com/',
    'areaServed': 'Earth',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    'name': 'Consulting offers',
    'itemListElement': [{
      '@type': 'Offer',
      'itemOffered': info.mvp.product,
    }, {
      '@type': 'Offer',
      'itemOffered': info.sre.product,
    }],
  },
};

export function insertJsonLdIntoDom(document, data) {
  let scriptEl = document.createElement('script');
  scriptEl.type = 'application/ld+json';
  scriptEl.innerHTML = JSON.stringify(data);
  (document.head || document.body).appendChild(scriptEl);
};
