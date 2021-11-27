import { Component, OnInit } from '@angular/core';
import { ICategoryStructure } from './MyApp.model';

declare  var jQuery:  any;
import * as $ from "jquery";
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent
{
  public categories: ICategoryStructure[] = [
    {
      id: 1,
      isDropDownMenu: false,
      description: "description1",
      dropDownTarget: "",
      subMenuList: []
    },
    {
      id: 2,
      isDropDownMenu: false,
      description: "description2",
      dropDownTarget: "",
      subMenuList: []
    },
    {
      id: 3,
      isDropDownMenu: true,
      description: "description3",
      dropDownTarget: "description3Target",
      subMenuList: ["subDescription1", "subDescription2", "subDescription3"]
    }
  ];
}

