import { 
        ManagerAdded,
        ManagerRemoved,
        UserAdded 
      } from "../../generated/Client/Client";
import { 
        Manager,
        User 
      } from "../../generated/schema";

export function handleManagerCreated(event: ManagerAdded): void {
  let managers = Manager.load(event.params.submanager.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
  if(managers==null){
    let managerId = event.params.submanager.toHexString();
    let managers = new Manager(managerId);
    managers.manager = event.params.manager.toHexString();
    managers.submanager = event.params.submanager.toHexString();
    managers.role = event.params.role;
    managers.country = event.params.country;
    managers.managerId = event.params.managerId;
    managers.save();
  }
  else{
    managers.manager = event.params.manager.toHexString();
    managers.submanager = event.params.submanager.toHexString();
    managers.role = event.params.role;
    managers.country = event.params.country;
    managers.managerId = event.params.managerId;
    managers.save();
  }
}

export function handleManagerRemoved(event: ManagerRemoved): void {
  let managers = Manager.load(event.params.submanager.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
  if(managers!=null){
    let managerId = event.params.submanager.toHexString();
    let managers = new Manager(managerId);
    managers.manager = event.params.manager.toHexString();
    managers.submanager = event.params.submanager.toHexString();
    managers.role = event.params.role;
    managers.country = event.params.country;
    managers.save();
  }  
}

export function handleUserCreated(event: UserAdded): void {
  let users = User.load(event.params.client.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
  if(users==null){
    let userId = event.params.client.toHexString();
    let users = new User(userId);
    users.client = event.params.client;
    users.name = event.params.name;
    users.accountid = event.params.accountid;
    users.country = event.params.country;
    users.status = event.params.status.toI32();
    users.save();
  }
  else{
    users.client = event.params.client;
    users.name = event.params.name;
    users.accountid = event.params.accountid;
    users.country = event.params.country;
    users.status = event.params.status.toI32();
    users.save();
  }
}


