export default(quotes=[],action) => {
    switch(action.type)
    {
        case 'FETCH_RANDOM':
        case 'FETCH_TAGS': return action.payload;
        default: return quotes;
    }
}