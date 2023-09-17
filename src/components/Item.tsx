import { FC, useState } from "react";
import { FAQType } from "../App";

interface ItemProps {
    faq: FAQType;
    index: number;
}

const Item: FC<ItemProps> = function (props) {
	const {
		faq,
		index,
	} = props;

	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleToggle = () => {
		setIsOpen(prevState => !prevState);
	};

	const classNameString = isOpen ? "item open" : "item";
	const numberString = index < 9 ? `0${index + 1}` : index + 1;
	const icon = isOpen ? "-" : "+";
    
	return (
		<div 
			className={classNameString}
			onClick={handleToggle}
		>
			<p className="number">{numberString}</p>
			<p className="title">{faq.title}</p>
			<p className="icon">{icon}</p>

			{isOpen && <div className="content-box">{faq.text}</div>}
		</div>
	);
};

export default Item;