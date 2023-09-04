import { useFetchWiki } from '@/hooks/useFetchWiki';
import type { ReactElement } from 'react';
import Masonry from 'react-masonry-css';
import React, { useMemo, useState } from 'react';
import { getTags } from '@/pages/utils';
import { useProcessFilters } from '@/pages/useProcessFilters';
import { RenderItem } from '@/pages/renderItem';
import { usePagination } from '@/pages/usePagination';
import { useIntersectObserver } from '@/pages/useIntersectObserver';

const ID_TRIGGER_NEW_ITEMS = 'id_intersect_observer';

const ITEMS_PER_PAGE = 10;

const ONE_GRID_COL = 1;
const TWO_GRID_COL = 2;
const THREE_GRID_COL = 3;
const SIX_GRID_COL = 6;

export const BaseScreens = (): ReactElement => {
  const { dataWiki, errorMessageWiki, isLoadingWiki } = useFetchWiki();
  const [search, setSearch] = useState<string>('');
  const tags = useMemo(() => getTags(dataWiki || []), [dataWiki]);
  const [tagsSelected, setTagsSelected] = useState<string[]>([]);
  const [numberGridCols, setNumberGridCols] = useState<number>(THREE_GRID_COL);

  const dataFiltered = useProcessFilters(tagsSelected, search, dataWiki || []);

  const { offset, nextPage } = usePagination(0, ITEMS_PER_PAGE);

  useIntersectObserver(ID_TRIGGER_NEW_ITEMS, nextPage);

  const itemsPaginated = dataFiltered.slice(0, offset);

  const handleClickTag = (tag: string): void => {
    setTagsSelected((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((item) => item !== tag);
      }

      return [...prev, tag];
    });
  };

  return (
    <div key="data" className="flex flex-col items-center animate-fadeIn">
      <div className="bg-homepage bg-cover w-full">
        <div className="flex items-center justify-center pt-[5rem] w-full font-bold text-4xl uppercase">Wikia</div>
        <div className="flex items-center justify-center pt-[2rem] w-full">
          <input
            type="search"
            className="bg-white text-gray-600 border border-gray-400 rounded-2xl text-base px-4 py-2 focus:outline-none focus:border-blue-200 w-[80%] shadow-xl touch-manipulation"
            name="search"
            id="search"
            value={search}
            onChange={(event): void => setSearch(event.target.value)}
          />
        </div>
        <div className="pt-[3rem]" />
      </div>

      <div className="w-full px-1 md:px-[10%] bg-gray-600">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 pt-2 pb-2 overflow-x-auto touch-manipulation">
            {['All', ...tags].map((tag) => {
              return (
                <button
                  type="button"
                  onClick={(): void => handleClickTag(tag)}
                  key={tag}
                  className={`px-2 py-2 hover:text-gray-50 ${
                    tagsSelected.includes(tag) ? 'text-gray-50' : 'text-gray-400'
                  } transition-all duration-200 rounded-lg animate-fadeIn touch-manipulation`}>
                  {tag}
                </button>
              );
            })}
          </div>

          <div className="flex gap-2 overflow-x-auto touch-manipulation">
            <button
              type="button"
              onClick={(): void => setNumberGridCols(ONE_GRID_COL)}
              className={`${
                numberGridCols === ONE_GRID_COL ? 'text-gray-50' : 'text-gray-400'
              } px-3 py-2 touch-manipulation`}>
              {ONE_GRID_COL}
            </button>

            <button
              type="button"
              onClick={(): void => setNumberGridCols(TWO_GRID_COL)}
              className={`${
                numberGridCols === TWO_GRID_COL ? 'text-gray-50' : 'text-gray-400'
              } px-3 py-2 touch-manipulation`}>
              {TWO_GRID_COL}
            </button>

            <button
              type="button"
              onClick={(): void => setNumberGridCols(THREE_GRID_COL)}
              className={`${
                numberGridCols === THREE_GRID_COL ? 'text-gray-50' : 'text-gray-400'
              } px-3 py-2 touch-manipulation`}>
              {THREE_GRID_COL}
            </button>

            <button
              type="button"
              onClick={(): void => setNumberGridCols(SIX_GRID_COL)}
              className={`${
                numberGridCols === SIX_GRID_COL ? 'text-gray-50' : 'text-gray-400'
              } px-3 py-2 touch-manipulation`}>
              {SIX_GRID_COL}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full px-0 md:w-[80%] mt-4">
        {itemsPaginated.length && !isLoadingWiki && !errorMessageWiki ? (
          <div className="flex items-center justify-center mt-2 px-2">
            {offset} arquivos sendo exibidos de {dataFiltered?.length} (ao todo existem {dataWiki?.length} arquivos).
          </div>
        ) : undefined}
        
        <div className={` mt-2  animate-fadeIn touch-manipulation`}>
          {itemsPaginated.length && !isLoadingWiki && !errorMessageWiki ? (
            <Masonry
              breakpointCols={numberGridCols}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              {itemsPaginated.map((item) => {
                return <RenderItem data={item} key={item.path} />;
              })}
            </Masonry>
          ) : undefined}

          <div className="flex items-center justify-center mt-2 px-2">
            {itemsPaginated.length === 0 && !isLoadingWiki && !errorMessageWiki ? <div>Sem dados</div> : undefined}
          </div>

          <div className="flex items-center justify-center mt-2 px-2">
            {isLoadingWiki ? <div key="is-loading">loading...</div> : undefined}
          </div>

          <div className="flex items-center justify-center mt-2 px-2">
            {errorMessageWiki ? <div key="error-message">Error: {errorMessageWiki}</div> : undefined}
          </div>

          <div className="w-full h-7 block" id={ID_TRIGGER_NEW_ITEMS} />
        </div>
      </div>
    </div>
  );
};
