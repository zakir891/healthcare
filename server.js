const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Health Monitoring System!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
app.post('/submit', (req, res) => {
    const { name, age, healthMetric } = req.body;
    res.json({ message: `Received data for ${name}, Age: ${age}, Metric: ${healthMetric}` });
});