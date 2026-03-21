/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STRIPE_MODE: string;
  readonly VITE_STRIPE_PUBLIC_KEY_LIVE: string;
  readonly VITE_STRIPE_PUBLIC_KEY_TEST: string;
  readonly VITE_STRIPE_PRICE_ID_MANTRAS_LIVE: string;
  readonly VITE_STRIPE_PRICE_ID_MANTRAS_TEST: string;
  readonly VITE_STRIPE_PRICE_ID_EBOOK_LIVE: string;
  readonly VITE_STRIPE_PRICE_ID_EBOOK_TEST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
