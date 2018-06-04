//import { Component, OnInit } from '@angular/core';
//import { Http, Headers } from '@angular/http';
//import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
//import { Router, ActivatedRoute } from '@angular/router';

//import { Organization } from './OrganizationModel';
//import { IOrganization } from '../../../shared/Organization.model';
//import { OrganizationService } from './organization.service';

//@Component({
//    selector: 'editOrganization',
//    templateUrl: './EditOrganization.component.html',
//    styleUrls: ['../ProductKey.component.css'],
//    providers: [OrganizationService]
//})
//export class EditOrganizationComponent implements OnInit {
//    Organizations: IOrganization[];
//    organizationForm: FormGroup;
//    errorMessage: any;
//    organizationId: number;
//    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _organizationService: OrganizationService, private _router: Router) {
//        if (this._avRoute.snapshot.params["organizationId"]) {
//            this.organizationId = this._avRoute.snapshot.params["organizationId"];
//        } 


//        this.organizationForm = this._fb.group({
//            organizationId: 0,
//            organizationName: ['', [Validators.required]],
//            legalName: ['', [Validators.required]],
//            dateAndTime: ['', [Validators.required]]

//        })

//    }



//    ngOnInit() {
//        if (this.organizationId > 0) {
//            this._organizationService.getOrganizationById(this.organizationId)
//                .subscribe(resp => this.organizationForm.setValue(resp)
//                , error => this.errorMessage = error);
//        } 
//    }

//    save() {
//        this._organizationService.updateOrganization(this.organizationForm.value)
//            .subscribe((data) => {
//                this._router.navigate(['/addOrganization']);
//                this.organizationForm.reset();
//            }, error => this.errorMessage = error)
//    }

//    cancel() {
//        this.organizationForm.reset();
//    }
//    get organizationName() { return this.organizationForm.get('organizationName'); }
//    get legalName() { return this.organizationForm.get('legalName'); }
//    get dateAndTime() { return this.organizationForm.get('dateAndTime'); }

//}
