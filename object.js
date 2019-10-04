//make a constructor function to create the objects  of differenet student 
        function Student(Name, Age, Semester) {
       this.Name = Name;
       this.Age = Age;
       this.Semester = Semester;
      } 
      //object 3 create
      var Std1=new  Student("Hamza",22,8);
      var Std2=new Student("Atiq",23,8);
      var Std3=new Student("usman",21,8);
    console.log(Std1);
    console.log(Std2);
    console.log(Std3);
//adding protoype in constructor 
      Student.prototype.program=function()
      {
          return this.Name + " " + this.Age;
      }
      var Std3=new Student("atiq",22);
    console.log("student name is "+Std3.program());
      //add defineproperty 
      Object.defineProperty(Std3,'rollno',{
        value:001
    });
    console.log(Std3.rollno);
    //adding object into array
    var record=[];
    const count=record.push(Std1,Std2,Std3);
    console.log(record); 
    var recod2=[];
    record2=prompt("enter your record data");
    console.log(record2);
