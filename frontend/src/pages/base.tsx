import { useFetchWiki } from '@/hooks/useFetchWiki';
import type { ReactElement } from 'react';
import React, { useMemo, useState } from 'react';
import { getTags } from '@/pages/utils';
import { useProcessFilters } from '@/pages/useProcessFilters';
import { RenderItem } from '@/pages/renderItem';

const ONE_GRID_COL = 1;
const THREE_GRID_COL = 3;
const SIX_GRID_COL = 6;

const getGridStyleBySelectGrid = (numberGridCols: number): string => {
  if (numberGridCols === ONE_GRID_COL) {
    return 'grid-cols-1';
  }

  if (numberGridCols === THREE_GRID_COL) {
    return 'grid-cols-3';
  }

  return 'grid-cols-6';
};

export const BaseScreens = (): ReactElement => {
  const { dataWiki, errorMessageWiki, isLoadingWiki } = useFetchWiki();
  const [search, setSearch] = useState<string>('');
  const tags = useMemo(() => getTags(dataWiki || []), [dataWiki]);
  const [tagsSelected, setTagsSelected] = useState<string[]>([]);
  const [numberGridCols, setNumberGridCols] = useState<number>(THREE_GRID_COL);

  const handleClickTag = (tag: string): void => {
    setTagsSelected((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((item) => item !== tag);
      }

      return [...prev, tag];
    });
  };

  if (isLoadingWiki) {
    return <div key="is-loading">loading...</div>;
  }

  if (errorMessageWiki) {
    <div key="error-message">Error: {errorMessageWiki}</div>;
  }

  const dataFiltered = useProcessFilters(tagsSelected, search, dataWiki || []);

  return (
    <div key="data" className="flex flex-col items-center animate-fadeIn">
      <div className="bg-homepage bg-cover w-full">
        <div className="flex items-center justify-center pt-[5rem] w-full font-bold text-4xl uppercase">Wikia</div>
        <div className="flex items-center justify-center pt-[2rem] w-full">
          <input
            type="search"
            className="bg-white text-gray-600 border border-gray-400 rounded-2xl text-base px-4 py-2 focus:outline-none focus:border-blue-200 w-[80%] shadow-xl"
            name="search"
            id="search"
            value={search}
            onChange={(event): void => setSearch(event.target.value)}
          />
        </div>
        <div className="pt-[3rem]" />
      </div>

      <div className="w-full px-[10%] bg-gray-600">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 pt-2 pb-2">
            {['All', ...tags].map((tag) => {
              return (
                <button
                  type="button"
                  onClick={(): void => handleClickTag(tag)}
                  key={tag}
                  className={`px-2 py-2 hover:text-gray-50 ${
                    tagsSelected.includes(tag) ? 'text-gray-50' : 'text-gray-400'
                  } transition-all duration-200 rounded-lg animate-fadeIn`}>
                  {tag}
                </button>
              );
            })}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={(): void => setNumberGridCols(ONE_GRID_COL)}
              className={`${numberGridCols === ONE_GRID_COL ? 'text-gray-50' : 'text-gray-400'} px-3 py-2 `}>
              {ONE_GRID_COL}
            </button>

            <button
              type="button"
              onClick={(): void => setNumberGridCols(THREE_GRID_COL)}
              className={`${numberGridCols === THREE_GRID_COL ? 'text-gray-50' : 'text-gray-400'} px-3 py-2 `}>
              {THREE_GRID_COL}
            </button>

            <button
              type="button"
              onClick={(): void => setNumberGridCols(SIX_GRID_COL)}
              className={`${numberGridCols === SIX_GRID_COL ? 'text-gray-50' : 'text-gray-400'} px-3 py-2 `}>
              {SIX_GRID_COL}
            </button>
          </div>
        </div>
      </div>

      <div className="w-[80%] mt-4">
        <div className={`grid gap-4 ${getGridStyleBySelectGrid(numberGridCols)} animate-fadeIn`}>
          {dataFiltered.map((item) => {
            return <RenderItem data={item} key={item.path} />;
          })}
        </div>
      </div>
    </div>
  );
};
