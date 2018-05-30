import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Organization} from './OrganizationModel';
import { IOrganization } from '../../../shared/Organization.model';
import { OrganizationService} from './organization.service';

@Component({
    selector: 'addOrganization',
    templateUrl: './AddOrganization.component.html',
    styleUrls: ['../ProductKey.component.css'],
    providers: [OrganizationService]
})
export class AddOrganizationComponent implements OnInit {
    organizationForm: FormGroup;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _organizationService: OrganizationService, private _router: Router) {



        this.organizationForm = this._fb.group({
            organizationId: 0,
            organizationName: ['', [Validators.required]],
            legalName: ['', [Validators.required]],
            dateAndTime: ['', [Validators.required]]

        }) 

    }



    ngOnInit() { }

    save() {
        this._organizationService.saveOrganization(this.organizationForm.value)
            .subscribe((data) => {
                this._router.navigate(['/addOrganization']);
                this.organizationForm.reset();
            }, error => this.errorMessage = error)
        }

    cancel() {
        this.organizationForm.reset();
    }
    get organizationName() { return this.organizationForm.get('organizationName'); } 
    get legalName() { return this.organizationForm.get('legalName'); } 
    get dateAndTime() { return this.organizationForm.get('dateAndTime'); } 

}
