import { AxiosError } from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useErrorHandler from "../CustomHooks/useErrorHandler";
import showMessage from "../utils/showMessage";

const withApiHandler = (WrappedComponent: any) => {
  return (props: any) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState<AxiosError | null>(null);

    const navigate = useNavigate();
    const handleApiError = useErrorHandler();

    const execute = async <T,>(
      apiCall: () => Promise<T>,
      options?: {
        successMessage?: string;
        redirect?: string;
      }
    ): Promise<T> => {
      try {
        setIsLoading(true);
        const response = await apiCall();

        if (options?.successMessage) {
          showMessage(options.successMessage, "success");
        }

        if (options?.redirect) {
          navigate(options.redirect);
        }

        return response;
      } catch (error) {
        setApiError(error as AxiosError);
        handleApiError(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <WrappedComponent
        {...props}
        execute={execute}     
        isLoading={isLoading}
        apiError={apiError}
      />
    );
  };
};

export default withApiHandler;
