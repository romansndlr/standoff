import * as React from "react";
import classNames from "classnames";

interface EnrichedChildren {
  className: string;
  hasShadow: boolean;
  style: React.CSSProperties;
}

const Deck: React.FC = ({ children }) => (
  <div className="relative h-[156px] w-[98px]">
    {React.Children.map(
      children as React.ElementType,
      (child: React.ElementType, index) => {
        if (!React.isValidElement<EnrichedChildren>(child)) {
          return child;
        }

        const isFirstElement = index === 0;

        const className = classNames(
          "absolute",
          {
            "shadow-xl": isFirstElement,
          },
          child.props.className
        );

        const style = {
          transform:
            index === 0
              ? "none"
              : `translate(${index * 1.5}px, ${index * 1.5}px)`,
        };

        return React.cloneElement<EnrichedChildren>(child, {
          className: className,
          hasShadow: isFirstElement,
          style: style,
        });
      }
    )}
  </div>
);

export default Deck;
