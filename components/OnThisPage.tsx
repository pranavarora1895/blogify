"use client";

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react'

interface LinkType {
    id: string
    text: string
}

const OnThisPage = ({ htmlContent, className }: { htmlContent: string, className: string }) => {
    const [links, setLinks] = useState<null | LinkType[]>(null)

    useEffect(() => {
        const temp = document.createElement("div");
        temp.innerHTML = htmlContent
        const headings = temp.querySelectorAll('h2, h3');
        const generatedLinks: LinkType[] = [];

        headings.forEach((heading, index) => {
            const id = heading.id || `heading-${index}`;
            heading.id = id;

            generatedLinks.push({
                id,
                text: (heading as HTMLElement).innerText
            })
            setLinks(generatedLinks)
        })
    }, [htmlContent])


    return (
        <div className={cn('hidden md:block', className)}>
            <div className="sticky top-16">
                <h2>On this Page</h2>
                <ul className='not-prose'>
                    {links && links.map((link) => {
                        return <li className='py-1' key={link.id}>
                            <a href={`#${link.id}`}>{link.text}</a>
                        </li>
                    })}
                </ul>
            </div>

        </div>
    )
}

export default OnThisPage