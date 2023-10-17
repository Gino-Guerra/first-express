let students = ["Meg", "Stewie", "Peter", "Lois", "Brian", "Chris"]

export function getAllStudents(req,res){
    res.send(students)

}


export function addStudent(req, res){
    const newstudent = req.body
    students.push(newstudent.name)
    res.status(201).send({message:'Student Added', sucess: true })}

