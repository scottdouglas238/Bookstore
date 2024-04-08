const express = require('express')
const app = express()
const port = 3000

// Middleware to serve static files from the project's root directory
app.use(express.static('.'))

// Default route to send the index.html file
app.get('/', (req, res) =>{
    res.sendFile(__dirname = '/index.html')
})

//Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });

