/** @format */

import * as Toast from "@radix-ui/react-toast";
import "./AToast.style.css";
import { AToastProps } from "./type";
import { StyledContent, StyledContext } from "./AToast.style";

export const AToast = ({ title, isOpen, context, icon }: AToastProps) => {
	return (
		<Toast.Provider swipeDirection="right">
			<StyledContent className="ToastRoot" open={isOpen}>
				<Toast.Title className="ToastTitle">{title}</Toast.Title>
				<Toast.Description asChild>
					<StyledContext size={12} weight={500} lineHeight={16}>
						{icon}
						{context}
					</StyledContext>
				</Toast.Description>
				<Toast.Action
					className="ToastAction"
					asChild
					altText="Goto schedule to undo"
				></Toast.Action>
			</StyledContent>
			<Toast.Viewport className="ToastViewport" />
		</Toast.Provider>
	);
};
