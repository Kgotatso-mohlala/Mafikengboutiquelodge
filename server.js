const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const indexRoutes = require('./routes/index');
const adminRoutes = require('./routes/admin');


app.use('/', indexRoutes);
app.use('/admin', adminRoutes);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
