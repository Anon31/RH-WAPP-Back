const express = require('express');
const bodyParser = require('body-parser');
// Routes imports
const userRouter = require('./routes/userRoutes');
const jobRouter = require('./routes/jobRoutes');

const app = express();

// ✅ Register the bodyParser middleware here
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

// 1: MIDDLEWARE
app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
});

// 2: ROUTES
app.use('/api/v1/user', userRouter);
app.use('/api/v1/job', jobRouter);

module.exports = app;
