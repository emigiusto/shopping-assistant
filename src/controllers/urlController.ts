import { Request, Response } from 'express';
import UrlService from '../services/urlService';
import AmazonWebScraper from '../services/webScraperService';

export const getUrlInfo = async (req: Request, res: Response): Promise<void> => {
  const { url, selectors } = req.body;
  const urlService = new UrlService();
  const scraper = new AmazonWebScraper();
  
  try {
    const htmlContentString = await urlService.fetchHTMLContent(url);

    const contentNode = scraper.scrape(htmlContentString);

    res.json({
      success: true,
      data: contentNode,
    });

  } catch (error) {
    console.error(error);

    let errorMessage = 'Internal Server Error';

    res.status(500).json({
      success: false,
      error: errorMessage,
    });
  }
};
