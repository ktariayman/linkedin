import styled from "styled-components";
import LeftSide from './LeftSide'
import Main from './Main'
import RightSide from './RightSide'
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import signOut from '../actions'
const  Home=(props)=>{
        return(
            <Container>
                {!props.user && <Redirect to ='/'/>}
                <Section>
                    <h5><a>Hiring in a hurry .</a></h5>
                    <p>Find Talented pros in record time with Upwork and keep business moving</p>
                </Section>

                <Layout>
                    <LeftSide/>
                    <Main/>
                    <RightSide/>
                </Layout>
            </Container>
        )

}

const Container = styled.div`
padding-top: 50px;
max-width: 100%;
`;
const Section = styled.section`
    display: flex;
    justify-content:center ;
    min-height: 50px;
    padding:    16px 0 ;
    box-sizing:content-box;
    text-align: center;
    text-decoration: underline;
    h5{
        color:#0a66c2;
        font-size: 14px;    
        a{
            font-weight: 600;
        }
    }
    p{
        font-size: 14px;
        color: #434649;
        font-weight: 500;
    }
    @media (max-width:768px){
        flex-direction: column;
        padding:0 0.5rem;
      
    }
`;

const Layout = styled.div`
    display:grid; 
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax (0,12fr) minmax(300px ,7fr) ;
    column-gap: 25px;
    row-gap: 25px;
    margin: 25px 0;
    @media (max-width:768px){
        display: flex;
        flex-direction: column;
        padding : 0 5px ;
    }
`;

const mapStateToPropos = (state) => {
    return {
        user :state.userState.user,
    };
};
export default connect(mapStateToPropos)(Home);
