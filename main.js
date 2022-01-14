const $sections = document.querySelectorAll('section[data-section]')


const callBack = entries => {
    entries.forEach( entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible')
        }
    });
}

const observer = new IntersectionObserver(callBack, { threshold: .45 })
$sections.forEach( $section => observer.observe($section) )






