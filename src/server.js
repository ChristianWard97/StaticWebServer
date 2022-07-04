const express = require("express"); // importing entire express library.
const app = express(); // creating our app object, that houses our server instructions.
const port = process.env.PORT || 5001;

app.use("/static", express.static("public"));
// telling app to use the public folder, when a request is made to /static.

app.listen(5001, () => {
    console.log(`Listening on port ${port}`);
});
// Listening on localhost:5001 for requests to our webserver.