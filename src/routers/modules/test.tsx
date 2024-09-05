// import React from "react";
// import lazyLoad from "@/routers/util/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";
import Test from "@/views/test";

// 首页模块
const testRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: "/test",
				// element: lazyLoad(React.lazy(() => import("@/views/home/index"))),
				element: <Test />,
				meta: {
					requiresAuth: true,
					title: "测试",
					key: "test"
				}
			}
		]
	}
];

export default testRouter;
