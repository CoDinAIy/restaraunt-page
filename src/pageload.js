export { create }
import Icon from './icon.png'
import instagram from './instagram.png'
import twitter from './twitter.png'
import facebook from './facebook.png'


const create = () => {

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



    const footer = document.querySelector('.footer')
    const footerTitle = document.createElement('div')
    footerTitle.classList.add('footerTitle')
    footerTitle.innerHTML = 'Contact Us'

    footer.appendChild(footerTitle)

    const footerContainer = document.createElement('div')
    footerContainer.classList.add('footerContainer')
    footer.appendChild(footerContainer)

    const footerText = document.createElement('div')
    footerText.classList.add('footerText')

    const telephone = document.createElement('div')
    telephone.innerHTML = 'Telephone: 0800 753 ***'
    footerText.appendChild(telephone)

    const email = document.createElement('div')
    email.innerHTML = 'E-mail: Info.Phatbuns@notrealcommunications.com'
    footerText.appendChild(email)

    const footerImages = document.createElement('div')
    footerImages.classList.add('footerImages')

    const followTitle = document.createElement('div')
    followTitle.classList.add('followTitle')
    followTitle.innerHTML = "Follow Us"
    footerImages.appendChild(followTitle)

    const instagramIcon = new Image();
    instagramIcon.src = instagram;
    instagramIcon.width = 100
    instagramIcon.height = 100
    instagramIcon.classList.add('instagram')
    footerImages.appendChild(instagramIcon)

    const twitterIcon = new Image();
    twitterIcon.src = twitter;
    twitterIcon.width = 100
    twitterIcon.height = 100
    twitterIcon.classList.add('twitter')
    footerImages.appendChild(twitterIcon)

    const facebookIcon = new Image();
    facebookIcon.src = facebook;
    facebookIcon.width = 100
    facebookIcon.height = 100
    facebookIcon.classList.add('facebook')
    footerImages.appendChild(facebookIcon)


    footerContainer.appendChild(footerText)
    footerContainer.appendChild(footerImages)


    

}