import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-abyssal flex items-center justify-center px-5">
          <div className="text-center">
            <div className="w-16 h-16 bg-electric-cyan rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-abyssal text-xl font-bold">AL</span>
            </div>
            <h1 className="text-2xl font-medium text-ice-white mb-3">
              Algo salió mal
            </h1>
            <p className="text-steel-gray mb-6">
              Estamos trabajando para solucionarlo.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-electric-cyan text-abyssal text-sm font-medium rounded-full px-6 py-2.5 hover:bg-electric-cyan/90 transition-colors"
            >
              Recargar página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
