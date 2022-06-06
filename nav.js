'use strict'

const navLinkText = document.querySelectorAll('.nav-link span')

window.addEventListener('resize', () => {
    let newViewportWidth = window.innerWidth
    newViewportWidth < 900 ? hideText() : showText()
})

function checkViewportWidth() {
    let viewportWidth = window.innerWidth
    viewportWidth < 900 ? hideText() : showText()
}
function showText() {
    navLinkText.forEach(linkText => {
        linkText.classList.remove('visuallyHidden')
    })
}
function hideText() {
    navLinkText.forEach(linkText => {
        linkText.classList.add('visuallyHidden')
    })
}

checkViewportWidth()