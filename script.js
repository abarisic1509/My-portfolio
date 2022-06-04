'use strict'
//navigation

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

//tabpanels
const tabList = document.querySelector('[role="tablist"]')
const tabBtns = tabList.querySelectorAll('[role="tab"]')
const tabPanels = document.querySelectorAll('[role="tabpanel"]')

tabList.addEventListener('keydown', changeTabFocus)
tabBtns.forEach((btn) => {
    btn.addEventListener('click', changePanel)
})

function changePanel(e) {
    const targetTab = e.target
    const targetPanel = targetTab.getAttribute('aria-controls')
    const tabContainer = targetTab.parentNode
    const mainContainer = tabContainer.parentNode

    tabContainer.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false)
    tabContainer.querySelector('[tabindex="0"]').setAttribute('tabindex', -1)
    targetTab.setAttribute('aria-selected', true)
    targetTab.setAttribute('tabindex', 0)

    hideAllElements(tabPanels)
    showElement(mainContainer, `#${targetPanel}`)
}

function hideAllElements(items) {
    items.forEach((item)=> {
        item.classList.remove('active')
        item.classList.remove('visible')
    })
}
function showElement(parent,target) {
    let targetedElement = parent.querySelector(target)
    targetedElement.classList.add('visible')
    setTimeout(() => {
        targetedElement.classList.add('active')
    }, 450)
}

let tabFocus = 0
function changeTabFocus(e) {
    const keydownLeft = 37
    const keydownRight = 39
    if(e.keyCode === keydownLeft || e. keyCode === keydownRight) {
        tabBtns[tabFocus].setAttribute('tabindex', -1)
        if (e.keyCode === keydownRight) {
            tabFocus++
            if (tabFocus >= tabBtns.length) {
                tabFocus = 0
            }
        } else if (e.keyCode === keydownLeft) {
            tabFocus--
            if (tabFocus < 0) {
                tabFocus = tabBtns.length - 1
            }
        }
        
        tabBtns[tabFocus].setAttribute('tabindex', 0)
        tabBtns[tabFocus].focus()
    }
    

}