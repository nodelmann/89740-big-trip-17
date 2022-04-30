import {createElement} from '../render.js';
import {tripInfoTemplate} from './template/tripInfoTemplate.js';

export default class TripInfoView {
  getTemplate() {
    return tripInfoTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
