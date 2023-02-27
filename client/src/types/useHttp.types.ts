export interface ConfigType {
  method?: string;
  url: string;
  data?: any;
}

export interface UseHttpReturnType {
  sendRequest: (config: ConfigType, func: FuncType | undefined) => void;
}
export type FuncType = (data: any) => void;
