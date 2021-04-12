import { useLocation } from 'react-router-dom';

export default function usePathname() {
  const location = useLocation();
  return location.pathname;
}
