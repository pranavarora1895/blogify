export interface Blog{
    id?: number
    slug: string
    title: string
    content?: string
    description: string
    author: string
    date: Date;
    image?: string
  }

const sampleBlogs: Blog[] = [
    {
      id: 1,
      slug: 'understanding-react-hooks',
      title: 'Understanding React Hooks',
      description: 'A comprehensive guide to using hooks in React.',
      author: 'John Doe',
      date: new Date('2024-08-27'),
      image: 'blog1.jpg',
      content: `React Hooks provide a powerful and flexible way to manage state and side effects in functional components.
  
  ## Introduction
  
  Hooks are functions that let you use state and other React features without writing a class. 
  
  ## Example
  
  Here’s a simple example of the useState hook:
  
  \`\`\`jsx
  import React, { useState } from 'react';
  
  const Counter = () => {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  };
  \`\`\`
  `
    },
    {
      id: 2,
      slug: 'mastering-tailwind-css',
      title: 'Mastering Tailwind CSS',
      description: 'Learn how to style your apps with Tailwind CSS effectively.',
      author: 'Jane Smith',
      date: new Date('2024-08-25'),
      image: 'blog2.jpg',
      content: `Tailwind CSS offers a utility-first approach to styling that allows for rapid development and customization.
  
  ## Features
  
  - **Utility-First:** Build designs directly in your HTML.
  - **Responsive:** Easily create responsive designs with utility classes.
  - **Customizable:** Tailor the framework to your needs with a configuration file.
  
  ## Example
  
  Using Tailwind classes:
  
  \`\`\`html
  <div class="bg-blue-500 text-white p-4 rounded">
    Tailwind CSS is great!
  </div>
  \`\`\`
  `
    },
    {
      id: 3,
      slug: 'introduction-to-typescript',
      title: 'Introduction to TypeScript',
      description: 'An introduction to the powerful TypeScript language and its benefits for JavaScript developers.',
      author: 'Alice Johnson',
      date: new Date('2024-08-22'),
      image: 'blog3.jpg',
      content: `TypeScript extends JavaScript by adding static types, which can improve code quality and maintainability.
  
  ## Key Benefits
  
  - **Static Typing:** Catch errors at compile-time.
  - **Better Tooling:** Enhanced IDE support and refactoring.
  - **Improved Readability:** Clearer code with explicit types.
  
  ## Example
  
  A TypeScript function:
  
  \`\`\`ts
  function greet(name: string): string {
    return \`Hello, \${name}\`;
  }
  \`\`\`
  `
    },
    {
      id: 4,
      slug: 'building-responsive-layouts',
      title: 'Building Responsive Layouts with Flexbox',
      description: 'A guide to creating flexible and responsive layouts using Flexbox.',
      author: 'Bob Brown',
      date: new Date('2024-08-20'),
      image: 'blog2.jpg',
      content: `Flexbox is a layout model that allows for easy alignment and distribution of space among items in a container.
  
  ## Basics
  
  - **Flex Container:** Define a flex container with \`display: flex\`.
  - **Flex Items:** Control alignment and distribution of items inside the container.
  
  ## Example
  
  A simple flexbox layout:
  
  \`\`\`html
  <div class="flex justify-between">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </div>
  \`\`\`
  `
    },
    {
      id: 5,
      slug: 'using-redux-in-react',
      title: 'Using Redux in React Applications',
      description: 'How to manage global state in React applications using Redux.',
      author: 'Eve Adams',
      date: new Date('2024-08-15'),
      image: 'blog1.jpg',
      content: `Redux provides a predictable state container for JavaScript apps, making state management easier and more maintainable.
  
  ## Core Concepts
  
  - **Actions:** Plain objects describing state changes.
  - **Reducers:** Functions that handle actions and update state.
  - **Store:** Centralized state container.
  
  ## Example
  
  A basic Redux setup:
  
  \`\`\`jsx
  import { createStore } from 'redux';
  
  const reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      default:
        return state;
    }
  };
  
  const store = createStore(reducer);
  \`\`\`
  `
    },
    {
      id: 6,
      slug: 'graphql-vs-rest-api',
      title: 'GraphQL vs REST API',
      description: 'Comparing GraphQL and REST API architectures for modern web applications.',
      author: 'Charlie Green',
      date: new Date('2024-08-10'),
      image: 'blog3.jpg',
      content: `GraphQL offers a more flexible and efficient approach to querying and manipulating data compared to traditional REST APIs.
  
  ## Comparison
  
  - **REST API:** Multiple endpoints, over-fetching and under-fetching issues.
  - **GraphQL:** Single endpoint, precise data fetching, and real-time updates.
  
  ## Example
  
  A GraphQL query:
  
  \`\`\`graphql
  query {
    user(id: "1") {
      name
      email
    }
  }
  \`\`\`
  `
    },
    {
      id: 7,
      slug: 'optimizing-web-performance',
      title: 'Optimizing Web Performance',
      description: 'Techniques and best practices for improving the performance of web applications.',
      author: 'Dana Lee',
      date: new Date('2024-08-05'),
      image: 'blog2.jpg',
      content: `Improving web performance involves optimizing various aspects, such as loading times, rendering, and overall user experience.
  
  ## Techniques
  
  - **Lazy Loading:** Load resources as needed.
  - **Code Splitting:** Split code into smaller bundles.
  - **Caching:** Use caching strategies to reduce load times.
  
  ## Example
  
  Using lazy loading in React:
  
  \`\`\`jsx
  import React, { Suspense, lazy } from 'react';
  
  const LazyComponent = lazy(() => import('./LazyComponent'));
  
  const App = () => (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
  \`\`\`
  `
    },
    {
      id: 8,
      slug: 'introduction-to-nextjs',
      title: 'Introduction to Next.js',
      description: 'An overview of Next.js and how it can enhance your React applications with server-side rendering.',
      author: 'Frank Wilson',
      date: new Date('2024-08-01'),
      image: 'blog3.jpg',
      content: `Next.js is a React framework that enables server-side rendering and static site generation, improving performance and SEO.
  
  ## Features
  
  - **Server-Side Rendering:** Generate pages on the server.
  - **Static Site Generation:** Pre-render pages at build time.
  - **API Routes:** Build backend APIs with Next.js.
  
  ## Example
  
  A basic Next.js page:
  
  \`\`\`jsx
  const Home = () => (
    <div>
      <h1>Welcome to Next.js!</h1>
    </div>
  );
  
  export default Home;
  \`\`\`
  `
    },
    {
      id: 9,
      slug: 'advanced-css-techniques',
      title: 'Advanced CSS Techniques',
      description: 'Explore advanced CSS techniques for creating modern and visually appealing web designs.',
      author: 'Grace Martinez',
      date: new Date('2024-07-30'),
      content: `Advanced CSS techniques include custom properties, CSS Grid, and animations, allowing for sophisticated and dynamic designs.
  
  ## Techniques
  
  - **Custom Properties:** Use variables for reusable styles.
  - **CSS Grid:** Create complex layouts with grid systems.
  - **Animations:** Add dynamic effects to your designs.
  
  ## Example
  
  Using CSS Grid:
  
  \`\`\`css
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  \`\`\`
  `
    }
  ];

  export default sampleBlogs;