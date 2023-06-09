const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;


const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_SECRET_KEY]
}));

//------------------------------------
const cors = require("cors");
app.use(cors());
//------------------------------------

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userRoutes = require('./routes/users-api');



//ALL API ROUTES HERE
app.use('/api/users',userRoutes);




app.listen(PORT,()=>{
  console.log(`Server running at port ${PORT}`);
});
