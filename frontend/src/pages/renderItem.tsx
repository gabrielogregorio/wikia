/* eslint-disable jsx-a11y/media-has-caption */
import { WrapperContent } from '@/pages/components/WrapperContent';
import { isImage, isVideo } from '@/pages/utils';
import type { IWikiItem } from '@/services/wikia';
import type { ReactElement } from 'react';
import { GrDocumentPdf } from 'react-icons/gr';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { RiFolderUnknowFill, RiMarkdownLine } from 'react-icons/ri';
import { MarkdownToHtml } from '../libs/markdown';

const transformPathFileInPathStatic = (path: string): string => {
  return `http://127.0.0.1:5000/file/${path.replace('./public/', '')}`;
};

export const RenderItem = ({
  data: { type, dimensions, name, path, extracted_text },
}: {
  data: IWikiItem;
}): ReactElement => {
  if (isImage(type)) {
    return (
      <WrapperContent name={''}>
        <img
          className="w-full object-cover h-full  rounded-md"
          src={transformPathFileInPathStatic(path)}
          width={dimensions?.width}
          height={dimensions?.height}
          alt=""
        />
      </WrapperContent>
    );
  }

  if (isVideo(type) && type.toLowerCase() === 'mov') {
    return (
      <WrapperContent name={''}>
        <video controls className="w-full object-cover h-full rounded-md">
          <source
            width={dimensions?.width}
            height={dimensions?.height}
            src={transformPathFileInPathStatic(path)}
            type="video/mov"
          />
        </video>
      </WrapperContent>
    );
  }

  if (isVideo(type)) {
    return (
      <WrapperContent name={''}>
        <video
          width={dimensions?.width}
          height={dimensions?.height}
          controls
          className="w-full object-cover h-full rounded-md">
          <source src={transformPathFileInPathStatic(path)} type="video/mp4" />
        </video>
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

  if (type.toLowerCase() === '.txt') {
    return (
      <WrapperContent name={name}>
        <div className="w-full text-white text-3xl min-h-[4rem]">.txt</div>
      </WrapperContent>
    );
  }

  if (type.toLowerCase() === '.md') {
    return (
      <WrapperContent name={name}>
        <div className="max-h-[5rem] overflow-hidden">
          <MarkdownToHtml body={extracted_text || ''}></MarkdownToHtml>
        </div>
      </WrapperContent>
    );
  }

  if (
    ['.txt', '.css', '.py', '.js', '.jsx', '.ico', '.svg', '.lock', '.html', '.ts', '.tsx', '.json'].includes(
      type.toLowerCase(),
    )
  ) {
    return (
      <WrapperContent name={name}>
        <div className="w-full text-white text-3xl min-h-[4rem]">{type}</div>
      </WrapperContent>
    );
  }

  return (
    <WrapperContent name={name}>
      <RiFolderUnknowFill className="w-full text-white min-h-[4rem]" />
    </WrapperContent>
  );
};
