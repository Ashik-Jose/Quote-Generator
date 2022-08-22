import * as api from '../api/index.js';

export const randomQuotes=()=> async(dispatch) =>{
    try {
        
        const {data} =await api.fetchQuotes();

        dispatch({type:'FETCH_RANDOM', payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const getTags=()=> async(dispatch) =>{
    try {
        
        const {data} =await api.fetchTags();

        dispatch({type:'FETCH_TAGS', payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const randomTagQuotes=(tag)=> async(dispatch) =>{
    try {
        
        const {data} =await api.fetchTagQuotes(tag);

        dispatch({type:'FETCH_TAG_QUOTES', payload:data});
    } catch (error) {
        console.log(error);
    }
}

// export const getBookmarks=(bookmarks)=> (dispatch) =>{
//     try {
        
//         const {data} = bookmarks;

//         dispatch({type:'BOOKMARKS', payload:data});
//     } catch (error) {
//         console.log(error);
//     }
// }