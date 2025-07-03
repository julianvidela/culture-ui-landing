export interface Component {
  id: string;
  name: string;
  description: string;
  slug: string;
  imageURL: string;
  installationCli: string;
  usageExample: string;
  advancedUsage: string;
  isPremium: boolean;
  properties: ParsedProp[];
}

export interface ParsedProp {
  name: string;
  type: string;
  description: string;
  required: boolean;
}