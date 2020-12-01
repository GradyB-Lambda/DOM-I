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
  "main": {
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



const newNav = document.querySelectorAll('a');
// console.log(newNav)

newNav[0].textContent = siteContent.nav['nav-item-1'];
newNav[1].textContent = siteContent.nav['nav-item-2'];
newNav[2].textContent = siteContent.nav['nav-item-3'];
newNav[3].textContent = siteContent.nav['nav-item-4'];
newNav[4].textContent = siteContent.nav['nav-item-5'];
newNav[5].textContent = siteContent.nav['nav-item-6'];

newNav[0].style.color = 'darkgreen'
newNav[1].style.color = 'darkgreen';
newNav[2].style.color = 'darkgreen';
newNav[3].style.color = 'darkgreen';
newNav[4].style.color = 'darkgreen';
newNav[5].style.color = 'darkgreen';

const start = document.querySelector('a');
const addNewNav = document.createElement('a');
addNewNav.textContent = 'Begin Here ';
start .prepend(addNewNav);



 document.querySelector('h1').textContent = 
    siteContent.cta['h1'];
document.querySelector('h1').innerHTML = 'DOM <br> IS <br> AWESOME'   


 document.querySelector('button').textContent = 
    siteContent.cta['button'];
 document.querySelector('#cta-img').src = 
    siteContent.cta['img-src'];

/*

   */

const newHeadings = document.querySelectorAll('h4');
// console.log(newHeadings);

newHeadings[0].textContent =  
    siteContent.main['features-h4'];
newHeadings[1].textContent =
    siteContent.main['about-h4'];
newHeadings[2].textContent = 
    siteContent.main['services-h4'];
newHeadings[3].textContent =
    siteContent.main['product-h4'];
newHeadings[4].textContent = 
    siteContent.main['vision-h4'];

const newPara = document. querySelectorAll('p');
// console.log(newPara);

newPara[0].textContent = 
    siteContent.main['features-content'];
newPara[1].textContent = 
    siteContent.main['about-content'];
newPara[2].textContent = 
    siteContent.main['product-content'];
newPara[3].textContent = 
    siteContent.main['services-content'];
newPara[4].textContent = 
siteContent.main['vision-content'];


document.querySelector('#middle-img').src = siteContent.main['middle-img-src'];


const newContact = document.querySelector('.contact h4');
console.log(newContact) 
    
newContact.textContent = 
    siteContent.contact['contact-h4']

const newConInfo = document.querySelectorAll('.contact p')
console.log(newConInfo);

newConInfo[0].textContent =
    siteContent.contact['address'];
newConInfo[1].textContent =
    siteContent.contact['phone'];
newConInfo[2].textContent =
    siteContent.contact['email'];

    // "footer": {
    //   "copyright" : "Copyright Great Idea! 2018"
    // },

document.querySelector('footer').textContent = siteContent.footer['copyright'];

const newFootEnd = document.querySelector('footer');

const newItem = document.createElement('h3');
newItem.textContent= 'Thanks for Visiting';
console.log(newItem)

newFootEnd.appendChild(newItem);