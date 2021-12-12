import * as React from "react";
import classNames from "classnames";

const Front: React.FC = ({ children }) => (
  <div className="box-border flex flex-col items-center justify-center w-full h-full bg-white border-4 border-[#ff0083] rounded-[6px]">
    <p className="text-[36px] font-bold text-[#ff0083]">{children}</p>
  </div>
);

const Back: React.FC = () => (
  <div className="w-full h-full rounded-[6px] bg-gradient-to-tr from-[#ff0083] to-[#fff]" />
);

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  hasShadow?: boolean;
}

interface CardStatic {
  Front: React.FC;
  Back: React.FC;
}

const Card: React.FC<CardProps> & CardStatic = ({
  children,
  className,
  hasShadow = true,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classNames(
        "box-border h-[136px] w-[98px] rounded-[6px] border border-black/25",
        {
          "shadow-[rgba(0,0,0,0.5)_-2px_-2px_3px]": hasShadow,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

Card.Front = Front;
Card.Back = Back;

export default Card;
