import Prayer from '@/components/atoms/prayer';
import { cn } from '@/lib/styles';
import { Prayer as PrayerType } from '@/types/prayer';
import React from 'react';

const Prayers = ({
  children,
  className,
  prayers
}: {
  children: React.ReactNode;
  className?: string;
  prayers: PrayerType[];
}) => {
  return (
    <div className={cn(className)}>
      <p className="mb-4">{children}</p>
      <div className="grid grid-cols-6 gap-2">
        {prayers.map((prayer, index) => (
          <Prayer prayer={prayer} key={index} isActive={index == 0} />
        ))}
      </div>
    </div>
  );
};

export default Prayers;
