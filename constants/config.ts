export const CONFIG = {
    /**
     * DIGITAL LOCK SYSTEM
     * Set to true to enable the corporate access restriction overlay.
     * Set to false to allow normal access to the pitch deck.
     */
    IS_LOCKED: true,

    /**
     * AUTHENTICATION TEXTS
     */
    LOCK_TITLE: "ACESSO CORPORATIVO RESTRITO",
    LOCK_MESSAGE: "A visualização desta apresentação estratégica foi limitada devido à expiração do token de licenciamento de desenvolvimento. Por favor, contate o administrador técnico para renovação.",
    LOCK_ERROR_ID: "402-AUTH-PENDING"
};
