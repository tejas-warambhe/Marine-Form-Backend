const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

router.get('/ping', (req, res) => {
    try {
        return res.json({
            success: "Pong"
        })
    } catch (err) {
        console.log(err.message);
    }
})

router.post('/', async(req, res) => {
    console.log(req.body);
    try {
        let form = await Form.create(req.body);
        console.log(form);
        res.status(200).json({
            success: true,
            form: form
        });
    } catch (err) {
        console.log(err.message);
    }
})






module.exports = router;