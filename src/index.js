import { create } from "./pageload";
import { createMenu } from "./menuload";
import { createAbout } from "./aboutload";
import { createHome } from "./homeload";
import './style.css'; 
import { removeContent } from "./removecontent";


console.log('working')

create()

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.className)
        if (button.className === 'menuButton') {
            removeContent()
            createMenu()            
        } else if (button.className === 'aboutButton') {
            removeContent()
            createAbout()
        } else if (button.className === 'homeButton') {
            removeContent()
            createHome()
        }
    })
})