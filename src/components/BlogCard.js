import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';


const BlogCard = ({ title, datePosted, summary }) => {
    return (
        <Card sx={{ maxWidth: 345, padding: 2, backgroundColor: "#CDD7D6", margin: 2 }}>
            <CardHeader
                title={title}
                subheader={datePosted}
            />
            <CardContent>
                {summary}
            </CardContent>
        </Card>
    )
}

export default BlogCard;