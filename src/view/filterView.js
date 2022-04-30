import {createElement} from '../render.js';
import {filterTemplate} from './template/filterTemplate.js';

export default class FilterView {
  getTemplate() {
    return filterTemplate();
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
