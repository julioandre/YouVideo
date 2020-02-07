import axios from 'axios';

const KEY = 'AIzaSyBvZGTgHVEI_fevHJ0h7-H3qt_pXkv4paA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

