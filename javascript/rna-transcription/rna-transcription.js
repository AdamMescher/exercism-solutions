//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = nucleotides => {
  const nucleotideMap = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };
  
  return nucleotides.length === 0 ? '' : nucleotides.split('').map(nucleotide => nucleotideMap[nucleotide]).join('');
};
