const readMore = document.querySelector('.read-more');
const text = document.querySelector('.more-text');

readMore.addEventListener('click', (e) => {
    text.classList.toggle('more-text');
    if(readMore.innerHTML === 'Show more...') {
        readMore.innerHTML = 'Show less';
    } else {
        readMore.innerHTML = 'Show more...';
        
    }
})