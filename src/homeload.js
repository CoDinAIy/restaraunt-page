export { createHome }
import Icon from './icon.png'

const createHome = () => {
    const content = document.getElementById('content')

    const title = document.createElement('div')
    title.classList.add('title')
    title.innerHTML = 'PHAT BUNS'

    content.appendChild(title)

    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.width = 100
    myIcon.height = 100
    myIcon.classList.add('imageHome')

    content.appendChild(myIcon)

    const flexOpeningTimes = document.createElement('div')
    flexOpeningTimes.classList.add('flexOpeningTimes')
    content.appendChild(flexOpeningTimes)
    
    const openingTimesContainer = document.createElement('div')
    openingTimesContainer.classList.add('openingTimesContainer')
    flexOpeningTimes.appendChild(openingTimesContainer)

    const openingTimesTitle = document.createElement('div')
    openingTimesTitle.classList.add('openingTimesTitle')
    openingTimesTitle.innerHTML = 'OPENING TIMES'
    openingTimesContainer.appendChild(openingTimesTitle)

    const locationOne = document.createElement('div')
    locationOne.classList.add('location')
    locationOne.innerHTML = 'LONDON'
    openingTimesContainer.appendChild(locationOne)
    const locationOneTimes = document.createElement('div')
    locationOneTimes.classList.add('locationTimes')
    locationOneTimes.innerHTML = 'Monday - Saturday: 10am - 11pm'
    locationOne.appendChild(locationOneTimes)

    const locationTwo = document.createElement('div')
    locationTwo.classList.add('location')
    locationTwo.innerHTML = 'LEICESTER'
    openingTimesContainer.appendChild(locationTwo)
    const locationTwoTimes = document.createElement('div')
    locationTwoTimes.classList.add('locationTimes')
    locationTwoTimes.innerHTML = 'Monday - Saturday: 9am - 10pm'
    locationTwo.appendChild(locationTwoTimes)

    const locationThree = document.createElement('div')
    locationThree.classList.add('location')
    locationThree.innerHTML = 'ROME BRO'
    openingTimesContainer.appendChild(locationThree)
    const locationThreeTimes = document.createElement('div')
    locationThreeTimes.classList.add('locationTimes')
    locationThreeTimes.innerHTML = 'Monday - Saturday: 12pm - 12am'
    locationThree.appendChild(locationThreeTimes)

    const locationFour = document.createElement('div')
    locationFour.classList.add('location')
    locationFour.innerHTML = 'ATHENS OKAY GLOBAL'
    openingTimesContainer.appendChild(locationFour)
    const locationFourTimes = document.createElement('div')
    locationFourTimes.classList.add('locationTimes')
    locationFourTimes.innerHTML = 'Monday - Saturday: 11am - 11pm'
    locationFour.appendChild(locationFourTimes)

    const locationFive = document.createElement('div')
    locationFive.classList.add('location')
    locationFive.innerHTML = 'THE DOMINICAN REPUBLIK'
    openingTimesContainer.appendChild(locationFive)
    const locationFiveTimes = document.createElement('div')
    locationFiveTimes.classList.add('locationTimes')
    locationFiveTimes.innerHTML = 'Monday - Saturday: 9am - 10pm'
    locationFive.appendChild(locationFiveTimes)

    const locationSix = document.createElement('div')
    locationSix.classList.add('location')
    locationSix.innerHTML = 'THE BACKROOMS'
    openingTimesContainer.appendChild(locationSix)
    const locationSixTimes = document.createElement('div')
    locationSixTimes.classList.add('locationTimes')
    locationSixTimes.innerHTML = 'Monday - Saturday: 11am - 11pm'
    locationSix.appendChild(locationSixTimes)

}