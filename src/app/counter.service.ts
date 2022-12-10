export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;
    incrementActiveToInactive() { 
        this.activeToInactiveCounter++;
        console.log('Active to Inactive', this.activeToInactiveCounter);
    }
    incrementinActiveToInactive() { 
        this.inactiveToActiveCounter++;
        console.log('Inactive to Active',this.inactiveToActiveCounter);
    }
}