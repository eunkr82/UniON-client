import type { AxiosRequestConfig } from 'axios';

import { instance } from './instance';
import type { SuccessResponse } from './types';

export const get = async <T, P = unknown>(
  url: string,
  params?: P,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const res = await instance.get<SuccessResponse<T>>(url, {
    params,
    ...config,
  });
  return res.data.data;
};

export const post = async <T, B = unknown>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const res = await instance.post<SuccessResponse<T>>(url, body, config);
  return res.data.data;
};

export const patch = async <T, B = unknown>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const res = await instance.patch<SuccessResponse<T>>(url, body, config);
  return res.data.data;
};

export const del = async <T, P = unknown, B = unknown>(
  url: string,
  options?: { params?: P; body?: B; config?: AxiosRequestConfig },
): Promise<T> => {
  const res = await instance.delete<SuccessResponse<T>>(url, {
    ...options?.config,
    params: options?.params,
    data: options?.body,
  });
  return res.data.data;
};
