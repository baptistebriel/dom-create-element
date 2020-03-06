export = create;

type DomCreateElement = (CreateProperties) => HTMLElement;

type DomCreateElementBase = {
    attr?: Array<[string, string]>;
};

type DomCreateElementCommon = DomCreateElementBase & {
    children?: Array<HTMLElement|HTMLAnchorElement|HTMLImageElement>
    html?: string;
};

type DomCreateElementOther = DomCreateElementCommon & {
    selector: string;
};

type DomCreateElementImage = DomCreateElementBase & {
    selector: 'img' | 'IMG';
    src?: string;
    lazyload?: boolean;
};

type DomCreateElementAnchor = DomCreateElementCommon & {
    selector: 'a' | 'A';
    link?: string;
    target?: string;
};

declare function create(params:DomCreateElementImage): HTMLImageElement;
declare function create(params:DomCreateElementAnchor): HTMLAnchorElement;
declare function create(params:DomCreateElementOther): HTMLElement;