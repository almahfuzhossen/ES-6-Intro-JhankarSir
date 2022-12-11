const priya = 'Asif Akbar';
const meye = "meye tumi ki dukkho chino";
const kobita = `kobita tumi sopno charini`;
const multiLine ='this is multiLine.\n' + 
'this is my second line.\n'+
'this is third line \n' +
'fourth line text here';
// ES-6
const multiNew =`this is multiLine 
this is second line.
this is third Line.
fourth line is here`;

const friends = ['abul', 'babul', 'kabul', 'sabul'];
const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>'
const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>';
const old3 =`<h3 class="friend-name">Friend-${count}</h3>`;
const new1 =`<h3 class="friend-name">Friend-${friends.length}</h3>`;

const first = 'Mamun';
const last = 'Chowdhury';
const fullOld = 'this person is '+ first + ' '+ last;
const fullNew = `This person name is: ${first} ${last}. Her money ${(friends.length + 10) * 10}. He lives in Dhaka.`;

console.log(fullOld);


