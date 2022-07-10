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
      <section>
        <p>Hey I am cool</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className>
        <h2 className>Blog</h2>
        <ul className>
          {allPostsData.map(({ id, date, title }) => (
            <li className key={id}>
              <Link href={`/posts/${id}`} className="">
                <a>{title}</a>
              </Link>
              <br />
              <small className>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}