"use client";

import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

type Props = {
  content: string;
};
export default function Footer({ content }: Props) {
  return (
    <footer className='w-full pb-3'>
      <ReactMarkdown
        className='flex w-full select-none flex-col items-center justify-center text-center'
        components={{
          p: ({ node, children, ...props }) => (
            <p
              {...props}
              className='muted text-balance text-sm'
            >
              {children}
            </p>
          ),
          a: ({ node, children, ...props }) => {
            const isExternal = props.href?.startsWith("http");

            return (
              <a
                {...props}
                className='text-balance text-sm text-blue-600 opacity-80 transition-all duration-300 hover:opacity-100 dark:text-blue-400'
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                {children}
              </a>
            );
          },
        }}
        remarkPlugins={[remarkBreaks]}
      >
        {content}
      </ReactMarkdown>
    </footer>
  );
}
