import HtmlNode from "../models/HtmlNode";
import HtmlService from "./htmlService";


interface IWebScraper {
    scrape(html: string): string;

}

class  AmazonWebScraper implements IWebScraper {
    

    scrape(html: string): string {
        //const cleanedHtmlNode: HtmlNode = this.htmlService.getCleanedHtml(html);
        const price = this.getPrice(html);
        console.log(price)
        return price.toString();
    }

    private getPrice(html: string): string {
        const htmlService: HtmlService = new HtmlService(html);
        var priceWhole = htmlService.getFirstElementContentBySelector('.a-price-whole');
        var priceFraction = htmlService.getFirstElementContentBySelector('.a-price-fraction');
        const priceComplete = priceWhole + '.' + priceFraction;
        return priceComplete;
    }

}

export default AmazonWebScraper;