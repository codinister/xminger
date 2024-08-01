'use client';

import Map from '@/components/contact/Map';
import Contactdetails from '@/components/contact/Contactdetails';
import ContactForm from '@/components/contact/ContactForm';
import Pageheader from '@/components/Pageheader';

const Contact = () => {
  return (
    <>
      <Pageheader title="Contact" />
      <section className="contact">
        <div className="container">
          <div>
            <div>
              <Contactdetails />
            </div>

            <div>
              <Map
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7217584783234!2d-1.6363630268897833!3d6.681350593313867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96de161d38a1%3A0x7653d0f4636f651c!2sXminger%20Advertising!5e0!3m2!1sen!2sgh!4v1716804407201!5m2!1sen!2sgh"
                width="100%"
                height="200pz"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
