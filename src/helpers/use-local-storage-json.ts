import { Dispatch } from "react";
import useLocalStorage from "react-use-localstorage";

type Fn = <T>(key: string, initialValue: T) => [T, Dispatch<T>];

export const useLocalStorageJSON: Fn = (key, initialValue) => {
  const [data, setData] = useLocalStorage(key, JSON.stringify(initialValue));

  function setDataJSON<T>(data: T) {
    setData(JSON.stringify(data));
  }

  return [JSON.parse(data), setDataJSON];
};