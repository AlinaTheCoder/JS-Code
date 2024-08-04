/* 
class ContextChecker {
    constructor() {
        this.value = "Context Checker Class Value."
    }

    traditionalMethod() {
        function traditionalFunctionn() {
            console.log(this.value);
        }
        traditionalFunctionn();
    }

    arrowMethod() {
        let arrowFunction = () => console.log(this.value);
        arrowFunction();
    }

    nestedTraditional() {
        function traditionalFunction() {
            console.log(this.value);
            function AnothertraditionalFunction() {
                console.log(this.value);
            }
            AnothertraditionalFunction();
        }
        traditionalFunction();
    }

    nestedArrow() {
        let ArrowFunction = () => {
            console.log(this.value);
            let arrow = () => console.log(this.value);
            arrow();
        }
        ArrowFunction();
    }

}

const checker = new ContextChecker();
/* checker.traditionalMethod();
checker.arrowMethod();
checker.nestedTraditional(); 
checker.nestedArrow(); */

class Person {
    constructor(name) {
        this.name = name;
    }

    Method1() {
        const traditionalFunction = function() {
            console.log(this.name); // 'this' is undefined in strict mode
        }.bind(this); // Bind the correct 'this' context to the function
        traditionalFunction();
    }

    Method2() {
        const arrowFunction = () => {
            console.log(this.name); // 'this' refers to the instance of Person
        };
        arrowFunction();
    }
}

let person1 = new Person('Alina');
// person1.Method1(); // Uncomment to test Method1
person1.Method2();

