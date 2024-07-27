import HomePage from '../pages/clientPages/Homepage';
import ClientLayout from '../layouts/client_layout/ClientLayout';

interface LayoutProps {
  children: React.ReactNode;
  //requiredRole?: RoleType
  //whenRoleUnAuthorized?: string
}

interface RouteProps {
  path: string;
  component: () => JSX.Element;
  layout: (children: LayoutProps) => JSX.Element;
}
const publicRoutes: RouteProps[] = [{ path: '/', component: HomePage, layout: ClientLayout }];

export { publicRoutes };
