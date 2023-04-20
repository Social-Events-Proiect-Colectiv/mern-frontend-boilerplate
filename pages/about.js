import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn more about our company and mission"
        />
      </Head>

      <h1>About Us</h1>
      <p>
        We are a company dedicated to building awesome web applications with
        Next.js.
      </p>
    </div>
  );
}
