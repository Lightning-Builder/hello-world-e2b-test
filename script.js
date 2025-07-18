console.log("Hello World script loaded!");

document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    heading.addEventListener('click', () => {
        heading.textContent = 'Hello E2B!';
    });
});