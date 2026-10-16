interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
}

export function Container({ children, className = "", maxWidth = "max-w-7xl" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full ${maxWidth} px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
