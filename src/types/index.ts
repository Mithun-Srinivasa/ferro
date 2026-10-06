export interface LookbookItem {
  id: string;
  code: string;
  title: string;
  category: 'OUTERWEAR' | 'ACCESSORIES' | 'LEATHER' | 'TAILORING';
  image: string;
  aspectRatio: string;
  description: string;
  details: string[];
  materials: string;
  silhouette: string;
}

export interface JobRole {
  id: string;
  title: string;
  type: string;
  department: string;
  departmentCategory: 'FASHION' | 'ENGINEERING' | 'MARKETING' | 'FINANCE' | 'DEPLOYMENT' | 'GENERAL';
  description: string;
  requirements: string[];
  spotlight: string;
}

export interface CompetitionSubmission {
  designerName: string;
  age: string;
  city: string;
  contactEmail: string;
  phone: string;
  portfolioUrl: string;
  collectionTitle: string;
  conceptStatement: string;
  pieceDescriptions: [string, string, string, string, string];
  materialStrategy: string;
  aiPledgeAccepted: boolean;
}
