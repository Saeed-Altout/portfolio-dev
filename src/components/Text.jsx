export const TextParagraph = (props) => {
  return (
    <p
      className={`${props.StyleText} leading-loose text-gray-800 text-lg dark:text-gray-200`}
    >
      {props.children}
    </p>
  );
};
export const TextH3 = (props) => {
  return (
    <h3 className={`${props.StyleText} text-2xl dark:text-white md:text-3xl`}>
      {props.children}
    </h3>
  );
};
export const TextH1 = (props) => {
  return (
    <h1
      className={`${props.StyleText} text-5xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl`}
    >
      {props.children}
    </h1>
  );
};

export const TextImportant = (props) => {
  return (
    <span className={`${props.StyleText} text-teal-500`}>{props.children}</span>
  );
};
