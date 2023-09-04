import { discoveryTag } from '@/pages/utils';
import type { IWikiItem } from '@/services/wikia';

const filterOnlySelectTags = (tagsSelected: string[], dataWiki: IWikiItem[]): IWikiItem[] => {
  if (!tagsSelected.length || tagsSelected.includes('All')) {
    return dataWiki;
  }

  return dataWiki.filter((item) => {
    const tag = discoveryTag(item.type);
    return tagsSelected.includes(tag);
  });
};

const filterOnlyFilteredText = (search: string, dataWiki: IWikiItem[]): IWikiItem[] => {
  if (!search.trim()) {
    return dataWiki;
  }

  return dataWiki.filter((item) => {
    return item.path.toString().includes(search);
  });
};

export const useProcessFilters = (tagsSelected: string[], search: string, dataWiki: IWikiItem[]): IWikiItem[] => {
  let dataFiltered = filterOnlySelectTags(tagsSelected, dataWiki);

  dataFiltered = filterOnlyFilteredText(search, dataFiltered);

  return dataFiltered;
};
