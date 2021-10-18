/*function toggleNav(params) {
    var x = document.getElementById('navbar');
    if (x.className === 'navbar') {
        x.className += 'responsive';
    }else{
        x.className = 'navbar'
    }
    
}*/
function toggleNav(){
    let links = document.querySelector('.link-div')
    if (links.className === 'link-div') {
        links.className += ' responsive'
    }else {
        links.className = 'link-div'
    }
}