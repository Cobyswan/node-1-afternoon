const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mC = require('./controllers/messages_controller')

app.use(bodyParser.json());
app.use( express.static( __dirname + '/../public/build' ) );

app.get('/api/messages', mC.read)
app.post('/api/messages/', mC.create)
app.delete('/api/messages/:id', mC.delete)
app.put('/api/messages/:id', mC.update)




const port = 3001;
app.listen(port, () => console.log(`Server is listening on port: ${port}`))