import {createElement} from '../render.js';
import {createFormTemplate} from './template/createFormTemplate.js';

export default class CreateFormView {
  getTemplate() {
    return createFormTemplate();
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
