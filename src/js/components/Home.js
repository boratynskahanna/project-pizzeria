import {select, templates} from '../settings.js';
import Carousel from '../components/Carousel.js';

class Home {
  constructor(element) {
    const thisHome = this;

    thisHome.render(element);
    thisHome.initCarousel();
  }

  render(element) {
    const thisHome = this;

    const generatedHTML = templates.homePage();
    
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    thisHome.dom.carousel = thisHome.dom.wrapper.querySelector(select.widgets.home.carousel);
  }

  initCarousel() {
    const thisHome = this;

    window.onload = function() {
      thisHome.carousel = new Carousel(thisHome.dom.carousel);
    };
  }
}

export default Home;