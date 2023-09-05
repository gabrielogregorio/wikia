import { useState, type ReactElement, type ReactNode } from 'react';
import { AiFillSave, AiFillDelete } from 'react-icons/ai';

interface IWrapperContentProps {
  children: ReactNode;
  name: string;
}
export const WrapperContent = ({ children, name }: IWrapperContentProps): ReactElement => {
  return (
    <div className="md:px-1 py-1 bg-gray-600/10 touch-manipulation rounded-md relative group">
      <div className="absolute right-2 top-2 gap-4 hidden group-hover:flex z-20">
        <button type="button" className="hover:scale-[1.05] transition-all duration-150 bg-gray-600/60">
          <AiFillDelete className="text-4xl" />
        </button>
        <button type="button" className="hover:scale-[1.02] transition-all duration-150 bg-gray-600/60">
          <AiFillSave className="text-4xl" />
        </button>
      </div>
      {name ? (
        <div>
          <button type="button" className={`text-gray-50 font-normal    break-all px-2 md:px-0`}>
            {name}
          </button>
        </div>
      ) : undefined}
      <div className="">{children}</div>
    </div>
  );
};
