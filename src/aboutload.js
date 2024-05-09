export { createAbout }

const createAbout = () => {
    const container = document.querySelector('#content')

    const titleabout = document.createElement('div')
    titleabout.classList.add('aboutTitle')
    titleabout.innerHTML = 'ABOUT'
    container.appendChild(titleabout)
    const line = document.createElement('hr')
    line.classList.add('line')
    container.appendChild(line)

    const aboutContainer = document.createElement('div')
    aboutContainer.classList.add('aboutContainer')
    container.appendChild(aboutContainer)

    const aboutTitleOne = document.createElement('div')
    aboutTitleOne.classList.add('questionTitle')
    aboutTitleOne.innerHTML = 'WHO ARE WE?'
    const aboutDescriptionOne = document.createElement('div')
    aboutDescriptionOne.classList.add('aboutDescription')
    aboutDescriptionOne.innerHTML = 'Phat Buns is the home of best smash burgers! To craft the ultimate smash burgers, the founders of Phat Buns spent three weeks travelling around America collecting the best-kept secrets to making the perfect burgers, and Voila! We are now home to the best smash burgers in the UK.'
    aboutContainer.appendChild(aboutTitleOne)
    aboutContainer.appendChild(aboutDescriptionOne)

    const aboutTitleTwo = document.createElement('div')
    aboutTitleTwo.classList.add('questionTitle')
    aboutTitleTwo.innerHTML = 'WHATS OUR SECRET?'
    const aboutDescriptionTwo = document.createElement('div')
    aboutDescriptionTwo.classList.add('aboutDescription')
    aboutDescriptionTwo.innerHTML = 'Our blended chicken adds a unique, unforgettable melt-in-your-mouth experience that has become the signature of our burgers. We’ve topped that with our secret family recipe and the Phat must-have sauce to provide the ultimate burger experience to every burger lover.'
    aboutContainer.appendChild(aboutTitleTwo)
    aboutContainer.appendChild(aboutDescriptionTwo)

    const aboutTitleThree = document.createElement('div')
    aboutTitleThree.classList.add('questionTitle')
    aboutTitleThree.innerHTML = 'WHAT DO WE SERVE?'
    const aboutDescriptionThree = document.createElement('div')
    aboutDescriptionThree.classList.add('aboutDescription')
    aboutDescriptionThree.innerHTML = 'And it’s not just our sumptuous burgers. We also serve great wings and shakes and have an excellent menu for our little diners. No matter the fast food you crave, Phat Buns assures you of the best quality control, friendly service and a fantastic dining experience that delivers the ultimate experience.'
    aboutContainer.appendChild(aboutTitleThree)
    aboutContainer.appendChild(aboutDescriptionThree)

}