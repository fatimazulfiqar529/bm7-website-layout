import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import moon from '../assests/moon.png';
import bm from '../assests/bm.png';
import Button from '@mui/material/Button';
import oud from '../assests/oud.png';
import mav from '../assests/mav.png';
import xylo from '../assests/xylo.png';
function Per(){
    return(
        <Box sx={{marginTop:"7%",}}>
            <Button variant='contained'  sx={{marginLeft:"4%",marginBottom:"0.5%",padding:"0.9%",color:"white",backgroundColor:"black",fontFamily:"Inter",borderRadius:"25px",fontSize:"16px",fontWeight:"500","&:hover":{textDecoration:"underline"}}}>
                Perfumes</Button>
       
        <Box sx={{padding:"2%",display:"flex",flexDirection:"row",justifyContent:"flex-start",gap:"1.5rem"}}>

<Box sx={{width:"300px",height:"390px"}}>
   <Link href="https://bilalmarth7.pk/products/7-by-bm7" underline="none">
<img src={bm} alt="logo" style={{width:"300px",height:"300px",borderTopLeftRadius: "20px",borderTopRightRadius:"20px",}}/>
<Button variant='conatined' sx={{marginTop:"-25%",marginLeft:"25%",marginBottom:"10%",color:"white",backgroundColor:"black",fontFamily:"Inter",borderRadius:"20px",fontSize:"12px",fontWeight:"700",opacity:"0","&:hover":{backgroundColor:"white",color:"black",opacity:"1"}}}>Add to Cart</Button>
<Box sx={{paddingTop:"2%",paddingBottom:'5%',paddingRight:"1%",paddingLeft:"1%",marginLeft:"0.1%",display:"flex",flexDirection:"column",width:"300px",justifyContent:"space-evenly",marginTop:"-7%",backgroundColor:"#f5f5f5",borderBottomLeftRadius: "20px",borderBottomRightRadius: "20px",}}>
<Typography component="a" href="https://bilalmarth7.pk/products/7-by-bm7" sx={{marginTop:"3%",textDecoration:"none",marginLeft:"4%",color:"#c9bfbfff",fontFamily:"Inter",fontSize:"17px",fontWeight:"300","&:hover":{textDecoration:"underline"}}}>
Bilal Marth 7</Typography>
<Box sx={{dispaly:'flex',justifyContent:"flex-start",flexDirection:"row"}}>
<Typography component="a" href="https://bilalmarth7.pk/products/7-by-bm7" sx={{marginBottom:"10%",textDecoration:"none",marginLeft:"4%",color:"black",fontFamily:"Inter",fontSize:"18px",fontWeight:"600","&:hover":{textDecoration:"underline"}}}>
7 by BM7</Typography>
<Typography component="a" href="https://bilalmarth7.pk/products/7-by-bm7" sx={{marginBottom:"10%",textDecoration:"none",marginLeft:"37%",color:"black",fontFamily:"Inter",fontSize:"14px",fontWeight:"500","&:hover":{textDecoration:"underline"}}}>
Rs.5,500.00</Typography></Box>
</Box>
</Link>
</Box>

<Box sx={{width:"300px",height:"390px"}}>
   <Link href="https://bilalmarth7.pk/products/moonlight-by-bm7" underline="none">
<img src={moon} alt="logo" style={{width:"300px",height:"300px",borderTopLeftRadius: "20px",borderTopRightRadius:"20px",}}/>
<Button variant='conatined' sx={{marginTop:"-25%",marginLeft:"25%",marginBottom:"10%",color:"white",backgroundColor:"black",fontFamily:"Inter",borderRadius:"20px",fontSize:"12px",fontWeight:"700",opacity:"0","&:hover":{backgroundColor:"white",color:"black",opacity:"1"}}}>Add to Cart</Button>
<Box sx={{paddingTop:"2%",paddingBottom:'5%',paddingRight:"1%",paddingLeft:"1%",marginLeft:"0.1%",display:"flex",flexDirection:"column",width:"300px",justifyContent:"space-evenly",marginTop:"-7%",backgroundColor:"#f5f5f5",borderBottomLeftRadius: "20px",borderBottomRightRadius: "20px",}}>
<Typography component="a" href="https://bilalmarth7.pk/products/moonlight-by-bm7" sx={{marginTop:"3%",textDecoration:"none",marginLeft:"4%",color:"#c9bfbfff",fontFamily:"Inter",fontSize:"17px",fontWeight:"300","&:hover":{textDecoration:"underline"}}}>
Bilal Marth 7</Typography>
<Box sx={{dispaly:'flex',justifyContent:"flex-start",flexDirection:"row"}}>
<Typography component="a" href="https://bilalmarth7.pk/products/moonlight-by-bm7" sx={{marginBottom:"10%",textDecoration:"none",marginLeft:"1%",color:"black",fontFamily:"Inter",fontSize:"18px",fontWeight:"600","&:hover":{textDecoration:"underline"}}}>
Moonlight by BM7</Typography>
<Typography component="a" href="https://bilalmarth7.pk/products/moonlight-by-bm7" sx={{marginBottom:"10%",textDecoration:"none",marginLeft:"13%",color:"black",fontFamily:"Inter",fontSize:"14px",fontWeight:"500","&:hover":{textDecoration:"underline"}}}>
Rs.4,000.00</Typography></Box>
</Box>
</Link>
</Box>

<Box sx={{width:"300px",height:"390px"}}>
   <Link href="https://bilalmarth7.pk/products/oud-by-bm7" underline="none">
<img src={oud} alt="logo" style={{width:"300px",height:"300px",borderTopLeftRadius: "20px",borderTopRightRadius:"20px",}}/>
<Button variant='conatined' sx={{marginTop:"-25%",marginLeft:"25%",marginBottom:"10%",color:"white",backgroundColor:"black",fontFamily:"Inter",borderRadius:"20px",fontSize:"12px",fontWeight:"700",opacity:"0","&:hover":{backgroundColor:"white",color:"black",opacity:"1"}}}>Add to Cart</Button>
<Box sx={{paddingTop:"2%",paddingBottom:'5%',paddingRight:"1%",paddingLeft:"1%",marginLeft:"0.1%",display:"flex",flexDirection:"column",width:"300px",justifyContent:"space-evenly",marginTop:"-7%",backgroundColor:"#f5f5f5",borderBottomLeftRadius: "20px",borderBottomRightRadius: "20px",}}>
<Typography component="a" href="https://bilalmarth7.pk/products/oud-by-bm7" sx={{marginTop:"3%",textDecoration:"none",marginLeft:"4%",color:"#c9bfbfff",fontFamily:"Inter",fontSize:"17px",fontWeight:"300","&:hover":{textDecoration:"underline"}}}>
Bilal Marth 7</Typography>
<Box sx={{dispaly:'flex',justifyContent:"flex-start",flexDirection:"row"}}>
<Typography component="a" href="https://bilalmarth7.pk/products/oud-by-bm7" sx={{marginBottom:"10%",textDecoration:"none",marginLeft:"4%",color:"black",fontFamily:"Inter",fontSize:"18px",fontWeight:"600","&:hover":{textDecoration:"underline"}}}>
OUD by BM7</Typography>
<Typography component="a" href="https://bilalmarth7.pk/products/oud-by-bm7" sx={{marginBottom:"10%",textDecoration:"none",marginLeft:"26%",color:"black",fontFamily:"Inter",fontSize:"14px",fontWeight:"500","&:hover":{textDecoration:"underline"}}}>
Rs.4,000.00</Typography></Box>
</Box>
</Link>
</Box>

<Box sx={{width:"300px",height:"390px"}}>
   <Link href="https://bilalmarth7.pk/products/maverick-by-bm7" underline="none">
<img src={mav} alt="logo" style={{width:"300px",height:"300px",borderTopLeftRadius: "20px",borderTopRightRadius:"20px",}}/>
<Button variant='conatined' sx={{marginTop:"-25%",marginLeft:"25%",marginBottom:"10%",color:"white",backgroundColor:"black",fontFamily:"Inter",borderRadius:"20px",fontSize:"12px",fontWeight:"700",opacity:"0","&:hover":{backgroundColor:"white",color:"black",opacity:"1"}}}>Add to Cart</Button>
<Box sx={{paddingTop:"2%",paddingBottom:'5%',paddingRight:"1%",paddingLeft:"1%",marginLeft:"0.1%",display:"flex",flexDirection:"column",width:"300px",justifyContent:"space-evenly",marginTop:"-7%",backgroundColor:"#f5f5f5",borderBottomLeftRadius: "20px",borderBottomRightRadius: "20px",}}>
<Typography component="a" href="https://bilalmarth7.pk/products/maverick-by-bm7" sx={{marginTop:"3%",textDecoration:"none",marginLeft:"4%",color:"#c9bfbfff",fontFamily:"Inter",fontSize:"17px",fontWeight:"300","&:hover":{textDecoration:"underline"}}}>
Bilal Marth 7</Typography>
<Box sx={{dispaly:'flex',justifyContent:"flex-start",flexDirection:"row"}}>
<Typography component="a" href="https://bilalmarth7.pk/products/maverick-by-bm7" sx={{marginBottom:"10%",textDecoration:"none",marginLeft:"4%",color:"black",fontFamily:"Inter",fontSize:"18px",fontWeight:"600","&:hover":{textDecoration:"underline"}}}>
Maverick by BM7</Typography>
<Typography component="a" href="https://bilalmarth7.pk/products/maverick-by-bm7" sx={{marginBottom:"10%",textDecoration:"none",marginLeft:"13%",color:"black",fontFamily:"Inter",fontSize:"14px",fontWeight:"500","&:hover":{textDecoration:"underline"}}}>
Rs.5,300.00</Typography></Box>
</Box>
</Link>
</Box>

<Box sx={{width:"187px",height:"390px"}}>
   <Link href="https://bilalmarth7.pk/products/ixylo-by-bm7" underline="none">
<img src={xylo} alt="logo" style={{width:"187px",height:"300px",borderTopLeftRadius: "20px",borderTopRightRadius:"20px",}}/>
<Button variant='conatined' sx={{marginTop:"-25%",marginLeft:"25%",marginBottom:"10%",color:"white",backgroundColor:"black",fontFamily:"Inter",borderRadius:"20px",fontSize:"12px",fontWeight:"700",opacity:"0","&:hover":{backgroundColor:"white",color:"black",opacity:"1"}}}>Add to Cart</Button>
<Box sx={{paddingTop:"2%",paddingBottom:'5%',paddingRight:"1%",paddingLeft:"1%",marginLeft:"0.1%",display:"flex",flexDirection:"column",width:"187px",justifyContent:"space-evenly",marginTop:"-7%",backgroundColor:"#f5f5f5",borderBottomLeftRadius: "20px",borderBottomRightRadius: "20px",}}>
<Typography component="a" href="https://bilalmarth7.pk/products/ixylo-by-bm7" sx={{marginTop:"3%",textDecoration:"none",marginLeft:"4%",color:"#c9bfbfff",fontFamily:"Inter",fontSize:"17px",fontWeight:"300","&:hover":{textDecoration:"underline"}}}>
Bilal Marth 7</Typography>
<Box sx={{dispaly:'flex',justifyContent:"flex-start",flexDirection:"row"}}>
<Typography component="a" href="https://bilalmarth7.pk/products/ixylo-by-bm7" sx={{marginBottom:"10%",textDecoration:"none",marginLeft:"4%",color:"black",fontFamily:"Inter",fontSize:"18px",fontWeight:"600","&:hover":{textDecoration:"underline"}}}>
Xylo by BM7</Typography>
<Typography component="a" href="https://bilalmarth7.pk/products/ixylo-by-bm7" sx={{marginBottom:"10%",textDecoration:"none",marginLeft:"1%",color:"black",fontFamily:"Inter",fontSize:"14px",fontWeight:"500","&:hover":{textDecoration:"underline"}}}>
Rs.3,499</Typography></Box>
</Box>
</Link>
</Box>


</Box>
 </Box>

    )
}
export default Per;