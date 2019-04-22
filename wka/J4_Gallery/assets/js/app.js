import $ from "jquery";
// import 'bootstrap-css-only';
import "normalize.css";
import "../css/style.css";
import gNews from './modules/gNews';
import { newsCardTemplate } from './modules/templates';

let seturlToImage = (news => {
  let newsCnt = 0;
  return (news => {
    newsCnt++;
    $(`.gallery__item--${newsCnt} img`).attr("src", news.urlToImage);
  });
})();

const getSocialNews = async () => {
  try {
    let resp = await gNews("/?q=social");
    let newsList = resp.data.articles.map(news => newsCardTemplate(news));
    $("#socialNews").html(newsList);
    resp.data.articles.map(news => seturlToImage(news));
  } catch (error) {
    console.log(error);
  }
};

const getEntertainmentNews = async () => {
  try {
    let resp = await gNews("/?q=entertainment");
    let newsList = resp.data.articles.map(news => newsCardTemplate(news));
    $("#entertainmentNews").html(newsList);
    resp.data.articles.map(news => seturlToImage(news));
  } catch (error) {
    console.log(error);
  }
};

const getSportNews = async () => {
  try {
    let resp = await gNews("/?q=sport");
    let newsList = resp.data.articles.map(news => newsCardTemplate(news));
    $("#sportNews").html(newsList);
    resp.data.articles.map(news => seturlToImage(news));
  } catch (error) {
    console.log(error);
  }
};

const getTaiwanNews = async () => {
  try {
    let resp = await gNews("/?q=taiwan");
    let newsList = resp.data.articles.map(news => newsCardTemplate(news));
    $("#taiwanNews").html(newsList);
    resp.data.articles.map(news => seturlToImage(news));
  } catch (error) {
    console.log(error);
  }
};

getSocialNews();
getEntertainmentNews();
getSportNews();
getTaiwanNews();


