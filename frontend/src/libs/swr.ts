import useSWR from 'swr';

interface IResponseCustomSwr<T> {
  data: T | undefined | null;
  isLoading: boolean;
  error: unknown;
}
const thirtyMinutesInMs = 1800000;

export const useCustomSwr = <T>(
  url: string,
  fetcher: ((arg?: string) => Promise<T> | null) | null,
): IResponseCustomSwr<T> => {
  const { data, error } = useSWR(url, fetcher, {
    dedupingInterval: thirtyMinutesInMs,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
    errorRetryInterval: 3000,
    errorRetryCount: 10,
    revalidateOnFocus: false,
    shouldRetryOnError: true,
  });

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};
