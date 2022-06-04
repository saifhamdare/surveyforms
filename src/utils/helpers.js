// checking mobile validity
export const checkForMobileNumber = (
  e,
  setState,
  data,
  keyName,
  setIsMobileNoValid,
) => {
  setState({
    ...data,
    [keyName]: e.target.value,
  });
  if (e.target.value.length === 10) {
    setIsMobileNoValid(0);
  } else {
    setIsMobileNoValid(1);
  }
};

// checking email validity
export const checkForEmail = (e, setState, data, keyName, setIsEmailValid) => {
  setState({
    ...data,
    [keyName]: e.target.value,
  });
  if (
    e.target.value.match(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    )
  ) {
    setIsEmailValid(0);
  } else {
    setIsEmailValid(1);
  }
};

export const btnValidator = (objName, keysArr, questionCount) => {
  if (typeof objName[keysArr[questionCount - 1]] === 'object') {
    if (objName[keysArr[questionCount - 1]].length === 0) {
      return false;
    } else {
      return true;
    }
  } else if (
    objName[keysArr[questionCount - 1]] === (null || undefined || '')
  ) {
    return false;
  } else {
    return true;
  }
};
