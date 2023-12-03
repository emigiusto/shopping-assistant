import * as cheerio from 'cheerio';

class HtmlNode {
    private $: cheerio.CheerioAPI;
    private htmlString: string;

    constructor(node: string) {
        this.$ = cheerio.load(node);
        this.htmlString = node;
    }

    getContent(): string {
        return this.$.text();
    }

    findFirstElementContentById(id: string): string {
        const found = this.$(`#${id}`).text();
        return found;
    }

    getFirstElementContentBySelector(selector: string): string {
        const $ = cheerio.load('<h2 class="title">Hello world</h2>');
        var a = $('h2').text();
        console.log(a)
        const $selected = $(selector);
        const element = $selected.text();
        console.log("here", element)
        return element;
    }

    // Additional methods...
}

export default HtmlNode;
