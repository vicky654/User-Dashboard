import { useEffect, useState, ReactNode } from 'react';
import axios, { AxiosResponse } from 'axios';

type UseGetApiCallOptions<T> = {
  url: string;
  onSuccess?: (data: T) => void;
  loadingNode?: ReactNode;
  errorNode?: (error: string) => ReactNode;
};

export const useGetApiCall = <T = any>({
  url,
  onSuccess,
  loadingNode = <p>Loading...</p>,
  errorNode = (err: string) => <p className="text-red-500">{err}</p>,
}: UseGetApiCallOptions<T>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fallback for both Vite and CRA
  const API_BASE: string =
    (import.meta as any).env?.VITE_API_BASE_URL || process.env.REACT_APP_API_BASE_URL || '';

  useEffect(() => {
    if (!url || !API_BASE) return;

    setLoading(true);
    setError(null);

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJodHRwczovL3RlY2gucG9ydGFsLXVhdC5kcGRwY29uc3VsdGFudHMuY29tIiwiaXNzIjoiaHR0cHM6Ly9wb3J0YWwtdWF0LmRwZHBjb25zdWx0YW50cy5jb20iLCJlbWFpbCI6Imphc3BhbC5zaW5naEBkcGRwY29uc3VsdGFudHMuY29tIiwiZXhwaXJ5IjoxNzUxNTI1MjExfQ.rHjBkef5_ZPegRZhqCbUF60WxwDKhv-VUvjRekMn68c";

    axios
      .get<T>(`${API_BASE}${url}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      })
      .then((res: AxiosResponse<T>) => {
        setData(res.data);
        onSuccess?.(res.data);
      })
      .catch((err: any) => {
        setError(err?.response?.data?.message || err?.message || 'Something went wrong');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const render = (): ReactNode | null => {
    if (loading) return loadingNode;
    if (error) return errorNode(error);
    return null;
  };

  return { data, loading, error, render };
};
