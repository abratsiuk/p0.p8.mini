const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hotel booking API работает!');
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});

const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB подключена'))
    .catch((err) => console.error(err));
