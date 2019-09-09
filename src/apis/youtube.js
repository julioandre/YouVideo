import axios from 'axios';

const KEY = 'AIzaSyDs7pd0KUZNEKESX4qZCSaahcbL11ljv60'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

