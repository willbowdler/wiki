import routeComponents from '@wiki/pages';
import { App, AppWithoutNav } from '@core/App';

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
  {
    // TODO Add query param
    Component: AppWithoutNav,
    children: [
      { path: 'article/editor', Component: routeComponents.ArticleEditor },
    ],
  },
];
