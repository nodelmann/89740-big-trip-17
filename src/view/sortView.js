import {sortTemplate} from './template/sort-template.js';
import BaseView from './baseView.js';

export default class SortView extends BaseView {
  getTemplate() {
    return sortTemplate();
  }
}
