import cheerio from 'cheerio';
import HtmlNode from '../models/HtmlNode';

export default class HtmlService {
    private cheer;
    private htmlContent: string;

    constructor(htmlString: string) {
        this.cheer= cheerio.load(htmlString);
        this.htmlContent = htmlString;
    }

    getCleanedHtml(htmlContent: string): HtmlNode {
        // Load the HTML content into Cheerio
        const $ = cheerio.load(htmlContent);

        // Remove script, style, noscript, and link tags
        $('script, style, noscript, link').remove();

        // Remove HTML comments
        $('*').contents().filter((index, node) => node.nodeType === 8).remove();
    
        return new HtmlNode($.text());
    }

    getFirstElementContentBySelector(selector: string): string {
        const $ = cheerio.load(this.htmlContent);
        var element = $(selector).contents().first().text();
        return element;
    }
}