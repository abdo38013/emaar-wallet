module.exports = function loadRoutes(app) {
    app.use('/api/admin', require('../routes/admin'));
    app.use('/api/user', require('../routes/user'));
    app.use('/api', require('../routes/api'));
    app.use('/api/transaction', require('../routes/transaction'));
    app.use('/api/money', require('../routes/money'));
}