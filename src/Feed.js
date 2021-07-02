
import React from 'react';
import "./feed.css";
import CreateIcon from '@material-ui/icons/Create';
import InputOptions from './InputOptions';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PhotoIcon from '@material-ui/icons/Photo';
import Post from './Post';
function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type="text"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOption">
                     <InputOptions Icon={PhotoIcon}  title="Photo"  />  
                     <InputOptions Icon={SubscriptionsIcon}  title="Video"  />   
                     <InputOptions Icon={EventNoteIcon}  title="Event"  />   
                     <InputOptions Icon={CalendarTodayIcon}  title="Write Article"  />   

                </div>
            </div>

            <Post name="ktariayman" description="here is the description" msj="wow i really like it"/>
        </div>
    )
}

export default Feed;
