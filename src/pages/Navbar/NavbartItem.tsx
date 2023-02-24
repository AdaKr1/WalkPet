import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarItemProps {
    isDarkModeOn: boolean;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ isDarkModeOn }) => {
    return <>{isDarkModeOn ? 'Dark' : 'Light'}</>;
}