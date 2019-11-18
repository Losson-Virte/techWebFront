import {Component, OnInit} from '@angular/core';
import {TreeNode} from '../shared/interfaces/treenode';
import {ComponentI} from '../shared/interfaces/component';
import {BackendService} from '../shared/services/backend.service';
import {NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder} from '@nebular/theme';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  private data: TreeNode<ComponentI>[];
  private fetchedData: ComponentI[];
  private treeRootElements: ComponentI[];
  private treeChildSorted: ComponentI[][];
  private treeRoot: string[];
  customColumn = 'name';
  defaultColumns = [ 'type', 'price', 'quantity' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  constructor(private backendservice: BackendService) {
  }

  ngOnInit() {
    // this.backendservice.fetchAllComponents().subscribe(value => this.fetchedData = value);
    // TODO: FIX BACK
    this.fetchedData = [{"id":"5dd2ed486b04360db629486d","type":"GPU","name":"RTX 2080","price":2000},
      {"id":"5dd2ed486b04360db629486e","type":"GPU","name":"GeForce Titan","price":1080},
      {"id":"5dd2ed486b04360db629486f","type":"GPU","name":"AMD Cheap","price":200},
      {"id":"5dd2ed486b04360db6294870","type":"Processor","name":"I9 9000","price":1500},
      {"id":"5dd2ed486b04360db6294871","type":"CPU","name":"I7 8000","price":1000},
      {"id":"5dd2ed486b04360db6294872","type":"CPU","name":"Intel Cheap","price":100},
      {"id":"5dd2ed486b04360db6294873","type":"MotherBoard","name":"Aorus Xtreme","price":1000},
      {"id":"5dd2ed486b04360db6294874","type":"MotherBoard","name":"Asus X299","price":700},
      {"id":"5dd2ed486b04360db6294875","type":"MotherBoard","name":"MSI Cheap","price":50}];
    this.dataSorting();
    console.log('this.treeRoot');
    console.log(this.treeRoot);
    this.treeChildSorted = [];
    this.treeRoot.forEach(k => this.treeChildSorted[this.treeRoot.indexOf(k)] = [])
    this.fetchedData.filter(k => this.treeChildSorted[this.treeRoot.indexOf(k.type)].push(k));
    console.log('this.treeChildSorted');
    console.log(this.treeChildSorted);
    this.treeRootElements = [];
    this.treeRoot.forEach(k =>
      this.treeRootElements[this.treeRoot.indexOf(k)] = {
        name: k,
        type: '',
        price: null,
        quantity: '' + this.treeChildSorted[this.treeRoot.indexOf(k)].length
      });
    this.data = [];
    console.log('this.treeRootElements');
    console.log(this.treeRootElements);
    this.treeRoot.forEach(k => this.data[this.treeRoot.indexOf(k)] = {
      data: this.treeRootElements[this.treeRoot.indexOf(k)],
      children: this.treeNodeConversionArray(this.treeChildSorted[this.treeRoot.indexOf(k)]),
    });
    console.log(this.data);
  }

  dataSorting(): void {
    this.treeRoot = Array.from(this.fetchedData, k => k.type).filter(this.onlyUnique);
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  treeNodeConversion(input: ComponentI): TreeNode<ComponentI> {
    return {data: input};
  }
  treeNodeConversionArray(input: ComponentI[]): TreeNode<ComponentI>[] {
    const children: TreeNode<ComponentI>[] = [];
    input.forEach(k => children[children.length] = this.treeNodeConversion(k));
    return children;
  }
}
