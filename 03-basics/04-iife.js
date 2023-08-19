//Immediately invoked function expressions (IIFE)
//maintaining a clean global scope
(function system() {
    console.log(`Connected to system`);
})();
((username) => {
    console.log(`System has been connected to ${username}`);
})('PersneketyAdmiral')
