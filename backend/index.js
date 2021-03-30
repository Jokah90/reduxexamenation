import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const CONNECTION_URL = 'mongodb+srv://exam:exam@cluster0.lot0c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = 5000


const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ extended: true}))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors());

app.listen(PORT, (err) => {
    if (err) throw err 
        console.log('Server is running on http://localhost:5000/posts');
})







