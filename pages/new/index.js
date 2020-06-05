import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader, Dimmer } from 'semantic-ui-react';

export default function NewPoem() {
  const [form, setForm] = useState({ author: '', title: '', description: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createPoem();
        alert('Submit Success');
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const createPoem = async () => {
    try {
      const res = await fetch(`${process.env.ROOT_URL}/api/poems`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

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
      <h1>Add new poem</h1>
      <div>
        {isSubmitting ? (
          <Dimmer active>
            <Loader inline="centered" />
          </Dimmer>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Input
              fluid
              label="Title"
              placeholder="Title"
              name="title"
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
              Add
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
}
