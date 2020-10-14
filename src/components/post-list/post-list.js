import React from 'react';
import { ListGroup} from 'reactstrap';
import './post-list.css';

import PostListItem from '../post-list-item';

const PostList = ({posts, onDelete}) => {

    const elements = posts.map((item) => {
        if(item instanceof Object){
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}/>
            </li>
        )};
        return null;
    });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;