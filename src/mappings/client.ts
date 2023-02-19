import { 
        ManagerAdded,
        ManagerRemoved,
        UserAdded 
      } from "../../generated/Client/Client";
import { 
        Manager,
        User 
      } from "../../generated/schema";

export function handleManagerAdded(event: ManagerAdded): void {
  let clientAddress = event.address;

  let managers = Manager.load(event.transaction.hash.toHexString().concat('-').concat(clientAddress.toHexString()));
  if(managers==null){
    let managerId = event.transaction.hash.toHexString().concat('-').concat(clientAddress.toHexString());
    let managers = new Manager(managerId);
    managers.id = event.params.submanager.toHexString();
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
  let clientAddress = event.address;

  let managers = Manager.load(event.transaction.hash.toHexString().concat('-').concat(clientAddress.toHexString()));
  if(managers!=null){
    let managerId = event.transaction.hash.toHexString().concat('-').concat(clientAddress.toHexString());
    let managers = new Manager(managerId);
    managers.id = event.params.submanager.toHexString();
    managers.manager = event.params.manager.toHexString();
    managers.submanager = event.params.submanager.toHexString();
    managers.role = event.params.role;
    managers.country = event.params.country;
    managers.save();
  }  
}

export function handleUserCreated(event: UserAdded): void {
  let clientAddress = event.address;

  let users = User.load(event.transaction.hash.toHexString().concat('-').concat(clientAddress.toHexString()));
  if(users==null){
    let userId = event.transaction.hash.toHexString().concat('-').concat(clientAddress.toHexString());
    let users = new User(userId);
    users.id = event.params.client.toHexString();
    users.client = event.params.client;
    users.name = event.params.name;
    users.surname = event.params.surname;
    users.country = event.params.country;
    users.status = event.params.status.toI32();
    users.save();
  }
  else{
    users.client = event.params.client;
    users.name = event.params.name;
    users.surname = event.params.surname;
    users.country = event.params.country;
    users.status = event.params.status.toI32();
    users.save();
  }
}


