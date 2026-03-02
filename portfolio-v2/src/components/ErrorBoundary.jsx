import { Component } from 'react';
import './ErrorBoundary.css';

/**
 * ErrorBoundary Component
 * 
 * Captura erros em runtime na árvore de componentes React e exibe fallback UI.
 * Previne o "white screen of death" fornecendo graceful degradation.
 * 
 * WCAG 2.1: 3.3.1 Error Identification (Level A)
 * Pattern: Error Boundary (React 16+)
 * 
 * @see https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    };
  }

  /**
   * Atualiza state quando erro ocorre
   */
  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  /**
   * Log de erro (pode ser enviado para serviço de monitoring)
   */
  componentDidCatch(error, errorInfo) {
    // Log erro no console
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    
    // Atualiza state com detalhes do erro
    this.setState({
      error,
      errorInfo
    });

    // TODO: Enviar para serviço de logging (Sentry, LogRocket, etc)
    // Example: logErrorToService(error, errorInfo);
  }

  /**
   * Handler para reload da página
   */
  handleReload = () => {
    window.location.reload();
  };

  /**
   * Handler para voltar à home
   */
  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary-container">
            <div className="error-icon" aria-hidden="true">
              ⚠️
            </div>
            
            <h1 className="error-title">
              Oops! Algo deu errado.
            </h1>
            
            <p className="error-message">
              Desculpe pelo inconveniente. Um erro inesperado ocorreu.
              Tente recarregar a página ou voltar para a página inicial.
            </p>

            <div className="error-actions">
              <button 
                onClick={this.handleReload}
                className="btn-error btn-primary"
                aria-label="Recarregar página"
              >
                🔄 Recarregar Página
              </button>
              
              <button 
                onClick={this.handleGoHome}
                className="btn-error btn-secondary"
                aria-label="Voltar para página inicial"
              >
                🏠 Ir para Home
              </button>
            </div>

            {/* Detalhes do erro (apenas em desenvolvimento) */}
            {/* eslint-disable-next-line no-undef */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="error-details">
                <summary>Detalhes técnicos (dev only)</summary>
                <pre className="error-stack">
                  <code>
                    {this.state.error.toString()}
                    {'\n\n'}
                    {this.state.errorInfo?.componentStack}
                  </code>
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    // Renderiza children normalmente se não houver erro
    return this.props.children;
  }
}

export default ErrorBoundary;
