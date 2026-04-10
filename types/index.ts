export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export interface Service {
  id: number;
  title: string;
  image: string;
}