import { Dispatch, FC, SetStateAction } from "react";
import { FAQType } from "../App";

interface ItemProps {
    faq: FAQType;
    index: number;
    currOpen: number | null;
    setCurrOpen: Dispatch<SetStateAction<number | null>>
}

const Item: FC<ItemProps> = function (props) {
	const {
		faq,
		index,
		currOpen,
		setCurrOpen
	} = props;

	const isOpen = index === currOpen;

	const handleToggle = () => {
		setCurrOpen(isOpen ? null : index);
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