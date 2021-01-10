import axios from 'axios';
import fs from 'fs';

export const download = async (url: string, path: string) => {
  try {
    const response = await axios({
      method: 'get',
      url,
      responseType: 'stream'
    });

    await response.data.pipe(fs.createWriteStream(path));
    console.log('Successfully downloaded!');
  } catch (err) {
    throw new Error(err);
  }
};
