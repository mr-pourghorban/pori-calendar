import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toPersianPipe } from '../../utils/topersian.pipe';
import { PoriJalaliCalendarComponent } from './jalali-calendar';
import { RangeService } from '../../utils/range.service';

@NgModule({
  declarations: [PoriJalaliCalendarComponent, toPersianPipe],
  imports: [CommonModule],
  exports: [PoriJalaliCalendarComponent],
  providers: [RangeService],
})
export class PoriJalaliCalendarModule { }