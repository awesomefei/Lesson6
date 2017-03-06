// namespace MathUtility{
//    export class Calculator{
//         public add(a,b){
//             return a + b;
//         }
//         public substract(a,b){
//             return a-b;
//         }
//         public multiply(a,b){
//             return a *b;
//         }
//         public divide(a,b){
//             if(b == 0){
//                 return 'err';
//             }else{
//                 return a/b;
//             }
//         }
//     }
// }
// namespace MyApp{
//     let cal = new MathUtility.Calculator(); 
//     console.log(cal.divide(1,2));
// }


class Customer{
    private _firstName : string;
    private _lastName : string; 
    constructor(firstName:string, lastName:string){
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get FirstName(){
        return this._firstName;
    }
    get LastName(){
        return this._lastName;
    }
    set FirstName(firstName:string){
        if(firstName == ''|| null){
             throw new Error('firstName should be empty!');
        }
        this._firstName = firstName;
    }
    set LastName(lastName:string){
        if(lastName =='' || null){
             throw new Error('lastName should be empty!');
        }
        this._lastName = lastName;
    }
    fullname (){
        return 'the full name is ' + this._firstName + ' ' + this._lastName;
    }
}
let c = new Customer('ann', 'wang');
c.FirstName = '';
console.log(c.FirstName);
console.log(c.fullname());