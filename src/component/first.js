import Box from '@mui/material/Box';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import face from '../assests/face.png';
import tik from '../assests/tik.png';
import insta from '../assests/insta.png';
import you from '../assests/you.png';
import Typography from '@mui/material/Typography';
function First(){
    return(
       <AppBar sx={{backgroundColor:"black",padding:"0.5%",color:"white"}}>
<Toolbar sx={{display:"flex",justifyContent:"flex-start",flexDirection:"row"}}>
    <Box sx={{display:"flex",justifyContent:"flex-start",flexDirection:"row",gap:"1rem"}}>
        <a href="https://www.facebook.com/bilalmarth7.pk">
<img src={face} alt="logo" style={{width:"40px",height:"40px",borderRadius:"50%"}}/>
</a>
       <a href="https://www.tiktok.com/@bilalmarth7.pk?lang=en-GB">
<img src={tik} alt="logo" style={{width:"40px",height:"40px",borderRadius:"50%",}}/>
</a>
       <a href="https://www.instagram.com/bilalmarth7.pk/">
<img src={insta} alt="logo" style={{width:"33px",height:"33px",borderRadius:"50%",marginTop:"4px"}}/>
</a>
       <a href="https://www.youtube.com/@bilalmarth7officialpk">
<img src={you} alt="logo" style={{width:"40px",height:"40px",borderRadius:"50%",}}/>
</a>
    </Box>
    <Box sx={{display:"flex",justifyContent:"center",flexDirection:"row",gap:"1rem",marginLeft:"29%"}}>
        <Typography sx={{textAlign:"center",fontFamily:"Poppins",fontSize:"16px"}}>"Winter Collection Coming Soon"</Typography>
    </Box>
</Toolbar>
       </AppBar>
    )
}
export default First;