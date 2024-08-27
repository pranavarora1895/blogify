import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import matter from 'gray-matter'
import fs from 'fs'
import OnThisPage from '@/components/OnThisPage'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'

const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: '👋🌍' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
        theme: 'andromeeda',
        transformers: [
            transformerCopyButton({
              visibility: 'hover',
              feedbackDuration: 3_000,
            }),
          ],
      })

const BlogPage = async ({ params }: { params: { slug: string } }) => {
    const filePath = `content/${params.slug}.md`
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent)
    const htmlContent = (await processor.process(content)).toString()

    return (
        <MaxWidthWrapper className='prose dark:prose-invert'>
            <div className='flex'>
                <div className='px-16'>
                    <h1>{data.title}</h1>
                    {// eslint-disable-next-line @next/next/no-img-element
                    }
                    <img src={data.image ? data.image : "https://via.placeholder.com/150"} alt={data.title} className="w-full h-48 object-cover" />
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
                </div>

                <OnThisPage className='text-sm w-2/6' htmlContent={htmlContent} />
            </div>
        </MaxWidthWrapper>
    )
}

export default BlogPage