export default (routes, parentRoute) => {
  return routes.map((route) => {
    if (typeof route.path === 'function') {
      const pathResult = route.path(parentRoute || '').replace('//', '/');
      return {
        path: pathResult,
        component: route.component,
        exact: route.exact,
        routes: route.routes ? routes(route.routes, pathResult) : [],
      };
    }
    const pathResult = `${parentRoute}${route.path}`;
    return {
      path: pathResult,
      component: route.component,
      exact: route.exact,
      routes: route.routes ? routes(route.routes, pathResult) : [],
    };
  });
}