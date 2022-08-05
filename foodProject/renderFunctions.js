//import style sheets
import './base.css';
import './desktop.css';
import './keyframes.css';
import './layout.css';
import './mobile.css';

//function to render nav bar on different pages instead of hard coding it
function renderNav () {
    const navContainer = document.getElementById('y-wrap')
    const nav = document.createElement('nav');
    const navHtml = `
            <nav class="y-vcenter">
            <div class="container">
                <div class="seal seal--nav">Nourriture</div>
            </div>
            <ul class="links">
                <li>About</li>
                <li>Mindful meal planning</li>
                <li>Recipe of the day</li>
                <li>Trending</li>
                <li>FAQ</li>
            </ul>
            <div class="burger">
                <i class="fas fa-bars"></i>
            </div>
            </nav>
    `;
    nav.innerHTML = navHtml;
    navContainer.prepend(nav);
}
renderNav();
