import { writable } from 'svelte/store';

const stooges = writable([{name:'Curly'},{name: 'Larry'},{name: 'Shemp'}]);

export default stooges