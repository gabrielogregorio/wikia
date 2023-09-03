import type { IWikiItem } from '@/services/wikia';
import { WikiaService } from '@/services/wikia';
import { useMemo } from 'react';
import { useCustomSwr } from '@/libs/swr';

interface IUseFetchWikiType {
  dataWiki: IWikiItem[] | undefined;
  isLoadingWiki: boolean;
  errorMessageWiki: string;
}

export const useFetchWiki = (): IUseFetchWikiType => {
  const { data, error } = useCustomSwr('wikia-key', () => WikiaService.fetch());

  const dataWiki = useMemo(() => data || undefined, [data]);
  const errorMessageWiki = error ? 'Error on get wiki items' : '';
  const isLoadingWiki = !data && !error;

  return {
    dataWiki,
    isLoadingWiki,
    errorMessageWiki,
  };
};
