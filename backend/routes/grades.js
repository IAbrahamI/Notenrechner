const router = require('express').Router();
let Grade = require('../models/grade.model');

router.route('/').get((req, res) =>{
    Grade.find()
        .then(grades => res.json(grades))
        .catch(err => res.status(400).json('Error: '+ err));
})
//-----------------------------------------------------------------------------------
router.route('/add').post((req,res) => {
    const username = req.body.username;
    const subject = req.body.subject;
    const grade = Number(req.body.grade);

    const newGrade = new Grade({
        username,
        subject,
        grade
    });
    newGrade.save()
        .then(() => res.json('Grade added!'))
        .catch(err => res.status(400).json('Error'+ err));
})
//-----------------------------------------------------------------------------------
router.route('/:id').get((req,res) =>{
    Grade.findById(req.params.id)
        .then(grades => res.json(grades))
        .catch(err => res.status(400).json('Error'+ err));
});
//-----------------------------------------------------------------------------------
router.route('/:id').delete((req,res) =>{
    Grade.findByIdAndDelete(req.params.id)
        .then(() => res.json('Grade deleted.'))
        .catch(err => res.status(400).json('Error'+ err));
});
//-----------------------------------------------------------------------------------
router.route('/update/:id').post((req,res) =>{
    Grade.findById(req.params.id)
        .then(gradeUpdate =>{
            gradeUpdate.username = req.body.username;
            gradeUpdate.subject = req.body.subject;
            gradeUpdate.grade = Number(req.body.grade);

            gradeUpdate.save()
                .then(() => res.json('Grade updated'))
                .catch(err => res.status(400).json('Error'+ err));
        })
        .catch(err => res.status(400).json('Error'+ err));
})
module.exports = router;