import { ButtonProps } from '@/types';

const Button = ({
  children,
  variant = 'primary',
  className = '',
}: ButtonProps) => {
  const variants = {
    primary: 'bg-orange-500 text-white',
    secondary: 'bg-white/10 text-white border border-white/20',
  };
return (
    <button
      className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;