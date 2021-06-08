var Name_of_Student = [];

function Submit(){
    var Student_1 = document.getElementById("Name1").value;
    var Student_2 = document.getElementById("Name2").value;
    var Student_3 = document.getElementById("Name3").value;
    var Student_4 = document.getElementById("Name4").value;

    Name_of_Student.push(Student_1);
    Name_of_Student.push(Student_2);
    Name_of_Student.push(Student_3);
    Name_of_Student.push(Student_4);
    console.log(Name_of_Student);

    document.getElementById("Answer").innerHTML=Name_of_Student;
    document.getElementById("Submit").style.display="none";
    document.getElementById("Sort").style.display="inline-block";
}

function Sorted(){
    Name_of_Student.sort();
    console.log(Name_of_Student);
    document.getElementById("Answer").innerHTML=Name_of_Student;
}