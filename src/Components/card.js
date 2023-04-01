import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicCard(props) {
    return (
        <Card sx={{ width: 500 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Category {props?.news?.userId}
                </Typography>
                <Typography variant="h5" component="div">
                    {props?.news?.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props?.news?.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>{
                    props?.setNews({})
                    }}>Read Later</Button>
            </CardActions>
        </Card>
    );
}