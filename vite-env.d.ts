/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STRIPE_MODE: string;
  readonly VITE_STRIPE_LINK_MANTRAS_LIVE: string;
  readonly VITE_STRIPE_LINK_MANTRAS_TEST: string;
  readonly VITE_STRIPE_LINK_EBOOK_LIVE: string;
  readonly VITE_STRIPE_LINK_EBOOK_TEST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
