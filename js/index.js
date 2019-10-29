const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NAV
const navLinks = document.querySelectorAll('a');
let count = 1;
navLinks.forEach( element => {
  if (count !== navLinks.length + 1) {
    element.textContent = siteContent['nav'][`nav-item-${count}`];
    count += 1;
  }
})

// CTA Content
const ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent['cta']['h1'];

// Still broken
const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

const ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent['cta']['img-src'];

// Main Top Content
const mainTopFirst = document.querySelector('.top-content div:first-child h4');
mainTopFirst.textContent = siteContent['main-content']['features-h4'];

const mainTopFirstP = document.querySelector('.top-content div:first-child p');
mainTopFirstP.textContent = siteContent['main-content']['features-content'];

const mainTopSecond = document.querySelector('.top-content div:last-child h4');
mainTopSecond.textContent = siteContent['main-content']['about-h4'];

const mainTopSecondP = document.querySelector('.top-content div:last-child p');
mainTopSecondP.textContent = siteContent['main-content']['about-content'];

const mainImg = document.getElementById('middle-img');
mainImg.src = siteContent['main-content']['middle-img-src'];

//Main Bottom Content h4's
const bottomContentFirstH4 = document.querySelectorAll('.bottom-content .text-content:nth-child(1) h4');
bottomContentFirstH4[0].textContent = siteContent['main-content']['services-h4'];

const bottomContentSecondH4 = document.querySelectorAll('.bottom-content .text-content:nth-child(2) h4');
bottomContentSecondH4[0].textContent = siteContent['main-content']['product-h4'];

const bottomContentThirdH4 = document.querySelectorAll('.bottom-content .text-content:nth-child(3) h4');
bottomContentThirdH4[0].textContent = siteContent['main-content']['vision-h4'];

// Main Bottom Content
const bottomContentFirstP = document.querySelectorAll('.bottom-content .text-content:nth-child(1) p');
bottomContentFirstP[0].textContent = siteContent['main-content']['services-content'];

const bottomContentSecondP = document.querySelectorAll('.bottom-content .text-content:nth-child(2) p');
bottomContentSecondP[0].textContent = siteContent['main-content']['product-content'];

const bottomContentThirdP = document.querySelectorAll('.bottom-content .text-content:nth-child(3) p');
bottomContentThirdP[0].textContent = siteContent['main-content']['vision-content'];

// Contact Content
const contactH4 = document.querySelector('.contact > h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

const contactAddress = document.querySelector('.contact p');
contactAddress.textContent = siteContent['contact']['address'];

const contactPhone = document.querySelector('p:nth-of-type(2)');
contactPhone.textContent = siteContent['contact']['phone'];

const contactEmail = document.querySelector('p:nth-of-type(3');
contactEmail.textContent = siteContent['contact']['email'];

// Footer Content
const footerContent = document.querySelector('footer');
footerContent.textContent = siteContent['footer']['copyright'];