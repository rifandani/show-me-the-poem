import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Button, Card, Grid, Segment } from 'semantic-ui-react';

// export async function getStaticProps() {
//   const res = await fetch(`${process.env.ROOT_URL}/api/poems`);
//   const { data } = await res.json();

//   return {
//     props: { data },
//   };
// }

export default function Home({ pageProps }) {
  const { poems } = pageProps;
  // console.log(poems);

  return (
    <>
      {/* <div className="poems-container"> */}
      <br />
      <h1>Hall of Poems</h1>
      <br />
      {/* <div className="grid wrapper"> */}
      <Grid columns={3} doubling stackable>
        {poems.map((poem) => {
          return (
            <Grid.Column key={poem._id}>
              <Segment inverted raised>
                <Card centered color="violet" className="mb-2">
                  <Card.Content>
                    <Card.Header>
                      <p className="center">
                        {poem.title}
                        <br />
                        <span>by {poem.author}</span>
                      </p>
                    </Card.Header>
                  </Card.Content>

                  <Card.Content extra>
                    <Link href={`/${poem._id}`}>
                      <Button inverted color="blue" floated="left">
                        View
                      </Button>
                    </Link>
                    <Link href={`/${poem._id}/edit`}>
                      <Button inverted color="purple" floated="right">
                        Edit
                      </Button>
                    </Link>
                  </Card.Content>
                </Card>
              </Segment>
            </Grid.Column>
          );
        })}
      </Grid>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

Home.getInitialProps = async () => {
  const res = await fetch(`${process.env.ROOT_URL}/api/poems`);
  const { data } = await res.json();

  return {
    poems: data,
  };
};
