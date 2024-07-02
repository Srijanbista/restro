import { HTMLAttributes, ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}) => {
  return (
    <div
      className={`max-w-xs md:max-w-screen-md xl:max-w-screen-xl mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
