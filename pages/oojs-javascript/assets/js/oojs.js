
class BankAccount {
    constructor(agency, number, type) {
    this.agency = agency;
    this.number = number;
    this.type = type;
    this._balance = 0;   
    }
    
    set balance(value){
        this._balance = value;
    }
    get balance(){
        return this._balance;
    }

    withdraw(value){
        if(value > this._balance){
            return "Insuficient Balance";
        }
        this._balance = this.balance - value;

        return this._balance;
    }

    deposit(value) {
        this._balance = this.balance + value; 
        return this._balance;
    }
}

class CheckingAccount extends BankAccount {
    constructor(agency, number, creditCard){
        super(agency, number, creditCard);
        this.type = 'checking';
        this.creditCard = creditCard;
    }

    get creditCard(){
        return this._creditCard;
    }

    set creditCard(value){
        this._creditCard = value;
    }


    }

    
    class SavingsAccount extends BankAccount {
        constructor(agency, number){
            super(agency, number);
            this.type = 'savings';
        }
    }

    class GraduateAccount extends BankAccount {
        constructor(agency, number){
            super(agency, number);
            this.type = 'graduate';
        }


        withdraw(value){
            if(value > 500){
                return "You can only withdraw 500$ or less."
            } else if( value > this.balance ){
                return "Insuficient Balance"
            }
            this._balance = this._balance - value;
        }
        }

   