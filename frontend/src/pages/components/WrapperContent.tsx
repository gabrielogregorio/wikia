import { useState, type ReactElement, type ReactNode } from 'react';

interface IWrapperContentProps {
  children: ReactNode;
  name: string;
}
export const WrapperContent = ({ children, name }: IWrapperContentProps): ReactElement => {
  const [nameIsExpanded, setNameIsExpanded] = useState<boolean>(false);

  return (
    <div className="w-full h-full md:hover:scale-105 transition-all duration-150 cursor-pointer md:px-2 py-2 bg-gray-600/10 touch-manipulation">
      <div className={` ${nameIsExpanded ? '' : 'overflow-hidden text-ellipsis'}`}>
        <button
          type="button"
          onClick={() => setNameIsExpanded((prev) => !prev)}
          className={`text-gray-50 font-normal   ${nameIsExpanded ? ' break-all' : ''}   px-2 md:px-0`}>
          {name}
        </button>
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
};
