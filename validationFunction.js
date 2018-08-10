/**
 * 3 numeric digits separated by commas
 * Return input values ​​separated by commas
 * [Argument] numVal: input numeric value
 * [Return value] String (): comma-separated string
 */
const onBlur = numVal => {
  const MAX_INTEGER_LIMIT = 12;
  const MAX_DECIMAL_LIMIT = 3;
  const numericRegex = /^[+|-]?(\d*)(\.\d+)?$/;
  const thousandSeparatorRegex = /\B(?=(\d{3})+(?!\d))/g;

  // If empty Return directly as it is
  if (numVal == "") {
    return "0";
  }
  // Convert from full-width character to half-width character, delete beforehand if comma has already been entered
  numVal = removeLeadingZeroes(removeComma(toHalfWidth(numVal))).trim();

  // If it is not a numerical value, return it as it is
  if (!numericRegex.test(numVal)) {
    return numVal;
  }
  // Split into integer part and decimal part
  // numData is now an array.
  const numData = numVal.split(".");

  // validation for integer part
  if (numData[0].length > MAX_INTEGER_LIMIT) {
    // throw error
    return "ERROR! OVER MAX LIMIT";
  }
  // Separate the integer part with 3 digits separated by commas
  numData[0] = numData[0].replace(thousandSeparatorRegex, ",");

  // Decimal part
  // trim if longer than decimal limit.
  if (numData[1] && numData[1].length > MAX_DECIMAL_LIMIT) {
    numData[1] = numData[1].substring(0, MAX_DECIMAL_LIMIT);
  }
  // Combine with decimal part and join
  return numData.join(".");
};

const onFocus = strVal => removeComma(strVal);

// change to onChange for react.
const onInput = e => {
  const value = e.target.value;

  // ^ starts with
  // | either empty string or
  // -? zero or one negative
  // [1-9] starts with non-zero number
  // \d* followed by zero or more digits
  // \.? zero or 1 dot
  // \d* 0 or more digits
  // $ ends with
  const validRegex = /^(|-?[1-9]\d*\.?\d*)$/;
  if (!validRegex.test(value)) {
    e.preventDefault();
  }

  console.log(value);
};

/**
 * Remove comma
 * Remove the comma in input value and return it
 * [Argument] strVal: Numeric value separated by commas
 * [Return value] String (): Numeric value with comma removed
 */

//-- UTILITY METHODS  --//
const removeComma = strVal => strVal.replace(/,/g, "");
const removeLeadingZeroes = strVal => strVal.replace(/^0+/, "");

/**
 * Transformation function from full-width to half-width
 * Return the alphanumeric symbol of the input value by half size conversion
 * [Argument] strVal: Input value
 * [Return value] String (): Half-translated character string
 */

// shift character code
const shiftCharacterCode = tmpStr => String.fromCharCode(tmpStr.charCodeAt(0) - 0xfee0);

// Half width conversion
const toHalfWidth = strVal => strVal.replace(/[！-～]/g, shiftCharacterCode);

/**
 * Event setting to text box to apply processing
 * onBlur: comma-delimited processing
 * onFocus: Comma deletion processing implementation
 */
const elm = document.getElementById("numdata");

elm.addEventListener(
  "blur",
  function() {
    this.value = onBlur(this.value);
  },
  false
);

elm.onkeypress = onInput;

elm.addEventListener(
  "focus",
  function() {
    this.value = onFocus(this.value);
  },
  false
);
