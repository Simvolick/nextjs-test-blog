import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';


import { getSortedPostsData } from '../lib/posts';

import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <container className="">
        <div className="rounded-xl w-64 h-auto mx-auto bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
          <div className="flex flex-col justify-between h-full text-white rounded-lg p-1">
            <h1 className="text-center text-3xl text-white-900">
              Klim Yadrintsev
            </h1>
          </div>
        </div>
        <section className='pt-5'>
          <p className='text-3xl'>Hey👋</p>
          <p className='text-xl'>Name is Klim 👀</p>
          <p className='text-lg'>Programmer👨‍💻Maker🤖</p>
          <p>
            This is my blog website.
          </p>
          <p>I write about programming, life, and Product Management</p>
          {/* (This is my blog - easy to build the same one with NEXT.JS tutorial{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>) */}
          <div class="relative flex py-2 items-center">
            <div class="flex-grow border-t border-gray-400"></div>
            <Link href='https://twitter.com/yadrintsevklim' className="">
              <a class="flex-shrink mx-4 text-gray-400">Twitter</a>
            </Link>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>

        </section>
        <section className='mx-10 '>
          <h2 className="text-xl">Blog Posts:</h2>
          <p className='text-sm text-gray-400'>by date</p>
          <ul className="pt-5">
            {allPostsData.map(({ id, date, title }) => (
              <li className key={id}>
                <Link href={`/posts/${id}`} className="">
                  <a>{title}</a>
                </Link>
                <br />
                <p className='text-sm py-1'>
                  <Date dateString={date} />
                </p>
                <div class="relative flex py-2 items-center">
                  <div class="flex-grow border-t border-gray-400"></div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </container>
    </Layout>
  );
}