import routeComponents from '@wiki/pages';
import { Layout, LayoutNoNav } from '@core/Layout';

export default [
  {
    Component: Layout,
    children: [
      { index: true, Component: routeComponents.Homepage },
      { path: 'about', Component: routeComponents.About },
      { path: 'topics', Component: routeComponents.Topics },
      { path: 'contact', Component: routeComponents.Contact },
    ],
  },
  {
    // TODO Add query param
    Component: LayoutNoNav,
    children: [
      { path: 'article/editor', Component: routeComponents.ArticleEditor },
    ],
  },
];
