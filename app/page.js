'use client'

import { useState } from 'react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Bold, Italic, List, ListOrdered, Link, Image, Code, Quote, Heading, ListTodo, Table, Strikethrough, Minus } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import MarkdownRenderer from '@/components/MarkdownRenderer'


const Page = () => {

  const [markdownInput, setMarkdownInput] = useState('')

  const cheatsheetItems = [
    { icon: <Bold size={16} />, title: 'Bold', markdown: '**bold text**' },
    { icon: <Italic size={16} />, title: 'Italic', markdown: '*italicized text*' },
    { icon: <List size={16} />, title: 'Unordered List', markdown: '- Item 1\n- Item 2\n- Item 3' },
    { icon: <ListOrdered size={16} />, title: 'Ordered List', markdown: '1. First item\n2. Second item\n3. Third item' },
    { icon: <Link size={16} />, title: 'Link', markdown: '[Title](https://example.com)' },
    { icon: <Image size={16} />, title: 'Image', markdown: '![alt text](image.jpg)' },
    { icon: <Code size={16} />, title: 'Code', markdown: '`Code`' },
    { icon: <Quote size={16} />, title: 'Blockquote', markdown: '> blockquote' },
    { icon: <Heading size={16} />, title: 'Heading', markdown: '# H1\n## H2\n### H3' },
    { icon: <Minus size={16} />, title: 'Horizontal Rule', markdown: '---' }
  ]

  const gfmItems = [
    { icon: <ListTodo size={16} />, title: 'Task List', markdown: '- [x] Task 1\n- [ ] Task 2\n- [ ] Task 3' },
    { icon: <Table size={16} />, title: 'Table', markdown: '| Syntax | Description |\n| ---------- | ---------- |\n| Header | Title |\n| Paragraph | Text |' },
    { icon: <Code size={16} />, title: 'Fenced Code Block', markdown: '```python\nprint("Hello, World!")\n```' },
    { icon: <Strikethrough size={16} />, title: 'Strikethrough', markdown: '~~Strikethrough~~' }
  ]

  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      <Card className='max-w-5xl mx-auto'>

        <CardHeader>
          <div className='text-center'>
            <h2 className='text-3xl font-bold'>Markdown Lounge</h2>
            <h4 className='text-xl font-medium'>Markdown Cheatsheet and Playground</h4>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue='cheatsheet'>
            <TabsList className='w-full grid grid-cols-2'>
              <TabsTrigger value='cheatsheet'>Cheatsheet</TabsTrigger>
              <TabsTrigger value='playground'>Playground</TabsTrigger>
            </TabsList>
            <TabsContent value='cheatsheet'>
              <ScrollArea className='h-[65vh]'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
                  <Card className='h-fit'>
                    <CardHeader>
                      <CardTitle>Basic Markdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className='space-y-4'>
                        {cheatsheetItems.map((item, index) => (
                          <li key={index} className='space-y-2'>
                            <div className='flex items-center space-x-2'>
                              <span>{item.icon}</span>
                              <span className='font-semibold'>{item.title}</span>                              
                            </div>
                            <pre className='bg-gray-100 p-2 mt-1 rounded overflow-x-auto'>
                              <code>{item.markdown}</code>                              
                            </pre>                            
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className='h-fit'>
                    <CardHeader>
                      <CardTitle>Github Falvored Markdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className='space-y-4'>
                        {gfmItems.map((item, index) => (
                          <li key={index} className='space-y-2'>
                            <div className='flex items-center space-x-2'>
                              <span>{item.icon}</span>
                              <span className='font-semibold'>{item.title}</span>                              
                            </div>
                            <pre className='bg-gray-100 p-2 mt-1 rounded overflow-x-auto'>
                              <code>{item.markdown}</code>                              
                            </pre>                            
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>                  
                </div>
              </ScrollArea>            
            </TabsContent>    
            <TabsContent value='playground'>            
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <h3 className='text-lg font-semibold mb-2'>Input</h3>
                  <Textarea value={markdownInput} className='w-full h-[50vh]' onChange={(e) => setMarkdownInput(e.target.value)} placeholder='Type your Markdown here...' />                  
                </div>
                <div>
                  <h3 className='text-lg font-semibold mb-2'>Preview</h3>
                  <ScrollArea className='h-[50vh]'>                  
                    <div className='border rounded p-4 overflow-auto markdown-content'>
                        <MarkdownRenderer content={markdownInput} />
                    </div>
                  </ScrollArea>
                </div>                
              </div>
            </TabsContent>                      
          </Tabs>
        </CardContent>

      </Card>

      <footer className='container mx-auto py-5 text-center'>
        Developed by <a href='https://ibrahimhasnat.com' className='underline'>Ibrahim Hasnat</a>
      </footer>

    </div>
  )
}

export default Page