class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    Describe(){
        return(this.name + "," + this.age + " years old") 
     }
} 


document.getElementById("send").addEventListener("click", addPerson);

function addPerson(){
    let personName = document.getElementById("name").value;
    let personAge = document.getElementById("age").value;

    let list = document.getElementById("list");

    let newPerson = new Person(personName, personAge);

    list.innerHTML += `<li> ${newPerson.Describe()} </li>`;
}
