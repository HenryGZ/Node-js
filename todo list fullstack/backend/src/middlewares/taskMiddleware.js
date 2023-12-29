const validateBody = (req, res, next) => {

    const {body} = req;

    if(body.title === undefined || body.title === ''){
        return res.status(400).json({message: 'the field "title" is required and cannot be "empty"'});
    }
    
    next();
};

const validateUpdate = (req, res, next) => {

    const {body} = req;

    if(body.title === undefined && body.status === undefined){
        return res.status(400).json({message: 'the fields "title" and "status" are required'});
    }

    if(body.title === undefined && body.status !== undefined){
        return res.status(400).json({message: 'the field "title" is required'});
    }

    if(body.title !== undefined && body.status === undefined){
        return res.status(400).json({message: 'the field "status" is required'});
    }

    if(body.title === '' || body.status === ''){
        return res.status(400).json({message: 'the fields "title" and "status" cannot be "empty"'});
    }

    next();
};

module.exports = {

    validateBody,
    validateUpdate

};