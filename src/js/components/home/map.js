/* eslint-disable no-inner-declarations */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

let flag = 0;

window.addEventListener('scroll', () => {
  const { scrollY } = window;
  const mapOffset = document.querySelector('#map').offsetTop;

  if ((scrollY >= mapOffset - 1000) && (flag === 0)) {
    ymaps.ready(init);
    function init() {
      const myMap = new ymaps.Map('map', {
        center: [55.75846806898367, 37.60108849999989],
        zoom: 15,
      });

      myMap.controls.remove('searchControl');
      myMap.controls.remove('trafficControl');
      myMap.controls.remove('fullscreenControl');
      myMap.controls.remove('rulerControl');
      myMap.controls.remove('typeSelector');
      myMap.behaviors.disable(['scrollZoom']);

      const myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/sprites/sprite.svg#icon-mark-bg',
        iconImageSize: [20, 20],
        iconImageOffset: [-20, 10],
      });

      myMap.geoObjects.add(myPlacemark);
    }

    flag = 1;
  }
});
