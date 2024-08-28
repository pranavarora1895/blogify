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
import { Metadata, ResolvingMetadata } from 'next'
import path from 'path';
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
                visibility: 'always',
                feedbackDuration: 3_000,
            }),
        ],
    })

const BlogPage = async ({ params }: { params: { slug: string } }) => {
    const filePath = `content/${params.slug}.md`
    let usersPath = path.join(process.cwd(), filePath);
    const fileContent = fs.readFileSync(usersPath, 'utf-8');
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

                <OnThisPage className='text-xs w-1/2' htmlContent={htmlContent} />
            </div>
        </MaxWidthWrapper>
    )
}

type Props = {
    params: {
        id?: number
        slug: string
        title: string
        description: string
    }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const filePath = `content/${params.slug}.md`
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    return {
        title: `${data.title} - Blogify`,
        description: data.description
    }
}

export default BlogPage