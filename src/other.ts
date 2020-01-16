export class A {
    @B()
    contructor() {

    }
}

function B(target?: any): any {
    console.log(target);
}