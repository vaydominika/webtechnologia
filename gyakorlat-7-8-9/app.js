function updateLoginMenuItem() {
    const loginMenuItem = document.getElementById('login-menu-item');
    if (!loginMenuItem) return;

    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    if (token && username) {
        loginMenuItem.textContent = username;
        loginMenuItem.onclick = () => {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            window.location.reload();
        };
    } else {
        loginMenuItem.textContent = 'Bejelentkezés';
        loginMenuItem.href = 'login.html';
    }
}

function loadNavigation() {
    if (document.querySelector('.navbar')) {
        return;
    }

    fetch('nav.html')
        .then(response => response.text())
        .then(navHtml => {
            const body = document.querySelector('body');
            body.insertAdjacentHTML('afterbegin', navHtml);
            updateLoginMenuItem();
        })
        .catch(err => {
            console.error('Error loading navigation:', err);
        });
}

loadNavigation();