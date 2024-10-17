var Room = /** @class */ (function () {
    function Room(roomId, capacity, costPerNight) {
        this.roomId = roomId;
        this.capacity = capacity;
        this.costPerNight = costPerNight;
        this.isAvailable = true;
    }
    return Room;
}());
var Hotel = /** @class */ (function () {
    function Hotel() {
        this.rooms = [];
    }
    Hotel.prototype.addRoom = function (room) {
        this.rooms.push(room);
    };
    Hotel.prototype.checkAvailability = function (roomId) {
        var room = this.rooms.find(function (room) { return room.roomId == roomId; });
        if (room === null || room === void 0 ? void 0 : room.isAvailable) {
            return true;
        }
        else {
            return false;
        }
    };
    Hotel.prototype.checkIn = function (roomId) {
        var room = this.rooms.find(function (room) { return room.roomId == roomId; });
        if (room && room.isAvailable) {
            room.isAvailable = false;
            console.log("Room ".concat(roomId, " Checked In"));
        }
        else {
            console.log("Room ".concat(roomId, " is not available"));
        }
    };
    Hotel.prototype.checkOut = function (roomId) {
        var room = this.rooms.find(function (room) { return room.roomId == roomId; });
        if (room && !room.isAvailable) {
            room.isAvailable = true;
            console.log("Checked out of room ".concat(roomId));
        }
        else {
            console.log("Room ".concat(roomId, " is already available"));
        }
    };
    Hotel.prototype.calculateTotalCost = function (roomId, numberOfDays) {
        var room = this.rooms.find(function (room) { return room.roomId == roomId; });
        if (room && !room.isAvailable) {
            return room.costPerNight * numberOfDays;
        }
        else {
            console.log("Room ".concat(roomId, " is not occupied"));
            return 0;
        }
    };
    Hotel.prototype.listRooms = function () {
        this.rooms.forEach(function (room) {
            console.log(room);
        });
    };
    return Hotel;
}());
var hotel = new Hotel();
hotel.addRoom(new Room(101, 2, 100));
hotel.addRoom(new Room(102, 4, 150));
hotel.addRoom(new Room(103, 1, 80));
hotel.listRooms();
hotel.checkIn(101);
hotel.checkIn(102);
hotel.listRooms();
var totalCost = hotel.calculateTotalCost(101, 3);
console.log("Total cost for 3 days in room 101: $".concat(totalCost));
hotel.checkOut(101);
hotel.checkOut(102);
hotel.listRooms();
