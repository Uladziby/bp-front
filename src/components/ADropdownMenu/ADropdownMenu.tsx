/** @format */

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import "./styles.css";
import { INavList } from "components/HeaderComponent/type";
import { StyledNavHashLink } from "./ADropdownMenu.styles";

interface ADropdownMenuProps {
	children: INavList[];
	className?: string;
}

const ADropdownMenu = ({ children, className }: ADropdownMenuProps) => {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button className={`IconButton ${className}`} aria-label="Customise options">
					<HamburgerMenuIcon />
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content className="DropdownMenuContent" sideOffset={5} style={{ zIndex: 2 }}>
					{children.map(({ title, href }) => (
						<DropdownMenu.Item key={title} className="DropdownMenuItem">
							<StyledNavHashLink to={`#${href}`} smooth>
								{title}
							</StyledNavHashLink>
						</DropdownMenu.Item>
					))}
					<DropdownMenu.Arrow className="DropdownMenuArrow" />
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default ADropdownMenu;