import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TreeService} from "../../services/tree.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  id: number = parseInt(this.route.snapshot.paramMap.get('id'), 0);
  tree: any;
  user = this.userService.getUser();

  constructor(private route: ActivatedRoute, private treeService: TreeService, private userService: UserService, private router: Router) {
    this.getTree();
  }

  ngOnInit(): void {
  }

  private getTree() {
    this.treeService.getTree(this.id).subscribe(data => this.tree = data);
  }

  deleteTree() {
    this.treeService.deleteTree(this.id).subscribe();
    this.router.navigate(['']);
  }

  editTree() {
    console.log('edit tree')
  }
}
