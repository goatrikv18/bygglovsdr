
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Meddelande skickat",
        description: "Tack för ditt meddelande! Vi återkommer så snart som möjligt.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Namn
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="input-field"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          E-postadress
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="input-field"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="input-field resize-none"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`button-primary w-full ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? 'Skickar...' : 'Skicka'}
      </button>
    </form>
  );
};

export default ContactForm;
