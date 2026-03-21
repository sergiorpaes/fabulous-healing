import { loadStripe } from '@stripe/stripe-js';

const isLive = import.meta.env.VITE_STRIPE_MODE === 'live';

const STRIPE_PUBLIC_KEY = isLive 
  ? import.meta.env.VITE_STRIPE_PUBLIC_KEY_LIVE 
  : import.meta.env.VITE_STRIPE_PUBLIC_KEY_TEST;

export const PRICE_IDS = {
  MANTRAS: isLive 
    ? import.meta.env.VITE_STRIPE_PRICE_ID_MANTRAS_LIVE 
    : import.meta.env.VITE_STRIPE_PRICE_ID_MANTRAS_TEST,
  EBOOK: isLive 
    ? import.meta.env.VITE_STRIPE_PRICE_ID_EBOOK_LIVE 
    : import.meta.env.VITE_STRIPE_PRICE_ID_EBOOK_TEST,
};

let stripePromise: any;

const getStripe = () => {
  if (!stripePromise) {
    if (!STRIPE_PUBLIC_KEY) {
      console.error('Stripe Public Key is missing. Check your environment variables.');
      return null;
    }
    stripePromise = loadStripe(STRIPE_PUBLIC_KEY);
  }
  return stripePromise;
};

export const handleCheckout = async (priceId: string) => {
  if (!priceId) {
    console.error('Price ID is missing. Check your environment variables.');
    alert('Erro: ID do produto não configurado.');
    return;
  }

  const stripe = await getStripe();
  if (!stripe) return;
  
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: priceId, quantity: 1 }],
    mode: 'payment',
    successUrl: `${window.location.origin}/produtos?success=true`,
    cancelUrl: `${window.location.origin}/produtos?canceled=true`,
  });

  if (error) {
    console.error('Stripe Checkout Error:', error);
    alert('Erro ao redirecionar para o checkout: ' + error.message);
  }
};
