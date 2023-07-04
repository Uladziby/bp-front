/** @format */

import { HeaderComponent } from "components/HeaderComponent/HeaderComponent";
import { StyledContainer } from "./Layout.styles";
import { Outlet } from "react-router-dom";
import { Footer } from "components/Footer/Footer";

export const Layout = () => (
	<>
		<HeaderComponent />
		<StyledContainer data-testid="layout">
			<Outlet />
		</StyledContainer>
		<Footer />
	</>
);
