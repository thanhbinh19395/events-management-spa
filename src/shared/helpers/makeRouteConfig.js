const makeRouteConfig = (routes, parentRoute) => routes.map((route) => {
  if (typeof route.path === 'function') {
    const pathResult = route.path(parentRoute || '').replace('//', '/');
    return {
      path: pathResult,
      component: route.component,
      exact: route.exact,
      routes: route.routes ? makeRouteConfig(route.routes, pathResult) : [],
      loadData: route.loadData,
    };
  }
  const pathResult = `${parentRoute}${route.path}`;
  return {
    path: pathResult,
    component: route.component,
    exact: route.exact,
    routes: route.routes ? makeRouteConfig(route.routes, pathResult) : [],
    loadData: route.loadData,
  };
});

export default makeRouteConfig;
