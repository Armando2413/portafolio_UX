import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// Inicializar GA4 con tu ID de medición
const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (TRACKING_ID) {
      ReactGA.initialize(TRACKING_ID);
    }
  }, []);

  useEffect(() => {
    if (TRACKING_ID) {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search
      });
    }
  }, [location]);

  return null;
};

export default Analytics;