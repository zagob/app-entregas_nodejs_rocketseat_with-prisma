declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SECRET_TOKEN_CLIENT: string;
      SECRET_TOKEN_DELIVERYMAN: string;
    }
  }
}

export {};
