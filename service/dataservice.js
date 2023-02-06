const db = require('./db.js');
createProfile = (jobtitle, contactNumber, skills, experience, description, portfolioImages, rate) => {
    return db.User.findOne({ contactNumber }).then(user => {
        if (user) {
            return {
                status: false,
                statusCode: 400,
                message: 'profile already exist'
            };

        } else {
            const newUser = new db.User({
                jobtitle: jobtitle,
                contactNumber: contactNumber,
                skills: skills,
                experience: experience,
                description: description,
                portfolioImages: portfolioImages,
                rate: rate
            });
            newUser.save();
            return {
                status: true,
                statusCode: 200,
                message: 'created profile successfully'
            };
        }
    })
}

getAllJobs = () => {
    return db.Jobs.find().then(result => {
        if (result) {
            return {
                status: true,
                statusCode: 200,
                jobs: result
            };
        } else {
            return {
                status: false,
                statusCode: 400,
                message: 'no new jobs '
            };
        }
    })
}

getMyProfile = (contactNumber) => {
    return db.User.findOne({ contactNumber }).then(user => {
        if (user) {
            return {
                status: true,
                statusCode: 200,
                you: user,
            };
        } else {
            return {
                status: false,
                statusCode: 400,
                message: 'user not found',
            };
        }
    })
}

negotiate = (jobId, name, newrate, description) => {
    return db.Jobs.findOne({ jobId }).then(result => {
        if (result) {
            result.negotiation.push({
                name: name,
                newRate: newrate,
                description: description
            })
            result.save();
            return {
                status: true,
                statusCode: 200,
                message: 'negotiated successfully',
                yourNegotiation: result.negotiation
            };
        } else {
            return {
                status: false,
                statusCode: 400,
                message: 'no jobs founded'
            };
        }
    })
}

module.exports = {
    createProfile,
    getAllJobs,
    getMyProfile,
    negotiate
}