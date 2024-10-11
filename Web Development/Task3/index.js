document.getElementById('exampleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        alert('Please enter your name.');
    } else {
        alert('Form submitted successfully!');
    }
});

function toggleMenu() {
    const menuList = document.getElementById('menuList');
    if (menuList.style.display === 'none') {
        menuList.style.display = 'block';
    } else {
        menuList.style.display = 'none';
    }
}

function updateContent() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.textContent = 'This content has been updated dynamically!';
}
