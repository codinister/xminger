'use client'



import { useState } from 'react';
import Readmore from '../Readmore';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { emailSchema } from './zodSchema';
import Errors from './Errors';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import sendMail from './sendMail';
import { BeatLoader } from 'react-spinners';

const ContactForm = () => {
  type Errtype = any;
  type Succtype = boolean | undefined;

  const [err, setErr] = useState<Errtype>('');
  const [success, setSuccess] = useState<Succtype>(false);

  const closeBox = () => setSuccess(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
      subject: '',
      message: '',
    },
  });

  const [isPending, startTransition] = useTransition();

  const formSubmit = async (val: z.infer<typeof emailSchema>) => {
    startTransition(() => {
      sendMail(val)
        .then((data) => {
          const success = data?.success;
          const errors = data?.error;

          setSuccess(success);
          setErr(errors);
        })
        .catch((err) => console.log(err));
    });
  };

  if (success) {
    return (
      <div className="successbox">
        <div>
          <button onClick={closeBox} title="Close">X</button>
        </div>
        <div>Email sent!</div>
      </div>
    );
  }

  return (
    <div className="contactform">
      <form onSubmit={handleSubmit(formSubmit)}>
        <h4>Make enquiry</h4>

        <Errors error={err} />

        <div className="input-control">
          <input type="text" id="email" placeholder="" {...register('email')} />
          <label htmlFor="email">Email</label>
          <Errors error={errors.email?.message} />
        </div>

        <div className="input-control">
          <input
            type="text"
            id="subject"
            placeholder=""
            {...register('subject')}
          />
          <label htmlFor="subject">Subject</label>
          <Errors error={errors.subject?.message} />
        </div>

        <div className="input-control">
          <textarea
            id=""
            placeholder="Message"
            {...register('message')}
          ></textarea>

          <Errors error={errors.message?.message} />
        </div>

        <div className="btn-box">
          {isPending ? (
            <BeatLoader />
          ) : (
            <Readmore disabled={isPending} name="Read more">
              Send
            </Readmore>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
