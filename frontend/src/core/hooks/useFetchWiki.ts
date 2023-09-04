import type { IWikiItem } from '@/services/wikia';
import { WikiaService } from '@/services/wikia';
import { useEffect, useState } from 'react';

interface IUseFetchWikiType {
  dataWiki: IWikiItem[] | undefined;
  isLoadingWiki: boolean;
  errorMessageWiki: string;
}

export const useFetchWiki = (): IUseFetchWikiType => {
  const [isLoadingWiki, setIsLoadingWiki] = useState<boolean>(false);
  const [errorMessageWiki, setErrorMessageWiki] = useState<string>('');
  const [dataWiki, setDataWiki] = useState<IWikiItem[] | undefined>(undefined);

  useEffect(() => {
    setIsLoadingWiki(true);
    setErrorMessageWiki('');
    setDataWiki(undefined);

    WikiaService.fetch()
      .then((res) => {
        setDataWiki(res);
      })
      .catch(() => {
        setErrorMessageWiki('Error on get wiki items');
      })
      .finally(() => {
        setIsLoadingWiki(false);
      });
  }, []);

  return {
    dataWiki,
    isLoadingWiki,
    errorMessageWiki,
  };
};
