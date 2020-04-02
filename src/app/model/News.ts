import {Feed} from "./Feed";
import {Item} from "./Item";

export class News {
    status: string;
    feed: Feed;
    items: Array<Item>;
}