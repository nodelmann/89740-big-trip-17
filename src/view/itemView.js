import {itemTemplate} from './template/item-template.js';
import BaseView from './baseView.js';

export default class ItemView extends BaseView{
  getTemplate() {
    return itemTemplate();
  }
}
