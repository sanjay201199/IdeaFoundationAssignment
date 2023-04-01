import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


export default function ButtonAppBar(props) {

  function getCategory() {
    const seen = new Set();
    const filteredArr = props?.data.filter(el => {
      const duplicate = seen.has(el.userId);
      seen.add(el.userId);
      return !duplicate;
    });
    return filteredArr
  }


  function getSubCategory(e) {
    const filteredArr = props?.data.filter(el => el?.userId === e)
    props?.setSubMenu(filteredArr)
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {getCategory()?.map((ele, index) => <Button key={index} onClick={(event) => {
            getSubCategory(index + 1)
            props.setAnchorEl(event.currentTarget)
          }} style={{ color: "white" }}
            id="basic-button"
            aria-controls={props?.open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={props?.open ? 'true' : undefined}
          >Category {ele?.userId}</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}