import $ from 'jquery';

class ButtonClick {
   constructor() {
      this.btn = $('.btn');
      this.text = $('.text');
   }

   setText() {
      this.text.html('Webpack with ES6 ...');
   }

   setEvent() {
      this.btn.click(()=>this.setText());
   }
}

export default ButtonClick;

