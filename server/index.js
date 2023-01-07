const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
errorHandler
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use("/api/user", require('./routes/userRoutes'))
app.use("/api/ticket", require('../server/routes/ticketRoutes'))
app.use("/api/event", require('../server/routes/eventRoutes'))

app.use(errorHandler)



app.listen(port, () => console.log(`Server started on port -${port}`));
