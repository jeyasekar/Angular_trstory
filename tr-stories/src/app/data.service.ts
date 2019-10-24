import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
    {id: 101, name: "Defect 001", description: "Defect 001 des", email: "c001@email.com"},
    {id: 102, name: "Defect 002", description: "Defect 002 des", email: "c002@email.com"},
    {id: 103, name: "Defect 003", description: "Defect 003 des", email: "c003@email.com"},
    {id: 104, name: "Defect 004", description: "Defect 004 des", email: "c004@email.com"}
  ];

  constructor() { }

  public getContacts():Array<{id, name, description, email}>{
    return this.contacts;
  }
  public createContact(contact: {id, name, description, email}){
    this.contacts.push(contact);
  }
}