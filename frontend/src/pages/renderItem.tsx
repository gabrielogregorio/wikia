/* eslint-disable jsx-a11y/media-has-caption */
import { WrapperContent } from '@/pages/components/WrapperContent';
import { isImage, isVideo } from '@/pages/utils';
import type { IWikiItem } from '@/services/wikia';
import type { ReactElement } from 'react';
import { GrDocumentPdf } from 'react-icons/gr';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { RiFolderUnknowFill, RiMarkdownLine } from 'react-icons/ri';

const transformPathFileInPathStatic = (path: string): string => {
  return `http://127.0.0.1:5000/file/${path.replace('./public/', '')}`;
};

export const RenderItem = ({ data: { type, dimensions, name, path } }: { data: IWikiItem }): ReactElement => {
  if (isImage(type) && dimensions) {
    return (
      <WrapperContent name={name}>
        <img
          className="w-full object-cover h-full"
          src={transformPathFileInPathStatic(path)}
          width={dimensions.width}
          height={dimensions.height}
          alt=""
        />
      </WrapperContent>
    );
  }

  if (isVideo(type) && type.toLowerCase() === 'mov') {
    return (
      <WrapperContent name={name}>
        <video controls className="w-full object-cover h-full">
          <source src={transformPathFileInPathStatic(path)} type="video/mov" />
        </video>
      </WrapperContent>
    );
  }

  if (isVideo(type)) {
    return (
      <WrapperContent name={name}>
        <video controls className="w-full object-cover h-full">
          <source src={transformPathFileInPathStatic(path)} type="video/mp4" />
        </video>
      </WrapperContent>
    );
  }

  if (type.toLowerCase() === '.md') {
    return (
      <WrapperContent name={name}>
        <RiMarkdownLine className="w-full text-white min-h-[4rem]" />
      </WrapperContent>
    );
  }

  if (type.toLowerCase() === '.docx') {
    return (
      <WrapperContent name={name}>
        <HiOutlineDocumentText className="w-full text-white min-h-[4rem]" />
      </WrapperContent>
    );
  }

  if (type.toLowerCase() === '.pdf') {
    return (
      <WrapperContent name={name}>
        <GrDocumentPdf className="w-full text-white min-h-[4rem]" />
      </WrapperContent>
    );
  }

  return (
    <WrapperContent name={name}>
      <RiFolderUnknowFill className="w-full text-white min-h-[4rem]" />
    </WrapperContent>
  );
};
