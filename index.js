function greeting (){
    return 'hello, ';
}

function receivesAFunction(greeting, name) {
    return greeting() + name;
}

function  returnsANamedFunction() {
    return function anger () {
        return receivesAFunction(greeting, 'world');
    };
}

const returnsAnAnonymousFunction = function () {
    return function() {
        return 'I am not sure about these high-class functions';
    };
};

