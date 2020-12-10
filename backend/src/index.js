
const app = require('./app');
require('./config/database');
app.listen(5000, ()=> console.log("Server started at http://localhost:5000"));
