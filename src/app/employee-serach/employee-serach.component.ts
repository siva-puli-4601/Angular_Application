import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { DataService } from '../data.service';

type rec = {
  username: string;
  email: string;
  role: string;
  profile: string;
};

@Component({
  selector: 'app-employee-serach',
  templateUrl: './employee-serach.component.html',
  styleUrls: ['./employee-serach.component.css']
})

export class EmployeeSerachComponent implements OnInit, OnDestroy {

  records: rec[] = [];
  page = 1;
  limit = 10;
  search = '';
  loading = false;
  allRecordsLoaded = false;
  selectedRole = '';
  roles: string[] = ['admin', 'employee', 'student'];

  private searchSubject = new Subject<string>();
  private unsubscribe$ = new Subject<void>();

  constructor(private recordsService: DataService) { }

  ngOnInit(): void {
    this.getRecords();

    this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
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
    const data = {
      page: this.page,
      limit: this.limit,
      search: this.search,
      role: this.selectedRole // Add role filtering to the request
    };

    this.recordsService.postApi('employeesearch', data).subscribe((response: any) => {
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
    const value = searchValue.target.value;
    this.searchSubject.next(value);
  }

  onRoleChange(): void {
    if(this.search=='')
    {
    this.page = 1;
    this.allRecordsLoaded = false;
    this.records = [];
    this.getRecords();
    }
    else if(this.search==='' && this.selectedRole!='')
    {
      this.records=this.records.filter((record)=>record.role=this.selectedRole);
    }
    else
    {
      this.page = 1;
      this.allRecordsLoaded = false;
      this.records = [];
      this.getRecords();
    }
    
  }
}
