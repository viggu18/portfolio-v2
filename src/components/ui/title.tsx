import React, { FC, ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: string;
}

const Title: FC<TitleProps> = ({ children, className }) => {
  return (
    <div className="w-full mb-2">
      <h2
        className={`text-xl font-bold leading-7 text-gray-900 dark:text-white sm:truncate sm:text-3xl sm:tracking-tight ${
          className ?? ""
        }`}
      >
        {children}
      </h2>
    </div>
  );
};

export default Title;
