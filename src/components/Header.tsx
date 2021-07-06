import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <div className="buttons">
        <button className="button is-primary">Primary</button>
        <button className="button is-link">Link</button>
        <button className="button is-info">Info</button>
        <button className="button is-success">Success</button>
        <button className="button is-warning">Warning</button>
        <button className="button is-danger">Danger</button>
        <button className="button is-black">Black</button>
        <button className="button is-white">White</button>
        <button className="button is-dark">Dark</button>
        <button className="button is-light">Light</button>
      </div>
    </>
  );
};

export {};
