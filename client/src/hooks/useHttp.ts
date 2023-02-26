import { useState } from "react";
import axios from "axios";

interface ConfigType {
  method: string;
  url: string;
  data: any;
}

type FuncType = (data: any) => void;
interface UseHttpType {
  error: string;
  sendRequest: (config: ConfigType, func: FuncType) => void;
}

const useHttp = (): UseHttpType => {
  const [error, setError] = useState<string>(null!);

  const sendRequest = (config: ConfigType, func: FuncType): void => {
    axios({
      method: config.method ?? "GET",
      url: config.url,
      data: config.data ?? null,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.data) {
          func(response.data);
        }
      })
      .catch((err) => {
        setError(err);
      });
  };

  return {
    error,
    sendRequest,
  };
};

export default useHttp;
