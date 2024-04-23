import type { FC } from "react";

interface DummyComponentProps {
  firstName: string;
}

const DummyComponent: FC<DummyComponentProps> = ({ firstName }) => {
  return <p>Hello {firstName} !</p>;
};

export default DummyComponent;
