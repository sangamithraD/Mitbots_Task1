import Image from 'next/image';
import { Service } from '@/types';

const ServiceCard = ({ title, image }: Omit<Service, 'id'>) => {
  return (
    <article className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2">
      <h3 className="mb-4 text-xl font-semibold text-white">{title}</h3>

      <div className="relative h-64 overflow-hidden rounded-3xl bg-white">
        <Image src={image} alt={title} fill className="object-cover" loading="lazy" />
      </div>
    </article>
  );
};

export default ServiceCard;