let $ = require('jquery');
let setText = () => {
   $('.text').html('Hello Webpack ...');
};

$('.btn').click(setText);