import express from "express";
import data from './data.js'
// import res from "express/lib/response";


const app = express();

app.get('/', (req, res) => {
    res.send("well come to Express");
});

const port = process.env.PORT || 5000;

app.get('/api/products', (req, res) => {
    res.send(data.products);
});


app.listen (port, () => {
    console.log(`server is running @port ${port}`);
});
