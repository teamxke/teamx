import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img src="/logo.png" alt="logo" className="w-8 h-8 mr-1" />
      <h1 className="text-xl font-bold text-foreground/80">
        Team<span className="text-primary">X</span>
      </h1>
    </div>
  );
};

export default Logo;
