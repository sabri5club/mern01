const express = require ('express');
const connectDB = require ('./config/db');

const app = express();

//Connection base de donnée
connectDB();

//Init middleware
app.use(express.json({extented:false}));

app.get('/',(req,res) => res.send('Serveur node fonctionnel'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/post', require('./routes/api/post'));

const PORT = process.env.PORT || 8080;


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))