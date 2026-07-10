import { Link } from 'react-router';

import Button from '@/components/ui/Button/Button';
import { ROUTE_PATHS } from '@/routes/routePaths';

import styles from './ErrorBoundary.module.scss';

const ErrorBoundary = () => {
  return (
    <div className={styles.content}>
      <div className={styles.box}>
        <h1 className={styles.title}>Error Boundary</h1>
        <p className={styles.description}>This is backup UI page</p>
        <Link to={ROUTE_PATHS.HOME}>
          <Button disabled={false}>Go back</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorBoundary;
