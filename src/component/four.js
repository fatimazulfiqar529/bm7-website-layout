import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import shop from '../assests/shop.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from '@mui/material/Link';
import wash from '../assests/wash.png';
import boski from '../assests/boski.png';
import bm from '../assests/bm.png';
import cotton from '../assests/cotton.png';
import  ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import Hamza from './new';
function Four(){
    const [New,setNew]=useState(false);
    const handleClick=()=>{
        setNew((prev)=>!prev)
    }
    return(
        <Box sx={{padding:"3%",marginTop:"3%",display:"flex",flexDirection:"row",justifyContent:"flex-start",gap:"1.5rem"}}>
            <Box sx={{width:"270px",height:"370px"}}>
<img src={shop} alt="logo" style={{width:"270px",height:"370px",borderRadius:"20px"}}/>
<Box sx={{padding:"4%",display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
<Typography component="a" href="https://bilalmarth7.pk/collections/all-products" sx={{marginTop:"-30%",textDecoration:"none",marginLeft:"5%",color:"white",fontFamily:"Inter",fontSize:"25px",fontWeight:"700","&:hover":{textDecoration:"underline"}}}>Shop All</Typography>
<Link href="https://bilalmarth7.pk/collections/all-products" underline="none">
<ArrowForwardIcon  sx={{marginTop:"-550%",marginLeft:"25%",color:"white",fontFamily:"Inter",fontSize:"25px",fontWeight:"700","&:hover":{transform: "rotate(90deg)"}}}/>
</Link>
</Box>
</Box>

<Box sx={{width:"270px",height:"370px"}}>
<img src={wash} alt="logo" style={{width:"270px",height:"285px",borderTopLeftRadius: "20px",borderTopRightRadius: "20px",}}/>

<Box sx={{padding:"2%",marginLeft:"1.5%",display:"flex",flexDirection:"row",justifyContent:"space-evenly",marginTop:"-6%",backgroundColor:"#f5f5f5",borderBottomLeftRadius: "20px",borderBottomRightRadius: "20px",}}>
<Typography component="a" href="https://bilalmarth7.pk/collections/washing-ware" sx={{marginTop:"10%",marginBottom:"5%",textDecoration:"none",marginLeft:"4%",color:"black",fontFamily:"Inter",fontSize:"30px",fontWeight:"700","&:hover":{textDecoration:"underline"}}}>
Wash & Wear</Typography>
<Link href="https://bilalmarth7.pk/collections/washing-ware" underline="none">
<ArrowForwardIcon  sx={{marginTop:"140%",marginLeft:"25%",color:"black",fontFamily:"Inter",fontSize:"25px",fontWeight:"700","&:hover":{transform: "rotate(90deg)"}}}/>
</Link>
</Box>
</Box>

<Box sx={{width:"270px",height:"370px"}}>
<img src={boski} alt="logo" style={{width:"270px",height:"285px",borderTopLeftRadius: "20px",borderTopRightRadius: "20px",}}/>

<Box sx={{padding:"2%",marginLeft:"1.5%",display:"flex",flexDirection:"row",justifyContent:"space-evenly",marginTop:"-6%",backgroundColor:"#f5f5f5",borderBottomLeftRadius: "20px",borderBottomRightRadius: "20px",}}>
<Typography component="a" href="https://bilalmarth7.pk/collections/boski" sx={{marginTop:"10%",marginBottom:"5%",textDecoration:"none",marginLeft:"4%",color:"black",fontFamily:"Inter",fontSize:"30px",fontWeight:"700","&:hover":{textDecoration:"underline"}}}>
Boski</Typography>
<Link href="https://bilalmarth7.pk/collections/boski" underline="none">
<ArrowForwardIcon  sx={{marginTop:"140%",marginLeft:"25%",color:"black",fontFamily:"Inter",fontSize:"25px",fontWeight:"700","&:hover":{transform: "rotate(90deg)"}}}/>
</Link>
</Box>
</Box>

<Box sx={{width:"270px",height:"370px"}}>
<img src={bm} alt="logo" style={{width:"270px",height:"285px",borderTopLeftRadius: "20px",borderTopRightRadius: "20px",}}/>

<Box sx={{padding:"2%",marginLeft:"1.5%",display:"flex",flexDirection:"row",justifyContent:"space-evenly",marginTop:"-6%",backgroundColor:"#f5f5f5",borderBottomLeftRadius: "20px",borderBottomRightRadius: "20px",}}>
<Typography component="a" href="https://bilalmarth7.pk/collections/perfume" sx={{marginTop:"10%",marginBottom:"5%",textDecoration:"none",marginLeft:"4%",color:"black",fontFamily:"Inter",fontSize:"30px",fontWeight:"700","&:hover":{textDecoration:"underline"}}}>
Perfume</Typography>
<Link href="https://bilalmarth7.pk/collections/perfume" underline="none">
<ArrowForwardIcon  sx={{marginTop:"140%",marginLeft:"25%",color:"black",fontFamily:"Inter",fontSize:"25px",fontWeight:"700","&:hover":{transform: "rotate(90deg)"}}}/>
</Link>
</Box>
</Box>

<Box sx={{width:"270px",height:"370px"}}>
<img src={cotton} alt="logo" style={{width:"270px",height:"285px",borderTopLeftRadius: "20px",borderTopRightRadius: "20px",}}/>

<Box sx={{padding:"2%",marginLeft:"1.5%",display:"flex",flexDirection:"row",justifyContent:"space-evenly",marginTop:"-6%",backgroundColor:"#f5f5f5",borderBottomLeftRadius: "20px",borderBottomRightRadius: "20px",}}>
<Typography component="a" href="https://bilalmarth7.pk/collections/cotton" sx={{marginTop:"10%",marginBottom:"5%",textDecoration:"none",marginLeft:"4%",color:"black",fontFamily:"Inter",fontSize:"30px",fontWeight:"700","&:hover":{textDecoration:"underline"}}}>
Cotton</Typography>
<Link href="https://bilalmarth7.pk/collections/cotton" underline="none">
<ArrowForwardIcon  sx={{marginTop:"140%",marginLeft:"25%",color:"black",fontFamily:"Inter",fontSize:"25px",fontWeight:"700","&:hover":{transform: "rotate(90deg)"}}}/>
</Link>
</Box>
</Box>

<ArrowForwardIosIcon onClick={handleClick} sx={{marginLeft:"-10%",overflowX:"scroll",marginTop:"10%",backgroundColor:"rgba(0, 0, 0, 0.4)",color:"white",borderRadius:"50%",fontSize:"40px",padding:"0.5%","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.4)",color:"black"}}}/>
{New && <Hamza/>}
</Box>

    )
}
export default Four;