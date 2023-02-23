import axios, { AxiosResponse } from 'axios';
import { DictionaryResult } from '@/types/dictionary';
import { BASE_URL } from './config';

const instance = axios.create({
  baseURL: BASE_URL,
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const request = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
};

export const fetchDefinationFn = async ({ queryKey }: any) =>
  request.get<DictionaryResult>(`/${queryKey[1]}`);
