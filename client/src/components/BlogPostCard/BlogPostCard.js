import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const BlogPostCard = ({ post }) => {
    return (<Card>
        <CardContent>
            <Typography variant="headline">{post.title}</Typography>
            <Typography>{post.body}</Typography>
        </CardContent>
    </Card>);
};

export default BlogPostCard;