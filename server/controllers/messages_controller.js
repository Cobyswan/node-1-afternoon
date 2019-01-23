let messages = []
let id = 0;

module.exports = {
  create: (req, res) => {
    let { text, time } = req.body;
    messages.push({id, text, time})
    id++
    res.status(200).json(messages)
  },
 
  read: (req, res) => {
    res.status(200).json(messages)
  },
  
  update: (req, res) => {
    let { text } = req.body
    let index = messages.findIndex((message) => message.id == req.params.id)
    
    messages[index] = {
      id: messages[index].id,
      text: text || messages[index].text,
      time: messages[index].time
    }

    res.status(200).json(messages)
  },
  
  delete: (req, res) => {
    let indexDelete = messages.findIndex((message) => message.id == req.params.id)
    console.log(indexDelete)
    messages.splice(indexDelete, 1)

    res.status(200).json(messages);
  }
}