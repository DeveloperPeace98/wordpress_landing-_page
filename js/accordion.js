window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll('.accordion_button').forEach(button => {
        button.addEventListener('click', () => {
            // const accordionContent = button.nextElementSibling;

            button.classList.toggle('accordion_button_active');

            // if (button.classList.contains('accordion_button_active')) {
            // accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            // } else {
            // accordionContent.style.maxHeight = 0;
            // }
        })
    })
});