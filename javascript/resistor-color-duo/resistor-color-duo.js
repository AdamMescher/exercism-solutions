//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
export const value = (bands) => parseInt(`${COLORS.indexOf(bands[0])}${COLORS.indexOf(bands[1])}`);
