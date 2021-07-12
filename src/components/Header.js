import styled from "styled-components";
import { connect } from 'react-redux';
import { signOutAPI } from "../actions";

const  Header = (props) =>{
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home" >
                        <img src="/images/home-logo.svg" alt=""/>
                    </a>
                </Logo>

                <Search>
                    <div>
                        <input type="text" placeholder="Search"></input>
                    </div>
                    <SearchIcon>
                            <img src="/images/search-icon.svg" alt=""/>
                    </SearchIcon>
                </Search>
             
                <Nav>
                    <NavListWrap>
                        <NavList className="active">
                            <a href="#">
                                <img src="/images/nav-home.svg" alt=""/>
                                <span>Home</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a href="#">
                                <img src="/images/nav-network.svg" alt=""/>
                                <span>%y Network</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a href="#">
                                <img src="/images/nav-jobs.svg" alt=""/>
                                <span>Job</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a href="#">
                                <img src="/images/nav-messaging.svg" alt=""/>
                                <span>Messaging</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a href="#">
                                <img src="/images/nav-notifications.svg" alt=""/>
                                <span>Notifications</span>
                            </a>
                        </NavList>
                         <User>

                            <a >
                            {props.user &&
                             props.user.photoURL ? (
                                    <img src={props.user.photoURL}/>
                                ) : (
                                    <img src="/images/user.svg" alt=""/>
                                )}
                                <span>
                                        ME  
                                    <img src="/images/down-icon.svg" alt=""/>
                                </span>
                            </a>
                            <SignOut onClick={() => props.SignOut()}>
                                <a href="">
                                    Sign Out
                                </a>
                            </SignOut>
                        </User>
                       
                        <Work>
                          <a href="">
                    
                                 <img src="./images/nav-work.svg" alt=""/>
                                <span>Work
                                <img src="./images/down-icon.svg" alt=""/>
                                </span>

                            </a>
                        </Work> 
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
        );
       
        
};

const Container =styled.div`
    background-color: #fff;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    top: 0;
    left: 0;
    display:flex;
    justify-content: space-between;
    padding:0 24px;
`;
const Content =styled.div`
    display: flex;
    align-items: center;
    margin:0 auto;
    min-width: 100%;
    max-width: 1128px;

`;
const Logo = styled.span`
    margin-right:8px;
    font-size: 0px;
`;
const Search =styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;
    & >div{
        max-width: 200px;
        input {
            border:none;
            border-radius: 2px;
            box-shadow: none;
            background-color: #eef3f8;
            color: rgba(0,0,0,0.9);
            width: 218px;
            height:34px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400px;
            border-color: #dce6f1;
            vertical-align: text-top;
            outline: none;
            pointer-events: none;
        }
    }
`;
const SearchIcon =styled.div`
    width:40px;
    position:absolute;
    z-index: 1;
    top: 10px;
    left: 5px;
    border-radius: 0 2px;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;

`;
const Nav =styled.nav`
display:block;
margin-left: auto;
@media (max-width:768px){
    position: absolute;
    left: 0px;
    bottom: 0px;
   }
`;
const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    .active{
        border-bottom: 2px solid blue;
    }
`;
const NavList = styled.li`
    display: flex;
    align-items:center;
    a{
        display:flex;
        align-items:center;
        justify-content: center;
        flex-direction:column;
        background :transparent;
        font-size:12px;
        font-weight:400;
        position: relative;
        text-decoration: none;
        min-height: 42px;
        min-width: 80px;
        line-height: 1.5;
        cursor: pointer;

        span{
            color:rgba(0,0,0,0.6);
            display: flex;
            align-items:center;
        }
        @media (max-width:768px){
            max-width: 70px;
        }
        }     
`;



const SignOut = styled.div`     
position:absolute;
top:50px;
background :white;
border-radius: 0 0 5px 5px;
width:100px;
height:30px;
font-size: 16px;
text-align:center;
display:none;

@media (max-width:768px){
}

`;

const User = styled(NavList)`
 a>img{
        width: 24px;
        height:24px;
        border-radius:50%;
    }
    span{
        display:flex;
        align-items:center;
    }

    &:hover{
        ${SignOut}{    
        display:flex;
        justify-items: center;
        align-items: center;
        }
    }`;

const Work = styled(User)`
border-left:1px solid rgba(0,0,0,0.8);
`;

const mapStateToPropos = (state) => {
    return {
        user: state.userState.user,
    }
};
const mapDispatchToProps = (dispatch) => ({
    SignOut : () => dispatch(signOutAPI()),
});

export default connect(mapStateToPropos,mapDispatchToProps)(Header);

