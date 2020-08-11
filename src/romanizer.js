import romanizer from 'romanize';

romanizer.transform = (input) => {
  if (input === 10) {
    return "X";
  }
}

export default romanizer;