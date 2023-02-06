const express = require('express');
const app = express();
app.listen(3000, () => { });
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:4200'
}));
app.use(express.json());
const dataservice = require('./service/dataservice');
app.post('/create-profile', (req, res) => {
    dataservice.createProfile(
        req.body.jobtitle,
        req.body.contactNumber,
        req.body.skills,
        req.body.experience,
        req.body.description,
        req.body.portfolioImages,
        req.body.rate
    ).then(result => {
        res.status(result.statusCode).json(result);
    })
})

app.get('/all-jobs', (req, res) => {
    dataservice.getAllJobs().then(result => {
        res.status(result.statusCode).json(result);
    })
})

app.get('/my-profile/:contactNumber', (req, res) => {
    dataservice.getMyProfile(req.params.contactNumber).then(result => {
        res.status(result.statusCode).json(result);
    })
})
