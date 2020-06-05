import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader, Container, Dimmer } from 'semantic-ui-react';

export default function EditPoem({ pageProps }) {
  const poem = pageProps.poem;
  const [form, setForm] = useState({
    author: poem.author,
    title: poem.title,
    description: poem.description,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        updatePoem();
        alert('Submit Success');
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const updatePoem = async () => {
    try {
      const res = await fetch(
        `${process.env.ROOT_URL}/api/poems/${router.query.id}`,
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        },
      );

      router.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  const validate = () => {
    let err = {};

    if (!form.title) {
      err.title = 'Title is required';
    }
    if (!form.author) {
      err.author = 'Author is required';
    }
    if (!form.description) {
      err.description = 'Description is required';
    }

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <h1>Update Poem</h1>
      <div>
        {isSubmitting ? (
          <Dimmer active>
            <Loader inline="centered" />
          </Dimmer>
        ) : (
          <Container fluid>
            <Form onSubmit={handleSubmit}>
              <Form.Input
                fluid
                label="Title"
                placeholder="Title"
                name="title"
                value={form.title}
                onChange={handleChange}
                error={
                  errors.title
                    ? { content: 'Please enter the title', pointing: 'below' }
                    : null
                }
              />
              <Form.Input
                fluid
                label="Author"
                placeholder="Author"
                name="author"
                value={form.author}
                onChange={handleChange}
                error={
                  errors.author
                    ? { content: 'Please enter the author', pointing: 'below' }
                    : null
                }
              />
              <Form.TextArea
                fluid
                label="Description"
                placeholder="Description"
                name="description"
                value={form.description}
                onChange={handleChange}
                error={
                  errors.description
                    ? {
                        content: 'Please enter the description min 30 char',
                        pointing: 'below',
                      }
                    : null
                }
              />
              <Button type="submit" inverted color="purple">
                Update
              </Button>
            </Form>
          </Container>
        )}
      </div>
    </div>
  );
}

EditPoem.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${process.env.ROOT_URL}/api/poems/${id}`);
  const { data } = await res.json();

  return {
    poem: data,
  };
};
