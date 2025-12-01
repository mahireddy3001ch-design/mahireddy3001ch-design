import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import ProjectCaseStudy from '../pages/ProjectCaseStudy';
import About from '../pages/About';
import Certifications from '../pages/Certifications';
import Resume from '../pages/Resume';
import Testimonials from '../pages/Testimonials';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'portfolio', Component: Portfolio },
      { path: 'project/:id', Component: ProjectCaseStudy },
      { path: 'about', Component: About },
      { path: 'certifications', Component: Certifications },
      { path: 'resume', Component: Resume },
      { path: 'testimonials', Component: Testimonials },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);
