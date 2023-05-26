//color design token export


export const tokensDark = {
  grey: {
    0:    "#ffffff", // manually adjusted
    10:   "#f6f6f6", // manually adjusted
    50:   "#f0f0f0", // manually adjusted
    100:  "#e0e0e0",
    200:  "#c2c2c2",
    900:  "#141414",
    300:  "#a3a3a3",
    400:  "#858585",
    500:  "#666666",
    600:  "#525252",
    700:  "#3d3d3d",
    800:  "#292929",
    1000: "#000000", // manually adjusted
},

primary: {
  //black
          60:  "#ffffff",
          100: "#d2d1d3",
          200: "#a5a4a7",
          300: "#79767c",
          400: "#4c4950",
          500: "#1f1b24",
          600: "#292929", //added
          700: "#131016",
          800: "#0c0b0e",
          900: "#060507",
          1000:"#ffffff"
}, 

secondary: {
  //blue
    10: "#ffffff",
    20: "#000000",
    50 : "#f2e7fe",//added
    100: "#d7ccf0",
    200: "#af99e1",
    300: "#8766d1",
    400: "#5f33c2",
    500: "#3700b3",
    600: "#2c008f",
    700: "#21006b",
    800: "#160048",
    900: "#0b0024"
},
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.grey[50],
              light: tokensDark.grey[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};