document.addEventListener('DOMContentLoaded', () => {
    const mountain = document.querySelector('.mountain');
    const message = document.getElementById('message');

    mountain.addEventListener('click', () => {
        message.style.display = 'block';
    });
});