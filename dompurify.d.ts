declare module 'dompurify' {
    const DOMPurify: {
      sanitize(input: string, config?: any): string;
      // Add more typings for other functions if needed
    };
    export = DOMPurify;
  }