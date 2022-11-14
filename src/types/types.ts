type IAvia = {
    setFindInfo: (a: {
        from: string,
        to: string,
        start: string,
        finish: string,
    }) => void
};

type IAviaInfo = {
    findInfo: {
        from: string,
        start: string,
        to: string,
        finish: string
    }
};

type IAviaInfoFooter = {
    setTimeDeparture: (a: string) => void,
    setTimeArrive: (a: string) => void
};

export type {
    IAvia,
    IAviaInfo,
    IAviaInfoFooter
  };
  