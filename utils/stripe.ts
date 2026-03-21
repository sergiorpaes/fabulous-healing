const isLive = import.meta.env.VITE_STRIPE_MODE === 'live';

export const PAYMENT_LINKS = {
  MANTRAS: isLive 
    ? import.meta.env.VITE_STRIPE_LINK_MANTRAS_LIVE 
    : import.meta.env.VITE_STRIPE_LINK_MANTRAS_TEST,
  EBOOK: isLive 
    ? import.meta.env.VITE_STRIPE_LINK_EBOOK_LIVE 
    : import.meta.env.VITE_STRIPE_LINK_EBOOK_TEST,
};

export const handleCheckout = (url: string) => {
  if (!url) {
    console.error('Payment Link is missing. Check your environment variables.');
    alert('Erro: Link de pagamento não configurado.');
    return;
  }

  // Direct redirection to Stripe Payment Link
  window.location.href = url;
};
