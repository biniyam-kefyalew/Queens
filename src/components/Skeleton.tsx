import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular';
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  variant = 'rectangular' 
}) => {
  const baseClasses = 'animate-pulse bg-gray-200';
  
  const variantClasses = {
    text: 'h-4 rounded',
    rectangular: 'rounded-lg',
    circular: 'rounded-full'
  };

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    />
  );
};

// Pre-built skeleton components
export const ProductCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
    <Skeleton className="w-full h-48" />
    <Skeleton variant="text" className="w-3/4" />
    <Skeleton variant="text" className="w-1/2" />
    <Skeleton className="w-full h-10" />
  </div>
);

export const BranchCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
    <Skeleton className="w-full h-32" />
    <Skeleton variant="text" className="w-2/3" />
    <Skeleton variant="text" className="w-full" />
    <Skeleton variant="text" className="w-1/2" />
    <div className="flex gap-2">
      <Skeleton className="w-24 h-8" />
      <Skeleton className="w-24 h-8" />
    </div>
  </div>
);

export const ContactFormSkeleton: React.FC = () => (
  <div className="space-y-4">
    <Skeleton className="w-full h-12" />
    <Skeleton className="w-full h-12" />
    <Skeleton className="w-full h-12" />
    <Skeleton className="w-full h-32" />
    <Skeleton className="w-32 h-12" />
  </div>
);

export default Skeleton;