document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(link => {
      link.addEventListener('click',   function() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });
  const content = {
    1: [
        { image: 'image1a.jpeg', name:'Kheer', list: ['Basmati Rice', 'Milk', 'Sugar', 'Cardamom-powder', 'Chopped Dry-fruits'], link: 'https://www.youtube.com/watch?v=riToqi_sAFA' },
        { image: 'image1b.jpg', name: 'Gulab-Jamun', list: ['Maida', 'Water', 'Sugar', 'Baking-powder','Milk-powder'], link: 'https://www.youtube.com/watch?v=NH1yqSEpJLY' },
        { image: 'image1c.jpg', name:'Rasmalai', list: ['Crumbled Panner', 'Milk', 'Sugar', 'Cardamom Powder','Saffron-strands'], link: 'https://www.youtube.com/watch?v=Ap9DEjM8nGg' },
        { image: 'image1d.jpg', name:'Laddu', list: ['Besan', 'Ghee', 'Chopped nuts', 'Sugar', 'Cardamom-powder'], link: 'https://www.youtube.com/watch?v=6JesiKFDcHk' }
    ],
    2: [
        { image: 'image2a.jpeg', name:'Dum-Biriyani',  list: ['Basmathi Rice', 'Chicken', 'Salt, Biriyani-masala','Yogurt', 'Onions-2'], link: 'https://www.youtube.com/watch?v=-WKevePVB-I' },
        { image: 'image2b.jpg',  name:'Veg-Biriyani', list: ['Basmati Rice', 'Vegitables', 'Onions-2', 'Salt, Biriyani-masala', 'Yogurt'], link: 'https://www.youtube.com/watch?v=S5Ngh6CFRmc' },
        { image: 'image2c.jpg',  name:'Mutton-Biriyani', list: ['Basmati Rice', 'Mutton', 'Onions-2', 'Salt, Biriyani-masala', 'Yogurt'], link: 'https://www.youtube.com/watch?v=GFerdl-IEhs' },
        { image: 'image2d.jpg',  name:'Panner-Biriyani', list: ['Basmati Rice', 'Panner', 'Onions-2', 'Salt, Biriyani-masala', 'Yogurt'], link: 'https://www.youtube.com/watch?v=e7I0qDKA2Ak' }
    ],
    3: [
        { image: 'image3a.jpg', name:'Rumali-Roti', list: ['Maida-2cups', 'Wheat Flour-1cup', 'Salt', 'Water','Oil'], link: 'https://www.youtube.com/watch?v=svskghMnNu0' },
        { image: 'image3b.jpg', name: 'Tandoori-Roti', list: ['Wheat Flour', 'Baking Powder', 'Yogurt','Salt', 'Water'], link: 'https://www.youtube.com/watch?v=5-YhV1gmoo8' },
        { image: 'image3c.jpg',  name:'Butter-Naan', list: ['Maida', 'Butter', 'Baking Powder', 'Milk','Yogurt'], link: 'https://www.youtube.com/watch?v=7x4Dn5q67NY'},
        { image: 'image3d.jpg',  name:'Garlic-Naan', list: ['Maida', 'Garlic', 'Baking Powder', 'Milk','Yogurt'], link: 'https://www.youtube.com/watch?v=zosoH5dH-uo'}
    ],
    4: [
        { image: 'image4a.jpg',  name:'Boneless Chicken', list: ['Boneless Chicken-500grms', 'Onions-2', 'Chicken-Masala', 'Tomatos-2', 'Ginger-garlic-paste'], link: 'https://www.youtube.com/watch?v=FBSIg65ozk8' },
        { image: 'image4b.jpg',  name:'Methi-Cheman', list: ['Fenugreek Leaves', 'Potatoes', 'Tomatoes', 'Cream', 'Spices'], link: 'https://www.youtube.com/watch?v=HqAEgNzLzic' },
        { image: 'image4c.jpg',  name:'Panner-Butter-Masala', list: ['Punner', 'Butter', 'Cream', 'Onions', 'Tomatoes'], link: 'https://www.youtube.com/watch?v=2zSCTYPazFw' },
        { image: 'image4d.jpg',  name:'Butter-Chicken', list: ['Chicken', 'Butter', 'Cream', 'Onions', 'Tomatoes'], link: 'https://www.youtube.com/watch?v=j6Ox6j4xfbg' }
    ],
    5: [
      { image: 'image5a.jpg',  name:'Green-Salad', list: ['Mixed Green', 'Cucumber', 'Carrot', 'Tomato', 'Onion'], link: 'https://www.youtube.com/watch?v=ZsKG000tB14' },
      { image: 'image5b.jpg',  name:'Fruit-Salad', list: ['Apple', 'Banana', 'Orange', 'Grapes', 'papaya'], link: 'https://www.youtube.com/watch?v=nTm-_KujooY' },
      { image: 'image5c.jpg',  name:'Vegetable-Salad', list: ['Bell pepper', 'Carrot', 'Beet root', 'Green beans', 'Tomatoes'], link: 'https://www.youtube.com/watch?v=ptub0dCVK9k' },
      { image: 'image5d.jpg',  name:'Mixed-Salad', list: ['Cherry tomatoes', 'Green beans', 'Onion', 'Cheese', 'Fruits'], link: 'https://www.youtube.com/watch?v=05-ln_L6RzI' }
    ]
  };

const currentIndex = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

function showNext(cardId) {
    currentIndex[cardId] = (currentIndex[cardId] + 1) % content[cardId].length;
    updateContent(cardId);
}

function showPrevious(cardId) {
    currentIndex[cardId] = (currentIndex[cardId] - 1 + content[cardId].length) % content[cardId].length;
    updateContent(cardId);
}

function updateContent(cardId) {
    const { image, list, link, name } = content[cardId][currentIndex[cardId]];
    document.getElementById(`image${cardId}`).src = image;


    document.getElementById(`dishName${cardId}`).textContent = name;
    
    const listElement = document.getElementById(`list${cardId}`);
    listElement.innerHTML = '';
    list.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listElement.appendChild(li);
    });

    document.getElementById(`navigate${cardId}`).onclick = () => {
        window.location.href = content[cardId][currentIndex[cardId]].link;
    };
}

// Initial content update for all cards
Object.keys(content).forEach(cardId => updateContent(cardId));

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = document.getElementById('menu-icon');
  navLinks.classList.toggle('active');
  if (navLinks.classList.contains('active')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
}
