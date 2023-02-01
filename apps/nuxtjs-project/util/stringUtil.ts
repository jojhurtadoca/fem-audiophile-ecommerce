export const removeTheLastWord = (str: string ) => {

  if(!str) {
    return '';
  }

  const lastIndexOfSpace = str.lastIndexOf(' ');

  if (lastIndexOfSpace === -1) {
    return str;
  }

  return str.slice(0, lastIndexOfSpace);
}

export const getTheLastWord = (str: string) => str.split(' ').pop();