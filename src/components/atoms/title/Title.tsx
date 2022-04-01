import React from "react";

interface Props {
  text: string;
}

const Title: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
};

export default Title;
