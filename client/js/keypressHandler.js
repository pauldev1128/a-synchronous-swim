
// $('body').on('keydown', (event) => {
//   var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
//   if (arrowPress) {
//     var direction = arrowPress[1];
//     SwimTeam.move(direction.toLowerCase());
//   }
// });

// $('.submits').on('click', function(event) {
//   $.get('http://127.0.0.1:3000', function(data) {
//     console.log(data);
//     alert('Get request success!');
//   })
// })

// console.log('Client is running in the browser!');


$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

console.log('Client is running in the browser!');