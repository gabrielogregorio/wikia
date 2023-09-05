import { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';

const Strong = ({ children }) => <strong className="font-bold">{children}</strong>;

const ATag = ({ href, children }) => (
  <a target="_blank" rel="noreferrer" href={href} className="text-blue-500 dark:text-blue-400 hover:underline">
    {children}
  </a>
);

const H1Tag = ({ children }) => <h1 className="text-2xl font-bold text-gray-300 mb-3 my-6">{children}</h1>;
const H2Tag = ({ children }) => <h2 className="text-xl font-bold text-gray-300 mb-3 my-6">{children}</h2>;
const H3Tag = ({ children }) => <h3 className="text-sm font-bold text-gray-300 mb-3 my-5">{children}</h3>;

const HrTag = () => <hr className="bg-transparent border-b-1 border-b-gray-100 my-4" />;
const PTag = ({ children }) => <p className=" text-lg dark:text-gray-200 text-gray-600 my-2">{children}</p>;

export const MarkdownToHtml = ({ body }: { body: string }): ReactElement => {
  return (
    <div className="px-4">
      <ReactMarkdown
        components={{
          strong: Strong,
          a: ATag,
          h1: H1Tag,
          h2: H2Tag,
          h3: H3Tag,
          hr: HrTag,
          p: PTag,
        }}>
        {body}
      </ReactMarkdown>
    </div>
  );
};
