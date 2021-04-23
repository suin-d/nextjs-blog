import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';
import Alert from '../../components/utils/alert';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <h1 className="success">First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
          {/* a 태그 빼도 작동: Link 사용 시 children이 text로 넘어온 경우 a태그로 감싸서 적용시킴 */}
        </Link>
      </h2>
    </Layout>
  );
}
