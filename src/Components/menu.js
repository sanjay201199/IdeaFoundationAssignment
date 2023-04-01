import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ButtonAppBar from './Appbar';
import BasicCard from './card';
import { Button, Container, Grid } from '@mui/material';

export default function BasicMenu(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [subMenu, setSubMenu] = React.useState([])

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [news, setNews] = React.useState({})
    const [newsIndex, setNewsIndex] = React.useState(0)


    return (
        <div>
            <header className="App-header">

                <ButtonAppBar open={open} data={props?.data} setAnchorEl={setAnchorEl} setSubMenu={setSubMenu} />
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {subMenu?.map((ele, index) => <MenuItem key={index} onClick={() => {
                        setNews(ele)
                        setNewsIndex(index)
                        handleClose();
                    }}>{ele?.title}</MenuItem>
                    )}
                </Menu>
            </header>
            <main>
                {news?.userId ? <div style={{ marginTop: "50px" }}>
                    <Container>
                        <Grid container spacing={2} justifyContent={'center'}>
                            <Grid item xs={3}><Button disabled={newsIndex === 0} onClick={() => {
                                setNews(subMenu[newsIndex - 1])
                                setNewsIndex(newsIndex - 1)
                            }}>{"<-- Previous"}</Button></Grid>
                            <Grid item xs={6}><BasicCard news={news} setNews={setNews}/></Grid>
                            <Grid item xs={3}><Button disabled={newsIndex === 9} onClick={() => {
                                setNews(subMenu[newsIndex + 1])
                                setNewsIndex(newsIndex + 1)
                            }}>{"Next -->"}</Button></Grid>
                        </Grid>
                    </Container>
                </div> : ""}
            </main>
            {props?.children}
        </div>
    );
}