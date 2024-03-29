const express = require('express');
const router = express.Router();
const Form = require('../models/Form');



router.get('/forms', async(req, res) => {
    try {
        const forms = await Form.find({});
        res.status(200).json(forms);
    } catch (err) {
        console.log(err.message);
    }
})

router.get('/form/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const form = await Form.findById({ _id: id });
        res.status(200).json(form);
    } catch (err) {
        console.log(err.message);
    }
})

router.delete('/form/delete/:id', async(req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        let form = await Form.findByIdAndDelete({ _id: id });
        // const response = await enquiry.destroy({
        //     where: {
        //         _id: id
        //     }
        // });

        res.status(200).json({
            success: true,
            Response: form
        })
    } catch (err) {
        console.log(err.message);
    }
});

router.put('/form/update/:id', async(req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const filter = { _id: id };
        let updatedForm = await Form.findOneAndUpdate(filter, req.body);
        res.status(201).json({
            success: true,
            updatedForm: updatedForm
        })

    } catch (err) {
        console.log(err.message);
    }
})









module.exports = router;