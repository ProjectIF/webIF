const jwt = require('jsonwebtoken');
let secret = "7f9dbe9ada0f50f6b4aa63956eb1e84c9dfe0c67"
module.exports = async (req, res, next) => {
    const header = req.headers.authorization;

    if (!header) {
       
        res.status(401).send({ error: "Token não informado" })
    } else {
        try {
            const token = header.split(" ");
            await jwt.verify(token[0], secret, (err, decoded));
            next();
        } catch (error) {
            
            res.status(401).send( error )
        }
    }
}

