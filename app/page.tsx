'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';


export default function Home() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['.md format', 'Markdown'],
      typeSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            <span className="font-semibold">Blogify:</span> A blog app for devs<br className="hidden lg:block" />
            Write your blogs in <span ref={el} className="font-semibold underline decoration-primary">Markdown</span>, just as you do on your GitHub
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Easily create and manage your blog posts with Markdown. Enjoy the simplicity of writing and the power of GitHub-like formatting!
          </p>
          <div className="flex mt-6 bg-transparent rounded-lg dark:border-gray-700 lg:w-2/3 space-x-4">
            <Link href={'#how-it-works'} className={buttonVariants({ variant: "default" })}>Post your blog</Link>
            <Link href={'/blog'} className={buttonVariants({ variant: "outline" })}>View Blogs</Link>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="Blogify Markdown" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center" id='how-it-works'>
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl mb-6">How it works?</h1>
          <p className="mb-4">
            Its easy. Just follow these steps to write your blog.
          </p>
          <div className="space-y-4">
            <div>
              <p className="mb-2">1. Clone the repository:</p>
              <code className="block p-2 rounded text-sm bg-secondary text-primary">
                git clone https://github.com/pranavarora1895/blogify.git
              </code>
            </div>
            <div>
              <p className="mb-2">2. Create a new branch that contains your GitHub username:</p>
              <code className="block p-2 rounded text-sm bg-secondary text-primary">
                git checkout -b &lt;githubUsername-your-branch-name&gt;
              </code>
            </div>
            <div>
              <p className="mb-2">3. Navigate to the <code className="text-red-600">content/</code> folder:</p>
              <code className="block p-2 rounded text-sm bg-secondary text-primary">
                cd content/
              </code>
            </div>
            <div>
              <p className="mb-2">4. Create or edit a Markdown file (.md):</p>
              <code className="block p-2 rounded text-sm bg-secondary text-primary">
                touch &lt;your-file-name.md&gt;
              </code>
            </div>
            <div>
              <p className="mb-2">5. Add your content in the file and save it.</p>
              <p className="mb-2 font-semibold text-red-600">IMPORTANT:</p>
              <p className="mb-2">Your <code className="text-red-600">.md</code> file should contain fields like these initially(starting from line 1):</p>
              <code className="block p-2 rounded text-sm bg-secondary text-primary">
                <br />
                title: Title of your blog
                <br />
                slug: your-file-name (without .md extension)
                <br />
                date: Date (YYYY-MM-DD)
                <br />
                author: Author&apos;s name
                <br />
                description: A small description of your blog
                <br />
                image: cover image if any
                <br />
                ---
                <br />
                <br />

                &lt;Your Markdown content here&gt;
              </code>
              <br />
              <p className="mb-2">For example:</p>
              <code className="block p-2 rounded text-sm bg-secondary text-primary">
                <br />
                title: Intro to Tailwind CSS
                <br />
                slug: intro-to-tailwind-css
                <br />
                date: 2024-08-27
                <br />
                author: Pranav Arora
                <br />
                description: A beginner&apos;s guide to Tailwind CSS, covering its utility-first approach and how to get started with this powerful framework.
                <br />
                image: https://images.pexels.com/photos/3301083/pexels-photo-3301083.jpeg
                <br />
                ---
                <br />
                <br />

                About Tailwind CSS...
              </code>
            </div>
            <div>
              <p className="mb-2">6. Stage and commit your changes:</p>
              <code className="block p-2 rounded text-sm bg-secondary text-primary">
                git add content/&lt;your-file-name.md&gt;
              </code>
              <code className="block p-2 rounded text-sm bg-secondary text-primary">
                git commit -m &lsquo;Add new content&rsquo;
              </code>
            </div>
            <div>
              <p className="mb-2">7. Push the changes to your branch:</p>
              <code className="block p-2 rounded text-sm bg-secondary text-primary">
                git push origin your-branch-name
              </code>
            </div>
          </div>
          <p className="mt-6">
            After pushing, create a Pull Request on GitHub to merge your changes.
          </p>
          <p className="mt-6">
            Once its merged, you can view your blog listed in <Link href={'blog/'} className={buttonVariants({ variant: "default" })}>Blogs</Link>
          </p>
        </div>
      </section>

      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Use Case</h2>
          <div className='border p-2 rounded bg-secondary text-primary'>
            <p className="mb-4">
              <strong>Blogify</strong> can be used in organizations where teams want to share valuable findings, bug fixes, and more. For example:
            </p>
            <p className="mb-4">
              After a developer identifies an issue and documents it in a blog post, the team lead can review and merge the changes. Once the blog is created, employees from other teams or the same team can search for that issue, read the post, and implement the fix in their projects.
            </p>
            <p>
              This process encourages knowledge sharing, reduces redundancy, and ensures that solutions to common problems are easily accessible to everyone in the organization.
            </p>
          </div>
        </div>
      </section>

    </main >
  );
}
