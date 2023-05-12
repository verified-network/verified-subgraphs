import { 
    Resolution,
    SnapshotSchedule,
    SnapshotUnschedule
  } from "../../generated/templates/Security/Security";

import { 
    Snapshots,
    Resolutions 
} from "../../generated/schema";

export function handleResolutions(event: Resolution): void {
    let resolutions = Resolutions.load(event.params.security.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(resolutions==null){
        let resolution = event.params.security.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let resolutions = new Resolutions(resolution);
        resolutions.security = event.params.security.toHexString();
        resolutions.recordDate = event.params.recordDate.toI32();
        resolutions.resolution = event.params.resolution;
        resolutions.voting = event.params.voting;
        resolutions.save();
    }
    else{
        resolutions.security = event.params.security.toHexString();
        resolutions.recordDate = event.params.recordDate.toI32();
        resolutions.resolution = event.params.resolution;
        resolutions.voting = event.params.voting;
        resolutions.save();
    }
}

export function handleSchedulingSnapshot(event: SnapshotSchedule): void {
    let oldSnapshot = Snapshots.load(event.params.security.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(oldSnapshot==null){
        let ot = event.params.security.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let oldSnapshot = new Snapshots(ot);
        oldSnapshot.security = event.params.security.toHexString();
        oldSnapshot.oldTime = event.params.oldTime.toI32();
        oldSnapshot.newTime = event.params.newTime.toI32();
        oldSnapshot.save();
    }
    else{
        oldSnapshot.security = event.params.security.toHexString();
        oldSnapshot.oldTime = event.params.oldTime.toI32();
        oldSnapshot.newTime = event.params.newTime.toI32();
        oldSnapshot.save();
    }
}

export function handleUnschedulingSnapshot(event: SnapshotUnschedule): void {
    let newSnapshot = Snapshots.load(event.params.security.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(newSnapshot==null){
        let timeset = event.params.security.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let newSnapshot = new Snapshots(timeset);
        newSnapshot.security = event.params.security.toHexString();
        newSnapshot.oldTime = event.params.time.toI32();
        newSnapshot.newTime = 0;
        newSnapshot.save();
    }
    else{
        newSnapshot.security = event.params.security.toHexString();
        newSnapshot.oldTime = event.params.time.toI32();
        newSnapshot.newTime = 0;
        newSnapshot.save();
    }
}