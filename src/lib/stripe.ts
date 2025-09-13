import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_live_51S1X9KF5KjPujykIhSL7RYm97WuK98aSngE1STrDqe2bPCOJ95vhIuEds6CWGDyNO0JvnpnrdIgt1Mq0nmBd5wlE00n0cUhXVs'
);

export { stripePromise };