const pages = document.querySelectorAll('.menuPage')

const buttons = document.querySelectorAll('.menuPagesSelect')

const size = parseFloat(pages[0].offsetWidth)

function createEventListeners() {
    buttons[0].addEventListener('click', function () {
        console.log(size)
        for (let i = 0; i < pages.length; i++) {
            pages[i].style.transform = `translateX(0px)`;
        }
        buttons[0].setAttribute('class', 'menuPagesSelect active')
        buttons[1].setAttribute('class', 'menuPagesSelect')
        buttons[2].setAttribute('class', 'menuPagesSelect')
    })

    buttons[1].addEventListener('click', function () {
        for (let i = 0; i < pages.length; i++) {
            pages[i].style.transform = `translateX(-${size}px)`;
        }
        buttons[0].setAttribute('class', 'menuPagesSelect')
        buttons[1].setAttribute('class', 'menuPagesSelect active')
        buttons[2].setAttribute('class', 'menuPagesSelect')
    })

    buttons[2].addEventListener('click', function () {
        for (let i = 0; i < pages.length; i++) {
            pages[i].style.transform = `translateX(-${size * 2}px)`;
        }
        buttons[0].setAttribute('class', 'menuPagesSelect')
        buttons[1].setAttribute('class', 'menuPagesSelect')
        buttons[2].setAttribute('class', 'menuPagesSelect active')
    })
}

createEventListeners()