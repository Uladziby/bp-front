/** @format */

import { HeaderComponent } from "components/HeaderComponent/HeaderComponent";
import { StyledContainer } from "./Layout.styles";
import { Outlet } from "react-router-dom";

export const Layout = () => (
	<>
		<HeaderComponent />
		<StyledContainer data-testid="layout">
			<Outlet />
		</StyledContainer>
		{/*     <Footer />
		 */}{" "}
	</>
);
