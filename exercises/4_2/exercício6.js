//const romanNumbers = {I: "1", V:"5", X:"10", L:"50", C:"100", D:"500", M:"1000"};
let roman = "mmxix";
roman = roman.toUpperCase()

let val = 0;
  for (let i = 0; i < roman.length; i++) {
    if (roman.charAt(i) == 'I') {
      if (roman.charAt(i + 1) == 'V') {
        val += 4;   // IV
      } else if (roman.charAt(i + 1) == 'X') {
        val += 9;   // IX
      } else {
        val += 1;   // I
      }
    } else if (roman.charAt(i) == 'V') {
      if (roman.charAt(i - 1) == 'I') {
        val = val;
      } else {
        val += 5;   // V
      }
    } else if (roman.charAt(i) == 'X') {
      if (roman.charAt(i - 1) == 'I') {   // Check if there is I before X
        val = val;
      }else if (roman.charAt(i + 1) == 'L') {
        val += 40;  // XL
      } else if (roman.charAt(i + 1) == 'C') {
        val += 90;  // XC
      } else {
        val += 10;  // X
      }
    } else if (roman.charAt(i) == 'L') {
      if (roman.charAt(i - 1) == 'X') {   // Check if there is X before L
        val = val;
      } else {
        val += 50;  // L
      }
    } else if (roman.charAt(i) == 'C') {
      if (roman.charAt(i - 1) == 'X') {
        val = val;  // XC
      }else if (roman.charAt(i + 1) == 'D') {
        val += 400;  // CD
      } else if (roman.charAt(i + 1) == 'M') {
        val += 900;  // CM
      } else {
        val += 100;  // C
      }
    } else if (roman.charAt(i) == 'D') {
      if (roman.charAt(i - 1) == 'C') {
        val = val;  // CD
      } else {
        val += 500; // D
      }
    } else if (roman.charAt(i) == 'M') {
      if (roman.charAt(i - 1) == 'C') {
        val = val;  // CM
      } else {
        val += 1000; // M
      }
    }
  }
  console.log(val);
