import React from 'react';
import './post.css';
import Avatar from '@material-ui/core/avatar' ;
import InputOptions from './InputOptions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
function Post({name, description, msj, photourl}) {
    return (
        <div className="post" >

            <div className="post__header">
                <Avatar/>
                <div className="post__inforamtion"> 
                    <h2>Ayman ktari</h2>
                    <p>description</p>
                </div>
            </div>
            <div className="post__body">
                <p>Msj is here</p>
            </div>
            <div className="post__buttons">
                <InputOptions Icon={ThumbUpIcon} title="like"/>
                    <InputOptions Icon={CommentIcon}  title="comment"  />  
                     <InputOptions Icon={ShareIcon}  title="Share"  />   
                     <InputOptions Icon={SendIcon}  title="Send"  />   

            </div>
        </div>
    )
}

export default Post;
