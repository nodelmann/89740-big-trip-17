import TripInfoView from '../view/tripInfoView.js';
import FilterView from '../view/filterView.js';
import SortView from '../view/sortView.js';
import ListView from '../view/listView.js';
import ItemView from '../view/itemView.js';
import CreateFormView from '../view/createFormView.js';
import EditFormView from '../view/editFormView.js';
import {render} from '../render.js';

export default class BoardPresenter {

  listComponent = new ListView();

  init = (headerContainer, filterContainer, sortContainer) => {
    this.headerContainer = headerContainer;
    this.filterContainer = filterContainer;
    this.sortContainer = sortContainer;

    render(new TripInfoView(), this.headerContainer, 'afterbegin');
    render(new FilterView(), this.filterContainer);
    render(new SortView(), this.sortContainer);
    render(new CreateFormView(), this.sortContainer);
    render(this.listComponent, this.sortContainer);
    render(new EditFormView(), this.sortContainer);

    for (let i = 0; i < 3; i++) {
      render(new ItemView(), this.listComponent.getElement());
    }

  };
}
