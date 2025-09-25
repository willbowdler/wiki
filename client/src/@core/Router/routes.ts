import routeComponents from '@wiki/pages';
import App from '@core/App';

export default [
  {
    Component: App,
    children: [
      { index: true, Component: routeComponents.Homepage },
      { path: 'about', Component: routeComponents.About },
      { path: 'topics', Component: routeComponents.Topics },
      { path: 'contact', Component: routeComponents.Contact },
    ],
  },
];
