import axios from 'axios';

const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

export const getPollById = async (pollId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/polls/${pollId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching poll data:', error);
    throw error;
  }
};

export const submitVote = async (pollId, optionId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/votes`, {
      pollId,
      optionId,
    });
    console.log('Vote submitted:', response.data);
  } catch (error) {
    console.error('Error submitting vote:', error);
    throw error;
  }
};
