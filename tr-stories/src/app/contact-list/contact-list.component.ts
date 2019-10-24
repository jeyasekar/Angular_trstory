import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html', 
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  projectId;
  sprintId; 
  private projects :any;
  public edited = false;
  public tableVisible = false;
  selectedelement;
  stories;
  selectedContact;
  sprints:{ id: number, name: string }[];
  
  constructor(public dataService: DataService) { 
    this.projects = [
      {id: 0, name: "Select"},
      {id: 1, name: "project1"},
      {id: 2, name: "project2"}
  ];
  this.projectId = this.projects[0];
  }

  ngOnInit() {
    console.log("asda");
    this.stories = this.dataService.getContacts();  
    console.log("dsfs"+this.stories);  
  }
  public selectContact(contact){
    this.selectedContact = contact;
  }

  project(){
    this.tableVisible=false;
    this.edited = true;
    this.sprints= [
      {id: 0, name: "Select"},
      {id: 1, name: "sprint1"},
      {id: 2, name: "sprint2"}
  ];
  
    this.sprintId = this.sprints[0];
  
  console.log(this.projectId.id)
  }
  
  sprint(){
    
    
    // get sprint name via rest call using project id

    
  if(this.sprintId==null){
  this.sprintId = this.sprints[0];
}else{
 this.selectedelement=this.sprints.findIndex(element => element.id == this.sprintId.id) ;
 
 //console.log("index:"+this.selectedelement);
      
  
  this.sprintId =this.sprints[this.selectedelement] ;
}
  if(this.sprintId!=null)
  console.log(this.sprintId.id)
  this.tableVisible=true;
  }
 
}