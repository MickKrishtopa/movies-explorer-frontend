const EMAIL_REGEX = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/;
// /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const INITIAL_CARDS_QTY = {
    MOBILE: 5,
    TABLET: 8,
    DESKTOP: 12,
};

const CARDS_PER_ROW = {
    MOBILE: 1,
    TABLET: 2,
    DESKTOP: 3,
};

const SCREEN_WIDTH = {
    MOBILE: 320,
    TABLET: 750,
    DESKTOP: 900,
};

export { INITIAL_CARDS_QTY, CARDS_PER_ROW, SCREEN_WIDTH, EMAIL_REGEX };
