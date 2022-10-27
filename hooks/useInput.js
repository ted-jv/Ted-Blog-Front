import { useCallback, useState } from "react";

const useInput = (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handle = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handle];
};

export default useInput;
