export { createMenu }
import tenders from './tenders.png'
import burger from './burger.png'
import chickenRiceBox from './chickenRiceBox.png'
import pasta from './pasta.png'




const createMenu = () => {
    const container = document.querySelector('#content')

    const titleMenu = document.createElement('div')
    titleMenu.classList.add('title')
    titleMenu.innerHTML = 'MENU'
    container.appendChild(titleMenu)

    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContainer')
    container.appendChild(menuContainer)

    const menuItemOneImg = document.createElement('div')
    menuItemOneImg.classList.add('menuItemOneImg')
    const menuItemTwoImg = document.createElement('div')
    menuItemTwoImg.classList.add('menuItemTwoImg')
    const menuItemThreeImg = document.createElement('div')
    menuItemThreeImg.classList.add('menuItemThreeImg')
    const menuItemFourImg = document.createElement('div')
    menuItemFourImg.classList.add('menuItemFourImg')

    const menuItemOneText = document.createElement('div')
    menuItemOneText.classList.add('menuItemOneText')
    const menuItemTwoText = document.createElement('div')
    menuItemTwoText.classList.add('menuItemTwoText')
    const menuItemThreeText = document.createElement('div')
    menuItemThreeText.classList.add('menuItemThreeText')
    const menuItemFourText = document.createElement('div')
    menuItemFourText.classList.add('menuItemFourText')

    const menuItemOneTitle = document.createElement('div')
    menuItemOneTitle.classList.add('menuTitle')
    menuItemOneTitle.innerHTML = 'CRISPY TENDERS'
    const menuItemOneDescription = document.createElement('div')
    menuItemOneDescription.classList.add('menuDescription')
    menuItemOneDescription.innerHTML = 'Savor the irresistible crunch of our Crispy Tenders! Made from tender chicken and coated in a golden, seasoned crust, each bite is pure perfection. Enjoy them solo or with your favorite dipping sauce for a mouthwatering treat!'
    menuItemOneText.appendChild(menuItemOneTitle)
    menuItemOneText.appendChild(menuItemOneDescription)

    const menuItemTwoTitle = document.createElement('div')
    menuItemTwoTitle.classList.add('menuTitle')
    menuItemTwoTitle.innerHTML = 'CHICKEN BURGER'
    const menuItemTwoDescription = document.createElement('div')
    menuItemTwoDescription.classList.add('menuDescription')
    menuItemTwoDescription.innerHTML = 'Indulge in our Fried Chicken Burger: a crispy, hand-breaded chicken fillet nestled between soft buns, topped with fresh lettuce, ripe tomato, and creamy mayo. Each bite delivers a symphony of flavors and textures, satisfying your cravings with every bite. Perfect for a quick, delicious meal on-the-go or a hearty dinner indulgence.'
    menuItemTwoText.appendChild(menuItemTwoTitle)
    menuItemTwoText.appendChild(menuItemTwoDescription)

    const menuItemThreeTitle = document.createElement('div')
    menuItemThreeTitle.classList.add('menuTitle')
    menuItemThreeTitle.innerHTML = 'CHICKEN PASTA'
    const menuItemThreeDescription = document.createElement('div')
    menuItemThreeDescription.classList.add('menuDescription')
    menuItemThreeDescription.innerHTML = 'Savor the richness of our Creamy Chicken Pasta, a delectable fusion of tender chicken strips and al dente pasta bathed in a velvety cream sauce. Bursting with savory flavors and garnished with fresh herbs, each forkful is a culinary delight. A comforting classic perfect for any occasion.'
    menuItemThreeText.appendChild(menuItemThreeTitle)
    menuItemThreeText.appendChild(menuItemThreeDescription)

    const menuItemFourTitle = document.createElement('div')
    menuItemFourTitle.classList.add('menuTitle')
    menuItemFourTitle.innerHTML = 'CHICKEN AND RICE BOX'
    const menuItemFourDescription = document.createElement('div')
    menuItemFourDescription.classList.add('menuDescription')
    menuItemFourDescription.innerHTML = 'Experience convenience and flavor with our Chicken and Rice Box. Juicy grilled chicken served atop a bed of fluffy, seasoned rice, accompanied by a medley of fresh vegetables. Packed with protein and nutrients, its a wholesome meal that satisfies hunger and tantalizes taste buds. Perfect for a quick, satisfying lunch or dinner option.'
    menuItemFourText.appendChild(menuItemFourTitle)
    menuItemFourText.appendChild(menuItemFourDescription)

    const tendersImage = new Image();
    tendersImage.src = tenders;
    tendersImage.width = 200
    tendersImage.height = 150
    tendersImage.classList.add('menuImage')
    menuItemOneImg.appendChild(tendersImage)

    const burgerImage = new Image();
    burgerImage.src = burger;
    burgerImage.width = 200
    burgerImage.height = 150
    burgerImage.classList.add('menuImage')
    menuItemTwoImg.appendChild(burgerImage)

    const pastaImage = new Image();
    pastaImage.src = pasta;
    pastaImage.width = 200
    pastaImage.height = 150
    pastaImage.classList.add('menuImage')
    menuItemThreeImg.appendChild(pastaImage)
    
    const chickenRiceBoxImage = new Image();
    chickenRiceBoxImage.src = chickenRiceBox;
    chickenRiceBoxImage.width = 200
    chickenRiceBoxImage.height = 150
    chickenRiceBoxImage.classList.add('menuImage')
    menuItemFourImg.appendChild(chickenRiceBoxImage)




    menuContainer.appendChild(menuItemOneImg)
    menuContainer.appendChild(menuItemOneText)

    menuContainer.appendChild(menuItemTwoText)
    menuContainer.appendChild(menuItemTwoImg)

    menuContainer.appendChild(menuItemThreeImg)
    menuContainer.appendChild(menuItemThreeText)

    menuContainer.appendChild(menuItemFourText)
    menuContainer.appendChild(menuItemFourImg)


}