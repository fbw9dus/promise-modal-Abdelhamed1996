// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
console.log('conecd')

// \/ All of your javascript should go here \/

var modal = document.querySelector('.modal')
var close = document.querySelector('.close')

var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('');
    }, 60000);
  });
  promise1.then(function() {
    modal.style.display = 'block';

  });

  close.addEventListener("click",event=>{
    modal.style.display= "none"
  })