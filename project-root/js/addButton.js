const header = document.querySelector('.header')
const navButton = document.querySelector('.nav__button')
const saveButtons = document.querySelector('.sub-heading__actions-two')
const subHeading = document.querySelector('.task-detail')

if(window.innerWidth > 320 && window.innerWidth < 767){
navButton.setAttribute = 'disabled'
header.prepend(navButton)
  
    saveButtons.style.display = 'flex';
    saveButtons.style.justifyContent  = 'space-between';
    subHeading.append(saveButtons)
    saveButtons.style.paddingBottom  = '16px';
}



if(window.innerWidth > 320 && window.innerWidth < 576){
  
    saveButtons.style.flexDirection = 'column';
    saveButtons.style.gap = '16px';
    subHeading.append(saveButtons)

}