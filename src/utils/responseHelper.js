function success(res, data, status="completed") {

    return res.json({
        success:true,
        status,
        data
    });

}


function error(res, message, code="ERROR") {

    return res.status(400).json({
        success:false,
        status:"error",
        error:code,
        message
    });

}


module.exports = {
    success,
    error
};