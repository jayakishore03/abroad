import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button';

export const ContactSection = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message Sent! We will contact you soon.");
    reset();
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Get in <span className="premium-gradient-text">Touch</span></h2>
            <p className="text-gray-400 mb-10 text-lg">
              Ready to start your journey? Fill out the form below and our expert counselors will reach out to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input {...register("firstName", { required: true })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="First Name" />
                </div>
                <div>
                  <input {...register("lastName")} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Last Name" />
                </div>
              </div>
              <div>
                <input {...register("email", { required: true })} type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Email Address" />
              </div>
              <div>
                <select {...register("destination")} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none">
                  <option value="" className="text-black">Preferred Destination</option>
                  <option value="usa" className="text-black">USA</option>
                  <option value="uk" className="text-black">UK</option>
                  <option value="canada" className="text-black">Canada</option>
                  <option value="australia" className="text-black">Australia</option>
                </select>
              </div>
              <div>
                <textarea {...register("message")} rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Tell us about your goals..."></textarea>
              </div>
              <Button type="submit" variant="primary" className="w-full">Book Free Consultation</Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] w-full rounded-3xl overflow-hidden glass p-2"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112028.18841775797!2d77.1024902!3d28.6436846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1655655489812!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
