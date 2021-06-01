import axios from 'axios';

const KEY = 'AIzaSyCRRK7odwaZ9CRhk3KGUABJ0Lh_ptQM0js';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});