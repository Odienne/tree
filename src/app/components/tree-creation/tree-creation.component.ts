import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {TreeService} from "../../services/tree.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tree-creation',
  templateUrl: './tree-creation.component.html',
  styleUrls: ['./tree-creation.component.scss']
})
export class TreeCreationComponent implements OnInit {

  creationForm = this.formBuilder.group({
    name: '',
    price: ''
  });

  constructor(private formBuilder: FormBuilder, private treeService: TreeService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {name, price} = this.creationForm.value;
    if (name === null || price === null) return;

    this.treeService.createTree(this.creationForm.value).subscribe()
    this.router.navigate(['']);
    this.creationForm.reset();
  }

}
