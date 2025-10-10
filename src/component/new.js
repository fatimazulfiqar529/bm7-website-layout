import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from '@mui/material/Link';
import lattha from '../assests/lattha.png';
import walle from '../assests/walle.png';
function Hamza(){
    return(
        <Box sx={{marginLeft:"5%",display:"flex",flexDirection:"row",justifyContent:"flex-start",gap:"1.5rem"}}>
<Box sx={{width:"270px",height:"370px"}}>
<img src={lattha} alt="logo" style={{width:"270px",height:"285px",borderTopLeftRadius: "20px",borderTopRightRadius: "20px",}}/>
<Box sx={{padding:"2%",marginLeft:"1.5%",display:"flex",flexDirection:"row",justifyContent:"space-evenly",marginTop:"-6%",backgroundColor:"#f5f5f5",borderBottomLeftRadius: "20px",borderBottomRightRadius: "20px",}}>
<Typography component="a" href="https://bilalmarth7.pk/collections/lattha" sx={{marginTop:"10%",marginBottom:"5%",textDecoration:"none",marginLeft:"4%",color:"black",fontFamily:"Inter",fontSize:"30px",fontWeight:"700","&:hover":{textDecoration:"underline"}}}>
Lattha</Typography>
<Link href="https://bilalmarth7.pk/collections/lattha" underline="none">
<ArrowForwardIcon  sx={{marginTop:"140%",marginLeft:"25%",color:"black",fontFamily:"Inter",fontSize:"25px",fontWeight:"700","&:hover":{transform: "rotate(90deg)"}}}/>
</Link>
</Box>
</Box>

<Box sx={{width:"270px",height:"370px"}}>
<img src={walle} alt="logo" style={{width:"270px",height:"285px",borderTopLeftRadius: "20px",borderTopRightRadius: "20px",}}/>

<Box sx={{padding:"2%",marginLeft:"1.5%",display:"flex",flexDirection:"row",justifyContent:"space-evenly",marginTop:"-6%",backgroundColor:"#f5f5f5",borderBottomLeftRadius: "20px",borderBottomRightRadius: "20px",}}>
<Typography component="a" href="https://bilalmarth7.pk/collections/wallets" sx={{marginTop:"10%",marginBottom:"5%",textDecoration:"none",marginLeft:"4%",color:"black",fontFamily:"Inter",fontSize:"30px",fontWeight:"700","&:hover":{textDecoration:"underline"}}}>
Wallets</Typography>
<Link href="https://bilalmarth7.pk/collections/wallets" underline="none">
<ArrowForwardIcon  sx={{marginTop:"140%",marginLeft:"25%",color:"black",fontFamily:"Inter",fontSize:"25px",fontWeight:"700","&:hover":{transform: "rotate(90deg)"}}}/>
</Link>
</Box>
</Box>

</Box>

    )
}
export default Hamza;