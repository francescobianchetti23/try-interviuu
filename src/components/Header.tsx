
import React from "react";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // Header vuoto per rispettare la richiesta di eliminare completamente 
  // la barra superiore con logo e bottoni
  return null;
};

export default Header;
