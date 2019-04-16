import $ from "jquery";
import 'bootstrap-css-only';
import gNews from './modules/gNews';
import { newsTemplate } from './modules/templates';

const getSocialNews = async () => {
  try {
    let resp = await gNews("/everything?q=social");
    let newsList = resp.data.articles.map(news => newsTemplate(news));
    $("#socialNews").html(newsList);
  } catch (error) {
    console.log(error);
  }
};

const getEntertainmentNews = async () => {
  try {
    let resp = await gNews("/everything?q=entertainment");
    let newsList = resp.data.articles.map(news => newsTemplate(news));
    $("#entertainmentNews").html(newsList);
  } catch (error) {
    console.log(error);
  }
};

const getSportNews = async () => {
  try {
    let resp = await gNews("/everything?q=sport");
    let newsList = resp.data.articles.map(news => newsTemplate(news));
    $("#sportNews").html(newsList);
  } catch (error) {
    console.log(error);
  }
};

const getTaiwanNews = async () => {
  try {
    let resp = await gNews("/everything?q=taiwan");
    let newsList = resp.data.articles.map(news => newsTemplate(news));
    $("#taiwanNews").html(newsList);
  } catch (error) {
    console.log(error);
  }
};

getSocialNews();
getEntertainmentNews();
getSportNews();
getTaiwanNews();
