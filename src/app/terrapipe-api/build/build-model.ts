export interface Build  {
  id: string;
  name: string;
  terraformModuleId: string;
  variables: TerraformVariable[];
  terraformState: string;

}

export interface TerraformVariable  {
  name: string;
  value: string;
}

