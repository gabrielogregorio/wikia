import { useFetchWiki } from '@/hooks/useFetchWiki';
import type { ReactElement } from 'react';
import React from 'react';

export const BaseScreens = (): ReactElement => {
  const { dataWiki, errorMessageWiki, isLoadingWiki } = useFetchWiki();

  if (isLoadingWiki) {
    return <div>loading...</div>;
  }

  if (errorMessageWiki) {
    <div>Error: {errorMessageWiki}</div>;
  }
  return (
    <div className="grid grid-cols-2">
      {dataWiki?.map((item) => {
        return <div key={item.path}>{item.name}</div>;
      })}
    </div>
  );
};
