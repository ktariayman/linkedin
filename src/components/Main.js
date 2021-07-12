import { useState , useEffect } from "react";
import styled from "styled-components";
import PostModal from './PostModal'
import { connect } from "react-redux";
import { getArticleAPI } from "../actions";
import ReactPlayer from "react-player";
import { initState } from "../reducers/articleReducer";
const Main = (props) => {

    const [showModel , setShowModel] = useState("close");

    useEffect (()=>{
        props.getArticles();
    },[])

   const HandleClick = (e) =>{
       e.preventDefault();
       if (e.target !== e.currentTarget)
            return ;
        switch (showModel){
            case "open": 
                setShowModel("close");
                break;
            case "close":
                setShowModel("open");
                break;
            default:
                setShowModel("close");
                break;
        }
    }
return (
    
         <Container>
                    <ShareBox >
                        <div>
                            {props.user && props.user.photoURL ? (
                            <img src={ props.user.photoURL}/>   
                            ) : (
                                <img src="/images/user.svg" alt=""/>
                            )}
                            <button 
                            onClick={HandleClick} 
                            disabled={props.loading ? true : false}>
                                Start a Post
                            </button>
                        </div>
                        <div>
                            <button>
                                <img src="/images/photo-icon.svg"/>
                                <span>Photo</span>
                            </button>
                            
                            <button>
                                <img src="/images/event-icon.svg"/>
                                <span>Event</span>
                            </button> 
                            
                            <button>
                                <img src="/images/video-icon.svg"/>
                                <span>Video</span>
                            </button>
                        
                            <button>
                                <img src="/images/article-icon.svg"/>
                                <span>Write Article</span>
                            </button>
                        </div>

                    </ShareBox>

                    <Content>
                       
                            <Article >
                             <ShareActor>
                                <a>
                                    <img src="./images/user.svg"/>
                                    <div>
                                        <span>title</span>
                                        <span>description</span>
                                        <span>date</span>          
                                    </div>
                                </a>
                                <button>
                                    <span>* * *</span>
                                </button>
                            </ShareActor>

                            <Description>description</Description>
                            <ShareImg> 
                                <a>
                                    <img src="./images/shared.jpg"/>
                                </a>
                            </ShareImg>

                            <SocialCounts>
                                <li>
                                    <button>
                                        <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"/>
                        
                                        <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"/>
                                    <span>10k</span>
                                    </button>

                                </li>
                                <li><a>1.8k comments</a></li>
                            </SocialCounts>
                            <SocialAction>
                                <button>
                                    <img src="/images/like.svg"/>
                                    <span>Like</span>
                                </button>

                                <button>
                                    <img src="/images/comments.svg"/>
                                    <span>Comments</span>
                                </button>

                                <button>
                                    <img src="/images/share.svg"/>
                                    <span>Share</span>
                                </button>

                                <button>
                                    <img src="/images/Send.svg"/>
                                    <span>Send</span>
                                </button>
                            </SocialAction>
                        </Article>
                            
                    </Content>
                    <PostModal 
                    showModal ={showModel} 
                    HandleClick={HandleClick} />
                </Container>
            
        
          
          );
    };


const Container = styled.div`
    grid-area: main;
`;
const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border:none;
`;

const ShareBox = styled(CommonCard)`
    display:flex;
    flex-direction: column;
    color:#958b7b;
    margin:0 0 8px;
    background:white;
    div{
        button {
            outline: none;
            color:rgba(0,0,0,0.6);
            font-size: 14px;
            line-height: 1.5;
            min-height: 3rem;
            background:transparent;
            border:none;
            display:flex;            
            align-items:center;
            font-weight: 600;
        }&:first-child{
            display:flex;
            align-items: c;
            padding:0.5rem  1rem 0 1rem;
            img{
                width:3rem;
                border-radius: 50%;
                margin-right:0.5rem;
            }
            button{
                margin:4px 0;
                flex-grow:1;
                padding-left: 1rem;
                border:1px solid rgba(0,0,0,0.15);
                border-radius: 2rem;
                background-clip:white;
                text-align:left;
            }
        }
        &:nth-child(2){
            display:flex;
            flex-wrap: wrap;
            justify-content:space-around;
            padding-bottom: 0.25rem;
            button{
                img{
                    margin:0 5px;
                }
            }
        }
    }
`;
const Article = styled(CommonCard)`
    padding:0;
    margin:0 0 8px;
    overflow:visible;
`;

const ShareActor = styled.div`
    padding-right:40px;
    flex-wrap:40px;
    padding:12px 1rem 0;
    margin-bottom:8px;
    align-items:center;
    display:flex;
    a{
        margin-right: 12px;
        flex-grow:1;
        overflow:flow;
        display:flex;
        text-decoration:none;
        img{
            width:48px;
            height:48px;
        }
        &>div{
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left:0;
            overflow:hidden;
            span{
                text-align: left;
                font-size: 14px;

                &:first-child{
                    font-weight: 800;
                    color:#000;
                }
                &:nth-child( n + 1 ){
                    color:rgba(0,0,0,0.6);
                }
             
            }
        }
    }
    button{
        position:absolute;
        right:10px;
        top:10px;
        background: transparent;
        border:none;
        outline:none;
    }
`; 

const Description = styled.div`
    padding:0 1rem;
    overflow: hidden;
    font-size:14px ;
    text-align: left;
    color: rgba(0,0,0,0.9);
`;
const ShareImg = styled.div`
    display: block;
    position: relative;
    background-color: #f9fafb;
    margin-top: 0.5rem;
    width: 100%;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const SocialCounts = styled.ul`
    line-height: 1.5;
    display: flex;
    align-items: flex-start;
    overflow: auto;
    margin:0 1rem;
    padding:0.5rem 0;
    border-bottom: 1px solid #e9e5df;
    list-style: none;
    li{
        margin-right:5px ;
        font-size:12px;
        button{
            display: flex;
        }
    }
`;
const SocialAction = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-start;
    margin: 0;
    min-height:2.5rem;
    padding: 0.25rem 0.5rem;
    button{
        display:inline-flex;
        align-items: center;
        padding:0.5rem;
        color: #0a66c2;
    }
`;
const Content = styled.div`
    text-align:center;
    & > img{
        width: 30px;
    }
`;

const mapStateToProps = (state) =>{
    return {
        loading: state.articleState.loading,
        user : state.userState.user,
        articles : state.articleState.articles,
    }
}
const mapDispatchToProps = (dispatch) =>({
    getArticles : () => dispatch(getArticleAPI()),
})
export default connect(mapStateToProps , mapDispatchToProps) ( Main);
