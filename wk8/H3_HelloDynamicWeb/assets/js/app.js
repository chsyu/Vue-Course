import $ from 'jquery';
import axios from 'axios';

// let promise = axios.get('http://localhost:4000/users');
// promise.then(resp => {
//       let data = resp.data;
//       let list = data.map(e => 
//          `
//             <li list="list-group-item">
//                ${e.first_name}, ${e.last_name}, ${e.email}
//             </li>
//          `
//       );
//       console.log(list);
//       $('.data').html(list);
//    });
// promise.catch(error => {
//       console.log(error);
//    });

const getInfo = async () => {
   let resp = await axios.get('http://localhost:4000/users');
   let list = resp.data.map(e =>
      `
         <li class="list-group-item">
            ${e.first_name}, ${e.last_name}, ${e.email}
         </li>
      `
   );
   console.log(list);
   $('.data').html(list);
};

getInfo();

