const axios = require('axios')



const GetCheermotes= async () => {
  
  const response1 = await axios.post("https://id.twitch.tv/oauth2/token?client_id=yq64xn16dlldux6vw8qnw43esory3e&client_secret=1w4ezxcv8oycue3gtjnmr61ep3jo9i&grant_type=client_credentials")
  
  const token = response1.data.access_token

  
   const response = await axios.get('https://api.twitch.tv/helix/bits/cheermotes',{
    headers: {
      "Authorization":`Bearer ${token}`,
      'Client-Id':'yq64xn16dlldux6vw8qnw43esory3e'
    }
  })


return response.data


}


  
 
  
  




module.exports = GetCheermotes


