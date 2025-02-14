import { demo } from './demo';
const obj1 = { a: 101, b: 201 };
const obj2 = {
    ...obj1,
    c: 3,
};

const q = () => {
    console.log('Hello 1, world!');
    console.log(obj2);
    console.log(demo);
};
q();
