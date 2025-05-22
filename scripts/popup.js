const bookingPopupButtons = document.querySelectorAll('.bookingPopupButton')
const popup = document.querySelector('.popupContainer')
const x = document.querySelector('.x')
for (let i = 0; i < bookingPopupButtons.length; i++) {
    bookingPopupButtons[i].addEventListener('click', function () {
        popup.style.display = 'flex'
    })
}
x.addEventListener('click', function () {
    popup.style.display = 'none'
})