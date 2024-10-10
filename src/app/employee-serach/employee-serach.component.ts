import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee-serach',
  templateUrl: './employee-serach.component.html',
  styleUrls: ['./employee-serach.component.css']
})
export class EmployeeSerachComponent implements OnInit {

  records: any[] = [];
  page = 1;
  limit = 10;
  search = '';
  loading = false;
  allRecordsLoaded = false;

  private searchSubject = new Subject<string>();
  private unsubscribe$ = new Subject<void>();

  constructor(private recordsService:DataService ) { }

  ngOnInit(): void {
    this.getRecords();

    this.searchSubject.pipe(
      debounceTime(300), // Wait 300ms after the last event before emitting the last event
      distinctUntilChanged(), // Only emit if the current value is different from the last
      takeUntil(this.unsubscribe$)
    ).subscribe(searchTerm => {
      this.search = searchTerm;
      this.page = 1;
      this.allRecordsLoaded = false;
      this.records = [];
      this.getRecords();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getRecords(): void {
    if (this.loading || this.allRecordsLoaded) return;

    this.loading = true;
    this.page, this.limit, this.search
    const data={
     "page": this.page,
     "limit": this.limit,
     "search": this.search,
     
    }
    this.recordsService.postApi("employeesearch",data)
      .subscribe((response: any) => {
        if (response.message.length < this.limit) {
          this.allRecordsLoaded = true;
        }
        this.records = [...this.records, ...response.message];
        this.loading = false;
      });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
      this.page++;
      this.getRecords();
    }
  }

  onSearchChange(searchValue: any): void {
    const value=searchValue.target.value;
    this.searchSubject.next(value);
  }
}