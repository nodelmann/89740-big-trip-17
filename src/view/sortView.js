import {createElement} from '../render.js';
import {sortTemplate} from './template/sortTemplate.js';

export default class SortView {
  getTemplate() {
    return sortTemplate();
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
