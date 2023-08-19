//Immediately invoked function expressions (IIFE)
(function system() {
    console.log(`Connected to system`);
})();
((username) => {
    console.log(`System has been connected to ${username}`);
})('PersneketyAdmiral')
