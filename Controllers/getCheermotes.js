const GetCheermotes = require("../utils/utils")


const CheermotesController = async (req, res) => {
 

  
  try {
    const result = await GetCheermotes()
    res.status(200).json({    
        message: "Cheermotes Retrieved Successfully",
        data:result
    })
  } catch (error) {
    console.log(error)
  }
 
}

module.exports = CheermotesController