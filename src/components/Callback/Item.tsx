import React from 'react';

interface ItemProps {
    item: string;
    onClick: (item: string) => void;
}

const Item: React.FC<ItemProps> = ({ item, onClick }) => {
    return <li onClick={() => onClick(item)}>{item}</li>;
};

export default Item;
