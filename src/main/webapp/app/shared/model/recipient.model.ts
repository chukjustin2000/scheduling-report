import { IReport } from 'app/shared/model/report.model';

export interface IRecipient {
  id?: number;
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
  report?: IReport;
}

export class Recipient implements IRecipient {
  constructor(
    public id?: number,
    public name?: string,
    public email?: string,
    public address?: string,
    public phone?: string,
    public report?: IReport
  ) {}
}
