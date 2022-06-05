export interface TerraformModule  {
  id: string;
  name: string;
  branch: string;
  url: string;
  variables: TerraformModuleVariable[];
  privateKey: string;
  keyPassphrase: string;
}

export interface TerraformModuleVariable  {
  id: string;
  name: string;
  defaultValue: string;
  type: string;
  required: boolean;
  sensitive: boolean;
  description: string;
}

