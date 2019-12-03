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



//// Task 1 and Task 2

// nav //
let navNL = document.querySelectorAll('nav a');
navNL.forEach( (el,i) => {
  el.textContent = siteContent.nav[`nav-item-${i+1}`];
})


// cta //
// h1
let parentH1 = document.querySelector('h1');
let childH1_1 = document.createElement('p');
let childH1_2 = document.createElement('p');
let childH1_3 = document.createElement('p');

let h1_str = siteContent.cta.h1;
h1_words = h1_str.split(' ');

childH1_1.textContent = h1_words[0].toUpperCase();
childH1_2.textContent = h1_words[1].toUpperCase();
childH1_3.textContent = h1_words[2].toUpperCase();

parentH1.append(childH1_1);
parentH1.append(childH1_2);
parentH1.append(childH1_3);

parentH1.style.display = 'flex';
parentH1.style.flexDirection = 'column';

// button
let buttonNL = document.querySelector('.cta-text button');
buttonNL.textContent = siteContent.cta.button;

// img
let imgNL = document.querySelector('#cta-img');
imgNL.src = siteContent.cta["img-src"];


// main-content //
// h4 & p
let main_contents = document.querySelectorAll('h4, p');
let main_contents_arr = Array.from(main_contents);
main_contents_arr = main_contents_arr.slice(3,13);


const main_contents_obj = Object.values(siteContent["main-content"])
main_contents_obj.splice(4, 1);
main_contents_arr.forEach( (el, i) => {
  el.textContent = main_contents_obj[i];
})

// middle-img
let middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

// contact
let contact_h4 = document.querySelector('.contact h4');
let contact_p = document.querySelectorAll('.contact p');

contact_h4.textContent = 'CONTACT';

let contact_p_values = Object.values(siteContent.contact);
contact_p_values.splice(0,1);
contact_p.forEach( (el,i) => {
  el.textContent = contact_p_values[i];
});

//// Separating address into two lines
// let contact_parent = document.querySelector('.contact');
// let additional_p = document.createElement('p');
// let first_p = document.querySelector('.contact p');
// additional_p.textContent = siteContent.contact.address.substring(0,19);
// contact_parent.insertBefore(additional_p, contact_parent.children[1]);
// first_p.textContent = siteContent.contact.address.substring(19);

// console.log(additional_p);
contact_p[0].style.width = '20%';


// footer
let footer_p = document.querySelector('footer p');
footer_p.textContent = siteContent.footer.copyright;



//// Task 3
let navParent = document.querySelector('nav');
let navChild1 = document.createElement('a');
let navChild2 = document.createElement('a');
navChild1.textContent = 'Home';
navChild2.textContent = 'DomDomDom';
navChild1.href = '#';
navChild2.href = '#';
navParent.prepend(navChild1);
navParent.appendChild(navChild2);

// Change color to green
let newNavNL = document.querySelectorAll('nav a');
newNavNL.forEach( el => el.style.color = 'green');


// STRETCH
let handleBOOM = document.createElement('button');
handleBOOM.textContent = 'Dark mode';
let parentBOOM = document.querySelector('.cta-text');
parentBOOM.append(handleBOOM);
handleBOOM.style.fontSize = '1rem';
handleBOOM.style.border = '1px solid black';
handleBOOM.style.margin = '4px 0';
handleBOOM.style.padding = '3px 5px';
handleBOOM.href = '#';
handleBOOM.style.textDecoration = 'none';
handleBOOM.style.background = 'white';
handleBOOM.style.color = 'black';

let entireBody = document.querySelector('body');
let all_h1 = document.querySelector('h1')
let all_h4 = document.querySelectorAll('h4');
let all_p = document.querySelectorAll('p');

let BOOM = function () {
  entireBody.style.background = '#252934';
  all_h1.style.color = 'white';
  all_h4.forEach( el => el.style.color = 'white');
  all_p.forEach( el => el.style.color = 'white');
}

let BOOMhover = function() {
  handleBOOM.style.background = 'red';
  handleBOOM.style.color = 'white';
}

handleBOOM.addEventListener('hover', BOOMhover);
handleBOOM.addEventListener('click', BOOM);
