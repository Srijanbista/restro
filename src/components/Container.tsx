import { HTMLAttributes, ReactNode } from "react";

const ContainerWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}) => {
  return (
    <div
      className={`max-w-xs sm:max-w-screen-sm md:max-w-screen-md xl:max-w-screen-xl mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerWrapper;
