/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

export default function Button(props) {
  const {
    onClick,
    type,
    isExternal,
    href,
    className,
    style,
    target,
    children,
  } = props;

  // const onClickHandler = () => {
  //   if (onClick) onClick();
  // };

  // if (type === "link") {
  //   if (isExternal) {
  //     return (
  //       <a
  //         href={href}
  //         className={className}
  //         style={style}
  //         target={target === "_blank" ? "_blank" : undefined}
  //         rel="noreferrer"
  //       >
  //         {children}
  //       </a>
  //     );
  //   }

  //   return (
  //     <Link href={href}>
  //       <span className={className} style={style} onClick={onClickHandler}>
  //         {children}
  //       </span>
  //     </Link>
  //   );
  // }

  return (
    <button
      className={className}
      type={type}
      style={style}
      onClick={()=>console.log('clicked')}
    >
      {children}
    </button>
  );
}

// Button.defaultProps = {
//   className: "",
//   type: "button",
//   href: "",
//   onClick: () => {},
//   target: "",
//   style: {},
//   children: "",
//   isExternal: "",
// };

// Button.propTypes = {
//   className: PropTypes.string,
//   type: PropTypes.oneOf(["button", "link", "submit", "reset"]),
//   href: PropTypes.string,
//   onClick: PropTypes.func,
//   target: PropTypes.string,
//   // eslint-disable-next-line react/forbid-prop-types
//   style: PropTypes.object,
//   children: PropTypes.string,
//   isExternal: PropTypes.bool,
// };
