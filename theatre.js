// Create a theatre app . 
// where the user can choose the seat selection and cancellation policy also.
var Theatre = /** @class */ (function () {
    //private cancellationPolicy: string;
    function Theatre(totalSeats) {
        this.seats = new Array(totalSeats).fill(false);
        //this.cancellationPolicy = cancellationPolicy;
    }
    Theatre.prototype.bookSeat = function (seatNo) {
        if (this.seats[seatNo]) {
            console.log("Seat ".concat(seatNo + 1, " is already booked"));
            //return false;
        }
        else {
            this.seats[seatNo] = true;
            console.log("Seat ".concat(seatNo + 1, " is booked successfully"));
            //return true;
        }
    };
    Theatre.prototype.cancelSeat = function (seatNo) {
        if (!this.seats[seatNo]) {
            console.log("Seat ".concat(seatNo + 1, " is Available"));
            //return false;
        }
        else {
            this.seats[seatNo] = false;
            console.log("Seat ".concat(seatNo + 1, " is cancelled"));
            //return true;
        }
    };
    Theatre.prototype.displaySeats = function () {
        console.log("Seats Available : ");
        this.seats.forEach(function (seat, index) {
            console.log("Seat ".concat(index + 1, ": ").concat(seat ? "Booked" : "Available"));
        });
    };
    return Theatre;
}());
var t1 = new Theatre(50);
t1.displaySeats();
t1.bookSeat(0);
t1.cancelSeat(1);
t1.bookSeat(4);
t1.cancelSeat(4);
t1.bookSeat(0);
t1.displaySeats();
