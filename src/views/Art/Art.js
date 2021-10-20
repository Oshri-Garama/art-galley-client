import React from 'react';
import { Card, CardContent } from '@mui/material';

const Art = ({art}) => {
    return (
        <Card id={art.id} sx={{flexBasis: '20%', margin: 2, width: 200, height: 350}}>
            <CardContent>
                {art.name}
            </CardContent>
        </Card>
    )
};

export default Art;