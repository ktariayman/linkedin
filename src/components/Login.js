import styled from 'styled-components'
import { connect } from 'react-redux';
import {signInAPI} from '../actions'
import { Redirect } from 'react-router';
const Login = (props) => {
    return (
        <Container>
            {
                props.user && 
                <Redirect to="/home"/>
            }

            <Nav>
                <a href="/">
                    <img src="/images/login-logo.svg"/>
                </a>

                <div>
                    <Join>Join now</Join>
                    <SignIn>
                        <button onClick={() => props.SignIn()}>Sign In</button></SignIn>
                </div>
            </Nav>

            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src='/images/login-hero.svg'></img>
                </Hero>
                <Form>
                    <Google onClick={() => props.SignIn()}>
                        <img src="/images/google.svg"/>
                        <h2>Sign in With Google</h2>
                    </Google>
                </Form>
            </Section>
        </Container>
    );
};

const Container = styled.div`
padding: 0;

`;
const Nav =styled.nav`
max-width:1128px;
margin: auto;
padding: 16px 0 16px ;
display: flex;
align-items: center;
position: relative;
justify-content: space-between;
flex-wrap: nowrap;
 &>a{
     width: 135px;
     height: 35px;
     @media(max-width:768){
         padding: 0 5px ;
     }
 }
`;

const Join = styled.a`
font-size:1rem;
padding: 10px 12px;
text-decoration: none;
color: rgba(0,0,0,0.6);
margin-right: 12px;
border-radius: 4px;
&:hover{
    background-color: rgba(0,0,0,0.08);
    color: rgba(0,0,0,0.9);
    text-decoration: none;
    cursor: pointer;

}
`;

const SignIn=styled.a`
    button{
    box-shadow:inset 0 0 0 1px #0a66c2;
    color:#0a66c2;
    border-radius: 25px;
    transition-duration: 150ms ;
    font-size: 1rem;
    font-weight: 600;
    line-height  :40px ;
    padding: 10px 25px;
    text-align:center;
    background-color:rgba(0,0,0,0);
    border:none;
    &:hover{
        background-color: rgba(112,181,249,0.15);
        color:#0a66c2;
        text-decoration: none;
        cursor: pointer;
    }}
`;
const Section= styled.section`
    display:flex;
    align-content: start;
    align-items: center;
    min-height: 700px;
    width: 100%;
    max-width: 1128px;
    padding-bottom: 140px;
    padding-top: 40px;
    padding:60px 0 ;
    position:relative;
    flex-wrap: wrap;
    margin: auto;
    @media (max-width: 768px){
        margin: auto;
        min-height: 0px;
    }
`;

const Hero = styled.div`
    width: 100%;
    h1{
        padding-bottom:0px ;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 200;
        line-height: 70px;

        @media (max-width:768px){
            
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }
    img{
        /* z-index: -1; */
        width:700px;
        height: 670px;
        position: absolute;
        bottom: -20px;
        right: -150px;
        @media (max-width:768px){
            top: 230px;
            width: initial;
            height: initial;
            position: initial;
        }
    }
`;
const Form = styled.div`
    margin-top: 100px;
    width: 408px;
    @media (max-width:768px){
        margin-top: 20px;
    }
`;
const Google=styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height: 50px;
    width: 100%;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1.2rem;
    transition-duration: 150px;
    color:rgb(0,0,0,0.6);
    &:hover{
        background-color: rgb(207,207,207,0.2);
        color:rgb(0,0,0,0.75);

    }
    @media (max-width:768px){
        margin-left: 30px;
    }
`;
const mapStateToProps = (state)=> {
    return {
        user : state.userState.user,
    };
};
const mapDispatchToProps = (dispatch)=>({
    SignIn:() => dispatch(signInAPI()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);
