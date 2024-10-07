import ReactMarkdown from 'react-markdown'
import RemarkGfm from 'remark-gfm'
import RemarkBreaks from 'remark-breaks'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[RemarkGfm, RemarkBreaks]}
      components={{
        h1: ({ node, ...props }) => <h1 className='text-3xl font-bold mt-6 mb-4' {...props} />,
        h2: ({ node, ...props }) => <h2 className='text-2xl font-semibold mt-5 mb-3' {...props} />,
        h3: ({ node, ...props }) => <h3 className='text-xl font-medium mt-4 mb-2' {...props} />,
        p: ({ node, ...props }) => <p className='mb-4' {...props} />,
        ul: ({ node, ...props }) => <ul className='list-disc pl-6 mb-4' {...props} />,
        ol: ({ node, ...props }) => <ol className='list-decimal pl-6 mb-4' {...props} />,
        li: ({ node, ...props }) => <li className='mb-1' {...props} />,
        a: ({ node, ...props }) => <a className='text-blue-500 hover:underline' {...props} />,
        blockquote: ({ node, ...props }) => <blockquote className='border-l-4 border-gray-300 italic pl-4 my-4' {...props} />,
        table: ({ node, ...props }) => <table className='border-collapse table-auto w-full text-sm my-4' {...props} />,
        thead: ({ node, ...props }) => <thead className='bg-gray-100' {...props} />,
        tbody: ({ node, ...props }) => <tbody className='bg-white' {...props} />,
        tr: ({ node, ...props }) => <tr className='border-b border-gray-200' {...props} />,
        th: ({ node, ...props }) => <th className='border-b border-gray-200 font-medium p-4 pl-8 text-gray-600 text-left' {...props} />,
        td: ({ node, ...props }) => <td className='border-b border-gray-200 p-4 pl-8 text-gray-600' {...props} />,
        del: ({ node, ...props }) => <del className='line-through' {...props} />,
        hr: ({ node, ...props }) => <hr className='my-5' {...props} />,
        input: ({ node, ...props }) => props.type === 'checkbox' ? (
          <input type='checkbox' className='form-checkbox h-4 w-4 text-blue-600 rounded' {...props} />
        ) : (
          <input {...props} />
        ),
        code: ({ node, inline, className, children, ...props }) => {
          
          const match = /language-(\w+)/.exec(className || '')

          return !inline && match ? (
              <SyntaxHighlighter
                className='rounded-md'
                language={match[1]}
                PreTag='div'
                {...props}
              >
                {String(children).replace(/\n$/, '') !== 'undefined' ? String(children).replace(/\n$/, '') : ' '}
              </SyntaxHighlighter> 
          ) : (
              <code className='bg-gray-100 rounded px-2 py-1' {...props}>
                {children}
              </code>  
          )

        }
      }}      
    >
      {content}
    </ReactMarkdown>
  )
}

export default MarkdownRenderer