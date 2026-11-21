import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Portfolio runtime error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#060709] text-zinc-100 flex items-center justify-center p-6 text-center">
          <div className="max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/70 p-8">
            <p className="font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
              System Recovery
            </p>
            <h1 className="font-display text-2xl font-bold text-white mb-3">
              Something went wrong
            </h1>
            <p className="text-sm text-zinc-400 mb-6">
              A rendering error occurred. Reloading the page restores the experience cleanly.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 text-zinc-950 font-mono text-xs font-semibold hover:bg-emerald-400 transition-colors"
            >
              Reload Portfolio
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
