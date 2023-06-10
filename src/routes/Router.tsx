/** @format */

import { Route, Routes } from "react-router-dom";
import { MAIN_PAGE, NOT_FOUND_PAGE, ROOT_PAGE } from "utils/path";
import { Layout } from "./Layout/Layout";
import { Suspense } from "react";
import { HomePage } from "./HomePage/HomePage";

const preload = <div>Загрузка...</div>;
const notFound = 404;

export const Router = () => {
	return (
		<Routes>
			<Route path={ROOT_PAGE} element={<Layout />}>
				<Route
					index
					element={
						<Suspense fallback={preload}>
							<HomePage />
						</Suspense>
					}
				/>
			</Route>
			<Route path={NOT_FOUND_PAGE} element={notFound} />
		</Routes>
	);
};
