module.exports = function favicon(req, res, next) {
    if (req.path !== '/favicon.ico') return next();
    if (req.method !== 'GET' && req.method !== 'HEAD') {
        res.statusCode = req.method === 'OPTIONS' ? 200 : 405;
        res.setHeader('Allow', 'GET, HEAD, OPTIONS');
        res.setHeader('Content-Length', '0');
        res.end();
        return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Length', '0');
    res.setHeader('Content-Type', 'image/x-icon');
    res.end();
};
