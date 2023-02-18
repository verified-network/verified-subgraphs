import { Client, ManagerAdded } from "../../generated/Client/Client";
import { Manager } from "../../generated/schema";

export function handleManagerAdded(event: ManagerAdded): void {
  let clientAddress = event.address;
  let clientContract = Client.bind(clientAddress);
  let client = clientContract.try_getRole(clientAddress);
  let clientId = client.value;

  let managers = Manager.load(event.transaction.hash.toHexString().concat('-').concat(clientAddress.toHexString()));
  if(managers==null){
    let managerId = event.transaction.hash.toHexString().concat('-').concat(clientAddress.toHexString());
    let managers = new Manager(managerId);
    //managers.id = clientId.toLocaleString();
    managers.role = event.params.role;
    managers.country = event.params.country;
    managers.save();
  }
  else{
    managers.role = event.params.role;
    managers.country = event.params.country;
    managers.save();
  }

}
