import React, {useEffect} from 'react' 
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CancelIcon from '@mui/icons-material/Cancel';
import LeadDetailedView from '../detailedView/leadView';
import ItineraryDetailedView from '../detailedView/itineraryView';
import styles from "./drawer.module.scss"
import ItineraryPreparedView from '../detailedView/itineraryPreparedView';

const drawerBleeding = 0;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const CustomDrawer = (props: any) => {

    const { window } = props;
    const [open, setOpen] = React.useState(false);
  
    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };
  
    useEffect(() => {
        props?.signleView.length !== 0 ? setOpen(true) : setOpen(false)
    }, [props?.signleView])
    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined;

    const handleClose = () => {
        setOpen(false);
    }

    console.log("props?.isJourney?.leadView", props?.isJourney?.leadView)
    
  return (
    <div>
        <Root>
            <CssBaseline />
            <Global
                styles={{
                '.MuiDrawer-root > .MuiPaper-root': {
                    height: `calc(80% - ${drawerBleeding}px)`,
                    overflow: 'visible',
                    // borderRadius: 30,
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                },
                }}
            />
            {/* <Box sx={{ textAlign: 'center', pt: 1 }}>
                <Button onClick={toggleDrawer(true)}>Open</Button>
            </Box> */}
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                keepMounted: true,
                }}
            >
                <StyledBox
                sx={{
                    position: 'absolute',
                    top: -drawerBleeding,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    visibility: 'visible',
                    right: 0,
                    left: 0,
                }}
                >                
                <Typography className = {styles.toHeader} sx={{ p: 2, color: 'text.primary', cursor: "pointer", fontSize: 20}}> 

                    
                    {
                        props?.isJourney?.leadView ? <span >Lead Id : {props?.signleView?.leadGeneratedNo}</span> : <span >Itinerary Id : {props?.signleView?.itinerayNO}</span>
                    }
                <CancelIcon onClick={handleClose} /> </Typography>
                </StyledBox>
                <br />
                <br />
                <div className={styles.content_wrapper}>
                    {
                        props?.isJourney?.ItinerayCustomisedView ? <ItineraryDetailedView signleView = {props?.signleView} /> : null 
                    }
                    {
                        props?.isJourney?.leadView ?  <LeadDetailedView signleView = {props?.signleView} /> : null
                    }
                    {
                        props?.isJourney?.ItinerayPreparedView ? <ItineraryPreparedView signleView = {props?.signleView} /> : null 
                    }
                </div>
            </SwipeableDrawer>
        </Root>
    </div>
  )
}

export default CustomDrawer