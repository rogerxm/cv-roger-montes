(function(){
    const titleConocimientos = [...document.querySelectorAll('.conocimientos__title')];

    titleConocimientos.forEach(conocimiento =>{
        conocimiento.addEventListener('click', ()=>{
            let height = 0;
            let answer = conocimiento.nextElementSibling;
            let addPadding = conocimiento.parentElement.parentElement;

            addPadding.classList.toggle('conocimientos__padding--add');
            conocimiento.children[0].classList.toggle('conocimientos__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();