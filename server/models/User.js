class User {

    constructor(name, surname, age, password) {
      this.name = name;
      this.surname = surname;
      this.age = age;
      this.password = password;
    }

    showUser(){
        alert(this.name);
    }

    changeSurname(updateSurname){
        this.surname = updateSurname;
        console.log("new update ", this.surname);
    }

}

module.exports =  User;