import axios, { AxiosError } from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useErrorHandler from '../CustomHooks/useErrorHandler';
import showMessage from '../utils/showMessage';


const withApiHandler = (WrappedComponent:any) => {
  const WithApiHandler = (props:any) => {
    const [fetchedData, setFetchedData] = useState(null);
    const [postedData, setPostedData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<AxiosError | null>(null);
    const navigate = useNavigate();
    const handleApiError = useErrorHandler();

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // ✅ Always send cookies / auth credentials
});

    axiosInstance.interceptors.request.use(
      (config) => {
        // const token = localStorage.getItem('token');
          const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJodHRwczovL3RlY2gucG9ydGFsLXVhdC5kcGRwY29uc3VsdGFudHMuY29tIiwiaXNzIjoiaHR0cHM6Ly9wb3J0YWwtdWF0LmRwZHBjb25zdWx0YW50cy5jb20iLCJlbWFpbCI6Imphc3BhbC5zaW5naEBkcGRwY29uc3VsdGFudHMuY29tIiwiZXhwaXJ5IjoxNzUxNTI1MjExfQ.rHjBkef5_ZPegRZhqCbUF60WxwDKhv-VUvjRekMn68c";

        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const getData = async (url:any, id:any, params:any) => {
      try {
        setIsLoading(true);
        const modifiedUrl = id ? `${url}/${id}` : url;
        const response = await axiosInstance.get(modifiedUrl, { params });

        if (response && response.data) {
          setFetchedData(response.data);
          return response;
        } else {
          throw new Error('Invalid response');
        }
      } catch (error) {
        handleApiError(error);
           setApiError(error as AxiosError);
        throw error;
      } finally {
        setIsLoading(false);
      }
    };

    const postData = async (url:any, body:any, navigatePath:any) => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.post(url, body);

        if (response && response.data) {
          showMessage(response.data?.message, 'success');
          setPostedData(response.data);
          setFetchedData(response.data);
          if (navigatePath) navigate(navigatePath);
          return true;
        } else {
          throw new Error('Invalid response');
        }
      } catch (error) {
        handleApiError(error);
           setApiError(error as AxiosError);
        return false;
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <WrappedComponent
        {...props}
        fetchedData={fetchedData}
        postedData={postedData}
        isLoading={isLoading}
        apiError={apiError}
        getData={getData}
        postData={postData}
      />
    );
  };

  return WithApiHandler;
};

export default withApiHandler;
