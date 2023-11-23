const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});
const app = require('./app');

mongoose.connect('mongodb+srv://thomasnoel31:r59zBIMDHwNvgPi4@cluster0.fi1j8rj.mongodb.net/?retryWrites=true&w=majority', {
        autoIndex: true //make this also true
    }
).then(() => console.log('DB Connection successful 👍 !!!'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App running on port ${port} ! 💯`);
});
