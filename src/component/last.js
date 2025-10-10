import Box from '@mui/material/Box';
import * as React from 'react';
import icon from '../assests/icon.png';
import Typography from '@mui/material/Typography';
import  ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import face from '../assests/face.png';
import tik from '../assests/tik.png';
import insta from '../assests/insta.png';
import you from '../assests/you.png';
function Last(){
    return(
        <Box sx={{paddingBottom:"5%",backgroundColor:"#333333"}}>
                    <Box sx={{backgroundColor:"black",paddingTop:"4%",paddingBottom:"4%",paddingRight:"4%",borderBottomLeftRadius:"30px",borderBottomRightRadius:"30px"}}>
<Box sx={{display:'flex',justifyContent:"space-evenly",flexDirection:"row"}}>
<img src={icon} alt="icon" style={{width:"150px",height:"150px"}}/>
<Box  sx={{display:'flex',justifyContent:"space-evenly",flexDirection:"column",gap:"5rem"}}>
    <Box sx={{display:'flex',justifyContent:"space-evenly",flexDirection:"row",gap:"8rem"}}>
<Box sx={{display:'flex',justifyContent:"space-evenly",flexDirection:"column",gap:"1rem"}}>
    <Typography sx={{fontFamily:"Inter",fontSize:"25px",fontWeight:"800",color:"white"}}>
        Quick links
    </Typography>
     <Typography component="a" href="https://bilalmarth7.pk/collections/washing-ware" sx={{textDecoration:"none","&:hover":{textDecoration:"underline"},fontFamily:"Inter",fontSize:"19px",fontWeight:"400",color:"white"}}>
        Wash & Wear
    </Typography>
        <Typography component="a" href="https://bilalmarth7.pk/collections/boski" sx={{fontFamily:"Inter",fontSize:"19px",fontWeight:"400",color:"white",textDecoration:"none","&:hover":{textDecoration:"underline"}}}>
        Boski
    </Typography>
     <Typography component="a" href="https://bilalmarth7.pk/collections/lattha" sx={{fontFamily:"Inter",fontSize:"19px",fontWeight:"400",color:"white",textDecoration:"none","&:hover":{textDecoration:"underline"}}}>
        Lattha
    </Typography>
     <Typography component="a" href="https://bilalmarth7.pk/collections/cotton" sx={{fontFamily:"Inter",fontSize:"19px",fontWeight:"400",color:"white",textDecoration:"none","&:hover":{textDecoration:"underline"}}}>
        Cotton
    </Typography>
     <Typography component="a" href="https://bilalmarth7.pk/collections/wallets" sx={{fontFamily:"Inter",fontSize:"19px",fontWeight:"400",color:"white",textDecoration:"none","&:hover":{textDecoration:"underline"}}}>
        Wallets
    </Typography>
     <Typography component="a" href="https://bilalmarth7.pk/collections/perfume" sx={{fontFamily:"Inter",fontSize:"19px",fontWeight:"400",color:"white",textDecoration:"none","&:hover":{textDecoration:"underline"}}}>
        Perfume
    </Typography>
</Box>

<Box sx={{display:'flex',justifyContent:"space-evenly",flexDirection:"column",gap:"1rem"}}>
    <Typography sx={{fontFamily:"Inter",fontSize:"25px",fontWeight:"800",color:"white"}}>
        Information
    </Typography>
     <Typography component="a" href="https://bilalmarth7.pk/pages/privacy-policy" sx={{textDecoration:"none","&:hover":{textDecoration:"underline"},fontFamily:"Inter",fontSize:"19px",fontWeight:"400",color:"white"}}>
        Privacy Policy
    </Typography>
        <Typography component="a" href="https://bilalmarth7.pk/pages/terms-of-service" sx={{fontFamily:"Inter",fontSize:"19px",fontWeight:"400",color:"white",textDecoration:"none","&:hover":{textDecoration:"underline"}}}>
        Terms of Service
    </Typography>
     <Typography component="a" href="https://bilalmarth7.pk/pages/refund-returns-policy" sx={{fontFamily:"Inter",fontSize:"19px",fontWeight:"400",color:"white",textDecoration:"none","&:hover":{textDecoration:"underline"}}}>
        Refund & Returns Policy
    </Typography>
     <Typography component="a" href="https://bilalmarth7.pk/pages/shipping-policy" sx={{fontFamily:"Inter",fontSize:"19px",fontWeight:"400",color:"white",textDecoration:"none","&:hover":{textDecoration:"underline"}}}>
        Shipping Policy
    </Typography>
     <Typography component="a" href="https://bilalmarth7.pk/pages/contact" sx={{fontFamily:"Inter",fontSize:"19px",fontWeight:"400",color:"white",textDecoration:"none","&:hover":{textDecoration:"underline"}}}>
        Contact Us
    </Typography>
     <Typography component="a" href="https://bilalmarth7.pk/blogs/news" sx={{fontFamily:"Inter",fontSize:"19px",fontWeight:"400",color:"white",textDecoration:"none","&:hover":{textDecoration:"underline"}}}>
        Blog
    </Typography>
</Box>
</Box>
<Typography  sx={{fontFamily:"Inter",fontSize:"25px",fontWeight:"800",color:"white"}}>Contact Us</Typography>
<Typography  sx={{fontFamily:"Inter",fontSize:"25px",fontWeight:"800",color:"white",marginTop:"-12%",textDecoration:"underline","&:hover":{textDecoration:"underline", "&:hover": { animation: "dance 0.8s infinite ease-in-out",}, "@keyframes dance": {"0%, 100%": { transform: "translateY(0)" },"50%": { transform: "translateY(-20px) rotate(5deg)"}}}}}>+92 325 0123455</Typography>
</Box>
<span style={{backgroundColor:"#333333",display:"inline-block",width:"1px"}}></span>

<Typography sx={{fontFamily:"Poppins",fontSize:"42px",fontWeight:"800",color:"white",textDecoration:"none",width:"25%"}}>Stay in the loop with our weekly newsletter</Typography>
<form>
  <input
    type="text"
    placeholder="Enter Your Email"
    style={{
      marginLeft: "-170%",
      marginTop: "210px",
      padding: "6%",
      borderRadius: "10px",
      border: "2px solid black",
      fontSize: "16px",
      backgroundColor:"#151313ff",
      color:"white",width:"200%",
    }}
  />
    <ArrowForwardIosIcon style={{backgroundColor:"white",padding:"2%",borderRadius:"50%",fontSize:"50px",marginLeft:"-10%"}}/>
</form>
</Box>
 <Box sx={{display:"flex",justifyContent:"flex-start",flexDirection:"row",gap:"1rem",marginLeft:"60%"}}>
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
        </Box>
        <Typography component="a" href="https://zhsolution.net/" sx={{fontFamily:"Inter",fontSize:"15px",fontWeight:"300",color:"white",marginTop:"1%",marginLeft:"4%","&:hover":{textDecoration:"underline"}}}>Digital Mastery Powered by ZH Solution</Typography>
        </Box>
    )
}
export default Last;