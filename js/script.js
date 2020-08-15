var btn = document.getElementById('btn'),
    modal = document.getElementsByClassName('modal')[0],
    close = document.getElementsByClassName('close')[0]
btn.addEventListener('click', function() {
    modal.classList.add('open')
});

close.addEventListener('click', function() {
    modal.classList.remove('open')
})

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.classList.remove('open')
    }
})