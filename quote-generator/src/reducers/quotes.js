export default (quotes=[],action) => {
    switch(action.type)
    {
        case 'FETCH_RANDOM': 
        case 'FETCH_TAG_QUOTES': return action.payload;
        default: return quotes;
    }
}

