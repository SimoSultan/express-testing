function repeatMessage(message, repeatCount){
  let messageToShow = "";
  for (let index = 0; index < repeatCount; index++) {
      messageToShow += message; 
  }
  return messageToShow;
}

// console.log(repeatMessage("hello", 3));



const express = require('express')
const app = express()
const port = 3000

app.use( express.json() )

app.get('/', (req, res) => {
  res.json({
    message: "Hello World!"
  })
  res.send('Hello World! Express is running.')
})

app.post('/studentNames', (req,res) => {
  let incomingData = req.body.studentNamesArr
  console.log(incomingData)
  
  res.json({
    firstStudentName: incomingData[0]
  })

})

const server = app.listen(port, () => console.log('listening on port:' + port))

// app = coded up routes and server instance
// server = server that is running and visible by users

module.exports = {
  repeatMessage,
  app,
  server
}
