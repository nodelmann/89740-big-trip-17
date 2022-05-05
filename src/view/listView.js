import {listTemplate} from './template/list-template.js';
import BaseView from './baseView.js';

export default class ListView extends BaseView {
  getTemplate() {
    return listTemplate();
  }
}
