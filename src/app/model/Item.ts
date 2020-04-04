import {Enclosure} from "./Enclosure";

export class Item {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    description: string;
    content: string;
    enclosure: Enclosure;
    categories: string[];
}