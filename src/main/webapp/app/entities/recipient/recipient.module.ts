import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SchedulingReportSharedModule } from 'app/shared/shared.module';
import { RecipientComponent } from './recipient.component';
import { RecipientDetailComponent } from './recipient-detail.component';
import { RecipientUpdateComponent } from './recipient-update.component';
import { RecipientDeleteDialogComponent } from './recipient-delete-dialog.component';
import { recipientRoute } from './recipient.route';

@NgModule({
  imports: [SchedulingReportSharedModule, RouterModule.forChild(recipientRoute)],
  declarations: [RecipientComponent, RecipientDetailComponent, RecipientUpdateComponent, RecipientDeleteDialogComponent],
  entryComponents: [RecipientDeleteDialogComponent]
})
export class SchedulingReportRecipientModule {}
