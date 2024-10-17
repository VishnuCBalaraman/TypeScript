class Room{
    roomId: number;
    capacity: number;
    costPerNight: number;
    isAvailable: boolean;

    constructor(roomId: number,capacity: number,costPerNight: number){
        this.roomId=roomId;
        this.capacity=capacity;
        this.costPerNight=costPerNight;
        this.isAvailable=true;
    }
}

class Hotel{
    rooms: Room[];

    constructor(){
        this.rooms=[];
    }

    addRoom(room: Room): void{
        this.rooms.push(room);
    }

    checkAvailability(roomId : number): boolean{
        const room = this.rooms.find((room)=>room.roomId==roomId);
        if(room?.isAvailable){
            return true;
        }
        else{
            return false;
        }
    }

    checkIn(roomId: number): void{
        const room = this.rooms.find((room)=>room.roomId==roomId);
        if(room && room.isAvailable){
            room.isAvailable=false;
            console.log(`Room ${roomId} Checked In`);
        }
        else{
            console.log(`Room ${roomId} is not available`);
        }
    }

    checkOut(roomId: number): void{
        const room = this.rooms.find((room)=>room.roomId==roomId);
        if (room && !room.isAvailable) {
            room.isAvailable = true; 
            console.log(`Checked out of room ${roomId}`);
        }
        else{
            console.log(`Room ${roomId} is already available`);
        }
    }

    calculateTotalCost(roomId: number, numberOfDays: number): number{
        const room = this.rooms.find((room)=>room.roomId==roomId);
        if(room && !room.isAvailable){
            return room.costPerNight* numberOfDays;
        }
        else{
            console.log(`Room ${roomId} is not occupied`);
            return 0;
        }
    }

    listRooms(): void{
        this.rooms.forEach((room)=>{
            console.log(room);
        })
    }
}

const hotel = new Hotel();


hotel.addRoom(new Room(101, 2, 100));
hotel.addRoom(new Room(102, 4, 150));
hotel.addRoom(new Room(103, 1, 80));


hotel.listRooms();


hotel.checkIn(101); 
hotel.checkIn(102); 

hotel.listRooms();


const totalCost = hotel.calculateTotalCost(101, 3); 
console.log(`Total cost for 3 days in room 101: $${totalCost}`);


hotel.checkOut(101); 
hotel.checkOut(102); 


hotel.listRooms();