import { CombinedState } from 'redux';
import { provider , auth, storage} from '../firebase';
import { SET_USER  , SET_LOADING_STATUS , GET_ARTICLES} from './actionType.';
import db from '../firebase';

export const SetUser = (playload)=>({
    type:SET_USER,
    user:playload,
});
export const setloading = (status) =>({
    type: SET_LOADING_STATUS,
    status:status,
});

export const getArticles = (payload) =>({
    type : GET_ARTICLES,
    payload : payload,
});

export function signInAPI(){
    return (dispatch)=>{
        auth
        .signInWithPopup(provider)
        .then((playload) =>{
            dispatch(SetUser(playload.user));
        })
        .catch((error) => alert(error.messege))
    };

}

export function getUserAuth(){
    return(dispatch)=>{
        auth.onAuthStateChanged( async (user) =>{
            if (user) {
                dispatch(SetUser(user));
            }
        })
    }
}

export function signOutAPI(){
    return (dispatch)=>{
        auth
        .signOut().then(()=> {
            dispatch(SetUser(null));
        } )
        .catch((error)=>{
            console.log(error.message);
        })
    };
}

export function PostArticleAPI(payload){
    return (dispatch) => {
        dispatch(setloading(true))
        
        if (payload.image != ""){
            const upload = storage  
                .ref(`images/${payload.image.name}`)
                .put(payload.image);
            upload.on('state_changed', 
            (snapshot) =>{
                const progress = 
                    (snapshot.bytesTransferred / snapshot.totalBytes) *100;            
                
            console.log(`Progress : ${progress}%`)
            if (snapshot.state === "RUNNING"){
                console.log(`Progress : ${progress}%`)
            }
            },(error) => console.log(error.code),
            async () =>{
                const downloadURL = await upload.snapshot.ref.getDownloadURL();
                db.collection('articles').add({
                    actor: {
                        description: payload.user.email,
                        title :payload.user.displayName,
                        date : payload.timestamp,
                        image : payload.user.photoURL
                    },
                    video: payload.video,
                    sharedImg : downloadURL,
                    Comments:0,
                    description:payload.description,
                });
                dispatch(setloading(false))
            }
           );
            } else if (payload.video) {
                db.collection('articles').add({
                  actor: {
                    description: payload.user.email,
                    title :payload.user.displayName,
                    date : payload.timestamp,
                    image : payload.user.photoURL
                  },
                  video: payload.video,
                  sharedImg : "",
                  Comments:0,
                  description:payload.description, 
                });
                dispatch(setloading(false))
        }
    }
}

export function getArticleAPI  () {
    return (dispatch ) =>{
        let payload ;
        db.collection('articles')
            .orderBy("actor.date" , "desc")
            .onSnapshot((snapshot) =>{
                payload : snapshot.docs.map((doc) =>doc.data())            })
                dispatch (getArticles(payload))
            }
}
