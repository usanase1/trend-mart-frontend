import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function NewsletterSection() {
  return (
    <div className="bg-blue-600 text-white p-8 rounded-lg text-center space-y-4 w-[1920px]">
      <h2 className="text-2xl font-bold">Subscribe to our newsletter</h2>
      <p>Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus.</p>
      <form className="flex max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Email address"
          className="flex-grow rounded-l-md text-gray-800"
          wrapperClassName="flex-grow"
        />
        <Button type="submit" className="bg-orange-500 px-6 rounded-r-md">Subscribe</Button>
      </form>
    </div>
  );
} 