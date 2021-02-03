import {Component, OnInit} from '@angular/core';
import {TreeService} from "../../services/tree.service";
import {Observable} from "rxjs";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-trees',
  templateUrl: './trees.component.html',
  styleUrls: ['./trees.component.scss']
})
export class TreesComponent implements OnInit {

  trees: any;
  user = this.userService.getUser();

  constructor(private treeService: TreeService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.getTrees();
  }

  private getTrees() {
    this.treeService.getTrees().subscribe(data => this.trees = data);
  }
}
