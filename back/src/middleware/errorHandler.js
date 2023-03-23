
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    if (res.headersSent) {
        return next(err);
    }
    if (err.status === 400) {
        res.status(400).json({ error: 'Bad request' });
    } else if (err.status === 404) {
        res.status(404).json({ error: 'Not found' });
    } else {
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports =  { errorHandler };



