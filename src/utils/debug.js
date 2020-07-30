const debug = true;

console.log = debug ? console.log : () => {
};
console.info = debug ? console.info : () => {
};

export default {
    init() {
        console.log("*** debug installed ***")
    }
}
