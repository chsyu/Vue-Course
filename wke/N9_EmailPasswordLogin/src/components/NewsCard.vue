<template>
  <div class="news-card">
    <img 
      class="image" 
      :src="news.urlToImage"
    />
    <div class="news-text">
      <h2 class="title">{{news.title}}</h2>
      <p class="description">
        {{news.description}} 
        <a class="url" :href="news.url" target="_blank">read more</a>
      </p>
      <span class="author">
        <svg class="svg-icon svg-author" viewBox="0 0 20 20">
          <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
        </svg> 
        {{news.author}} 
      </span>
      <span class="publishedAt">
        <svg class="svg-icon svg-time" viewBox="0 0 20 20">
        <path d="M10.25,2.375c-4.212,0-7.625,3.413-7.625,7.625s3.413,7.625,7.625,7.625s7.625-3.413,7.625-7.625S14.462,2.375,10.25,2.375M10.651,16.811v-0.403c0-0.221-0.181-0.401-0.401-0.401s-0.401,0.181-0.401,0.401v0.403c-3.443-0.201-6.208-2.966-6.409-6.409h0.404c0.22,0,0.401-0.181,0.401-0.401S4.063,9.599,3.843,9.599H3.439C3.64,6.155,6.405,3.391,9.849,3.19v0.403c0,0.22,0.181,0.401,0.401,0.401s0.401-0.181,0.401-0.401V3.19c3.443,0.201,6.208,2.965,6.409,6.409h-0.404c-0.22,0-0.4,0.181-0.4,0.401s0.181,0.401,0.4,0.401h0.404C16.859,13.845,14.095,16.609,10.651,16.811 M12.662,12.412c-0.156,0.156-0.409,0.159-0.568,0l-2.127-2.129C9.986,10.302,9.849,10.192,9.849,10V5.184c0-0.221,0.181-0.401,0.401-0.401s0.401,0.181,0.401,0.401v4.651l2.011,2.008C12.818,12.001,12.818,12.256,12.662,12.412"></path>
        </svg> 
        {{news.publishedAt}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
   name: 'newsCard',
   props: ["news"]
}
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_section.css";


.news-card {
  position: relative;
  /* width: 300px; */
  height: auto;
  border-radius: 4px;
  box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}

.news-card:hover {
  box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.50);
}

.news-card .image {
  max-width: 100%;
  height: auto;
  opacity: 0.8;
}

.news-card .news-text {
  padding: 5px 10px;
}

.news-card .title {
  color: #505050;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: left;
}

.news-card .description {
  color: #595959;
  font-size: 16px;
  margin-bottom: 10px;
}

.news-card .url {
  color: #595959;
  font-size: 16px;
}

.news-card .url:hover {
  color: #404040;
}

.news-card .author {
  color: #959595;
  font-size: 12px;
  display: inline-block;
  margin-right: 10px;
}

.news-card .publishedAt {
  color: #959595;
  font-size: 12px;
  display: inline-block;
}

.news-card .topic {
  position: absolute;
  background: #FF8A65;
  font-size: 12px;
  color: #fff;
  padding: 4px 10px;
  font-weight: bold;
  top: 0;
  right: 0;
}


/* -----
SVG Icons - svgicons.sparkk.fr
----- */

.svg-icon {
  width: 1em;
  height: 1em;
  position: relative;
  top: 1px;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: #959595;
}

.svg-icon circle {
  stroke: #959595;
  stroke-width: 1;
}

.svg-time {
  top: 2px;
}
</style>
