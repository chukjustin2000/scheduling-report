import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'report',
        loadChildren: () => import('./report/report.module').then(m => m.SchedulingReportReportModule)
      },
      {
        path: 'recipient',
        loadChildren: () => import('./recipient/recipient.module').then(m => m.SchedulingReportRecipientModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class SchedulingReportEntityModule {}
