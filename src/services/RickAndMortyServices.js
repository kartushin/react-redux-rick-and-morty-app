import axios from 'axios';

export const getListCharacters = async () => {

        const params = {
          page: 1,
        }

        const response = await axios.get('https://rickandmortyapi.com/api/character/', {
    params,
  });
  console.log(response)
  return response.data.results;
}


export const getMoreListCharacters = async (page) => {

  const params = {
    page
  }

  const response = await axios.get('https://rickandmortyapi.com/api/character/', {
    params,
  });
  
  return response.data;
}     