// Node packages
const path = require('path');

// Third party packages
const express = require('express');

// Our packages
const authRouter = require('./routes/auth.routes');

// Loading app
const app = express();

// Router configuration
app.use(authRouter);

// App configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Starting the app, 3000 as default port
// <domain>:3000
app.listen(3000);