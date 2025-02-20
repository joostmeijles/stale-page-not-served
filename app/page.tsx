// force-static to generate this as ISR function
export const revalidate = 1;

export default async function Home() {
  // const res = await fetch('http://localhost:3000/api/data', {
  //   next: {
  //     tags: ['homepage']
  //   }
  // });

  // const json = await res.json();

  // return <span>Homepage: {json.timestamp}</span>;
  return <span>Test</span>
}
