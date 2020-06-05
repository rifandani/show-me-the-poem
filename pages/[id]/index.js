import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Button,
  Confirm,
  Loader,
  Container,
  Header,
  Divider,
  Dimmer,
} from 'semantic-ui-react';

export default function Poem({ pageProps }) {
  const { poem } = pageProps;
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isDeleting) {
      deletePoem();
    }
  }, [isDeleting]);

  const open = () => setConfirm(true);
  const close = () => setConfirm(false);
  const deletePoem = async () => {
    const poemId = router.query.id;
    try {
      let deleted = await fetch(`${process.env.ROOT_URL}/api/poems/${poemId}`, {
        method: 'DELETE',
      });
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async () => {
    setIsDeleting(true);
    close();
  };

  const style = {};
  return (
    <div className="poems-container">
      {isDeleting ? (
        <Dimmer active>
          <Loader inline="centered" />
        </Dimmer>
      ) : (
        <Container text textAlign="center" fluid>
          <span>by {poem.author}</span>
          <Divider />
          <Header as="h2">{poem.title}</Header>
          <p>{poem.description}</p>
          <br />
          <Button inverted color="purple" onClick={open}>
            Delete
          </Button>
        </Container>
      )}
      <Confirm open={confirm} onCancel={close} onConfirm={handleDelete} />
    </div>
  );
}

Poem.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${process.env.ROOT_URL}/api/poems/${id}`);
  const { data } = await res.json();

  return {
    poem: data,
  };
};
