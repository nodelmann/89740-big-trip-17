import {filterTemplate} from './template/filter-template.js';
import BaseView from './baseView.js';

export default class FilterView extends BaseView {
  getTemplate() {
    return filterTemplate();
  }
}
