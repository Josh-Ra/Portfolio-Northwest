const button = document.querySelector('button.js');
const dom = document.querySelector('body.htmlbody')


button.addEventListener('click', function(){
    dom.classList.toggle('htmlbody')
    dom.classList.toggle('colorchange')
})