const express = require('express');
const router = express.Router();


router.get('/ping', (req, res) => {
    try {
        return res.json({
            success: "Pong"
        })
    } catch (err) {
        console.log(err.message);
    }
})






module.exports = router;