class questions {
    constructor(Class,Subject,Date){
    this.class=Class;
    this.subject=Subject;
    this.date=Date;
    this.questionaire=function(){
    
    const myClass = prompt("What class are you in? ");
    alert(`You are in ${myClass}.`);
    const subject = prompt("What subject are you having? ");
    alert(`You are currently having ${subject}.`);
    const date = prompt("What is the date ");
    alert(`The date is ${date}.`);
    
    
    let button = document.getElementById('submit');
    button.addEventListener('click', function() {
    console.log('Submited!');
    
    return `I am in ${this.Class} stream. I've been studying ${this.Subject} since ${this.Date}.`
    });
    }
    }
  }
    var me = questions("HopperLab","JavaScript","29/02/2022");
    console.log(me.questionaire());  
  
        

var hopperLab = {
    name: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
hopperLab.func();


// 3. The output will be

// outer func:  this.name = bar 
// this is because when this is used it refers to bar which is held in the variable name and it is inside
//  the scope that it has been called in.

// outer func:  self.name = bar 
// when using self. name, bar is output because it is held in the variable name within the scope that has been called.

// inner func:  this.name = undefined  
// undefined is returned because it was outside the scope of the function.
// inner func:  self.name = bar bar is returned because as long as it is referring to the function the name can be referred to

// 4. It is used on a global scope
