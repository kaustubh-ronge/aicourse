import axios from 'axios';

const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3';

const getVideos = async (query) => {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY; // Correct environment variable

  if (!apiKey) {
    throw new Error('YouTube API key is not defined. Please check your environment variables.');
  }

  const params = {
    part: 'snippet', // Fixed spelling
    q: query,
    maxResults: 1, // Fixed spelling
    key: apiKey, // Use the API key from environment variables
    type:'video'
  };

  try {
    const resp = await axios.get(`${YOUTUBE_BASE_URL}/search`, { params });
    return resp.data.items; // Return the list of video items
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw new Error('Failed to fetch videos from YouTube API.');
  }
};

export default {
  getVideos,
};
