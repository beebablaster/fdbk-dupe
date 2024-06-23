const createHex = () => {
  let hexCode = "";
  const hexValues = "89abcdef";
  
  for ( var i = 0; i < 6; i++ ) {
    hexCode += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
  }
  return hexCode;
}

function generateGradientFromName(firstName?: string, lastName?: string): string {
  if (!firstName || !lastName) {
    return `linear-gradient(${120}deg, ${"#5EE7B6"}, ${"#00B45D"})`;
  }
  const firstNameCodePoint = getUniqueCodePoint(firstName);
  const lastNameCodePoint = getUniqueCodePoint(lastName);

  // Generate unique colors from the code points
  const color1 = generateLightHexColor(firstNameCodePoint);
  const color2 = generateLightHexColor(lastNameCodePoint);

  // Generate a unique degree from the code points
  const degree = generateDegreeFromCodePoints(firstNameCodePoint, lastNameCodePoint);

  // Construct the linear gradient string
  const gradient = `linear-gradient(${degree}deg, ${color1}, ${color2})`;

  return gradient;
}

// Helper function to get a unique code point from a string
function getUniqueCodePoint(str: string): number {
  let codePoint = 0;
  for (let i = 0; i < str.length; i++) {
    codePoint += str.charCodeAt(i);
  }
  return codePoint;
}

// Helper function to generate a light hex color from a code point
function generateLightHexColor(codePoint: number): string {
  const redValue = codePoint % 256;
  const blueValue = (codePoint >> 10) % 256;
  const greenValue = 200; // Fixed value for the Blue component to ensure a light color

  // Combine the RGB values into a single hex color string
  const hexColor = `#${componentToHex(redValue)}${componentToHex(greenValue)}${componentToHex(blueValue)}`;

  return hexColor;
}

// Helper function to generate a degree from two code points
function generateDegreeFromCodePoints(codePoint1: number, codePoint2: number): number {
  const degreeRange = 360; // The maximum degree value (360 degrees)
  const combinedCodePoint = codePoint1 + codePoint2;

  // Map the combined code point to a degree value within the degree range
  const degree = combinedCodePoint % degreeRange;

  return degree;
}

// Helper function to convert a decimal component value to a two-digit hexadecimal representation
function componentToHex(component: number): string {
  const hex = component.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

export const generateGradient = (firstName?: string, lastName?: string)=> {
  const gradient = generateGradientFromName(firstName, lastName);
  return gradient;
}