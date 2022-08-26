export default (bookmarks=[], action) => {
    switch (action.type) {
        case 'BOOKMARKS': return [...bookmarks,action.payload];
        case 'REM_BOOKMARKS' : return bookmarks.filter((bookmark)=> bookmark.content!==action.payload);
        default: return bookmarks;
    }
}