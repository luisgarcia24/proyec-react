import { Result } from '../../util';

const NotAvailableResult = () => (
  <Result>
    <p style={{textAlign: 'center'}}>
      Solicitud de pago no está disponible en su navegador.
    </p>
    {window.location.protocol !== 'https:' && (
      <p style={{textAlign: 'center'}}>
        Intente usar
        <a href="https://ngrok.com" target="_blank" rel="noopener noreferrer" style={{margin: '0 5px'}}>
          ngrok
        </a>
        para ver esta demostración en https.
      </p>
    )}
  </Result>
);

export default NotAvailableResult;
