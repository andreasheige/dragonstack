const Dragon = require('./dragon');

const fooey = new Dragon({
    birthdate: new Date(), 
    nickname: 'fooey'
});
const baloo = new Dragon({
    birthdate: new Date(), 
    nickname: 'baloo'
});
const googley = new Dragon({
    birthdate: new Date(), 
    nickname: 'googley'
});
const katla = new Dragon()



console.log('fooet',fooey);
console.log('baloo', baloo);
console.log('googley',googley);
console.log('katla', katla)