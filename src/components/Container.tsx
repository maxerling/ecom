import React from "react";

interface ContainerProps {}

export const Container: React.FC<ContainerProps> = () => {
  return (
    <>
      <div className="columns">
        <div className="column">First column</div>
        <div className="column">Second column</div>
        <div className="column">Third column</div>
        <div className="column">Fourth column</div>
      </div>
    </>
  );
};

export {};
