console.log('Starting app');

// asynchronous function that takes a callback that will be fired after delay
setTimeout(() => console.log('Inside of callback'), 2000);

setTimeout(() => console.log('setTimeout without delay'), 0);

console.log('Finishing up');
