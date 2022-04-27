import React, { type HTMLProps } from 'react';

type ParagraphProps = HTMLProps<HTMLParagraphElement>;

export const Paragraph = (props: ParagraphProps) => {
  return <p {...props} />;
};
