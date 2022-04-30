import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT_SERVER || 5000;

const URI = 'mongodb+srv://tqhuy:1604@cluster0.ytl4r.mongodb.net/node-react-docker?retryWrites=true&w=majority'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Hello Huy164')
})

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to DB');
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`)
    });
  }).catch(err => {
    console.log('err', err);
  });

