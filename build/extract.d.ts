declare const REGEX_PARSER: {
    zeilen: RegExp;
    bezeichnung: RegExp;
    anschrift: {
        all: RegExp;
        liefer: RegExp;
        post: RegExp;
    };
    kontakt: RegExp;
    zusatz: {
        clean: RegExp[];
    };
};
declare const Extractors: {
    [k: string]: Function;
};
export { Extractors, REGEX_PARSER };
