import {createElement} from '../render.js';
import {itemTemplate} from './template/itemTemplate.js';

export default class ItemView {
  getTemplate() {
    return itemTemplate();
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
