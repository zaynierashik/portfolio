// Scroll to section

function scrollToSection(sectionId){
    var section = document.getElementById(sectionId);
    if(section){
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Change theme icon

const toggleTheme = document.querySelector('.theme');
toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if(toggleTheme.classList.contains('fa-moon')){
        toggleTheme.classList.remove('fa-moon');
        toggleTheme.classList.add('fa-sun');
    }else{
        toggleTheme.classList.remove('fa-sun');
        toggleTheme.classList.add('fa-moon');
    }
});

// Change theme

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
    });
});