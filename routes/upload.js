const express = require('express');
const router = express.Router();
const Form = require('../models/Form');
const multer = require('multer')


router.get('/ping', (req, res) => {
    try {
        return res.json({
            success: "Pong"
        })
    } catch (err) {
        console.log(err.message);
    }
})



var storage = multer.diskStorage({

    destination: "./public/images",
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})



var upload = multer({ storage: storage }).single('file');


router.post('/file', function(req, res) {

    upload(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        console.log(req.file);
        return res.status(200).send(req.file)

    })

});

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