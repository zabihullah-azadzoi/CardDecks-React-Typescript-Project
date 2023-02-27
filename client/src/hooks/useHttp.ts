import axiosInstance from "../http";
import {
  UseHttpReturnType,
  ConfigType,
  FuncType,
} from "../types/useHttp.types";
import { toast } from "react-toastify";

const useHttp = (): UseHttpReturnType => {
  const sendRequest = (config: ConfigType, func?: FuncType): void => {
    axiosInstance({
      method: config.method ?? "GET",
      url: config.url,
      data: config.data ?? undefined,
    })
      .then((response) => {
        if (response.data) {
          if (!func) return;
          func(response.data);
        }
      })
      .catch((err) => {
        toast.error(
          (err.response.data && err.response.data?.message) ||
            "something went wrong!"
        );
      });
  };

  return {
    sendRequest,
  };
};

export default useHttp;
