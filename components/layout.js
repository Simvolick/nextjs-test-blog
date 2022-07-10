import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Klim Yadrintsev';
export const siteTitle = 'Next.js Blog Website';

// add documentation for this function
export default function Layout({ children, home }) {
  return (
    <div className>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* <div className='flex flex- justify-center h-screen'> */}
      <div className='h-screen w-screen flex flex-col justify-center items-center pb-60'>
        <div className=''>
          <header className="text-center">
            {home ? (
              <>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className="rounded-full"
                  height={200}
                  width={200}
                  alt={name}
                />
                <h1 className="text-5xl p-5">{name}</h1>
              </>
            ) : (
              <>
                <Link href="/">
                  <a>
                    <Image
                      priority
                      src="/images/profile.jpg"
                      className
                      height={108}
                      width={108}
                      alt={name}
                    />
                  </a>
                </Link>
                <h2 className>
                  <Link href="/">
                    <a className>{name}</a>
                  </Link>
                </h2>
              </>
            )}
          </header>
          <main>{children}</main>
          {!home && (
            <div className>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>

  );
}
