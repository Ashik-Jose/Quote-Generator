import {combineReducers} from 'redux';
import quotes from './quotes.js';
import tags from './tags.js';
import bookmarks from './bookmarks.js';

export default combineReducers({quotes,tags,bookmarks});
