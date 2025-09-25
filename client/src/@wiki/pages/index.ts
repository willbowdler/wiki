import { ReactElement } from 'react';

import Homepage from './Homepage';
import About from './About';
import Contact from './Contact';
import Topics from './Topics';

const routeComponents: Record<string, () => ReactElement> = {
  Homepage,
  About,
  Contact,
  Topics,
};

export default routeComponents;
