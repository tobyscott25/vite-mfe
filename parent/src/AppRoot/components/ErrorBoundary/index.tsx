import { ReactNode, Component, ErrorInfo } from "react";
import DefaultErrorFallback from "./DefaultFallback";

interface ErrorBoundaryProps {
  fallback?: ReactNode; // if you want to customise the fallback UI
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { fallback } = this.props;

    if (hasError) {
      return fallback ? fallback : <DefaultErrorFallback />;
    }

    // Render the children if no error occurred
    return this.props.children;
  }
}

export default ErrorBoundary;
