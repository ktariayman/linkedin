import styled from "styled-components"; 
import {useState} from 'react';
import ReactPlayer from"react-player";
import { connect } from "react-redux";
import firebase from "firebase";
import { PostArticleAPI } from "../actions";

const  PostModal = (props) => {
    const [editorText,SetEditorText ]= useState("");
    const [shareImage,SetShareImage ] = useState("");
    const [videoLink,SetVideoLink ] = useState("");
    const [assetArea,SetAssetArea ] = useState("");
    
    const handleChange = (e) =>{
        const image = e.target.files[0]
        if (image ==='' || image === undefined ) {
            alert (`not an image here , the file is a ${typeof image }`)
            return ;
        }

        SetShareImage (image);
    }

    const switchAssetArea = (area) =>{
        SetShareImage("");
        SetVideoLink("");
        SetAssetArea(area);
    }
    const postArticle = (e) =>{
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }
        const payload = {
            image: shareImage,
            video:videoLink,
            user: props.user,
            description: editorText,
            timestamp : firebase.firestore.Timestamp.now()
        }
        props.postArticle(payload);
        reset(e);
    }
    const reset = (e) =>{
        SetEditorText("");
        SetShareImage("");
        SetVideoLink("");
        SetAssetArea("");
        props.HandleClick(e);
    };

    const styleoftextarea = {
        width: "100%",
        minHeight : "100px",
        resize:"none",
    };
    return (
    <>
        {
        props.showModal === 'open' && 
        <Container>
            <Content>
                <Header>
                    <h2>Create a Post</h2>
                    <button onClick={ (event) => reset(event)} >
                        <img src="/images/close-icon.svg"/>
                    </button>
                </Header>

                <ShareContent>
                    <UserInfo>
                        {props.user.photoURL ? (
                        <img src={props.user.photoURL}/>
                        ):(
                        <img src="/images/user.svg"/>
                        ) }
                        <span>{props.user.displayName}</span>
                    </UserInfo>

                    <Editor>
                        <textarea 
                        value={editorText} 
                        onChange={(e)=>SetEditorText(e.target.value)}
                        placeholder="Write Whatever you want"
                        autoFocus={true}
                        style={styleoftextarea} 
                        />
                        {assetArea === 'image' ? (
                        <UploadImage>
                            <input 
                            type="file" 
                            accept="images/gif , image/jpeg , image/png"
                            name="image"
                            id="file"
                            style={{display:"none"}}
                            onChange={handleChange}
                           />
                           <p>
                               <label htmlFor="file">
                                    Select image to share
                               </label>
                           </p>
                           {shareImage && <img src={URL.createObjectURL(shareImage)}/>}
                        </UploadImage>
                        ): 
                        (assetArea === 'media' && (
                            <>
                            <input 
                            type ="text" 
                            placeholder="input video link please !"
                            value={videoLink}
                            style={{width:"100%"}}
                            onChange={ (e) => SetVideoLink(e.target.value)}
                            />
                            {videoLink && (
                                <ReactPlayer width={"100%"} url={videoLink}/>
                            )}
                            </>
                        )
                        )}
                        
                        </Editor>
                </ShareContent>
                <ShareCreations>
                    <AttachAssets>
                        <AssetButton onClick={() => switchAssetArea("image")}>
                            <img src="/images/share-img.svg"/>

                        </AssetButton>
                        <AssetButton  onClick={() => switchAssetArea("media")}>
                            <img src="/images/share-video.svg"/>

                        </AssetButton>
                    </AttachAssets>

                    <ShareComment>
                        <AssetButton>
                            <img src="/images/share-comment.svg"/>
                        </AssetButton>
                    </ShareComment>

                    <PostButton 
                    disabled={!editorText ? true : false} 
                    onClick={(event) => postArticle(event)}
                    >
                        Post
                    </PostButton>
                </ShareCreations>
            </Content>
        </Container>
        }
    </>
    )
}

const Container  = styled.div`
    position:fixed;
    top:0;
    right: 0;
    left: 0;
    bottom:0;
    z-index: 100;
    color: black;
    background-color: rgba(0,0,0,0.5);
    animation  :fadeIn .5s;
`;

const Content = styled.div`
    width:100%;
    max-width: 550px;
    background-color: white;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction:column;
    top:2rem;
    margin:0 auto;

`;
const Header  = styled.div`
    display: block;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(0,0,0,0.25);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    color: rgba(0,0,0,0.6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
        height: 40px;
        width: 40px;
        min-width: auto;
        color: rgba(0,0,0,0.25);
        img,svg{
            pointer-events: none;
            
        }
    }
`;
const ShareContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: auto;
    vertical-align: baseline;
    background:transparent;
    padding: 0.5rem 0.75rem;
`;

const UserInfo = styled.div`
    display: flex;
    align-items:center;
    padding: 0.75rem 1.5rem;
    svg , img{
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border:2px solid transparent;
        border-radius: 50%;
    }
    span{
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.5;
        margin-left: 0.5rem;
    }
`;

const ShareCreations = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1.5rem 0.75rem 1.5rem;
`;

const AssetButton = styled.button`
    display: flex;
    align-items: center;
    height: 3rem;
    min-width: auto;
    color: rgba(0,0,0,0.5);
`;

const AttachAssets = styled.div`
    display: flex;
    align-items: center;
    padding-right: 0.5rem;
    ${AssetButton}{
        width: 2.5rem;
    }

`;
const ShareComment = styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0,0,0,0.25);
    ${AssetButton}{
        img{
            margin-right: 5px;
        }
    }
`;
const PostButton = styled.button`
    min-width: 60px;
    border-radius: 1.5rem;
    padding-left:1rem ;
    padding-right: 1rem;
    background: ${(props)  => ( props.disabled ? "rgba(0,0,0,0.8)" : "#0a66ce")};
    color: ${(props) => (props.disabled ? "rgba (0,0,0,0.3)" : "#004182")};
    &:hover{
        background: ${(props) => (props.disabled ? "rgba (0,0,0,0.8)" : "#004182")};;
    }
`;
const Editor = styled.div`
    padding: 0.75rem 1.5rem;
    textarea{
        width: 100%;
        min-height: 100px;
        resize:none;
    }
    input {
        width: 100%;
        height: 40px;
    }
     
`;
const UploadImage = styled.div`
    text-align:center;
    img{
        width: 100%;
    }
    
`;

const mapStateToProps = (state) =>{
    return {
        user : state.userState.user,
    }
  }
  
  const mapDispatchToProps = (dispatch) =>({
      postArticle: (payload) => dispatch(PostArticleAPI((payload)))
  });
export default connect(mapStateToProps,mapDispatchToProps)(PostModal);
