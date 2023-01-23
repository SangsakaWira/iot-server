let students = ["Adit","Sutan","Fikki","Rintan"]
console.log(students)
students.push("Bambang")
students.map(student=>{
    if(student === "Fkki"){
        console.log("Dilarang Masuk!")
    }else{
        console.log(student)
    }
})