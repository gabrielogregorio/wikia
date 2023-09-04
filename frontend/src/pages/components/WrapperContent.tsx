import type { ReactElement, ReactNode } from 'react';

interface IWrapperContentProps {
  children: ReactNode;
  name: string;
}
export const WrapperContent = ({ children, name }: IWrapperContentProps): ReactElement => {
  return (
    <div className="w-full h-full hover:scale-105 transition-all duration-150 cursor-pointer px-2 py-2 bg-gray-600/10 ">
      <div className="text-gray-50 font-normal overflow-hidden text-ellipsis">{name}</div>
      <div className="mt-2">{children}</div>
    </div>
  );
};
