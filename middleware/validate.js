const { validateSchema   } = require("../helpers/validation")

module.exports = {
      validate: (req, res, next)=>{
            const {error, value} = validateSchema(req.body)
            if (error) {
                  let errors = error.details.map(err=>err.message)
                  return res.json(errors)
            }
            req.body = value
            next();
      }
}