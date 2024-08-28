import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';
import sampleBlogs, { Blog } from '@/config/sampleBlogs';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import fs, { readFileSync } from 'fs'
import matter from 'gray-matter';
import { Metadata } from 'next';
import path from 'path';

const dirContent = fs.readdirSync('content', 'utf-8')

const blogs: Blog[] = dirContent.map(file =>{
  let usersPath = path.join(process.cwd(), `content/${file}`);
  const fileContent = readFileSync(usersPath, 'utf-8');
  const {data} = matter(fileContent)
  const value: Blog = {
    slug: data.slug,
    title: data.title,
    description: data.description,
    author: data.author,
    date: data.date,
    image: data.image
  }
  return value
})

const BlogList = () => {
  return (
    <MaxWidthWrapper>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 pb-4">Our Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog: Blog) => (
          <div key={blog.id} className="rounded-lg shadow-lg overflow-hidden">
            {// eslint-disable-next-line @next/next/no-img-element
            }
            <img src={blog.image? blog.image: "https://via.placeholder.com/150"} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.description}</p>
              <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "default" })}>Read More</Link>
              <div className="text-sm text-gray-500 dark:text-gray-300 py-2">
                <span>By {blog.author}</span> | <span>{blog.date.toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </MaxWidthWrapper>
  );
};

export const metadata: Metadata = {
  title: 'Blogify',
  description: 'Write blogs in markdown',
}

export default BlogList;
