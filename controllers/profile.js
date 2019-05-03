const studentService = require("../services/student");

exports.createStudentProfile = (req, res) => {
    /*
    if(req.body.student){
        studentService.create(req.user.id, req.body.student)
            .then(student => {
                console.log(student.dataValues)
                res.status(201).send("Student created")
            })
    }
    */
   res.send("It is profile page!")
};