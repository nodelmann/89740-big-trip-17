import {editFormTemplate} from './template/edit-form-template.js';
import BaseView from './baseView.js';

export default class EditFormView extends BaseView{
  getTemplate() {
    return editFormTemplate();
  }
}
