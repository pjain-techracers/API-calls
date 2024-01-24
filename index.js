const express = require('express');
const app = express();

const routes = require('./routes')
const port = 3001;

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api', routes)

app.listen(port, () => console.log(`Hinge Health app listening on port ${port}!`));
