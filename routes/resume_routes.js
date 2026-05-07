const express = require('express');

const router = express.Router();

const resumeData = require('../data/resume_data');

router.get('/', (req, res) => {

    res.render('resume', {
        data: resumeData
    });

});

module.exports = router;