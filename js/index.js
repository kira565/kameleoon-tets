function hideHeader() {
    let header = document.getElementById('header');
    if (header.className === ''){
        header.className = 'hidden'
    } else {
        header.className = '';
    }

}