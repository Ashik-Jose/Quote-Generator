export default (bookmarks=[], action) => {
    switch (action.type) {
        case 'BOOKMARKS': return [...bookmarks,action.payload];
        
        default: return bookmarks;
    }
}