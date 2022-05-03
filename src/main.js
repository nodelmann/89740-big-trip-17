import BoardPresenter from './presenter/boardPresenter.js';

const siteHeaderElement = document.querySelector('.trip-main');
const filterElement = document.querySelector('.trip-controls__filters');
const sortElement = document.querySelector('.trip-events');

const boardPresenter = new BoardPresenter();
boardPresenter.init(siteHeaderElement, filterElement, sortElement);
