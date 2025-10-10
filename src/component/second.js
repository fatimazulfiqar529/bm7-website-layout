import * as React from 'react';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from '../assests/logo.png';
import Typography from '@mui/material/Typography';
import tro from '../assests/tro.png';
import user from '../assests/user.png';
import glass from '../assests/glass.png';
function Second(){
    return(
       
<AppBar sx={{backgroundColor:"white",marginTop:"4.7%",paddingTop:"1%",paddingLeft:"2%",paddingRight:"2%",paddingBottom:"-1%",color:"black",boxShadow:"none",borderRadius:"30px"}}>
<Toolbar sx={{display:"flex",justifyContent:"space-evenly",flexDirection:"row",gap:"18rem"}}>
    <Box>
        <img src={logo} alt="logo" style={{width:"70px"}}/>
    </Box>
      <Box sx={{display:"flex",justifyContent:"flex-start",flexDirection:"row",gap:"1rem",marginLeft:"3%"}}>
  <Typography sx={{textAlign:"center",fontFamily:"inter",fontSize:"18px",fontWeight:"500"}}>Wash & Wear</Typography>
  <Typography sx={{textAlign:"center",fontFamily:"inter",fontSize:"18px",fontWeight:"500"}}>Boski</Typography>
  <Typography sx={{textAlign:"center",fontFamily:"inter",fontSize:"18px",fontWeight:"500"}}>Lattha</Typography>
  <Typography sx={{textAlign:"center",fontFamily:"inter",fontSize:"18px",fontWeight:"500"}}>Cotton</Typography>
  <Typography sx={{textAlign:"center",fontFamily:"inter",fontSize:"18px",fontWeight:"500"}}>Wallets</Typography>
  <Typography sx={{textAlign:"center",fontFamily:"inter",fontSize:"18px",fontWeight:"500"}}>Perfume</Typography>
    </Box>
      <Box sx={{display:"flex",justifyContent:"flex-start",flexDirection:"row",gap:"1rem"}}>
        <a href="https://www.facebook.com/bilalmarth7.pk">
<img src={glass} alt="logo" style={{width:"40px",height:"40px",borderRadius:"50%",marginTop:"2px"}}/>
</a>
       <a href="https://shopify.com/authentication/74913579257/login?client_id=fdcc80c7-a7c8-4a8d-af8d-d6af51d3e7d6&locale=en&redirect_uri=%2Fauthentication%2F74913579257%2Foauth%2Fauthorize%3Fclient_id%3Dfdcc80c7-a7c8-4a8d-af8d-d6af51d3e7d6%26locale%3Den%26nonce%3Ddb8db395-0afb-482b-8185-7e605955b5b7%26redirect_uri%3Dhttps%253A%252F%252Fshopify.com%252F74913579257%252Faccount%252Fcallback%253Fsource%253Dcore%26region_country%3DPK%26response_type%3Dcode%26scope%3Dopenid%2Bemail%2Bcustomer-account-api%253Afull%26state%3D01K71YYJX7FX1E91WA4P7JWNW5&region_country=PK">
<img src={user} alt="logo" style={{width:"40px",height:"40px",borderRadius:"50%",}}/>
</a>
       <a href="https://www.instagram.com/bilalmarth7.pk/">
<img src={tro} alt="logo" style={{width:"40px",height:"40px",borderRadius:"50%",marginTop:"2px"}}/>
</a>
    </Box>
</Toolbar>
</AppBar>

    )
}
export default Second