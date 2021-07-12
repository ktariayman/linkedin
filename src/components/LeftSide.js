import styled from "styled-components";

import React from 'react'
import { connect } from "react-redux";

const LeftSide=(props) => {
    return (
       <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground/>
                    <a>
                        <Photo/>
                        <LinK>
                            Welcome , {props.user ? props.user.displayName : "there"} !
                         </LinK>
                    </a>
                    <a>
                        <AddPhotoText>
                            Add a Photo
                        </AddPhotoText>
                    </a>
                </UserInfo>

                <Widget>
                    <a>
                        <div>
                            <span>Connections</span>
                            <span>Grouw your network</span>
                        </div>
                        <img src="/images/widget-icon.svg"/>
                    </a>
                </Widget>
                <Item>
                    <span>
                        <img src="/images/item-icon.svg"/>
                    </span>
                </Item>
            </ArtCard>

            <CommunityCard>
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    <span>
                        Events
                        <img src="/images/plus-icon.svg"/>
                    </span>
                </a>
                <a>
                    <span>Follow </span>
                </a>
                <a>
                    <span>Discover more </span>
                </a>
            </CommunityCard>
       </Container>
    )
}
const Container = styled.div`
    grid-area:leftside;
`;
const ArtCard = styled.div`
overflow:hidden;
text-align:center;
background-color: #fff;
border-radius: 5px;
margin-bottom: 8px;
transition: box shodow 100ms;
position: relative;
border:none ;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15% ) , 0 0 0 rgb(0 0 0 /20%);
`;
const UserInfo = styled.div`
border-bottom:1px solid rgba(0,0,0,0.15);
padding: 12px 12px 16px;
word-wrap: break-word;
word-break: break-word;
`;
const CardBackground = styled.div`
background: url("/images/card-bg.svg") ;
background-position: center;
background-size: 462px;
height: 54px;
margin: -12px -12px 0;
`;
const Photo = styled.div`
    box-shadow: none;
    background:url("/images/photo.svg") ;
    width: 72px;
    height: 72px;
    box-sizing:border-box;
    background-clip: content-box;
    background-color: white;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    border:2px solid white;
    margin: -38px auto 12px;
    border-radius: 50%;

`;
const LinK = styled.div`
    font-size:16px;
    line-height: 1.5;
    color: rgba(0,0,0,0.9);
    font-weight: 600;
`;

const AddPhotoText = styled.div`
    color:#0a66c2;
    margin-top: 4px;
    font-size:12px;
    line-height: 1.33;
    font-weight: 400;
`;

const Widget = styled.div`
    border-bottom:1px solid rgba(0,0,0,0.15);
    padding-top: 12px;
    padding-bottom: 12px;
    &>a{
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:4px 12px;
        &:hover{
            background-color: rgba(0,0,0,0.08);
        }
        div{
            display: flex;
            flex-direction: column;
            text-align:left ;
            span{
                font-size: 12px;
                line-height: 1.333;
                &:first-child{
                    color: rgba(0,0,0,0.6);
                }
                &::nth-child(){
                    color: rgba(0,0,0,1);

                }
            }
        }
    }

    svg{
        color: rgba(0,0,0,1);
    }
`;

const Item = styled.a`
    border-color: rgba(0,0,0,0.8);
    text-align: left;
    padding:12px ;
    font-size: 14px;
    display: block;
    span{
        display: flex;
        align-items: center;
        color: rgba(0,0,0,1);
        svg{
            color: rgba(0,0,0,0.6);
        }
    }
    &::hover{
        background-color: rgba(0,0,0,0.08);
    }
`;
const CommunityCard = styled(ArtCard)`
    padding:0.5rem 0 0 ;
    text-align:left;
    display:flex;
    flex-direction: column;
    a{
        color:#000;
        padding:4px 12px ;
        font-size: 0.75rem;
        &::hover{
            color: #0a66c2;
        }
        span{
            display:flex;
            align-items:center;
            justify-content: space-between;
        }
        &:last-child{
            color:rgba(0,0,0,0.6)
            text-decoration:none;
            border-top:1px solid #d6cec2;
            padding:12px;
            &:hover{
                background-color: rgba(0,0,0,0.08);
            }
        }
    }
`;

const mapStateToProps = (state)=>{
    return {
        user : state.userState.user,
    }
}

export default connect(mapStateToProps) (LeftSide);
