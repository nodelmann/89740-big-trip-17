import {createFormTemplate} from './template/create-form-template.js';
import BaseView from './baseView.js';

export default class CreateFormView extends BaseView{
  getTemplate() {
    return createFormTemplate();
  }
}
