function loadNavigation() {
    if (document.querySelector('.navbar')) {
        return;
    }

    fetch('nav.html')
        .then(response => response.text())
        .then(navHtml => {
            const body = document.querySelector('body');
            body.insertAdjacentHTML('afterbegin', navHtml);
        })
        .catch(err => {
            console.error('Error loading navigation:', err);
        });
}

loadNavigation();