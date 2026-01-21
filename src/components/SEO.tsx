interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO = ({
  title = "Angel.dev | Portfolio de Desarrollador",
  description = "Portfolio de Angel Berretta, Desarrollador Web Full Stack.",
  image = "/og-image.png",
  url = "https://angelberretta.dev"
}: SEOProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Keywords */}
      <meta name="keywords" content="desarrollador web, react, typescript, portfolio, frontend" />
      
      {/* Author */}
      <meta name="author" content="Angel Berretta" />
      <link rel="canonical" href={url} />
    </>
  );
};

export default SEO;