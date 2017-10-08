function Person(fullName,favColour) {
   this.name = fullName;
   this.favouriteColor = favColour;
   this.greet = function() {
       console.log('Hello my name is'+this.name+" and my fav colour is "+this.favouriteColor+".");
   } 
}

var john = new Person("John",'zelena');
john.greet();

var john = new Person("Kurva",'Hovna');
john.greet();
