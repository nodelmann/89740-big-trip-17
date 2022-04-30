import {createElement} from '../render.js';
import {listTemplate} from './template/listTemplate.js';

export default class ListView {
  getTemplate() {
    return listTemplate();
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
