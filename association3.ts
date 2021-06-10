import {address} from './association1'
import {bank} from './association2'

  class customer{
     name:string
     constructor(name:string){
         this.name=name
     }
     getcustomerinfo()
     {
         console.log(`welcome ${this.name}`)
     }
 }
 let Customer = new customer('keerthi')
let Address = new address('secunderabad')
let Bank=new bank('BOI')
 console.log(Customer.getcustomerinfo())
console.log(Address.getaddressinfo())
console.log(Bank.getbankinfo())