import {tripInfoTemplate} from './template/trip-info-template.js';
import BaseView from './baseView.js';

export default class TripInfoView extends BaseView {
  getTemplate() {
    return tripInfoTemplate();
  }
}
