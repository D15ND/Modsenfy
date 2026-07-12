import { Component, ReactNode } from 'react';

import styles from './ErrorBoundary.module.scss';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <p className={styles.error_msg}>Error boundary</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
