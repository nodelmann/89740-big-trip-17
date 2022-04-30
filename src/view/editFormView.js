import {createElement} from '../render.js';
import {editFormTemplate} from './template/editFormTemplate.js';

export default class EditFormView {
  getTemplate() {
    return editFormTemplate();
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
