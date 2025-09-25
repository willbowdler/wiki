import routeComponents from '@wiki/sections';
import App from '@core/App';

export default [
  {
    Component: App,
    children: [{ index: true, Component: routeComponents.Homepage }],
  },
];
