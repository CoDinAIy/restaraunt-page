export { removeContent }

const removeContent = () => {
    const removeContent = document.querySelector('#content')
    while (removeContent.firstChild) {
        removeContent.removeChild(removeContent.lastChild)
    }    
}