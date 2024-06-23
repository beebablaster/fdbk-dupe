import React from 'react';

interface IProps {
    name: string;
    surname: string;
}

export const AvatarCommon: React.FC<IProps> = ({ name, surname }) => {
    const a = name[0].toLocaleUpperCase();
    const b = surname[0].toLocaleUpperCase();
    return (
        <div className="avatar">
            {a + b}
        </div>
    )
}