/**
 * Schema Component
 * Injects JSON-LD structured data into page head for SEO
 */

interface SchemaProps {
  schema: Record<string, any>;
}

export const Schema = ({ schema }: SchemaProps) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default Schema;
