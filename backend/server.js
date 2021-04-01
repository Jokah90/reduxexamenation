const app = require('./index.js');
const menuRouter = require('./route/index');
const PORT = 8080;
const cors = require('cors');

app.use(cors());
app.use('/api/menu', menuRouter);
app.listen(PORT, (err) => {

    if (err) throw err

    console.log('Server is running on http://localhost:8080')

});