const express = require("express")
const cors = require('cors') 
const app = express()

// config mongoose
require("./config/mongoose.config")

// express config for post
app.use(cors()) 
app.use(express.json(), express.urlencoded({ extended: true }));

require("./routes/product.routes")(app)


// listen to the port
app.listen(8000, () => console.log(" MR.LI your server is ready on port 8000"));