const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

if (moreBtn) {
    moreBtn.addEventListener('click', () => {
        moreBtn.classList.toggle('cliked');
        title.classList.toggle('clamp');
    });
}