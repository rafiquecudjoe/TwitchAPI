const GetCheermotes = require("../utils/utils")


const CheermotesController = async () => {
 

  
  try {
    const result = await GetCheermotes()
    
  } catch (error) {
    console.log(error)
  }
 
}

module.exports = CheermotesController