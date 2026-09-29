console.log('This is external JS');
let name='prasad';
const city='mysore';
const year=2026;
console.log(name,city,year);
//functions
function greet(name){
    console.log("Hello!" +name);

}
greet('prasad');
function greet(name){
    console.log("Hello!" +name);
}
console.log(add(25,25))
const add = function(a,b) {
    return a+b
}
//arrow func
const greeting=()=>{
    return 'Hi' + names;
};
console.log(greeting('prasad'));
const p=document.querySelector('#text');
//p.textContent='Updated Text;'
p.innerHTML='<i>Updated Text</i>'


