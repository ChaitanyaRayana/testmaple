'use client';

import { useState } from 'react';
import Image from 'next/image';
import Input from './Input';
import Button from './Button';

function ContactFormWithMap() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessEmail: '',
    workPhone: '',
    companyName: '',
    industry: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Add your form submission logic here
    console.log('Form submitted:', formData);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Form submitted successfully!');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        businessEmail: '',
        workPhone: '',
        companyName: '',
        industry: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map Section */}
          <div className="w-full h-full min-h-125 lg:min-h-150 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0929992635744!2d-78.94345492346214!3d43.648776571099746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51c087e5e2d11%3A0x5c5e9b5e5e5e5e5e!2sDundas%20St%20E%2C%20Whitby%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full "
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-full "
                  />
                </div>
              </div>

              {/* Business Email */}
              <div>
                <Input
                  type="email"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  placeholder="Business Email"
                  required
                  className="w-full "
                />
              </div>

              {/* Work Phone */}
              <div>
                <Input
                  type="tel"
                  name="workPhone"
                  value={formData.workPhone}
                  onChange={handleChange}
                  placeholder="Work Phone"
                  required
                  className="w-full "
                />
              </div>

              {/* Company Name */}
              <div>
                <Input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  required
                  className="w-full "
                />
              </div>

              {/* Industry */}
              <div>
                <Input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  placeholder="Industry"
                  required
                  className="w-full "
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#226fb7] focus:border-transparent transition-all placeholder:text-gray-400 text-gray-700 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFormWithMap;
