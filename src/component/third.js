import * as React from 'react';
import Box from '@mui/material/Box';
import per from '../assests/perr.png';
import wall from '../assests/wall.png';
import Second from './second';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function Third() {
  const [showFirst, setShowFirst] = React.useState(true);
  const handleNext = () => {
    setShowFirst(false);
  };
  const handlePrev = () => {
    setShowFirst(true);
  };
  return (
    <Box sx={{position: "relative" }}>
      <Second />
      <Box
        sx={{
          backgroundImage: `url(${showFirst ? per : wall})`,
          marginLeft: "1%",
          height: "700px",
          marginTop: "11.4%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "30px",
          overflow: "hidden",
          width: "97%",
          transition: "background-image 0.5s ease-in-out",
        }}
      />
      <ArrowBackIcon
        onClick={handlePrev}
        sx={{
          color: "white",
          fontSize: "30px",
          position: "absolute",
          top: "90%",
          left: "10%",
        }}
      />
      <ArrowForwardIcon
        onClick={handleNext}
        sx={{
          color: "white",
          fontSize: "30px",
          position: "absolute",
          top: "90%",
          right: "10%",
        }}
      />
    </Box>
  );
}
export default Third;
