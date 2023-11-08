const btn = document.querySelector('.button')
const popup = document.querySelector('.popup-wrapper')

const openPopUp = () => popup.style.display = 'block'

btn.addEventListener('click', openPopUp)

const closePopUp = event => {
    const classNameClicked = event.target.classList[0]
    const classesToClose = ["popup-close","popup-wrapper","popup-link"]
    const checkClass = classesToClose.some(clas => 
        clas === classNameClicked)

    if(checkClass){
        popup.style.display = 'none'
    }

}

popup.addEventListener('click', closePopUp)
