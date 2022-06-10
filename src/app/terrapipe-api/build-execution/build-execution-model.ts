import {TerraformVariable} from '../build/build-model';

export interface BuildExecution  {
  id: string;
  buildId: string;
  logs: string[];
  variables: TerraformVariable[];
  startDate: Date;
  endDate: Date;
  status: string;

}
