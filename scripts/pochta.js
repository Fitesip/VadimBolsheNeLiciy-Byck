function pochta() {
    const pochtaInput = document.getElementById('pochta')
    pochtaInput.value = ''
    const sub = document.getElementById('sub')
    sub.style.display = 'unset'
    setTimeout(a => sub.style.opacity = '1', 10)
    setTimeout(a => sub.style.opacity = '0', 5010)
    setTimeout(a => sub.style.display = 'none', 5210)
}