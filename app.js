const express = require('express');
// Routes imports
const personRouter = require('./routes/personRoutes');
const jobRouter = require('./routes/jobRoutes');

const app = express();

// 1: MIDDLEWARE
app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
});

// 2: ROUTES
app.use('/api/v1/person', personRouter);
app.use('/api/v1/job', jobRouter);

module.exports = app;
