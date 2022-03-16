const Joi = require('joi')

const user = Joi.object({
    userName: Joi.string().min(5).max(30).required()
})

function validUser(req, res, next) {
    const validation = user.validate(req.body)

    if (validation.error) {
        return res.status(400).json({
            message: "Error 400",
            description: validation.error.details[0].message,
        })

    }

    next();
}

module.exports = validUser