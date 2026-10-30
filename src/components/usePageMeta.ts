import { useEffect } from 'react';
import { SITE_CONFIG } from '../data/siteConfig';

export function usePageMeta(pageTitle: string, description: string) {
  useEffect(() => {
    const fullTitle = pageTitle.includes(SITE_CONFIG.companyName)
      ? pageTitle
      : `${pageTitle} | ${SITE_CONFIG.companyName}`;

    document.title = fullTitle;

    const setMetaContent = (selector: string, content: string) => {
      const element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', content);
      }
    };

    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', fullTitle);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[name="twitter:title"]', fullTitle);
    setMetaContent('meta[name="twitter:description"]', description);

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pageTitle, description]);
}
