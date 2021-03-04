const d = new Date();
console.log(d);
const now = d.toISOString();
console.log('now: ', now);
const date = now.slice(0,10);
console.log('date: ', date);
// console.log(now);

// console.log(now.slice(0,10));

console.log('parsed date: ', Date.parse(date));

const dayAgo = new Date(Date.parse(date) - 8640000);
const dayAgoDate = dayAgo.toISOString().slice(0,10);

console.log(dayAgoDate);

const a = new Date().toISOString().slice(0,10);
console.log(Date.parse(a));