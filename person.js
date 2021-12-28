class Person{
    constructor(name,age,dob,address,phoneno){
        this.name = name;
        this.age = age;
        this.dob = dob;
        this.address = address;
        this.phoneno = phoneno;
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setAge(age){
        this.age = age;
    }
    
    getAge(){
        return this.age;
    }
    setDob(dob){
        this.dob = dob;
    }
    
    getDob(){
        return this.dob;
    }

    setAddress(address){
        this.address = address;
    }

    getAddress(){
        return this.address;
    }

    setPhoneno(phoneno){
        this.phoneno = phoneno;
    }
    
    getPhoneno(){
        return this.phoneno;
    }

    toString(){
        let personData = `Name: ${this.getName()}\nAge: ${this.getAge()}\nDob: ${this.getDob()}\nAddress: ${this.getAddress()}\nPhoneno: ${this.getPhoneno()}`
        return personData;
    }
}

let personDetials = new Person("Santhosh",24,"17/02/1997","6/224/2E, THENDRAL NAGAR SEEKARAJAPURAM RANIPET",8122526440);
console.log(personDetials.toString());

 
